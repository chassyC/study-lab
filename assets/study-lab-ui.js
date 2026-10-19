/* Small progressive enhancements. No persistence or content replacement. */
(()=>{'use strict';
 const page=document.body.dataset.slPage;
 if(page==='revision'){
  const aside=document.querySelector('.layout>aside');
  if(aside){const toggle=document.createElement('button');toggle.type='button';toggle.className='sl-index-toggle';toggle.textContent='Indice dei capitoli';toggle.setAttribute('aria-expanded','false');aside.classList.add('sl-index-collapsed');toggle.addEventListener('click',()=>{const open=aside.classList.toggle('sl-index-collapsed')===false;toggle.setAttribute('aria-expanded',String(open))});aside.prepend(toggle)}
  const tabs=[...document.querySelectorAll('[role="tab"]')];
  if(tabs.length){tabs.forEach((t,i)=>{const panel=document.getElementById('panel-'+t.dataset.panel);if(panel){t.id=t.id||'sl-study-tab-'+i;t.setAttribute('aria-controls',panel.id);panel.setAttribute('aria-labelledby',t.id)}});function sync(){tabs.forEach(t=>t.tabIndex=t.getAttribute('aria-selected')==='true'?0:-1)}sync();tabs.forEach((t,i)=>{t.addEventListener('click',sync);t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();tabs[n].click();tabs[n].focus();sync()})})}
 }
})();
