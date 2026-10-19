# Definizioni ed esempi — Big Data & AI, 6 ottobre 2026

Le pagine sono quelle di `BigDataBsnsRizzi2026Lesson3.pdf` (Canvas 132821). `R` e `C` indicano gli offset dei due JSON PLAUD nominati negli appunti cumulativi. Gli esempi marcati **aggiunti** servono allo studio e non sono attribuiti alle voci registrate.

| Termine | Definizione utile | Fonte |
|---|---|---|
| **Task (T)** | Compito osservabile che il modello deve imparare a svolgere. | S 6–8 |
| **Performance (P)** | Metrica con cui giudicare il task, su casi non usati per l'apprendimento; va letta alla luce del costo degli errori. | S 6–9 |
| **Experience (E)** | Dati o interazioni da cui il modello apprende. | S 6–8 |
| **Label** | Output desiderato associato a un esempio di training. | S 12–14 |
| **Supervised learning** | Apprendimento con esempi e output desiderati. | S 12–14; R 28–30′ |
| **Unsupervised learning** | Ricerca di struttura in dati senza output desiderati. | S 12, 15–16; R 39–41′ |
| **Cluster** | Raggruppamento secondo somiglianze definite dalle feature/metodo; richiede interpretazione e validazione. | S 15–16; R 39–41′ |
| **Semi-supervised learning** | Uso combinato di pochi esempi etichettati e molti non etichettati. | S 12, 17; R 41–43′ |
| **Reinforcement learning** | Apprendimento di una strategia attraverso feedback/ricompense lungo sequenze di azioni. | S 12, 18–19; R 43–46′ |
| **Induzione** | Inferire una regolarità generale da casi osservati; la conclusione resta da testare su altri casi. | R 52–53′ |
| **Abduzione** | Proporre la spiegazione più plausibile di un effetto osservato, come una diagnosi da sintomi; è un'ipotesi da verificare. | R 53–54′ |
| **Deduzione** | Trarre una conseguenza da premesse o regole date; nell'esempio orale, da due relazioni padre-figlio si deduce quella nonno-nipote. | R 54–55′ |
| **Decision tree** | Modello che segue ramificazioni su caratteristiche per arrivare a una classificazione; l'esempio della mela facilita l'ispezione del percorso. | S 28 |
| **Neural network / weight** | Rete di unità con connessioni parametrizzate; il peso contribuisce alla trasformazione del segnale. L'analogia col cervello non descrive letteralmente ogni unità. | S 29–30; R 57–62′ |
| **Predictive AI / generative AI** | La prima stima una classe o un valore; la seconda produce nuovo contenuto condizionato da input e rappresentazioni apprese. | S 24–35 |
| **Token** | Unità di testo elaborata da un LLM; può essere una parola o parte di parola. | R 65–67′; S 32 |
| **Transformer** | Architettura per dati sequenziali descritta dalle slide come centrale in molti strumenti generativi; non equivale a qualunque modello AI. | S 35 |
| **Temperature** | Controllo della variabilità nella scelta dei token durante la generazione. | R 78–79′ |
| **Data lake** | Deposito per dati strutturati, semistrutturati e non strutturati, anche nativi; occorrono governo e qualità per usarli. | S 37–39 |
| **Metadata / catalog** | Descrizioni e identificativi che permettono scoperta, significato e gestione dei dati. | S 38, 43–45 |
| **Data lineage / auditing** | Il primo ricostruisce provenienza e trasformazioni; il secondo registra cambiamenti importanti. | S 45 |
| **Dashboard** | Selezione di indicatori e visualizzazioni organizzate intorno a una domanda e una decisione; non basta collezionare grafici. | S 49–55; C 3–7′ |
| **Baseline** | Metodo semplice e ripetibile usato come termine di confronto prima di attribuire valore a un modello più complesso. | Spiegazione estesa §1, esempi didattici aggiunti; S 6–10 |
| **Train/test leakage (contaminazione del test)** | Passaggio, diretto o indiretto, di informazioni dei casi di valutazione nella fase di apprendimento o scelta del modello. Può far sembrare buona una prestazione che non regge su casi nuovi. | Spiegazione estesa §1, esempio ipotetico dei ticket duplicati; non è una citazione orale |
| **Data mining / KDD** | Data mining cerca pattern nei dati; Knowledge Discovery in Databases indica un processo più ampio che comprende preparazione, ricerca, interpretazione e uso dei risultati. Non sono due ulteriori tipi di feedback accanto ai quattro metodi di learning. | S 20; spiegazione estesa §2, chiarimento didattico |
| **Symbolic AI** | Approccio AI che rappresenta esplicitamente fatti o regole e applica inferenze su di essi; può convivere con modelli che apprendono dai dati. | S 25; spiegazione estesa §3, solo supporto slide per la tassonomia |
| **Reward misspecification** | Disallineamento tra la ricompensa definita per un agente e il risultato che si voleva davvero ottenere: l'agente può massimizzare il punteggio scegliendo una scorciatoia dannosa. | Spiegazione estesa §2, esempio ipotetico delle consegne; S 18–19 per il feedback sequenziale |
| **Attention (nel Transformer)** | Meccanismo che combina informazioni di diverse posizioni della sequenza quando il modello costruisce rappresentazioni contestuali. Non è un controllo automatico della verità del testo generato. | S 35; spiegazione estesa §4; chiarimento esterno: *Attention Is All You Need*, già distinto dalle fonti orali |
| **Raw / curated data** | Il dato raw conserva una versione di ingresso; il dato curated è preparato secondo regole esplicite per uno scopo analitico. La trasformazione deve restare ricostruibile con definizioni e lineage. | S 36–48; spiegazione estesa §5, solo PDF per il data lake |
| **Access control (controllo degli accessi)** | Regole che limitano chi può leggere o modificare dati e per quale ruolo o scopo; la presenza di un dataset nel lake non autorizza l'uso indiscriminato. | S 43–45; spiegazione estesa §5, solo PDF per il data lake |

## Esempi ragionati

1. **Reclami clienti — aggiunto.** T = assegnare categoria; P = misura sugli errori di classificazione in casi nuovi, considerando quelli più dannosi; E = reclami etichettati e verificati. Se hai solo frasi come «soddisfare il cliente», non hai formulato T–P–E. [Principio S 6–10]
2. **Segmentazione — aggiunto.** Un algoritmo riunisce acquisti simili senza etichette. Prima di chiamare il cluster «clienti fedeli» bisogna esaminare criteri, stabilità e comportamento reale; la somiglianza non prova motivazioni o causalità. [Principio S 12, 15–16]
3. **Ritardo e messaggio — aggiunto.** Il modello predice il ritardo; un LLM formula l'avviso. Il primo si testa su spedizioni reali; il secondo si confronta con i dati dell'ordine. La fluidità del testo non corregge la previsione. [Distinzione S 24–35]
4. **Data lake e dashboard — aggiunto.** Ordini e resi con codici prodotto incompatibili possono produrre una falsa crescita, anche se entrambi i file sono nel lake. Metadati, riconciliazione delle chiavi e lineage precedono il grafico e la decisione. [S 38–45, 55]
5. **Osservazione non verificata di gruppo.** Nel laboratorio si discute una possibile correlazione e si ammette di non averla dimostrata. La lezione metodologica è dichiarare il limite dei dati, non inventare una relazione o usare le affermazioni degli studenti come prova. [C 74–76′]
6. **Confronto e test — aggiunto.** Se un classificatore di ticket supera una baseline a parole chiave solo quando ticket quasi identici compaiono sia nel training sia nel test, il miglior risultato può essere contaminato. Valuta su richieste successive nel tempo e controlla gli errori urgenti prima di adottarlo. [Spiegazione estesa §1; esempio ipotetico]
7. **Data lake governato — aggiunto, solo slide.** Se una dashboard cambia dopo una nuova importazione, confronta dato raw e curated, definizione del KPI, lineage e audit; verifica inoltre chi può accedere ai dati. Un file disponibile e un grafico plausibile non provano qualità o diritto d'uso. [S 36–48; spiegazione estesa §5]

**Da non memorizzare come fatti:** i numeri di performance dei modelli pronunciati nell'ASR, la cronologia orale sulle origini degli LLM, statistiche e correlazioni dei pitch degli studenti, o percentuali/date dell'esame non confermate ufficialmente. Anche l'ora esatta di pause e fine lezione non è ricavabile dalle sole durate dei file.

**Approfondimenti verificati aggiunti, 6 ottobre 2026:** [*Absolute Zero*](https://arxiv.org/abs/2505.03335) descrive task di codice proposti e risolti dal modello, con executor che verifica e dà reward; non dimostra ragionamento generale senza pretraining. [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762) (2017) introduce il Transformer basato su attention. Sono fonti esterne, non attribuzioni della registrazione.


## Termini della revisione 19 ottobre

| Termine EN | Significato e limite | Fonte |
|---|---|---|
| Regression / classification | Stima numerica / classe o probabilità di classe; specificare target e metrica. | ASR R 365–373, sviluppo aggiunto |
| Prior / posterior | Probabilità iniziale / aggiornata dopo evidenza e modello esplicito; non un verdetto certo. | Richiamo Bayesian methods R 372, spiegazione aggiunta |
| Multimodal | Modello o flusso compatibile con più modalità; non ogni LLM accetta o produce tutte le modalità. | Canvas p 35, spiegazione aggiunta |
| API | Contratto fra componenti su input/output, versioni, accessi ed errori. | Canvas p 48 |
| At rest / real time | Dato conservato / trattamento con latenza adatta alla decisione; non qualità garantita. | Canvas pp 40–41 |


## Nuclei completati — 19 ottobre 2026

- **matrix completion**: Stima di celle mancanti in una matrice di osservazioni, per esempio rating utenti × film; non trasforma una stima in voto espresso. [Slide 17; spiegazione aggiunta.]
- **density estimation**: Stima della distribuzione dei dati nello spazio delle caratteristiche; rarità non equivale automaticamente ad anomalia dannosa. [Slide 21; spiegazione aggiunta.]
- **dimensionality reduction**: Rappresentazione con meno coordinate, con possibile perdita di informazione; PCA può operare senza label, LDA discriminante usa classi note. [Slide 22; spiegazione aggiunta.]
- **data discovery**: Ricerca e comprensione preliminare dei dataset mediante catalogo, tag e descrizioni prima dell’analisi. [Slide 44; spiegazione aggiunta.]
- **data exploration**: Esame iniziale di schema, campione, copertura e qualità per scegliere dati adatti alla domanda. [Slide 45; spiegazione aggiunta.]
- **Parsimonia**: preferenza condizionata per complessità non necessaria minore, a parità di adeguatezza verificata; non semplicità uguale verità. [Nucleo ASR Rizzi125, chiarimento aggiunto.]
- **Backpropagation**: calcolo dei gradienti della loss rispetto ai parametri di una rete; l’optimizer sceglie l’aggiornamento. [Scikit-learn, neural networks; chiarimento esterno, non ricostruzione Rizzi444.]
- **Unità di utilizzo**: quantità misurata, come token in ingresso/uscita, distinta da prezzo monetario e consumo energetico. [Nuclei Rizzi528/602/698; esempio aggiunto senza tariffe reali.]
