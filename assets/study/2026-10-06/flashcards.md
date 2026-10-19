# Flashcard e domande con risposta — Big Data & AI, 6 ottobre 2026

Fonti: `S` = Canvas 132821, pagina PDF; `R`/`C` = minuti dall'inizio dei due JSON PLAUD indicati negli appunti cumulativi. Le risposte non usano dati di gruppo o passaggi ASR incerti come fatti.

1. **D: Perché «facciamo AI per migliorare il servizio» non è ancora un problema di ML?** **R:** Non specifica compito, metrica e dati/esperienza; prima va tradotto in una previsione o decisione valutabile. [S 6–10]
2. **D: Cosa sono T, P, E nel riconoscimento di parole scritte a mano?** **R:** Task = riconoscere; Performance = percentuale corretta su esempi non visti; Experience = immagini con etichette umane. [S 7]
3. **D: Quale differenza didattica c'è tra programma tradizionale e ML?** **R:** Nel primo si programmano regole; nel secondo il modello apprende da dati/esempi. È una semplificazione del processo reale. [S 5; R 19–22′]
4. **D: Perché le estrazioni indipendenti della lotteria non diventano prevedibili aggiungendo uno storico?** **R:** Lo storico non contiene un pattern informativo per il prossimo evento indipendente. [S 9; R 25–26′]
5. **D: Che cosa fornisce il training supervised?** **R:** Esempi con output desiderato (*label*), confrontabili con le previsioni. [S 12–14]
6. **D: Che cosa restituisce un metodo unsupervised e quale limite ha?** **R:** Strutture o cluster senza label iniziali; i gruppi richiedono interpretazione e non provano cause. [S 12, 15–16; R 39–41′]
7. **D: Quando ha senso parlare di semi-supervised learning?** **R:** Quando pochi esempi etichettati aiutano a sfruttarne molti non etichettati; la qualità delle poche label conta. [S 12, 17]
8. **D: Come differisce il feedback del reinforcement learning?** **R:** Segnala l'esito di sequenze di azioni mediante ricompense, non una label corretta per ogni input isolato. [S 12, 18–19; R 43–46′]
9. **D: Gli LLM rappresentano tutta l'intelligenza artificiale?** **R:** No. Sono una famiglia di modelli profondi; AI comprende molti altri metodi e applicazioni. [S 24–35; R 50–51′]
10. **D: Che cosa mostra l'esempio mela con albero decisionale?** **R:** Una classificazione costruita con diramazioni su caratteristiche osservabili, relativamente leggibile nel percorso. [S 28]
11. **D: Perché colore, forma e consistenza non descrivono letteralmente ogni livello di una rete neurale?** **R:** Sono un'analogia didattica; le rappresentazioni apprese nei livelli possono essere distribuite e meno interpretabili. [S 29–30; R 59–62′]
12. **D: Come distingui predictive e generative AI?** **R:** La prima stima classi/valori; la seconda produce contenuti nuovi a partire dal contesto. Le due uscite richiedono verifiche diverse. [S 24–35]
13. **D: Un token coincide sempre con una parola?** **R:** No, può essere anche parte di parola o altra unità; «token = parola» è una semplificazione usata nell'audio. [S 32; R 65–67′]
14. **D: Quali passaggi essenziali trasformano un prompt in testo generato da un LLM?** **R:** Il prompt viene suddiviso in token; il modello usa contesto e parametri appresi per produrre progressivamente nuovi token. Una risposta plausibile va comunque controllata sulle fonti. [S 31–35; R 65–72′]
15. **D: Perché cambiare la temperature può cambiare il testo prodotto?** **R:** Regola la variabilità nella scelta dei token; perciò lo stesso prompt non deve necessariamente dare sempre identico testo. Non sostituisce la verifica dei fatti. [R 78–79′]
16. **D: Che cos'è un data lake e che cosa non garantisce?** **R:** Deposito di dati eterogenei anche nativi; da solo non garantisce qualità, valore o conclusioni corrette. [S 37–39]
17. **D: Qual è la differenza tra lineage e auditing?** **R:** Lineage ricostruisce origine/trasformazioni; auditing registra cambiamenti e responsabilità delle modifiche. [S 45]
18. **D: Che cosa controlli prima di costruire una dashboard?** **R:** Domanda, fonte e diritti del dataset, significato dei campi, unità, missing data, qualità e scelta dei grafici. [S 55]
19. **D: Qual era l'obiettivo didattico del laboratorio Databricks?** **R:** Costruire una dashboard dai dati e presentare un insight in un pitch breve a partire da quella dashboard. [C 3–7′, 45–47′]
20. **D: Una correlazione vista in una dashboard prova causalità?** **R:** No. Prima servono dati verificati, un confronto adeguato e il controllo di spiegazioni alternative. [S 55]
21. **D: Che cosa cambia fra induzione, abduzione e deduzione?** **R:** L'induzione generalizza dai casi, l'abduzione propone una spiegazione da indizi, la deduzione trae una conseguenza da premesse date. Una spiegazione plausibile va poi verificata. [R 52–55′]

## Tre esercizi di applicazione

**A. Classifica il problema.** Hai reclami già categorizzati e vuoi assegnare categorie ai nuovi. **Risposta:** supervised; T = categoria, E = reclami etichettati, P = misura su reclami nuovi pesata dal costo degli errori. Se le categorie storiche sono incoerenti, la priorità è correggere le label. [S 6–14; scenario aggiunto]

**B. Due controlli distinti.** Un modello prevede un ritardo e un LLM prepara il messaggio. **Risposta:** confronta la previsione con consegne osservate e verifica il messaggio contro ordine, ritardo stimato e policy; non basta che sia scritto bene. [S 24–35; scenario aggiunto]

**C. Grafico sorprendente.** Una dashboard di gruppo mostra due serie che salgono insieme. **Risposta:** prima controlla provenienza, definizioni, periodo e granularità; poi cerca fattori terzi e un confronto appropriato. Presenta la relazione come osservazione, non come causa. [S 43–45, 55; scenario aggiunto]

## Verifica dei meccanismi della spiegazione estesa

I casi qui sotto sono **ipotetici**. Gli esempi del data lake provengono dalle slide, senza attribuzione a un segmento orale verificato; non attestano ascolto diretto degli audio.

22. **Baseline e test su casi futuri.** Un modello dà il 95% di accuratezza sui ticket, ma una regola semplice dà il 94%. Ticket duplicati sono stati distribuiti a caso tra train e test. Lo adotteresti?  
   **Risposta corretta:** non ancora. Ripeti il confronto su ticket nuovi, separati nel tempo e senza duplicati, e misura soprattutto i reclami urgenti persi e il costo dei falsi allarmi. **Feedback sul corretto:** hai chiesto se il miglioramento regge nell'uso reale e se migliora l'errore che conta. **Se hai risposto sì:** un punto percentuale apparente può venire dalla contaminazione del test e non prova un beneficio operativo. [Spiegazione estesa §1; S 6–10; numeri inventati.]

23. **Ricompensa e scorciatoia.** Un agente di consegna riceve punti solo quando arriva presto e comincia a saltare zone difficili. È una buona strategia perché aumenta il reward?  
   **Risposta corretta:** no. La ricompensa non rappresenta servizio e vincoli; aggiungi copertura delle zone, sicurezza e costi, poi valuta in una simulazione credibile prima dell'uso. **Feedback sul corretto:** distingui massimizzare il punteggio da soddisfare l'obiettivo dell'impresa. **Se hai risposto sì:** hai trattato una metrica incompleta come risultato finale. [S 18–19; spiegazione estesa §2; caso inventato.]

24. **Data mining, KDD e tipo di apprendimento.** Un team trova gruppi di reclami senza label, poi pulisce i dati, li interpreta con operatori e aggiorna il processo. «Data mining» e «KDD» significano che ha usato due nuovi metodi di feedback oltre ai quattro della lezione?  
   **Risposta corretta:** no. La ricerca dei gruppi può usare clustering unsupervised; KDD descrive il processo più ampio che include preparazione e uso. **Feedback sul corretto:** distingui attività/processo dalla presenza di label o reward. **Se hai risposto sì:** il nome del campo non rivela il feedback dato al modello. [S 20; spiegazione estesa §2; caso inventato.]

25. **Regola esplicita e apprendimento.** Un'app deve rispettare una data ufficiale di scadenza e classificare da esempi le richieste confuse. Se cambia la scadenza, basta riaddestrare il classificatore?  
   **Risposta corretta:** no. Aggiorna e verifica la regola ufficiale; il modello può aiutare a leggere o classificare la richiesta, mentre l'applicazione della scadenza resta controllata. **Feedback sul corretto:** assegni alla symbolic AI e al ML compiti verificabili diversi. **Se hai risposto sì:** hai delegato a un pattern appreso l'autorità di una regola che è cambiata. [S 25; spiegazione estesa §3; caso inventato.]

26. **Raw, curated e permessi.** Il KPI dei resi cambia dopo un nuovo import nel data lake. Tutti nel team vedono il file grezzo: puoi già presentare il cambiamento come tendenza?  
   **Risposta corretta:** no. Confronta definizione del KPI, versione raw e curated, duplicati, lineage e audit del nuovo import; verifica anche i permessi e lo scopo d'uso. **Feedback sul corretto:** la possibilità tecnica di vedere dati è diversa da qualità, interpretazione e autorizzazione. **Se hai risposto sì:** hai trasformato un possibile errore di trasformazione o accesso in una conclusione di business. [S 36–48, solo slide per il data lake; spiegazione estesa §5; caso inventato.]


**Domanda.** Regression e classification producono lo stesso output?

**Risposta e feedback.** No: stima numerica e classe sono output distinti; target, regola decisionale e metrica vanno dichiarati. Fonte: integrazione didattica 19 ottobre su slide e segmenti dichiarati; nessun ascolto diretto.


**Domanda.** Che cosa separa validate da verify nel ciclo della slide 27?

**Risposta e feedback.** Validate controlla che il compito sia valutabile; verify controlla la risposta del solver e produce feedback. Fonte: integrazione didattica 19 ottobre su slide e segmenti dichiarati; nessun ascolto diretto.


**Domanda.** Una chat testuale può automaticamente vedere un’immagine nominata?

**Risposta e feedback.** No: accesso alla modalità e risultato sul contenuto richiedono verifica distinta. Fonte: integrazione didattica 19 ottobre su slide e segmenti dichiarati; nessun ascolto diretto.


**Domanda.** X = mese e Y = assenze risolve la scelta della metrica?

**Risposta e feedback.** No: numero di assenze e tasso assenze/prenotazioni rispondono a domande diverse. Fonte: integrazione didattica 19 ottobre su slide e segmenti dichiarati; nessun ascolto diretto.


**Domanda.** Nessuna relazione visibile prova assenza di causalità?

**Risposta e feedback.** No: campione, misura, forma della relazione e confronto causale restano da verificare. Fonte: integrazione didattica 19 ottobre su slide e segmenti dichiarati; nessun ascolto diretto.


## Applicazione dei nuclei completati — 19 ottobre 2026

**Domanda.** Una cella vuota utenti × film significa che l’utente non gradisce il film?

**Risposta e feedback.** No: il rating non è osservato. Una stima è una previsione da verificare. [Slide 17; spiegazione didattica aggiunta.]

**Domanda.** Un punto raro nella distribuzione prova un errore o una frode?

**Risposta e feedback.** No. La stima di densità identifica zone poco frequenti rispetto a dati e variabili scelti; occorre controllare il caso e la qualità del dato prima di interpretarlo. [Slide 21; spiegazione didattica aggiunta.]

**Domanda.** Perché LDA discriminante non è, in generale, un esempio unsupervised?

**Risposta e feedback.** Usa classi note per trovare direzioni che le separano; la posizione nella figura p22 richiede una correzione didattica. [Slide 22; spiegazione didattica aggiunta.]

**Domanda.** Un ID e un tag “ricavo” rendono comparabili due dataset?

**Risposta e feedback.** No: servono definizioni, periodo, unità, provenienza e qualità controllate. [Slide 38, 44; spiegazione didattica aggiunta.]

**Domanda.** Che prova sostiene un vantaggio competitivo da un data lake?

**Risposta e feedback.** Una decisione migliorata su casi nuovi rispetto a una baseline, considerando costi, qualità e diritti. [Slide 39; spiegazione didattica aggiunta.]

**Domanda.** Una regola più semplice è sempre migliore?

**Risposta e feedback.** No: la preferenza per minore complessità richiede adeguatezza sullo stesso test e sugli errori rilevanti. [Spiegazione didattica aggiunta sui nuclei Rizzi; non ricostruzione ASR.]

**Domanda.** Backprop e optimizer sono sinonimi?

**Risposta e feedback.** No: backprop calcola gradienti; l’optimizer usa queste informazioni per aggiornare i pesi. Reward e inference sono concetti distinti. [Spiegazione didattica aggiunta sui nuclei Rizzi; non ricostruzione ASR.]

**Domanda.** 50.000 token di ingresso misurano una bolletta o energia?

**Risposta e feedback.** No: sono unità di utilizzo. Condizioni di accesso, componenti fisse e infrastruttura vanno verificate separatamente. [Spiegazione didattica aggiunta sui nuclei Rizzi; non ricostruzione ASR.]

