# Big Data & AI in Business — 29 settembre 2026

**Confine delle fonti.** Rizzi e Campana hanno due registrazioni PLAUD, rispettivamente circa 91 e 62 minuti; la seconda sessione era programmata più a lungo e un eventuale tratto finale non è documentato localmente. Il PDF Canvas *Lesson 2* ha 45 pagine. Per la seconda registrazione il testo disponibile arriva all'introduzione di Databricks: la guida pratica nelle slide non prova che tutti i clic siano stati svolti in aula. La lezione è quindi completa rispetto alle **porzioni registrate e al PDF**, non rispetto a ogni minuto programmato.

## 1. Da un problema aziendale alle fonti necessarie

Il punto comune del giorno è la domanda «quale dato può ancora cambiare la decisione?». Campana classifica fonti originate da transazioni, persone, macchine e servizi esterni (Campana 0–40′; slide 2–11). Un ERP registra ordini e processi, un CRM interazioni col cliente, un sensore stati fisici, un click una azione nell'interfaccia, una API dati richiesti a un servizio esterno. Non sono finestre equivalenti sulla stessa realtà. Una vendita osserva ciò che è stato acquistato **al prezzo e con la disponibilità esistenti**; non misura direttamente desiderio o domanda non soddisfatta.

**Esempio ipotetico svolto.** Un centro fitness perde prenotazioni serali. Il CRM mostra iscrizioni e cancellazioni, il sistema accessi gli ingressi, la app i tentativi di prenotazione, un calendario esterno gli eventi cittadini. Prima di unirli bisogna allineare ID, date, fusi orari, definizione di «presenza» e diritto d'uso. Se un cliente prenota ma non entra, prenotazione e partecipazione sono due variabili diverse. Se l'app cambia il modo di registrare le cancellazioni a metà mese, il salto del grafico può essere una modifica del sistema, non del comportamento.

**Trasferimento.** Perché aggiungere una fonte meteo non migliora sempre la previsione delle presenze? **Risposta:** il dato deve riferirsi alla zona, all'ora e alle persone pertinenti; va provato che aggiunga segnale rispetto a una baseline e che sia disponibile prima di decidere l'orario.

### Unire le fonti senza fabbricare precisione

Il **join** collega righe di sistemi differenti attraverso una chiave, ma la chiave deve riferirsi allo stesso oggetto. Il CRM può avere un identificativo per persona, l'accesso un codice tessera che cambia dopo il rinnovo, la app più account per la stessa famiglia. Prima di sommare bisogna definire l'unità di analisi: persone, visite o abbonamenti? **Esempio ipotetico svolto:** una persona rinnova e ottiene nuova tessera. Il sistema registra due ID; un join ingenuo la conta come due clienti, facendo apparire crescita e minore frequenza media. Un registro di corrispondenza delle tessere, con date di validità e controllo di duplicati, ripristina la continuità. Se la corrispondenza non è certa, si segnala la quota incerta invece di forzarla.

La **granularità** è il dettaglio temporale e spaziale. Meteo giornaliero di una città, accessi orari di una palestra e fatture mensili sono tre scale. Per associare il meteo a un accesso serve un intervallo e una località ragionevole; per confrontare fatture con presenze occorre aggregare senza perdere il periodo di validità. La fonte esterna può essere accurata in generale ma troppo grossolana per l'azione locale. **Trasferimento:** una città registra pioggia, ma il centro fitness in periferia era asciutto. Che cosa concludi? Non attribuire la cancellazione alla pioggia cittadina: cerca una misura locale o tratta il meteo come proxy imperfetto.

### Perché «conservare tutto per addestrare l'AI» è una cattiva regola

La slide 3 usa uno slogan provocatorio secondo cui l'AI non butta via nulla. Come principio operativo sarebbe sbagliato. Prima di raccogliere o conservare, un'impresa deve sapere scopo, qualità, diritti, minimizzazione e periodo di conservazione; più rumore o dati personali non necessari possono peggiorare modello e rischio. **Esempio ipotetico:** vecchie recensioni raccolte quando il prodotto era diverso possono confondere un modello sul prodotto attuale. Una scelta ragionata conserva il contesto storico etichettato e prova se migliora la previsione; scarta o separa materiale senza uso consentito. **Trasferimento:** «è disponibile» equivale a «è adatto all'addestramento»? No: licenza, rappresentatività, pertinenza e qualità vanno valutate separatamente.

## 2. Quattro famiglie di fonte, quattro errori tipici

Le **transazioni** hanno spesso campi regolari, ma registrano soltanto eventi passati attraverso un sistema: promozioni, esaurimenti e rimborsi cambiano l'interpretazione. I **sensori** possono dare frequenze elevate; richiedono calibrazione, unità, orologio affidabile e identificativo del dispositivo. Una temperatura anomala può essere guasto della macchina o del sensore (Campana 20–25′). Le **interazioni digitali** e social possono anticipare interessi, ma sono selettive: chi posta o clicca non rappresenta tutti i clienti, e bot o campagne producono picchi. Le **API esterne** permettono integrazione, ma dipendono da contratto, versione, disponibilità e licenza; un cambiamento del formato può rompere l'analisi (Campana 25–35′). Nessuna categoria è «migliore» in astratto: utilità e errore dipendono dall'azione.

**Esempio ipotetico svolto.** Un distributore di bevande collega vendite, temperatura esterna e commenti social. Un giorno caldo aumenta il consumo, ma una promozione simultanea rende difficile attribuire il cambiamento al meteo. I commenti social possono descrivere un gusto emergente ma non una quota di mercato. Per decidere l'ordine successivo, si confrontano settimane simili, si registrano gli sconti e si misura quanto spesso la previsione migliora il margine senza aumentare invenduto.

**Trasferimento.** Un'API restituisce meno righe da ieri. Qual è il primo controllo? **Risposta:** verificare contratto, versione, filtro, stato del servizio e completezza prima di trattare la caduta come comportamento reale dei clienti.

## 3. Batch o streaming? La risposta dipende dall'ultima azione possibile

**Batch processing** elabora blocchi a orari programmati; **stream processing** tratta eventi in arrivo. Le slide 12–19 e Campana 40–60′ mostrano che la variabile decisiva è la **decision latency**: tempo dall'evento all'azione utile, non soltanto velocità del computer. Se gli stipendi partono il 27, un controllo notturno può essere sufficiente e più facile da riconciliare. Se una transazione sospetta diventa irreversibile in pochi secondi, un batch notturno arriva troppo tardi. Può servire un flusso rapido per chiedere conferma e un batch successivo per contabilità e audit.

Streaming porta nuovi problemi: duplicati di eventi, arrivi fuori ordine, cadute di rete, falsi allarmi e disponibilità continua. Un sensore che invia più rapidamente un valore sbagliato accelera il danno. Batch porta un diverso rischio: un errore o una frode resta invisibile fino al prossimo ciclo. La scelta va fatta confrontando danno per ritardo, costo di implementazione e costo degli interventi sbagliati.

**Esempio ipotetico svolto.** In un ospedale, un monitor segnala una variazione potenzialmente grave: servono latenza bassa, controllo tecnico della misura, protocollo clinico e persona responsabile. Un report mensile per acquisti ospedalieri può essere batch. Non trasferire la soglia o il protocollo da questo esempio a una decisione medica reale.

**Trasferimento.** Una segnalazione antifrode giunge dieci minuti dopo il pagamento. Passare a stream risolve tutto? **Risposta:** solo se l'azienda ha un'azione ancora possibile nel tempo ridotto; va misurata l'intera catena evento → dato → valutazione → intervento e il costo dei falsi blocchi.

### Quando la velocità cambia davvero la scelta

Scrivi una timeline prima di nominare la tecnologia: evento alle 10:00; il dato diventa disponibile alle 10:02; il modello risponde alle 10:03; una persona può intervenire alle 10:20; il danno accade alle 10:05. Accelerare il modello di un minuto non rende utile la catena se l'intervento arriva dopo il danno. Questa è la **latency budget** della decisione. Nel caso frode l'intervento può essere sospensione o richiesta di conferma; in un report gestionale può essere aggiornamento del turno successivo. La stessa azienda può usare stream per allarmi e batch per ricalcolo, audit e riconciliazione.

**Esempio ipotetico svolto:** un sensore segnala 100 °C in una cella a freddo. Stream notifica subito, ma il valore è fisicamente incompatibile col funzionamento atteso e il sensore ha perso taratura. Il controllo usa sensore di riserva e stato del dispositivo; il personale agisce solo se la verifica conferma. Il sistema più veloce senza verifica avrebbe creato uno spreco. **Trasferimento:** qual è la metrica del sistema? Non solo «millisecondi di calcolo»: misura danni evitati, falsi allarmi, tempi fino all'intervento e guasti persi.

### Quattro trade-off del tempo di elaborazione

La slide 17 mostra che **stream e batch possono lavorare insieme**: gli eventi in arrivo alimentano allarmi e monitoraggio; una riconciliazione periodica ripulisce, verifica e conserva una vista più stabile. La slide 18 rende espliciti quattro criteri: **costo**, perché un sistema continuo richiede infrastruttura e presidio; **rischio**, perché errori automatici possono raggiungere subito il processo reale; **velocità**, cioè tempo fino alla decisione; **usabilità**, perché un allarme senza spiegazione o persona responsabile non aiuta. La slide 19 riporta questi criteri a una domanda: quale latenza minima è davvero richiesta?

**Esempio ipotetico svolto:** un e-commerce controlla ogni pagamento con un segnale rapido e manda quelli sospetti a verifica; a fine giornata confronta transazioni, storni e rimborsi in batch. Se il controllo rapido blocca troppi clienti, la soglia va rivista con un costo misurato, non celebrata perché «real time». **Trasferimento:** una decisione può aspettare 24 ore e costa molto un errore automatico. Perché sceglieresti stream? Servirebbe una prova di beneficio che compensi costo e rischio; in assenza, batch con controlli è più appropriato.

## 4. Caso documentato: rischio di demenza e limiti dell'inferenza

Rizzi presenta uno studio su fattori associati alla conversione a demenza (Rizzi circa 5–25′; slide 31–34). È un esempio per distinguere previsione, interpretazione e causa, **non un test clinico da applicare a persone**. Lo studio NACC di Arnold e colleghi, citato negli appunti verificati, comprende 9.606 partecipanti, 877 conversioni osservate (circa 9%), 13 fattori e follow-up medio di circa sei anni. [Scheda PubMed](https://pubmed.ncbi.nlm.nih.gov/41152204/) e [articolo originale](https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.70870). La Lancet Commission 2024 tratta invece 14 fattori potenzialmente modificabili e una stima di prevenzione/ritardo a livello di popolazione: i due elenchi e le due percentuali non vanno fusi.

**Il meccanismo del modello.** XGBoost combina alberi decisionali per stimare un rischio da variabili osservate; SHAP descrive il contributo delle variabili a una previsione; l'analisi di sopravvivenza considera il tempo fino a un evento e i partecipanti senza evento registrato entro la fine. Una variabile con forte contributo alla previsione non diventa per questo una leva causale. I risultati dell'articolo includono ROC AUC 0,732, sensibilità 0,702, specificità 0,637, accuratezza 0,643 e PR AUC 0,208. **Sensibilità** è quota di veri casi identificati; **specificità** è quota di non casi riconosciuti; **accuratezza** è quota totale di classificazioni corrette alla soglia scelta. ROC AUC misura separazione lungo soglie diverse, non la probabilità individuale di ammalarsi o la qualità di una raccomandazione.

Il BMI più alto risultava associato a rischio osservato minore nel campione. Non significa che aumentare di peso prevenga la demenza. La perdita di peso può precedere la diagnosi (**reverse causality**); età, selezione del campione e durata del follow-up cambiano l'associazione. La Commissione considera l'obesità nella mezza età un fattore di rischio. Inoltre i volontari dei centri di ricerca non rappresentano automaticamente la popolazione generale e manca una validazione esterna sufficiente per usare il modello come strumento clinico personale.

**Trasferimento.** Una compagnia propone di usare lo stesso punteggio per cambiare il prezzo di una polizza. Basta l'AUC? **No:** servono popolazione comparabile, errori per sottogruppo, calibrazione, utilità concreta, liceità del trattamento e revisione umana. Una previsione tecnicamente discreta può essere inadatta alla decisione.

### Dalla previsione all'uso clinico: quattro prove distinte

Primo, **discriminazione**: il modello ordina, in media, persone con e senza evento? ROC AUC risponde in parte a questa domanda. Secondo, **calibrazione**: fra persone con rischio stimato del 20%, circa il 20% ha davvero l'evento nell'orizzonte dichiarato? AUC alta non implica calibrazione. Terzo, **generalizzazione**: il risultato regge in centri, età e periodi diversi da quelli di sviluppo? Quarto, **utilità**: un intervento disponibile migliora gli esiti più di quanto costino falsi allarmi e trattamenti? Sono controlli diversi, non una metrica unica. Nel caso NACC la popolazione dei centri e l'assenza di validazione esterna limitano il salto a screening personale.

**Esempio numerico puramente didattico:** in 1.000 persone con prevalenza del 9%, circa 90 avranno l'evento. Se un test avesse sensibilità 70% e specificità 64%, troverebbe circa 63 casi veri, perderebbe circa 27 casi e segnalerebbe falsamente circa 328 delle 910 persone senza evento. Il valore predittivo positivo sarebbe quindi circa 63/(63+328), cioè 16%. Questa aritmetica è una **simulazione semplificata**, non una ricostruzione dei risultati individuali dell'articolo e non usa una soglia clinica validata. Mostra perché sensibilità e specificità non bastano a dire «chi è positivo si ammalerà» quando l'esito è raro. **Trasferimento:** se la prevalenza cambia, resta uguale quel 16%? No: il valore predittivo positivo dipende dalla frequenza dell'esito nella popolazione esaminata.

## 5. Grandine, arte e moda: tre usi, tre prove diverse

Nel caso assicurativo di grandine e alluvioni (Rizzi circa 25–37′; slide 35–37), meteo, localizzazione degli immobili, esposizione e sinistri possono sostenere prevenzione e liquidazione. La mappa dell'evento non quantifica da sola il danno di un edificio: contano vulnerabilità, franchigia, indirizzo e verifica. L'architettura e il risultato di una compagnia specifica non sono provati dalla registrazione.

Il caso documentato di Refik Anadol, *Machine Dreams: Rainforest*, usa dati ecologici e una trasformazione generativa per un'esperienza immersiva a Los Angeles (Rizzi circa 37–45′; slide 38–40; [DATALAND](https://www.dataland.art/exhibitions/machine-dreams-rainforest)). L'input comprende raccolte ambientali; l'output è l'esperienza visiva e sonora. L'opera dimostra un uso creativo dei dati, non che il modello «comprenda» la foresta o che una stima ecologica sia stata validata come ricerca scientifica. Una quantità citata dall'organizzazione riguarda la mostra e non va assegnata automaticamente a ogni singola opera.

Nel caso moda (Rizzi circa 45–55′; slide 41–43), ricerche, vendite e immagini possono aiutare a riconoscere un trend. Una foto virale produce un picco, ma un assortimento per la prossima stagione richiede un segnale persistente e clienti disposti a comprare al prezzo previsto. Il docente cita marchi per illustrare la logica; non si attribuisce qui a un marchio un sistema proprietario o un profitto verificato.

**Trasferimento.** Il grafico delle ricerche per un modello di scarpa raddoppia dopo una celebrità. Quanto produci? **Risposta:** il grafico non basta; confronta durata del segnale, ordini, preordini, resi, margine e tempo di produzione, facendo una prova limitata prima di impegnare grandi scorte.

### Confronta le tre prove di valore

Per **grandine**, la prova utile è una decisione assicurativa o preventiva migliorata su immobili reali: dove sono esposti, quanto danno subiscono e quando una segnalazione consente di agire. Per **arte immersiva**, l'esito osservato è un'esperienza culturale prodotta a partire da dati; la prova può riguardare provenienza, installazione e fruizione, non accuratezza predittiva di un ecosistema. Per **moda**, la decisione è assortimento e produzione; la prova è un test rispetto a un metodo precedente, su margine, resi e invenduto. La presenza di AI nelle tre storie non rende uguali le metriche. **Esempio ipotetico:** un trend di ricerca per cappotti emerge a luglio; se la produzione richiede sei mesi, il segnale deve predire domanda invernale, non solo attenzione estiva. **Trasferimento:** quale caso puoi valutare con «numero di click» soltanto? Nessuno: i click sono un input o un segnale parziale, non l'esito operativo di tutti e tre.

### Dal segnale meteo alla decisione assicurativa

Le slide 36–37 scompongono il caso grandine/alluvione in **detect → match → predict → act → verify → learn**. Detect identifica l'evento; match lo collega agli immobili assicurati con indirizzi e aree corrette; predict stima danno atteso da intensità e vulnerabilità; act avvia prevenzione o gestione sinistro; verify confronta previsione e danno accertato; learn aggiorna il modello. Una formula concettuale è **perdita attesa ≈ probabilità dell'evento × gravità condizionata all'evento**. Per un portafoglio di immobili si sommano stime pertinenti, con incertezza; la formula non autorizza una tariffa reale senza regole assicurative e dati validati.

**Esempio ipotetico svolto:** una grandinata passa a 3 km da due edifici. Il primo ha pannelli solari esposti, il secondo è protetto. Una mappa della grandine identica non implica stesso danno. Devi verificare posizione, superficie, intensità, vulnerabilità e franchigia. **Trasferimento:** una previsione di danno è molto alta ma i sinistri verificati sono bassi. Dove indaghi? Match geografico, funzione di vulnerabilità e qualità dei sinistri osservati, prima di concludere che gli eventi sono cambiati.

### Dall'attenzione alla domanda nella moda

Le slide 41–43 disegnano un percorso **attention → search → explore → purchase → keep or return**. Ogni stadio misura una cosa diversa. Una foto condivisa è attenzione; una ricerca segnala curiosità; un carrello o un acquisto mostra intenzione più vicina alla domanda, ma sconti e disponibilità influenzano il numero. Il reso corregge l'interpretazione dell'acquisto: un prodotto può vendere molto e generare margini bassi o insoddisfazione. **Esempio ipotetico svolto:** un colore diventa virale per una settimana ma i preordini restano bassi e i resi di prodotti simili sono alti. Il team può testare una piccola linea, non produrre l'intera collezione sulla base delle visualizzazioni. **Trasferimento:** quale segnale è più vicino al successo economico, like o margine dopo resi? Il secondo, pur richiedendo più tempo; il primo può solo anticipare un'ipotesi da testare.

## 6. Esercizio fitness: mappare touchpoint, qualità e privacy

La slide 45 chiede 8–10 **touchpoint**, cioè punti in cui il cliente lascia un'interazione osservabile: visita sito, registrazione, pagamento, accesso, prenotazione, cancellazione, app, acquisto di personal training e valutazioni fisiche. Per ciascuno occorrono dato, fonte e possibile uso. Il gruppo deve poi proporre due problemi di qualità, un rischio privacy e due opportunità: questo è un esercizio, non un sistema realmente implementato (Rizzi circa 55–90′; slide 44–45).

**Esempio ipotetico svolto.** Se l'obiettivo è ridurre classi serali semivuote, combinare prenotazioni, accessi e disdette rivela che «prenotato» non equivale a «presente». Duplicati nel CRM e accessi non registrati alterano il tasso di no-show. Le misure di salute raccolte in un assessment sono più delicate di un orario di ingresso: non si possono riusare per marketing solo perché tecnicamente collegabili. L'opportunità è testare orari diversi; il risultato va confrontato con presenze, soddisfazione e margine, senza attribuire ogni cambiamento all'analisi.

**Trasferimento.** Quale dato non aggiungeresti per primo alla previsione delle presenze? **Risposta:** una misura sanitaria individuale senza necessità chiara e base d'uso adeguata; si parte da prenotazioni, accessi e orari meno invasivi.

### Data touchpoint table: dal campo raccolto alla scelta

Una tabella utile ha almeno quattro colonne: touchpoint, dato, fonte, possibile uso. **Esempio ipotetico di cinque righe ragionate:** visita al sito → pagina corsi e ora → analytics web → capire interesse iniziale, non presenza effettiva; iscrizione → piano e data di inizio → CRM → capacità e rinnovi; prenotazione → corso e slot → sistema booking → stimare domanda per ora; accesso → tessera e timestamp → tornello → distinguere prenotati e presenti; cancellazione → momento e corso → sistema booking → capire no-show e liberare posti. Si possono aggiungere pagamento, app, personal training e assessment per arrivare agli 8–10 richiesti. Ogni riga deve includere limite: cookie negati, tessera prestata, accesso manuale, duplicati o dati sensibili.

La mappa delle fonti collega eventi lungo il percorso, ma non autorizza automaticamente a trattare ogni dato. **Esempio:** una valutazione fisica può essere utile al servizio concordato; usarla per pubblicità personalizzata richiede scopo e base appropriati, separati. Due opportunità plausibili sono modificare orari e prevenire cancellazioni; non sono risultati raggiunti finché una prova non mostra beneficio. **Trasferimento:** una classe ha 30 prenotazioni e 20 accessi. Quale KPI useresti per cambiare capienza? Non scegliere uno solo: misura no-show, lista d'attesa e richieste respinte; 30 prenotazioni non sono 30 persone presenti.

## 7. Databricks: concetti della slide e copertura reale dell'audio

Le slide 20–29 definiscono Databricks come piattaforma che mette insieme data engineering, analytics, ML e BI, con notebook collaborativi, catalogo, importazione dati e query SQL. **SQL** è il linguaggio per interrogare tabelle; `SELECT *` restituisce tutte le colonne ma non ne spiega significato o qualità. Campana introduce la piattaforma alla fine della porzione registrata, intorno al minuto 61. Le schermate del PDF sono materiale di studio; non attestano che il docente abbia completato login, importazione e dashboard nella parte non documentata.

**Percorso concettuale dalle slide, non ricostruzione dei clic svolti:** scegliere un CSV con provenienza e diritto d'uso → leggere colonne, tipi, unità e mancanti → importare in uno spazio con permessi → registrare il dataset nel catalogo → fare una query → controllare il risultato con una domanda aziendale → condividere l'analisi. **Esempio ipotetico:** un file fitness ha due righe per lo stesso ingresso; una `COUNT(*)` produce un totale, ma senza deduplica non produce il numero di persone effettive.

**Trasferimento.** Un dashboard Databricks mostra un calo improvviso degli accessi dopo l'importazione di un CSV nuovo. Come controlli? **Risposta:** confronta schema, periodo, righe, chiavi, duplicati e filtri con il file precedente; solo dopo valuta un cambiamento del comportamento.

### Una query non è ancora un insight

Nel percorso delle slide, un CSV importato può diventare tabella e una query SQL può estrarre righe. Prima di scrivere `SELECT *`, identifica se ogni riga è un cliente, una visita o una transazione; controlla data, unità monetarie, valori mancanti, duplicati e provenienza. Il **catalogo** serve a trovare e descrivere dataset e permessi; un **notebook** combina query, codice, commenti e risultati per renderli ripetibili. La piattaforma supporta collaborazione, ma una query condivisa propaga anche errori se la definizione è sbagliata.

**Esempio ipotetico svolto:** il file `accessi.csv` contiene `id_tessera`, `ora`, `corso`. Una query conta 1.200 righe in settembre. Dieci persone passano due volte per errore del lettore: gli accessi effettivi sono 1.190, se gli eventi duplicati sono stati riconosciuti con una regola documentata. Se due passaggi sono legittimi nello stesso giorno, eliminarli alla cieca sarebbe un altro errore. La query deve esplicitare criterio e data del file. **Trasferimento:** un grafico mostra +20% di visite; prima di chiamarla crescita, controlla se il nuovo mese include più giorni di apertura o una seconda sede.

## Ripasso a libro chiuso

1. Spiega quando sceglieresti batch per contabilità e stream per frodi. **Feedback:** specifica entro quando l'azione ha effetto e quanto costa un falso allarme.
2. Nel caso demenza, distingui previsione e intervento causale. **Feedback:** SHAP e associazioni descrivono il modello; non provano che cambiare BMI prevenga un esito.
3. Indica tre touchpoint fitness e un errore di join. **Feedback:** unifica ID, unità e periodi prima di sommare eventi diversi.
4. Perché una slide Databricks non è prova di una demo svolta? **Feedback:** il PDF descrive il programma; l'audio disponibile si ferma all'introduzione.

## Note di verifica e limiti

I nomi dei docenti sono attribuiti dall'orario, non dalle etichette vocali PLAUD. La seconda registrazione termina prima dell'orario programmato: non inferire che il resto non sia avvenuto. Nel caso demenza, non scambiare 14 fattori Lancet con 13 NACC; non interpretare il BMI come consiglio preventivo. Cifre o casi pronunciati in modo incerto dall'ASR non sono riportati come fatti. Le due trascrizioni sono state esaminate; l'ascolto integrale degli audio resta **direct_audio_review: pending**.
