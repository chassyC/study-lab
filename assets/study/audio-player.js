for (const card of document.querySelectorAll('[data-audio-course]')) {
  const audio = card.querySelector('audio');
  const speed = card.querySelector('[data-audio-speed]');
  const status = card.querySelector('[data-audio-status]');
  const chapters = [...card.querySelectorAll('[data-audio-chapter]')];
  const version = card.dataset.audioVersion ? `:${card.dataset.audioVersion}` : '';
  const key = `study-lab-audio-position:${card.dataset.audioCourse}${version}`;
  const historyKey = `study-lab-audio-chapter:${card.dataset.audioCourse}${version}`;
  const sourceUrl = audio.currentSrc || audio.querySelector('source')?.src;
  const chapterFromHash = () => chapters.find(button => `#${button.id}` === location.hash);
  const readPosition = () => { try { return Number(localStorage.getItem(key)); } catch { return 0; } };
  const savePosition = seconds => { try { if (Number.isFinite(seconds) && seconds > 0) localStorage.setItem(key, String(seconds)); else localStorage.removeItem(key); } catch {} };
  let phase = 'native'; // native, fetching, blob, failed
  let blobUrl = null;
  let blobReady = false;
  let pendingSeek = null;
  let pendingStatus = '';
  let restored = false;
  let playIntent = !audio.paused;
  let lastSave = 0;
  const showError = () => { status.textContent = 'Non riesco a preparare l’audio. Ricarica la pagina oppure scarica il file MP3 o leggi il testo.'; };
  const showPreparing = () => { status.textContent = 'Preparo l’audio per riprendere l’ascolto e aprire i capitoli. Attendi il caricamento.'; };
  const highlight = () => {
    let active;
    if (pendingSeek === null) for (const button of chapters) if (Number(button.dataset.audioChapter) <= audio.currentTime) active = button;
    for (const button of chapters) if (button === active) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current');
  };
  const nativeSeekable = () => {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return false;
    try {
      for (let i = 0; i < audio.seekable.length; i++) {
        if (audio.seekable.start(i) <= 1 && audio.seekable.end(i) >= audio.duration - 1) return true;
      }
    } catch {}
    return false;
  };
  const canSeekNow = () => audio.readyState >= 1 && Number.isFinite(audio.duration) &&
    ((phase === 'native' && nativeSeekable()) || (phase === 'blob' && blobReady));
  const applyPendingSeek = () => {
    if (pendingSeek === null || !canSeekNow()) return false;
    try { audio.currentTime = Math.min(pendingSeek, Math.max(0, audio.duration - 0.1)); }
    catch { return false; }
    pendingSeek = null;
    status.textContent = pendingStatus;
    highlight();
    return true;
  };
  const prepareBlob = () => {
    if (phase !== 'native') return;
    if (!sourceUrl) { phase = 'failed'; showError(); return; }
    phase = 'fetching';
    playIntent = playIntent || !audio.paused;
    if (!audio.paused) audio.pause();
    showPreparing();
    (async () => {
      const response = await fetch(sourceUrl, { credentials: 'same-origin' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const file = await response.blob();
      if (!file.size) throw new Error('Empty audio');
      blobUrl = URL.createObjectURL(file);
      phase = 'blob';
      blobReady = false;
      audio.src = blobUrl;
      audio.load();
    })().catch(() => {
      phase = 'failed';
      if (blobUrl) { URL.revokeObjectURL(blobUrl); blobUrl = null; }
      showError();
    });
  };
  const requestSeek = (seconds, message) => {
    if (!Number.isFinite(seconds) || seconds < 0 || phase === 'failed') return false;
    pendingSeek = seconds;
    pendingStatus = message;
    if (applyPendingSeek()) return true;
    if (phase === 'native' && audio.readyState >= 1) prepareBlob();
    if (phase !== 'failed') showPreparing();
    highlight();
    return false;
  };
  const restorePosition = () => {
    if (restored) return;
    restored = true;
    if (pendingSeek !== null) return;
    const deepLink = chapterFromHash();
    if (deepLink && history.state?.[historyKey] !== location.hash) {
      card.querySelector('details').open = true;
      requestSeek(Number(deepLink.dataset.audioChapter), 'Capitolo selezionato.');
    } else {
      const saved = readPosition();
      if (Number.isFinite(saved) && saved > 0 && saved < audio.duration - 5) requestSeek(saved, 'Riprendi dal punto in cui eri arrivato.');
    }
  };
  const metadataReady = () => {
    if (audio.readyState < 1) return;
    if (phase === 'blob') {
      if (!Number.isFinite(audio.duration) || blobReady) return;
      blobReady = true;
      audio.playbackRate = Number(speed.value);
      applyPendingSeek();
      if (pendingSeek === null && !status.textContent.includes('Capitolo selezionato') && !status.textContent.includes('Riprendi')) status.textContent = 'Audio pronto. Puoi ascoltare o scegliere un capitolo.';
      if (playIntent) audio.play().catch(() => { playIntent = false; status.textContent = 'Audio pronto. Premi Play per continuare.'; });
      return;
    }
    if (phase !== 'native') return;
    restorePosition();
    if (phase !== 'native') return;
    if (!nativeSeekable()) prepareBlob();
    else applyPendingSeek();
  };
  audio.addEventListener('loadedmetadata', metadataReady);
  audio.addEventListener('durationchange', metadataReady);
  if (audio.readyState >= 1) metadataReady();
  audio.addEventListener('play', () => {
    playIntent = true;
    if (phase === 'fetching' || (phase === 'blob' && !blobReady)) { audio.pause(); showPreparing(); }
  });
  audio.addEventListener('timeupdate', () => {
    if (phase === 'fetching' || (phase === 'blob' && !blobReady) || pendingSeek !== null) return;
    highlight();
    if (audio.currentTime - lastSave >= 5 || audio.currentTime < lastSave) { savePosition(audio.currentTime); lastSave = audio.currentTime; }
  });
  audio.addEventListener('pause', () => {
    if (phase === 'fetching' || (phase === 'blob' && !blobReady)) return;
    playIntent = false;
    if (!audio.ended && pendingSeek === null) savePosition(audio.currentTime);
  });
  audio.addEventListener('ended', () => { playIntent = false; savePosition(0); status.textContent = 'Ascolto completato.'; });
  audio.addEventListener('error', showError);
  if (audio.error) showError();
  window.addEventListener('pagehide', event => {
    if (!audio.ended) {
      if (pendingSeek !== null) savePosition(pendingSeek);
      else if (audio.currentTime > 0) savePosition(audio.currentTime);
    }
    if (blobUrl && !event?.persisted) URL.revokeObjectURL(blobUrl);
  });
  speed.addEventListener('change', () => { audio.playbackRate = Number(speed.value); });
  for (const button of chapters) button.addEventListener('click', () => {
    if (phase === 'failed' || audio.error) { showError(); return; }
    const seconds = Number(button.dataset.audioChapter);
    requestSeek(seconds, `Capitolo selezionato: ${button.querySelector('span').textContent}.`);
    savePosition(seconds);
    const state = history.state && typeof history.state === 'object' ? { ...history.state } : {};
    history.replaceState({ ...state, [historyKey]: `#${button.id}` }, '', `#${button.id}`);
    audio.focus();
  });
  window.addEventListener('hashchange', () => {
    const chapter = chapterFromHash();
    if (chapter) {
      if (phase === 'failed' || audio.error) { showError(); return; }
      card.querySelector('details').open = true;
      requestSeek(Number(chapter.dataset.audioChapter), `Capitolo selezionato: ${chapter.querySelector('span').textContent}.`);
    }
  });
}
