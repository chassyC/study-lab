# Flashcard Q&A — Big Data & AI in Business, 25 settembre 2026

**Fonte:** Rizzi + Campana, due TXT PLAUD del 25/09; PDF docente Canvas 132024, slide 29–61. La nota finale `Lezioni/2026-09-25/pdf/2026-09-25__big-data-lezione-completa.md` documenta correzioni e fonti esterne. Le cifre del caso clienti sono esemplificative; non diventano fatti aziendali.

1. **D:** Quale domanda viene prima della scelta di un modello Big Data?  
   **R:** Quale decisione deve migliorare, chi può agire e con quale risultato misurabile. (Rizzi, prima parte; slide 60.)
2. **D:** Perché più dati non assicurano più valore?  
   **R:** Possono essere irrilevanti, scadenti o inutilizzati; il valore richiede un'azione e un esito migliore rispetto a costi e rischi. (Rizzi; Campana; slide 61.)
3. **D:** Che differenza c'è tra structured e semi-structured data?  
   **R:** I primi seguono uno schema regolare; i secondi hanno marcatori e campi flessibili, come JSON. La classificazione concreta dipende dallo schema. (Campana 09:24–13:32; slide 33–35.)
4. **D:** Un file audio è «unstructured»: significa che non contiene informazioni?  
   **R:** No. Manca uno schema tabellare predefinito, ma trascrizione e analisi possono ricavarne informazioni, con errori da controllare. (Campana; slide 33–35.)
5. **D:** Elenca le 5 V.  
   **R:** Volume, velocity, variety, veracity e value. (Campana 15:00–25:30; slide 36–40.)
6. **D:** Che cosa aggiunge veracity al volume?  
   **R:** Controllo dell'affidabilità e della qualità; un dato numeroso ma sbagliato può peggiorare una decisione. (Campana circa 19:38–20:29.)
7. **D:** Qual è l'ultimo passaggio che rende utile la data value chain?  
   **R:** Uso del risultato in un'azione e riuso per migliorare il ciclo; la sola dashboard non basta. (Campana 21:00–24:30.)
8. **D:** Cosa risponde la descriptive analytics?  
   **R:** «Che cosa è successo o sta succedendo?». Per esempio, quanti clienti non hanno rinnovato. (Slide 53.)
9. **D:** Qual è la differenza fra diagnostic e predictive analytics?  
   **R:** La prima cerca fattori del risultato osservato; la seconda stima esiti futuri con incertezza. (Slide 53–54.)
10. **D:** Cosa fa la prescriptive analytics dopo una previsione?  
    **R:** Confronta o raccomanda azioni possibili, valutando esiti, costi e vincoli. (Slide 54.)
11. **D:** Perché il monitoraggio non va memorizzato come «quinto tipo» della lezione?  
    **R:** Le slide 53–54 elencano quattro tipi; monitor è la fase di feedback del framework della slide 60. (Correzione della sintesi automatica PLAUD.)
12. **D:** Analytics guarda solo al passato e data science solo al futuro?  
    **R:** No. L'analytics comprende anche previsione e prescrizione; la data science include costruzione e validazione di modelli e altri compiti sovrapposti. (Slide 47–55; IBM citata nella nota.)
13. **D:** Quando scegliere batch invece di stream processing?  
    **R:** Quando la decisione tollera ritardo e non giustifica il costo della bassa latenza; stream serve se reagire subito cambia davvero l'esito. (Campana 01:01–01:03.)
14. **D:** Che cosa significa «Adopt» nel framework della slide 60?  
    **R:** Inserire la soluzione nel processo e renderla comprensibile e utilizzabile dalle persone, non solo implementarla tecnicamente. (Campana 01:08–01:09.)
15. **D:** Ripeti il framework della slide 60.  
    **R:** Frame → Acquire → Build → Adopt → Monitor. (La trascrizione storpia due nomi; prevale il PDF docente.)
16. **D:** Nel caso retail, perché le vendite durante uno sconto possono ingannare?  
    **R:** La promozione modifica la domanda osservata; non prova che le stesse quantità saranno vendute a prezzo pieno. (Rizzi, esercizio di gruppo.)
17. **D:** Che cosa controllare prima di usare un «85% confidence» per bloccare o approvare un'azione?  
    **R:** Se la misura è definita e calibrata, i costi di falsi allarmi ed errori, e un fallback. Non è una soglia universale. (Campana, caso aereo; nota critica.)
18. **D:** La bolletta elettrica europea è sempre uguale al prezzo della fonte più cara?  
    **R:** No. La regola marginale riguarda un mercato all'ingrosso; il prezzo retail include anche rete, imposte e contratto. (Correzione da ACER e Commissione europea, nella nota.)
19. **D:** Che distinzione c'è fra YB e YiB?  
    **R:** 1 YB = 10^24 byte; 1 YiB = 2^80 byte. La slide 32 mescola i prefissi. (NIST, citato nella nota.)
20. **D:** Quale prova dimostra che un progetto data driven ha creato valore?  
    **R:** Un esito misurato contro una baseline, con costi e rischi considerati, e non soltanto un modello distribuito o una dashboard. (Rizzi + Campana; slide 60–61.)

### Applicazione dei nuclei della spiegazione estesa

Gli scenari qui sotto sono **ipotetici**, non casi aziendali osservati. Il feedback indica anche l'errore da evitare.

21. **D:** Un'impresa dice «installiamo un chatbot». Qual è il *why* che manca?  
    **R corretta:** Una decisione o un problema misurabile, per esempio ridurre il tempo per sbloccare ordini e gli errori di risposta; poi si confrontano chatbot, pagina informativa e intervento umano. **Feedback sbagliato:** «Essere innovativi» non nomina esito, utente né alternativa. (Rizzi circa 13–18′; spiegazione estesa §1.)
22. **D:** Due negozi chiamano «cliente attivo» chi ha acquistato negli ultimi 30 e 90 giorni. Sommi i conteggi?  
    **R corretta:** No; prima uniformi definizione e periodo, poi controlli eventuali duplicati. **Feedback sbagliato:** Un grafico ben fatto non rende comparabili metriche diverse. (Rizzi circa 59–69′; spiegazione estesa §2, mappa e territorio.)
23. **D:** Una PMI vuole rivendere i log prodotti dai suoi dispositivi senza aver verificato permessi o qualità. Quale opportunità delle slide è e quale condizione manca?  
    **R corretta:** È un'ipotesi di *value data exhaust*; occorrono scopo, diritto di riuso, qualità, costi e domanda reale. **Feedback sbagliato:** Le tracce non sono automaticamente gratuite, cedibili o monetizzabili. (Slide 26/28; spiegazione estesa §2.)
24. **D:** Un produttore offre «meno fermi» come servizio. Che cosa deve definire per *sell outcomes*?  
    **R corretta:** Misura dei fermi, baseline, durata, responsabilità, costo degli interventi ed esito verificabile. **Feedback sbagliato:** Aggiungere sensori o promettere AI non dimostra il risultato venduto. (Slide 26/28; spiegazione estesa §2.)
25. **D:** Un sensore mostra «72». Puoi fermare subito una macchina?  
    **R corretta:** Prima servono unità, macchina, ora, calibrazione, storico, soglia, costo del fermo e controllo umano. **Feedback sbagliato:** Il numero senza contesto non è già una diagnosi né una decisione. (Rizzi circa 65–69′; slide 23–24; spiegazione estesa §2.)
26. **D:** Tre negozi inviano vendite: uno in euro, uno in centesimi, uno con ordini duplicati. Dove correggi prima dell'analisi?  
    **R corretta:** *Collect* registra fonte; *process* uniforma unità e chiavi; *clean* segnala e tratta duplicati; *analyze* confronta solo dati riconciliati. **Feedback sbagliato:** Sommare subito i file rende falso il totale; eliminare senza traccia i duplicati nasconde l'errore. (Slide 56–59; spiegazione estesa §6.)
27. **D:** Una lavatrice mostra vibrazione alta. Il digital twin prova che il cuscinetto è guasto?  
    **R corretta:** No; sovraccarico o sensore allentato sono spiegazioni alternative. Si controllano input, modello, ispezione e falsi allarmi rispetto al processo attuale. **Feedback sbagliato:** La simulazione non osserva direttamente il futuro e non garantisce ogni diagnosi. (Rizzi circa 72–88′; spiegazione estesa §4.)
28. **D:** Un modello assegna a un cliente alto rischio di abbandono. Basta offrirgli uno sconto?  
    **R corretta:** No; bisogna stimare se l'intervento cambia il comportamento, il margine netto e chi lo riceve, poi misurare contro una baseline comparabile. **Feedback sbagliato:** Rischio predetto e effetto causale dello sconto sono grandezze diverse. (Slide 53–54 e 60–61; spiegazione estesa §5.)


## Applicazione e feedback — integrazione 19 ottobre

**Domanda:** Una macchina invia tutte le misure a un server remoto. Basta questo per parlare di edge computing?

**Risposta e feedback:** No. Hai descritto generazione e trasmissione di dati IoT. Occorre indicare quale elaborazione avviene vicino alla sorgente. Nell’esempio, è il confronto locale delle vibrazioni con la soglia, da verificare anche per falsi allarmi.

**Domanda:** L’allarme locale basta per confrontare l’usura di tutte le sedi della lavanderia?

**Risposta e feedback:** Non necessariamente. Un allarme serve alla risposta locale; confrontare sedi richiede dati comparabili e un’analisi comune. Edge e sistema centrale possono svolgere parti diverse dello stesso processo.

**Domanda:** Ci sono tre schede A, due B e una con entrambi i fori. Puoi dire che hai contato sei ordini classificati correttamente?

**Risposta e feedback:** No. Hai cinque ordini classificati e un caso ambiguo da controllare. Contarlo in entrambe le categorie gonfierebbe il totale; sceglierne una senza verifica introdurrebbe un’informazione non presente.

**Domanda:** Perché un conteggio automatico può essere corretto nei calcoli ma poco utile per decidere?

**Risposta e feedback:** Può contare fedelmente codici raccolti con definizioni incoerenti, duplicati o categorie inadatte alla domanda. Devi controllare sia l’operazione di conteggio sia il significato dei dati.

**Domanda:** B riceve dieci volte i click di A nell’esempio. Quale controllo cambia l’interpretazione?

**Risposta e feedback:** Le esposizioni: B viene mostrato dieci volte tanto. Entrambi raggiungono il 10% di CTR. Non basta comunque questo valore per concludere che i pubblici abbiano lo stesso interesse o che i contenuti siano ugualmente utili.

**Domanda:** Dopo un cambiamento del ranking aumentano i click su un tema. Hai provato che quel tema interessa di più alle persone?

**Risposta e feedback:** No. Potresti averlo mostrato più spesso o in posizioni migliori. Controlla esposizione, pubblico e periodo, e separa il comportamento osservato dal risultato che vuoi migliorare. Il feedback loop rende il dato successivo dipendente dalle scelte del sistema.

**Domanda:** L’addetto trova utile il sistema di riordino. Hai già identificato il cliente pagante?

**Risposta e feedback:** No. Hai raccolto un segnale dall’utilizzatore. Devi identificare chi autorizza la spesa e verificare se il beneficio atteso giustifica costi e condizioni per quel soggetto.

**Domanda:** Il sistema riduce le rotture di stock, ma fa aumentare molto le giacenze. La proposta è già conveniente?

**Risposta e feedback:** Non basta il primo indicatore. Devi confrontare il beneficio di maggiore disponibilità con costo e rischio delle scorte, oltre ai costi del sistema. La convenienza dipende dal risultato complessivo e dalle alternative, non dal miglioramento di una sola metrica.

**Domanda:** Una foto non mostra il danno dichiarato. Posso classificarlo subito come frode?

**Risposta e feedback:** No. Prima verifica bene, data, campo visivo e qualità della foto, poi confronta le altre prove. Nel caso del tetto sud ripreso solo da nord manca proprio l’osservazione necessaria. Anche un’incompatibilità verificata richiede un processo di valutazione: non dimostra da sola intenzione fraudolenta. Risposta forte: distingue “non visibile” da “inesistente”, osservazione da interpretazione e discrepanza da intenzione. Risposta da correggere: “la foto è un dato oggettivo, quindi il cliente mente”; trascura ciò che la foto non mostra e le alternative da verificare.

**Domanda:** Il modello mostra uno score del 90%, ma manca un dato indispensabile. Posso eseguire comunque la proposta?

**Risposta e feedback:** No. Prima occorre sapere che cosa rappresenta lo score e se il caso resta nel campo validato. Il dato indispensabile mancante attiva la gestione dell’eccezione: acquisirlo, usare un fallback verificato o passare a un responsabile nei tempi previsti. Il 90% è un numero ipotetico dell’esercizio, non una soglia operativa. Risposta forte: separa score, qualità dell’input e responsabilità dell’azione; descrive un percorso alternativo concreto. Risposta da correggere: “sopra l’85% possiamo fidarci”; trasforma un dettaglio ASR non validato in regola universale e ignora il dato mancante.

**Domanda:** Il modello trova il problema ma nessuno può cambiare l’ordine: che cosa manca?

**Risposta e feedback:** Manca capability: l’informazione arriva, ma non può modificare la scelta nel tempo necessario.

**Domanda:** 1 Gbit/s equivale a 1 GB/s?

**Risposta e feedback:** No. Un byte ha 8 bit: idealmente 1 Gbit/s=0,125 GB/s. Confonderli riduce falsamente il tempo di otto volte.

**Domanda:** I 44 telefoni dimostrano la composizione esatta dei dati del team?

**Risposta e feedback:** No. È un’analogia basata su 256 GB ipotetici per telefono e arrotondamenti.

**Domanda:** Perché la lunghezza cambia se raddoppia lo spessore del libro?

**Risposta e feedback:** La formula è numero libri×spessore: la metafora dipende dalle ipotesi anche quando la quantità di dati non cambia.

**Domanda:** Il rapporto 180/2 dimostra che ogni azienda è cresciuta 90×?

**Risposta e feedback:** No. È un rapporto fra due stime globali della figura, non un risultato di una singola azienda o una legge futura.

**Domanda:** Contare click equivale a misurare la soddisfazione?

**Risposta e feedback:** No. Il click è una traccia osservabile; la soddisfazione è un concetto diverso che richiede definizione e controlli propri.

**Domanda:** Un conteggio di follower prova una buona reputazione?

**Risposta e feedback:** No. Conta connessioni secondo regole della piattaforma; reputazione richiede qualità, contesto e altre verifiche.

**Domanda:** Quale fase collega dato e beneficio per il cliente?

**Risposta e feedback:** Create value: dichiara la decisione o il servizio cambiato e come misurarne l’esito. Un pitch senza questa catena è una promessa.

**Domanda:** Puoi ricavare la quota reale di dati non strutturati dalla figura?

**Risposta e feedback:** No. Non è un grafico quantitativo con unità, campione e periodo; è una metafora delle forme.

**Domanda:** La posizione più alta nella figura è sempre la scelta migliore?

**Risposta e feedback:** No. È uno schema didattico: scegli il metodo che migliora la decisione con dati e costi sostenibili.

**Domanda:** NLP su molti file è automaticamente migliore di un report semplice?

**Risposta e feedback:** No. Servono domanda, baseline ed esito utile verificato; la complessità aggiunta può non creare valore.

**Domanda:** Il deep learning è obbligatorio dopo data mining?

**Risposta e feedback:** No. Sono opzioni per problemi diversi; scegli il metodo più semplice che risponde e verificalo su dati nuovi.

**Domanda:** Perché una metrica ottima al lancio non basta per i mesi successivi?

**Risposta e feedback:** Misura solo il test di allora. Il contesto può cambiare; senza monitoraggio di input, errori ed esiti reali non sai se il sistema continua ad aiutare.