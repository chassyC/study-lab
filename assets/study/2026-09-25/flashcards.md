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
