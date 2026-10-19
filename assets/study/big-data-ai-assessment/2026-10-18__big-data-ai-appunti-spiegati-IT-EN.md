# Big Data & AI in Business — appunti didattici / Teaching notes

**Per studiare, non per consegnare come blog.** Copertura: lezioni e slide del 25 e 29 settembre, 6 e 13 ottobre 2026. Le cifre dei piccoli esercizi qui inventati sono marcate *ipotetiche*. I numeri del laboratorio ZIP sono invece i dati didattici forniti. Per il 13 ottobre sono disponibili slide, ZIP e spiegazione scritta, non una registrazione locale: non si attribuisce al docente una spiegazione orale specifica. La verifica in aula del 10% non ha una data, un formato o domande confermati; il blog/report dell'80% da 3.200 parole scade il 13 gennaio 2027 alle 16:00 ed è un'attività distinta.

# PART I — ITALIANO

## 1. Si parte dalla scelta aziendale, non dal software

### 1.1 Decisione, baseline e risultato

Immagina un negozio che resta senza acqua il sabato. Il problema non è “non abbiamo AI”: è che una persona deve decidere **quante confezioni ordinare e quando**. Una previsione della domanda serve solo se arriva prima dell'ordine, usa prodotti effettivamente disponibili e riduce rotture di stock senza far crescere troppo l'invenduto. Il *why* è questo risultato; il *what* è la decisione e il processo da cambiare; il *how* potrebbe essere una regola semplice, un foglio di calcolo o un modello. Una **baseline** è il metodo attuale con cui confrontare il nuovo: per esempio ordinare la media degli ultimi quattro sabati. Senza confronto, “l'algoritmo è accurato” non dimostra beneficio.

### 1.2 Il ciclo completo

Il ciclo **Frame → Acquire → Build → Adopt → Monitor** serve a non perdere la decisione lungo la strada. *Frame*: definisci problema, chi agisce, entro quando, metrica e costo degli errori. *Acquire*: raccogli vendite, promozioni, giacenze e tempi del fornitore, con permessi e definizioni. *Build*: prepara dati e prova la stima su settimane non usate per costruirla. *Adopt*: fai arrivare la proposta al responsabile, con possibilità di correggerla. *Monitor*: confronta mancate vendite, margine, invenduto ed errori nel tempo. Se sabato risultano zero vendite perché lo scaffale era vuoto, zero è una **vendita osservata**, non domanda zero: la “mappa” dei dati non è il “territorio” del comportamento reale.

### 1.3 Il gemello digitale e la realtà

Un **digital twin** (gemello digitale) è una rappresentazione di alcune proprietà di una macchina o processo aggiornata con dati pertinenti. Se un produttore di lavatrici misura vibrazione, temperatura e cicli, può simulare scenari e proporre manutenzione. Il sensore non vede direttamente “guasto futuro”: tre macchine con vibrazione alta possono essere sovraccarica, difettosa o avere un sensore allentato. Servono confronto con guasti verificati, costo di falsi interventi e feedback del tecnico. La stessa grammatica vale per i casi di Formula 1, meteo, esplorazione sismica e osservazione spaziale delle slide: osservazione → rappresentazione → ipotesi/modello → decisione → verifica, ma scala, tempo e tipo di errore cambiano. Una slide sui segnali sismici non è una promessa di previsione affidabile dei terremoti.

## 2. Che cos'è un dato, e quando diventa Big Data

### 2.1 Oggetto, unità e tempo

Un **dato** è un'osservazione codificata. `72` da solo non dice quasi niente; “72 °C sul motore A alle 10:05” aggiunge unità, oggetto e tempo e diventa informazione utilizzabile. Conoscere carico, storia del motore e soglia di sicurezza aiuta a interpretarla; decidere un fermo richiede giudizio, costo e responsabilità. Una **riga** di una tabella dovrebbe rappresentare un'unità osservata precisa (*granularity*): una vendita, una visita o un cliente. Una **colonna** è una caratteristica o misura di quell'unità. Dieci righe di visite non significano dieci clienti.

### 2.2 Le cinque V e i loro problemi

“Big” non è una soglia fissa. Le **5 V** sono cinque domande: *volume*, quanti byte/eventi e per quanto tempo; *velocity*, quanto rapidamente arrivano e soprattutto quando serve decidere; *variety*, tabelle, log, testi, immagini o audio da conciliare; *veracity*, quanto sono completi, calibrati e non distorti; *value*, beneficio netto dopo costi e uso reale. Un sensore che invia un numero al secondo ha velocità elevata, ma se è mal calibrato fa crescere il danno, non il valore. Anche unità e periodo contano: un terabyte (TB) decimale è 10¹² byte; un exabyte 10¹⁸, uno zettabyte 10²¹. Le 175 ZB per il 2025 nelle slide sono una **previsione storica attribuita a IDC/Seagate**, non una misura attuale; gli 11 TB di Formula 1 sono attribuiti a un team in un weekend. Non usare queste cifre per stimare direttamente il fabbisogno di un'impresa.

| V | Domanda concreta | Errore se ignorata |
|---|---|---|
| Volume | Quanti scontrini e per quanto tempo? | Costo e spazio sottostimati. |
| Velocity | Entro quando un ordine o allarme cambia ancora l’esito? | Intervento troppo tardi o infrastruttura inutile. |
| Variety | Foto, vendita e reclamo riguardano stesso prodotto, sede e periodo? | Collegamenti falsi. |
| Veracity | Orologi, codici, duplicati e copertura sono corretti? | Il modello impara errori. |
| Value | Qual è il beneficio netto rispetto alla baseline? | Accumuli dati senza decisioni migliori. |

### 2.3 Formato e catena del valore

I dati **strutturati** hanno uno schema regolare (ordini con colonne), i **semistrutturati** hanno campi o tag flessibili (molti JSON/XML), i **non strutturati** richiedono estrazione/interpretazione (testo libero, audio, foto). Un CSV strutturato con ordini duplicati resta sbagliato: *formato* e *qualità* sono domande diverse. Nella **data value chain** raccolta → preparazione (*processing*) → analisi → distribuzione → uso → riuso/feedback, l'anello decisivo è l'azione. Il riuso non dà permesso generale a trattare dati personali per un nuovo scopo. Le quattro opportunità proposte nelle slide (*sell outcomes*, *value data exhaust*, *simulate before acting*, *sell trust*) sono ipotesi di modello di business: risultato vendibile, tracce riutilizzabili, simulazione, fiducia. Richiedono costi, permessi, contratto e prova di domanda; non sono ricavi già ottenuti.

## 3. Tabelle, fonti e join: come nasce una cifra credibile

### 3.1 Prima definisci che cosa rappresenta una riga

Un **database** è una raccolta organizzata di dati consultabili; una tabella dispone righe e colonne secondo regole. Un **dataset** è l'insieme delimitato che usi per una domanda: fonte, periodo, righe, colonne, versione e definizioni. Un gestionale **ERP** registra processi come ordini e magazzino; un **CRM** registra interazioni e clienti; i sensori misurano eventi fisici; un'**API** permette scambio di dati fra sistemi. Nessuna fonte possiede automaticamente tutta la verità: un CRM può contenere un cliente due volte, un sensore può sbagliare l'ora, un'API può inviare l'ordine prima che sia rimborsato.

Esempio *ipotetico*: il database dell'impresa ha una tabella clienti e una vendite. La prima ha una riga per cliente; la seconda una riga per vendita, quindi lo stesso cliente può comparire molte volte. Un dataset per “ricavi di settembre” seleziona vendite di settembre, documenta se include rimborsi e specifica se gli importi sono lordi o netti. Dire solo “ho scaricato il database” non risponde a nessuna di queste domande. Un'API è un modo di ricevere record dal sistema, non una garanzia che il record sia finale o corretto.

### 3.2 Segui una chiave attraverso il join

Un **join** collega righe di tabelle tramite una chiave comune. Esempio *ipotetico*: `vendite` ha una riga `S1, P03, 2 pezzi`; `prodotti` ha `P03, 5 €`. La chiave `P03` consente di aggiungere il prezzo e calcolare 2×5=10 €. Se `prodotti` contiene due righe P03, il join crea due righe S1 e una somma ingenua dà 20 €. Il software ha eseguito il collegamento richiesto; era la relazione fra chiavi a essere sbagliata. Prima del join definisci l'unità di ciascuna tabella, controlla unicità della chiave sul lato appropriato, confronta **numero fisico di righe**, **sale_id distinti** e **molteplicità di righe per sale_id** prima/dopo, poi ispeziona mancati abbinamenti. Per collegare una prenotazione palestra a un ingresso servono ID, sede, corso e finestra oraria compatibili: stesso nome non basta.

Un **inner join** conserva soltanto vendite con prodotto corrispondente: se manca P04, la vendita P04 sparisce dal risultato. Un **left join** conserva tutte le vendite e lascia prezzo mancante dove non trova il prodotto. Per una riconciliazione iniziale il secondo aiuta a *vedere* i mancati abbinamenti; poi si decide come trattarli. Non sostituire automaticamente un prezzo mancante con zero, perché zero significherebbe “gratuito”, una conclusione non osservata. Controlla chiave, cardinalità (una vendita → un prodotto), righe fisiche, ID distinti e duplicazioni per ID prima di sommare ricavi.

### 3.3 Pulizia significa regola, traccia e controllo

**Pulire** i dati significa rendere esplicita una regola per mancanti, duplicati, unità, date, codici e valori anomali. Un valore anomalo (*outlier*) è insolito, non automaticamente falso. La tabella di controllo deve conservare grezzo e trasformazione: “S008 duplicato identico: una sola vendita tenuta” è verificabile; cancellare righe in silenzio no. La **provenienza** (*lineage*) permette di risalire dal numero nel grafico al file e alle trasformazioni.

Se una colonna prezzo contiene `14,99` in una fonte e `14.99` in un'altra, il programma deve sapere che i due testi rappresentano lo stesso numero prima di moltiplicare. Se una data `03/04/2026` può essere 3 aprile o 4 marzo, un'ipotesi silenziosa può spostare una vendita al mese sbagliato. Documenta regola, numero di righe interessate ed esempio controllato. Una riga con quantità 1.200 può essere un grande ordine valido; chiedi conferma alla fonte invece di eliminarla per far sembrare il grafico regolare.

## 4. Tempo della decisione, tipi di analisi e grafici

### 4.1 Il tempo utile include l’intervento umano

**Batch** significa elaborare un blocco a intervalli (per esempio un riepilogo ogni notte); **stream** significa trattare eventi che arrivano continuamente. Non si sceglie stream perché sembra moderno: si traccia il tempo dall'evento all'ultima azione utile. Esempio *ipotetico*: frode alle 10:00, dato alle 10:02, modello alle 10:03, addetto alle 10:20, pagamento irreversibile alle 10:05. Ridurre il calcolo di un minuto non risolve il ritardo dell'intervento. Invece un allarme rapido per chiedere conferma può convivere con un batch serale per contabilità, riconciliazione e audit. Stream espone a eventi duplicati, fuori ordine e falsi allarmi; batch lascia gli errori invisibili fino al ciclo successivo. Confronta costo, rischio, velocità e usabilità.

### 4.2 Quattro domande, quattro prodotti analitici

Le quattro famiglie di **analytics** rispondono a domande diverse. *Descriptive*: “che cosa è successo?” (15 rinnovi persi su 100 = 15%). *Diagnostic*: “quale spiegazione è plausibile?” (attese lunghe sono associate a mancati rinnovi, ma serve controllare altri fattori). *Predictive*: “chi potrebbe non rinnovare?” (stima su clienti futuri). *Prescriptive*: “quale azione scegliere?” (offerta, assistenza o nessuna azione, pesando costo e beneficio). **Data analysis** è l'esame per una domanda; **BI** rende misure e report disponibili; **data science** può costruire modelli e test; queste etichette non sostituiscono il compito concreto.

Segui gli stessi 100 clienti *ipotetici*. Il report conta 15 mancati rinnovi: descrive. Confrontare i tempi di risposta di chi rinnova e di chi no suggerisce una diagnosi, ma i clienti con problemi più gravi potrebbero sia aspettare di più sia lasciare il servizio: non è prova causale. Un modello stima il rischio per clienti in scadenza il mese prossimo: predice, e va confrontato con i loro esiti futuri. Infine si valuta se chiamarli. Un cliente ad alto rischio potrebbe non essere recuperabile: la scelta prescrittiva richiede effetto **incrementale** e costo della chiamata. Se una chiamata costa 5 e produce in media 4 di margine aggiuntivo, non conviene anche con rischio alto. Ogni stadio chiede una prova diversa.

### 4.3 Un grafico risponde visivamente a una domanda

Un **grafico** deve corrispondere a domanda, unità e denominatore. Serie temporale per andamento nel tempo, barre per confrontare categorie, scatterplot per coppie di valori, tabella per numeri esatti. Un **dashboard** è una vista coordinata per una decisione, non una galleria di grafici. Prima di dire “+20% accessi”, chiedi se sono accessi, persone uniche o prenotazioni, se i periodi hanno uguali giorni di apertura e se è cambiata la sede o la raccolta. Il caso fitness delle slide richiede 8–10 *touchpoint* (sito, iscrizione, pagamento, prenotazione, accesso, cancellazione, app, allenamento, valutazione...), due problemi di qualità, un rischio privacy e opportunità. Esempio *ipotetico*: 30 prenotazioni e 20 ingressi implicano 10 prenotazioni senza ingresso e un no-show apparente di 10/30=33,3%, **solo** se ogni prenotazione/ingresso è unico e abbinato. Per decidere capienza servono anche lista d'attesa e costi; dati sanitari raccolti per il servizio non diventano automaticamente utilizzabili per marketing.

Una serie temporale di accessi giornalieri mostra *quando* avviene un calo; barre per sede mostrano *dove*; uno scatterplot prenotazioni-ingressi può rivelare corsi con molti no-show. Gli assi indicano unità e periodo, e un asse troncato può esagerare differenze. Per cambiare capienza, 30 prenotazioni e 20 accessi sono insufficienti: una lista d’attesa di 15 persone suggerisce una scelta diversa da una sala semivuota senza domanda respinta. La dashboard deve servire l’azione e spiegare la misura.

## 5. Riassumere numeri senza inventare cause

### 5.1 Una media non racconta tutti i clienti

Una **variabile** è una caratteristica che può assumere valori diversi, come minuti di attesa per persona. Il **dataset** deve dire chi è osservato e in quale periodo. Considera i tempi *ipotetici* 2, 3, 4, 5 e 26 minuti. La **media** somma i cinque valori (2+3+4+5+26=40) e divide per il numero di persone (40/5=**8 minuti**). La **mediana** ordina i dati e prende il valore centrale: il terzo di cinque è **4 minuti**. Il cliente da 26 minuti alza molto la media ma non sposta la mediana. Nessuna misura è “quella vera” in assoluto: la media può servire a stimare il carico totale di attesa, la mediana l'esperienza tipica. Per valutare qualità del servizio occorre vedere anche chi aspetta troppo. La **dispersione** descrive quanto variano i tempi, e un grafico di distribuzione può mostrare la coda dei casi lunghi.

Un **tasso** richiede numeratore e denominatore coerenti. Se 30 prenotazioni uniche danno 20 ingressi abbinati, 10 prenotazioni sembrano non presentarsi e il tasso apparente è 10/30=**33,3%**. Dividere per 20 ingressi darebbe 50%, ma risponderebbe a un'altra domanda senza senso per il no-show. Se una persona prenota due corsi, “prenotazioni” e “persone” restano unità diverse. Ogni grafico o dashboard deve mostrare questa definizione.

### 5.2 Covarianza e correlazione, passo per passo

Per capire se due variabili si muovono insieme, osserva coppie sulla **stessa unità**. Tre negozi *ipotetici* hanno spesa pubblicitaria X pari a 1, 2 e 3 unità, e vendite Y pari a 10, 20 e 30 unità. Le medie sono X̄=(1+2+3)/3=2 e Ȳ=(10+20+30)/3=20. Per ogni negozio sottrai la media: scarti X = −1, 0, +1; scarti Y = −10, 0, +10. Moltiplica gli scarti della stessa coppia: 10, 0, 10; la somma 20 è positiva, quindi sopra la media in X tende a corrispondere sopra la media in Y. La **covarianza campionaria** è 20/(3−1)=**10**, in unità “spesa×vendite”. Se cambi valuta, il numero cambia: non esiste una soglia universale “covarianza 10 alta”.

La **deviazione standard** descrive quanto i valori si disperdono intorno alla media, nella stessa unità dei dati. Si ottiene dalla **varianza**: eleviamo al quadrato gli scarti, li sommiamo, dividiamo per il denominatore appropriato e prendiamo la radice quadrata; i quadrati impediscono che scarti positivi e negativi si annullino. La **correlazione di Pearson** divide la covarianza per le deviazioni standard delle due variabili, eliminando le unità. Per X, la varianza campionaria è [(−1)²+0²+1²]/(3−1)=2/2=1; la deviazione standard è √1=1. Per Y, la varianza campionaria è [(−10)²+0²+10²]/(3−1)=200/2=100; la deviazione standard è √100=10. Usiamo **n−1** perché trattiamo i tre negozi come campione; se fossero l’intera popolazione definita, divideremmo per **n=3** e useremmo coerentemente entrambe le deviazioni standard di popolazione. Quindi r=10/(1×10)=**+1**: i tre punti sono su una retta crescente perfetta. In generale r varia da −1 a +1: il segno indica direzione, il valore assoluto quanto i punti seguono una relazione *lineare*. r=0 non esclude altre relazioni, per esempio una curva a U. Tre osservazioni possono anche dare un r estremo per caso; servono grafico, campione e incertezza. Soprattutto +1 non significa che comprare più pubblicità causi più vendite: i negozi grandi potrebbero avere sia budget sia vendite maggiori. La dimensione del negozio è un possibile **confondente**.

### 5.3 Dal confronto fra paesi all'errore ecologico

Nell'esercizio locale su gioco d'azzardo e madri sole si comparano dati aggregati per paese. Cambiare età dei figli, definizione di famiglia e denominatore produce due analisi non equivalenti: circa r=0 su 21 paesi e circa r=−0,37 su 24. Il segno non sostiene una relazione positiva robusta nel perimetro analizzato, ma non dice nulla di diretto sulla probabilità individuale che una persona giochi d'azzardo o sia madre sola. Dedurre comportamenti individuali da medie di paesi è **ecological fallacy**. Prima di interpretare il grafico, leggi unità, periodo, definizioni, valori mancanti e casi influenti. Anche se una correlazione aggregata fosse alta, potrebbe dipendere da reddito, politiche pubbliche o altre differenze fra paesi.

### 5.4 Una prova causale richiede un controfattuale credibile

La domanda “questa promozione fa aumentare gli acquisti?” confronta ciò che sarebbe successo *alla stessa persona* con e senza promozione; non possiamo osservare entrambi i mondi. Un **A/B test** costruisce gruppi comparabili assegnando casualmente persone eleggibili a A (nessuna nuova promozione) e B (promozione), poi usa stesso periodo e definizione di acquisto. Esempio *ipotetico*: in A comprano 100 su 1.000=10%; in B 120 su 1.000=12%. La differenza è **+2 punti percentuali**; rispetto al 10% di A, è aumento relativo (12−10)/10=**20%**. Non significa che ogni cliente compri “20% di più”. La differenza osservata può essere rumore: occorre valutare incertezza, margine dopo sconti e conseguenze per gruppi diversi. Un **feedback loop** appare se un feed mostra più video, ottiene più click perché aumenta l'esposizione e interpreta quei click come preferenza universale. **Data leakage** è usare per previsione o test una variabile nota solo dopo l'azione, come il reso finale per prevedere un acquisto precedente: la prestazione apparente è gonfiata.

## 6. Dal problema al modello: imparare senza saltare i passaggi

### 6.1 Che cosa riceve un modello e che cosa restituisce

Un **modello** è un procedimento che riceve informazioni su un caso e restituisce una stima. Non è necessario programmare per comprenderne la logica. Se un'azienda vuole sapere quali clienti potrebbero non rinnovare, prima decide che cosa sia **un caso**: qui è un cliente osservato in una data precisa, per esempio 30 giorni prima della scadenza. Le **feature** (caratteristiche di input) devono essere note in quella data. Il **target** o **label** è la risposta che in seguito si osserva: rinnovo sì o no. La distinzione temporale è fondamentale: il reclamo inviato *dopo* la scadenza non può essere una feature per una previsione fatta *prima*.

| Cliente ipotetico al giorno della previsione | Mesi di contratto (feature) | Reclami prima di quel giorno (feature) | Rinnova nei 30 giorni successivi? (target storico) |
|---|---:|---:|---|
| A | 14 | 0 | Sì |
| B | 2 | 3 | No |
| C | 8 | 1 | Sì |
| D | 3 | 2 | No |

Quattro righe non bastano per un sistema affidabile: servono solo a mostrare il meccanismo. Nel **training** il metodo osserva molte righe storiche e aggiusta una regola per collegare feature a target. Nel **test** riceve clienti che non ha usato per costruire quella regola; si confrontano le sue risposte con i rinnovi poi osservati. Se lo si valuta sulle stesse righe di training, può averle memorizzate. La **generalizzazione** è la capacità di funzionare su clienti nuovi. Una baseline concreta è la regola corrente dell'addetto, per esempio “contatta chi ha almeno due reclami”; il modello deve migliorare una decisione reale rispetto a quella baseline.

### 6.2 Task, Performance, Experience: tre domande, non tre algoritmi

La cornice **T–P–E** delle slide chiede: *Task* = che cosa deve fare il sistema? *Performance* = con quale risultato su casi nuovi lo giudichiamo? *Experience* = da quali esempi o feedback impara? Nel caso rinnovi, T può essere ordinare i clienti per rischio prima della scadenza; P non è soltanto quota di previsioni corrette ma quanti clienti recuperiamo rispetto ai contatti inutili e al costo della campagna; E sono dati storici con rinnovi verificati. Se l'impresa cambia definizione di “rinnovo” o cambia il prodotto, anche E e P devono essere aggiornate. La risposta a T–P–E precede la scelta fra albero, rete o altro.

### 6.3 Quattro paradigmi confrontati sullo stesso negozio

Nel **supervised learning**, ogni riga di esempio ha una risposta nota. Il negozio etichetta le vecchie richieste come “reso”, “ritardo” o “informazione” e addestra un sistema a classificare nuove richieste. Se due addetti usano etichette diverse per lo stesso messaggio, la confusione entra nell'apprendimento. Nel **unsupervised learning** la risposta non è fornita: il sistema raggruppa messaggi simili per parole o rappresentazioni numeriche; una persona deve poi dire se i gruppi corrispondono a problemi utili. Un gruppo non è automaticamente “clienti arrabbiati” solo perché l'algoritmo lo separa.

Nel **semi-supervised learning** si hanno, per esempio, 500 messaggi classificati da persone e 50.000 senza etichetta. I primi guidano l'uso dei secondi, ma 500 etichette sbagliate o poco rappresentative possono diffondere errori. Nel **reinforcement learning** il problema è una sequenza di azioni e una ricompensa: un agente potrebbe scegliere in quale ordine offrire sconti e ricevere feedback su vendite e margine. Se premiamo solo il numero di ordini, può regalare sconti che distruggono margine; servono vincoli e test sicuri. Questi metodi differiscono per **dove arriva il feedback**, non per quanto “intelligenti” suonano. *Data mining* è ricerca di pattern; *Knowledge Discovery in Databases (KDD)* comprende preparazione, ricerca, verifica e uso; *pattern recognition* riconosce strutture. Non sono altri tre tipi di etichetta.

### 6.4 AI, ML, reti profonde, generazione e regole

**Artificial intelligence (AI)** è il nome ampio per sistemi che svolgono compiti associati a ragionamento, percezione o produzione. **Machine learning (ML)** è una famiglia dentro l'AI che adatta regole a esempi. **Deep learning** è ML con più livelli di trasformazioni apprese, spesso reti neurali; **generative AI** produce nuovi testi, immagini o altri contenuti; un **large language model (LLM)** è un tipo di modello generativo centrato su sequenze linguistiche. Le categorie si sovrappongono, ma un classificatore antifrode non è automaticamente un LLM. Una regola esplicita “dopo la scadenza, blocca l'invio” è invece un esempio di **symbolic AI** o programmazione a regole. Si può combinare: un modello estrae la data da un testo, una regola ufficiale determina la scadenza, una persona gestisce l'eccezione. Il metodo giusto dipende da fonte, task, errore e costo; non dalla parola AI.

### 6.5 Tre modi di ragionare in un caso completo

Un negozio nota più resi dopo il cambio di fornitore. **Induzione**: osserva i dati e propone la regolarità “nei giorni successivi al cambio la quota resi è maggiore”; è un'ipotesi che può dipendere anche da una nuova promozione. **Abduzione**: propone una spiegazione plausibile, per esempio “il nuovo imballaggio si danneggia”, da controllare con foto e cause di reso. **Deduzione**: se una regola contrattuale verificata dice “ogni prodotto danneggiato alla consegna è rimborsabile” e il caso X ha danno accertato, allora X rientra nella regola. L'induzione non conferma la causa, l'abduzione non è prova, e la deduzione vale solo se premesse e classificazione del caso sono corrette.

### 6.6 Albero decisionale, nodo e sovraadattamento

Un **decision tree** parte da tutti i casi e fa una domanda per dividerli. Dai quattro clienti della tabella: al primo nodo “almeno due reclami?”. B e D vanno a sinistra e nei dati storici non rinnovano; A e C vanno a destra e rinnovano. Una foglia potrebbe quindi rispondere “alto rischio” a B e D. Per scegliere un nodo, l'algoritmo cerca una divisione che separi meglio le risposte storiche. Ma se aggiunge “contratto di 2 mesi e cliente chiamato B” può memorizzare un dettaglio casuale. Questo è **overfitting**: ottimo risultato sugli esempi noti, scarso su nuovi clienti. Potare l'albero, limitare profondità e valutare su periodi successivi aiuta a vedere il problema. Il percorso leggibile non lo rende automaticamente vero o giusto.

### 6.7 Perché combinare alberi; che cosa spiega SHAP

Un singolo albero cambia molto se cambiano poche righe. Un **ensemble** combina più alberi. Nel *bagging* alberi diversi vengono addestrati su campioni diversi e le risposte sono aggregate, riducendo l'instabilità. Nel *boosting* i nuovi alberi cercano di correggere errori rimasti dai precedenti; **XGBoost** è una implementazione efficiente di questa famiglia, con vincoli per limitare complessità. Immagina, solo didatticamente, uno score iniziale 0,20; il primo piccolo albero aggiunge 0,10 per un gruppo sottostimato, il secondo +0,05; si arriva a 0,35. Nella classificazione reale XGBoost spesso somma valori su una scala interna prima della conversione, quindi 0,35 non è per forza una probabilità del 35%.

**SHAP** risponde a una domanda diversa: “Come si scompone, secondo una regola matematica, l'output di questo modello per questo caso rispetto a una previsione di riferimento?”. In un esempio didattico sullo *stesso output* 0,35, un riferimento 0,20 più contributo reclami +0,12 e durata +0,03 porta a 0,35. Non sono euro guadagnati né effetti causali. Se le feature sono correlate, diverse scelte di riferimento e trattamento delle dipendenze possono cambiare la ripartizione. Il valore alto dice che il modello usa quel segnale; per sapere se ridurre i reclami causa più rinnovi occorre un'altra prova.

### 6.8 Come una rete passa dall'input all'output

Una **neural network** rappresenta gli input come numeri. Ogni connessione ha un **peso** appreso; un nodo combina gli input pesati e applica una trasformazione; più livelli ripetono il passaggio fino all'output. Esempio *solo illustrativo*: reclami=2 e mesi=3 vengono convertiti in numeri comparabili, un primo livello combina 2×0,4 e 3×0,1 per ottenere 1,1 prima di una trasformazione, e livelli successivi producono uno score. I valori dei pesi non sono “l'importanza causale” delle variabili: possono interagire e cambiare di scala. Nel training i pesi vengono aggiornati per ridurre l'errore sugli esempi; nel test si scopre se il pattern regge. Foto di mele sempre su sfondo bianco e pere sempre su sfondo nero possono indurre anche una rete potente a imparare lo sfondo. Cambiare gli sfondi nel test rende visibile il difetto.

### 6.9 Tempo fino all'evento e osservazioni censurate

La **survival analysis** studia quanto tempo passa da un punto iniziale a un evento, come iscrizione → abbandono. Serve specificare evento, inizio e orizzonte. Tre clienti *ipotetici* iniziano ciascuno il proprio follow-up al momento dell’iscrizione: A lascia dopo 2 mesi; B resta senza evento per 3 mesi, quando il **suo** follow-up termina per fine raccolta o ingresso più tardivo nello studio; C è seguita per 5 mesi e poi lascia. Le durate 2, 3 e 5 sono misurate dalla rispettiva iscrizione, non da un mese zero comune di calendario. Per A e C conosciamo evento e tempo (2 e 5 mesi). B è **censurato** dopo 3 mesi: sappiamo che è rimasto almeno tre mesi, non che rimarrà per sempre. Se trattiamo B come “mai abbandonato”, inventiamo il futuro; se lo eliminiamo, sprechiamo tre mesi di informazione. I metodi di sopravvivenza usano il periodo osservato e tengono distinta la censura dall'evento. Anche qui una relazione predittiva non prova che un intervento cambi il tempo all'evento.

### 6.10 LLM: dal testo a una risposta verificabile

Un LLM non cerca semplicemente una riga in un database di fatti. **Tokenization** divide il testo in unità che possono essere parole, parti o segni. Il modello le converte in rappresentazioni numeriche e, dato il contesto, produce una distribuzione dei prossimi token possibili. Il **Transformer** usa *attention* per collegare parti rilevanti della sequenza: in “la società ha venduto il ramo perché era in perdita”, deve considerare a che cosa si riferisca “era”. La **temperature** modifica quanto il campionamento esplora token meno probabili; più varietà può aiutare negli slogan, non nella verifica di una scadenza ufficiale. Una frase fluida può essere falsa. Se il sistema dice che l'esame è alle 16:00, confronta la pagina Canvas corrente, l'anno e il tipo di assessment. Un recupero documentale può fornire contesto, ma vanno comunque verificati documento e citazione. L'esempio *Absolute Zero Reasoner* della slide riguarda task di codice auto-generati con verifica mediante esecutore; “zero data” nel paper non significa assenza di pretraining né intelligenza autonoma generale.

## 7. Che cosa produce il sistema e come misuri l'errore

### 7.1 Previsione numerica, classe, raccomandazione e azione

La domanda determina l'output. **Regression/prediction** di un numero: “quanti minuti di ritardo?”. **Classification**: “questo pagamento è frode sì/no?”. **Personalization**: “quali tre offerte ordinare per questo cliente ora?”. **Automation**: “inviare il caso a revisione, con regola ed eccezioni?”. Una classificazione può alimentare un'azione, ma non sono la stessa cosa. Uno **score** continuo può essere trasformato in classe tramite una **soglia**: se lo score supera 0,7, segnala. Abbassare la soglia segnala più casi; può trovare più frodi e disturbare più clienti leciti. Il valore 0,7 non è automaticamente una probabilità calibrata: serve il controllo sul gruppo di casi con score simile.

**Personalization** può partire dal contenuto (*content-based*): mostrare altri prodotti simili a quelli già consultati; dal comportamento di persone con pattern simili (*collaborative filtering*); dal **contesto** come ora, lingua o disponibilità; oppure combinare questi segnali in un metodo **hybrid**. Se tre film sono i più visti in generale, questa è **popolarità**, non prova che siano rilevanti per una persona. Esempio ipotetico: chi guarda documentari in italiano potrebbe ricevere documentari simili, ma disponibilità locale e ora possono cambiare l’ordine; click passati da soli possono creare un feedback loop. Valuta utilità, diversità, resi o soddisfazione secondo il servizio, non solo click.

**Automation** ha una catena diversa: acquisisci un documento, estrai i campi necessari, applichi una regola verificata, instradi l’esito e mantieni un’eccezione per revisione umana. Esempio ipotetico di richiesta mutuo: pagamenti mensili di debito 600+200 su reddito mensile lordo 3.200 danno **debt-to-income ratio (DTI)**=(600+200)/3.200=**25%**. Il 25% è solo un rapporto descrittivo, non prova che il mutuo sia concedibile: servono definizione dei debiti, verifica del reddito, altre condizioni e valutazione responsabile. Se il reddito è mancante o il documento è ambiguo, il flusso non deve inventare zero o approvare: instrada a controllo. Questa distinzione segue gli esempi delle slide Lesson 4 pp. 30–31.

Per un numero, misuri l'errore nell'unità del risultato. Esempio *ipotetico*: veri ritardi 12, 16, 35 minuti; previsioni 10, 20, 30. Gli errori “vero−previsto” sono +2, −4, +5; prendendo i **valori assoluti** diventano 2, 4, 5, perché sottostima e sovrastima non devono annullarsi. **MAE**, *mean absolute error*, è (2+4+5)/3=**3,67 minuti**. Questo dice l'errore medio in minuti, ma non se sbagliare di cinque minuti per una consegna urgente costa più che per una ordinaria.

### 7.2 Matrice di confusione: conta i casi prima delle formule

Definisci la classe **positiva**: qui “frode vera”. In 1.000 pagamenti *ipotetici*, 20 sono frodi e 980 legittimi. Il sistema segnala 30 pagamenti: 15 frodi vere e 15 leciti. Ne derivano 5 frodi non segnalate e 965 leciti non segnalati. La matrice separa realtà e risposta del sistema:

| Realtà \ risposta | Segnalato “frode” | Non segnalato |
|---|---:|---:|
| Frode vera | **TP=15**: vero positivo, trovata | **FN=5**: falso negativo, persa |
| Pagamento lecito | **FP=15**: falso positivo, allarme errato | **TN=965**: vero negativo, lasciato passare |

Controllo: 15+5=20 frodi vere; 15+965=980 leciti; 20+980=1.000. Se una cella non torna, rivedi il conteggio prima di calcolare percentuali.

### 7.3 Che cosa domanda ogni metrica

**Precision** domanda: “Fra i **30 segnalati**, quanti sono davvero frodi?”. È 15/(15+15)=**50%**. Denominatore: tutti gli allarmi. Una precision bassa consuma tempo di revisione e può danneggiare clienti leciti.

**Recall**, chiamata anche **sensibilità** (*sensitivity*), domanda: “Fra le **20 frodi vere**, quante ho trovato?”. È 15/(15+5)=**75%**. Denominatore: tutte le frodi. Le cinque non trovate sono un rischio non rappresentato dalla precision.

**Specificità** (*specificity*) domanda: “Fra i **980 pagamenti leciti**, quanti ho riconosciuto come leciti?”. È 965/(965+15)=**98,47%**. Il **false-positive rate** prende gli stessi 980 leciti ma conta i 15 segnalati erroneamente: 15/980=**1,53%**. Le due percentuali sommano al 100% quando la definizione della classe resta identica.

**Accuracy** domanda: “Quanti di tutti i 1.000 pagamenti ho classificato correttamente?”. È (15+965)/1.000=**98%**. Ma segnare tutti come leciti produrrebbe 980 risposte corrette, sempre 98%, e perderebbe tutte le 20 frodi: per classi rare accuracy sola inganna.

**F1** combina precision e recall con la media armonica: 2×0,50×0,75/(0,50+0,75)=**0,60**. Non significa che l'azienda realizza 60% di beneficio. Scegli soglia e metrica in base a costo di frode persa, costo del falso blocco e capacità di revisione. Se una soglia più bassa trova 18 frodi ma segnala 60 leciti, recall=18/20=90% e precision=18/(18+60)=23,1%: più frodi trovate può voler dire molti più falsi allarmi.

### 7.4 Da score a probabilità e a decisione

Una **probabilità** richiede evento, popolazione e orizzonte: “rischio di conversione entro sei anni in persone simili a quelle studiate” è più definito di “rischio 20%”. La **calibrazione** controlla se fra molti casi cui il modello assegna 20%, circa 20 su 100 hanno l'esito nell'orizzonte dato. La **discriminazione** controlla se il modello tende a dare score più alti ai casi con evento rispetto a quelli senza. **AUC** significa *area under the curve*, area sotto una curva ottenuta variando la soglia. La curva **ROC** mette sull’asse orizzontale il false-positive rate (quota dei leciti segnalati) e su quello verticale il recall/sensibilità (quota delle frodi trovate). Nell’esempio dei pagamenti, una soglia dà il punto (15/980≈**1,53%**, 15/20=**75%**); una soglia più bassa dà (60/980≈**6,12%**, 18/20=**90%**). La curva **PR** mette recall sull’asse orizzontale e precision sull’altro: gli stessi due punti sono (**75%**, 15/30=**50%**) e (**90%**, 18/78≈**23,1%**). Due punti non determinano l’intera curva né la sua area: servono gli score e le soglie lungo tutta la distribuzione. La **ROC AUC** sintetizza anche l’intuizione del ranking: quanto spesso un caso positivo riceve score maggiore di uno negativo; la **PR AUC** evidenzia il compromesso allarmi veri/frodi trovate, utile con classe rara. Nessuna AUC certifica una probabilità individuale o un intervento utile.

Il **positive predictive value (PPV)** è la precision quando il “positivo” è un test o allarme, e cambia con la frequenza di base dell'esito. Esempio *solo didattico*: 90 eventi fra 1.000 persone; sensibilità 70% trova circa 63 eventi e ne perde 27; specificità 64% lascia non segnalati circa 582 dei 910 senza evento e ne segnala falsamente circa 328. Fra 63+328=391 segnalati, la quota con evento è 63/391≈**16%**. Non è una ricostruzione dei risultati individuali dello studio NACC né un test clinico. Lo studio NACC riportato nei fascicoli riguarda 9.606 partecipanti, 877 conversioni osservate e 13 fattori, con follow-up medio di circa sei anni; i 14 fattori della Lancet Commission sono un elenco diverso. Un'associazione fra BMI e esito non è un consiglio di cambiare peso. Prima dell'uso servono discriminazione, calibrazione, **generalizzazione** a persone e luoghi diversi, e **utilità** netta di una decisione realmente disponibile.

## 8. Data lake e laboratorio: dal file al numero di una dashboard

### 8.1 Perché serve un ambiente comune e quali controlli lo rendono utile

Un negozio conserva vendite in una tabella, fotografie degli scaffali, recensioni testuali e eventi dell'app. Tenerli in cartelle separate può rendere difficile collegarli; metterli indiscriminatamente nello stesso posto non li rende comprensibili. Un **data lake** è un ambiente che può conservare tipi diversi di dati, spesso anche nella forma originale. L'**ingestion** è l'ingresso dei dati: occorre registrare fonte, momento, versione e se gli eventi arrivano in blocco (*batch*) o continuamente (*stream*). Lo **storage** li conserva. **Distillation/curation** produce dati preparati: date uniformi, tipi coerenti, chiavi controllate e definizioni per l'analisi. Una zona **raw** mantiene il file originale tracciabile; una zona **curated** contiene una versione pronta. Conservazione e privacy seguono scopo, permessi e tempi appropriati, non “tutto per sempre”.

Supponi che la dashboard mostri vendite raddoppiate dopo un nuovo import. Il **catalogo** e i **metadata** dicono che cosa significhi “vendita”, quale file e periodo, quale unità monetaria e chi ne è responsabile. Il controllo di **data quality** cerca righe mancanti, duplicate o incoerenti. Il **data lineage** ricostruisce i passaggi dalla riga sorgente al KPI e può rivelare un join che moltiplica righe. L'**audit** registra quando e da chi un dataset o una regola è cambiata. **Data discovery** aiuta a trovare il dataset corretto tramite descrizioni. Se manca uno di questi elementi, “raddoppio” potrebbe essere solo un errore di importazione. La **data governance** assegna responsabilità e regole per qualità, accesso e uso.

**Authentication** chiede “chi sei?”; **authorization** chiede “che cosa puoi vedere o modificare?”. Conoscere il login di un analista non gli dà diritto a vedere dati sanitari individuali. **Schema-on-read** significa che un file grezzo può ricevere una struttura quando viene letto per un uso; non autorizza a saltare controlli di unità e significato. **HDFS** è un sistema di file distribuito citato in un'architettura delle slide, non un requisito di ogni data lake. Gli stadi di maturità nelle slide sono un modello di sviluppo delle capacità, non una percentuale verificata delle aziende.

### 8.2 Quattro formati, la stessa domanda: che cosa sto conservando e come lo leggerò?

**CSV** è testo con righe e campi separati da delimitatori. Una riga “S003,P03,80” è facile da aprire e scambiare, ma il file da solo può non dire se 80 è quantità, prezzo o codice; i tipi e le unità vanno documentati. È adatto a tabelle piatte, ma un valore con virgola o un campo mancante richiede regole di lettura chiare. **XML** rappresenta dati gerarchici con tag, per esempio un prodotto con descrizione e categoria; può essere validato rispetto a uno schema concordato. È più verboso, ma utile quando struttura e contratto di scambio contano.

**JSON** rappresenta oggetti con coppie chiave-valore e array. Un evento API potrebbe contenere un cliente e una lista di prodotti, ciascuno con quantità: l'array conserva più prodotti nello stesso evento. È flessibile, ma un campo può sparire o cambiare tipo fra eventi; una pipeline deve controllarlo. **Parquet** è un formato binario a colonne, con tipi e compressione. Invece di leggere tutte le colonne di milioni di transazioni, una query che usa soltanto country e watch_time può leggere soprattutto quelle colonne. Può essere più efficiente per analisi ripetute, non per aprire a occhio una singola riga. Nessun formato corregge un cliente duplicato o una data sbagliata. Scelta *ipotetica*: JSON in ingresso dall'app, grezzo conservato con permessi e Parquet preparato per il report annuale. Verifica che le definizioni non cambino durante la conversione.

### 8.3 Il laboratorio misto: una vendita non deve diventare due

Nel **ZIP didattico di Lesson 4** i file di vendite, clienti, prodotti e forecast hanno formati diversi. Prima di aprire un grafico si deve decidere l'**unità di ogni riga**: una riga di vendita dovrebbe identificare una vendita tramite sale_id; una riga prodotto dovrebbe identificare un prodotto tramite product_id; forecast va letto per mese e regione. Nel file prodotti P03 compare due volte identicamente; la vendita S008 è duplicata. Non basta dire “rimuovi i duplicati”: la regola documentata mantiene una sola copia di righe identiche per chiave, conserva il grezzo e controlla che non si stia eliminando un evento legittimo.

| Passo sui dati del ZIP | Righe di S003 associate | Calcolo del ricavo S003 |
|---|---:|---:|
| Vendita originale S003: 80 unità P03 a 44,99 | 1 | 80×44,99 = **3.599,20** |
| Join ingenuo con due righe prodotto P03 identiche | 2 | 3.599,20 + 3.599,20 = **7.198,40**, falso raddoppio |
| Deduplica P03, poi join: una riga fisica e un sale_id distinto | 1 | **3.599,20** |

Il controllo non è solo confrontare il totale: **S003 produce due righe fisiche ma un solo sale_id distinto** nel join ingenuo, quindi un conteggio di soli ID distinti passa pur con ricavo raddoppiato. Confronta prima e dopo **righe fisiche, ID distinti e numero di righe per ogni ID**, poi verifica vendite senza prodotto o cliente, unità e filtri temporali. S006, unico caso di marzo/North richiamato nel fascicolo, è 100×44,99=**4.499,00**. S001 è 1.200×14,99=**17.988,00**; 1.200 è una quantità da indagare, non un errore provato. Il totale **actual** con la regola di deduplica documentata è **35.677,80**; il join ingenuo dà **45.973,80**. La valuta non è specificata. Una cifra che “sembra plausibile” ma include un prodotto replicato resta falsa.

### 8.4 Dal consuntivo alla decisione: forecast, variance e dashboard

**Actual** è il ricavo osservato nel periodo secondo una definizione; **forecast** è la previsione precedente dello stesso risultato. La **variance** può essere definita come actual−forecast. L'**attainment** è actual/forecast quando forecast è diverso da zero: un rapporto 1,20 significherebbe actual del 20% sopra forecast, *solo* a perimetro equivalente. Esempio *ipotetico separato dal ZIP*: forecast 100 unità e actual 120 unità danno variance +20 unità e attainment 120/100=1,20=120%. Per costruire il confronto del ZIP, ricava il **mese dalla data della vendita**, collega la vendita al cliente per ottenere la **regione**, calcola quantità×prezzo del prodotto dopo i controlli di unicità, poi **aggrega il ricavo actual per coppia (mese, regione)**. Prima di collegare forecast verifica che abbia **una sola riga per la stessa coppia (mese, regione)**, stessa unità e definizione; soltanto allora fai il join fra gli aggregati. Se una chiave forecast è duplicata, anche qui il join moltiplica righe. Non puoi confrontare forecast totale di tutte le regioni con actual solo North, né revenue con unità vendute. I valori numerici forecast dello ZIP non sono riportati nel fascicolo verificato, quindi qui non attribuiamo una variance reale al laboratorio.

**SQL** è il linguaggio per interrogare tabelle; una richiesta SELECT sceglie colonne e righe, ma una query riuscita può contare le righe sbagliate. **Databricks** nelle slide riunisce notebook, catalogo, query e visualizzazioni: il notebook conserva passaggi e spiegazioni, il catalogo definizioni e permessi, la dashboard presenta pochi indicatori utili a una scelta. Per il laboratorio la dashboard dovrebbe mostrare periodo/regione, actual e forecast comparabili, scostamento solo dove calcolabile, avvertenza sui duplicati e possibilità di risalire alle righe. Le slide del 29 settembre sono un tutorial, ma la registrazione disponibile arriva all'introduzione della piattaforma: non è prova che ogni clic sia stato eseguito oralmente.

## 9. Casi diversi richiedono prove diverse

### 9.1 Grandine: dall'evento al danno su un edificio

Il caso assicurativo delle slide collega **detect → match → predict → act → verify → learn**. *Detect* identifica intensità e area della grandine; *match* collega quell'area agli indirizzi assicurati; *predict* stima il danno tenendo conto di tetto, pannelli, vulnerabilità e copertura; *act* può far partire una verifica o un avviso; *verify* confronta stima con danno accertato; *learn* aggiorna il metodo. Esempio *ipotetico*: due edifici distano 3 km dall'evento, ma solo uno ha pannelli solari esposti. Identica mappa meteo non significa identico danno. Un errore nella geolocalizzazione o nella tabella degli indirizzi può essere più importante del modello predittivo. La prova di valore non è “abbiamo tanti dati meteo”: è meno danno, gestione più rapida o stima meglio calibrata rispetto alla procedura precedente, dopo costi e falsi allarmi.

### 9.2 Arte: un output generativo non è una previsione scientifica

Le slide usano l'opera *Machine Dreams: Rainforest* di Refik Anadol per mostrare che dati ambientali possono diventare esperienza visiva e sonora. Qui l'input è materiale ecologico raccolto e trasformato; l'output è un'esperienza artistica. Domande pertinenti sono provenienza dei dati, diritti d'uso, fedeltà della descrizione al processo e qualità dell'esperienza. Sarebbe un errore dire che l'opera dimostra che un modello “capisce” l'ecosistema o prevede correttamente il suo futuro. Non tutte le applicazioni dei dati hanno l'accuracy come metrica centrale: l'esito dipende dallo scopo.

### 9.3 Moda: attenzione, domanda e margine non coincidono

Una foto virale può creare **attenzione**; ricerche mostrano curiosità; esplorazioni e carrelli avvicinano l'intenzione; acquisti mostrano una transazione; **resi** e margine rivelano meglio il valore economico. Esempio *ipotetico*: una scarpa riceve 100.000 visualizzazioni, ma solo 500 preordini e molti resi di modelli simili. Produrre 50.000 paia sulla sola base delle visualizzazioni sarebbe una scommessa, non una previsione validata. Occorre confrontare persistenza della ricerca, prezzi, preordini, tempi di produzione e resi; un piccolo lotto pilota riduce il rischio. Un modello può ordinare segnali, ma non converte automaticamente attenzione in domanda pagante.

### 9.4 Esercizi locali, correlazione e letture

La palestra del 29 settembre e i pitch locali su Spotify, Netflix e gaming sono proposte didattiche, non sistemi aziendali dispiegati. Per la palestra i touchpoint possono aiutare a rivedere orari e ridurre no-show, ma bisogna verificare prenotazioni, ingressi e lista d'attesa, oltre a privacy e responsabilità. Nell'esercizio “gambling and single mothers”, due versioni Eurostat con età, unità e denominatori diversi danno coefficienti diversi: non miscelarli, non affermare una relazione positiva robusta e non inferire causalità individuale dai paesi.

Le quattro letture McKinsey elencate per il corso affrontano modelli di business dei dati, una survey AI 2023, preparazione dei dati per generative AI e smart data industriale. Leggere una survey del 2023 come quota di adozione corrente sarebbe scorretto; prendere un caso consulenziale come prova che il proprio progetto genererà lo stesso ROI lo sarebbe altrettanto. Usale come ipotesi, vocabolario e rischi da testare sul caso aziendale. Il blog/report da 3.200 parole dell'80% richiede una raccomandazione ragionata su opportunità, fattori, rischi e trasformazione; resta separato dal prossimo touchpoint in aula del 10%, il cui formato e data non sono confermati.

## 10. Richiamo attivo e domande da porre in aula

Copri i paragrafi sopra e prova a rispondere prima di leggere il feedback.

1. **“Vendite zero” significa domanda zero?** No: se lo scaffale era vuoto non si osservano acquisti possibili. Chiedi disponibilità e stockout prima di addestrare una previsione.
2. **Perché un join può raddoppiare il ricavo?** La chiave prodotto non unica moltiplica la riga della vendita. Controlla unicità del lato prodotto e, prima/dopo il join, **righe fisiche, sale_id distinti e molteplicità per sale_id**: S003 può restare un ID distinto ma apparire due volte.
3. **30 prenotazioni, 20 ingressi: quale tasso?** No-show apparente 10/30=33,3%, dopo aver verificato corrispondenze e duplicati. Non è automaticamente il tasso di clienti assenti del mese.
4. **Un modello con accuracy 98% su frodi rare è buono?** Serve la matrice TP/FP/FN/TN. Un sistema che non trova alcuna frode può avere 98% se la prevalenza è 2%.
5. **SHAP alto su BMI o reclami suggerisce un intervento?** Descrive il contributo nel modello rispetto a un riferimento; per un intervento servono disegno causale, fattibilità e rischi.
6. **Parquet rende veri i dati?** No. Organizza colonne e tipi per alcune query; duplicati, unità e significato vanno controllati a parte.

Domande utili al docente: “Per il prossimo touchpoint del 10%, quali temi, formato e data sono ufficialmente confermati?”; “Nel laboratorio quale chiave deve essere unica per ciascun file, e quale regola di deduplica volete che usiamo?”; “Quando dite che un modello funziona, quale baseline e quale costo d'errore dobbiamo usare nel caso aziendale?”. Sono domande operative, non contestazioni basate su un numero incerto delle trascrizioni.

## 11. Caso finale: un memo decisionale internazionale commentato

**Scenario interamente ipotetico.** Una catena che vende prodotti per la casa opera in Italia e Germania e valuta una piattaforma esterna di previsione della domanda. L'obiettivo dichiarato è ridurre scaffali vuoti. La decisione vera è se avviare un pilota, in quali negozi, con quali diritti sui dati e quando fermarlo. Il caso usa numeri inventati per esercitare il ragionamento, non descrive risultati di un'azienda reale.

**Domanda e baseline.** Ogni negozio usa oggi una media delle vendite degli ultimi quattro sabati. Prima di costruire un modello, occorre misurare vendite perse per stockout, invenduto, margine e disponibilità del prodotto. Italia e Germania potrebbero chiamare “reso” cose diverse o avere calendari promozionali e abitudini d'acquisto differenti: non sommare righe incompatibili e chiamarle “mercato europeo”. La cultura locale entra nelle definizioni, nel comportamento dei clienti e nella possibilità che il responsabile di negozio si fidi della proposta. Qui la tecnologia non sostituisce l'adozione organizzativa.

**Unit economics ipotetici per negozio e mese.** Supponiamo che il metodo attuale perda 1.000 unità monetarie di margine al mese per rotture di stock. Una riduzione ipotetica del 30% recupererebbe 300. Il maggior inventario comporterebbe **80 unità monetarie al mese di costo incrementale di mantenimento e obsolescenza**, più 100 al mese di licenza e 70 al mese di tempo del personale: 300−80−100−70=**+50 netti per negozio/mese**. Su otto negozi sarebbero 8×50=**400 di flusso netto mensile ipotetico**. Il **capitale circolante iniziale** necessario per comprare più scorte è un esborso separato e va stimato. Solo se 4.800 rappresentassero **tutti** gli esborsi iniziali, incluso quel capitale, e 400 restasse un flusso netto mensile costante, il payback semplice sarebbe 4.800/400=**12 mesi**, prima di tasse, rischio e costo del capitale. Se il miglioramento fosse solo 15%, il margine recuperato sarebbe 150 e il saldo 150−250=**−100 per negozio/mese**. Quindi “previsione più accurata” non è sufficiente: conta il miglioramento economico reale rispetto alla baseline.

**Potere e scelta dei dati.** Chi possiede e controlla i dati di transazione influenza quali problemi il modello può vedere, chi può controllarne gli errori e quanto sia facile cambiare fornitore. Chiedi quali campi il fornitore riceve, per quale scopo, se può riusarli, come si esportano dati e regole, chi vede il modello e chi corregge un consiglio errato. La metrica scelta cambia incentivi: premiare soltanto vendite può indurre eccesso di stock o sconti; misurare margine dopo resi e livello di servizio rende visibili costi diversi. Anche questo KPI va controllato per paese e definizione.

**Alternative e decisione.** Alternativa A: migliorare la regola semplice e la pulizia dati; B: comprare subito per tutta la catena; C: pilota limitato in quattro negozi per paese, confrontati con negozi simili che mantengono la regola corrente. Scelgo **C, solo dopo aver fissato definizioni, permessi e possibilità di esportazione**. Otto settimane possono mostrare errori tecnici e comportamento dei responsabili, ma da sole non certificano un guadagno annuale o stagionale. Registro prima del pilota metriche, costo, soglia di stop, eccezioni e decision maker. L'effetto attribuibile richiede un confronto credibile: negozi scelti perché peggiori possono migliorare comunque (*regression to the mean*); promozioni simultanee possono confondere il risultato. Se possibile si assegna casualmente la variante fra negozi comparabili o si usa un disegno controllato con limiti dichiarati.

**Red Team e prova contraria.** Il modello può sembrare migliore perché usa disponibilità registrata dopo l'ordine (leakage), perché il join duplica vendite, perché misura solo negozi con dati completi o perché il personale ignora suggerimenti impraticabili. Può peggiorare un mercato pur migliorando il totale aggregato. Una vera valutazione separa risultati per paese, categoria e stagione; controlla stockout e invenduto, non solo errore di previsione; verifica chi agisce e quale decisione cambia. Se il beneficio netto non supera la baseline dopo costi e prova controllata, non si espande. Questo è il punto in cui economia internazionale, cultura, tecnologia e potere sui dati diventano una decisione verificabile, non uno slogan.

# PART II — ENGLISH

## 1. Start with a business decision, not software

### 1.1 Decision, baseline, outcome

Imagine a shop that runs out of bottled water on Saturdays. The decision is **how many units to order and when**. A demand forecast is useful only if it arrives before the order, reflects actual stock availability, and reduces lost sales without creating excessive unsold stock. The *why* is that result; the *what* is the decision and process to change; the *how* could be a simple rule, a spreadsheet, or a model. A **baseline** is the current method against which a new method is compared, such as ordering the average of the previous four Saturdays. An accurate algorithm alone does not establish business value.

### 1.2 The full cycle

The cycle **Frame → Acquire → Build → Adopt → Monitor** keeps the decision in view. Frame specifies the decision maker, deadline, outcome, and error costs. Acquire collects sales, promotions, stock, and supplier lead times with clear definitions and permissions. Build prepares data and tests a forecast on weeks not used to create it. Adopt gets an actionable proposal to the manager, with a way to override it. Monitor compares stockouts, unsold units, margin, and errors over time. Zero recorded sales on a day when the shelf was empty is not evidence of zero demand: the data are a map of reality, not reality itself.

### 1.3 The digital twin and reality

A **digital twin** is an updated representation of selected properties of a machine or process. A washing-machine maker might combine vibration, temperature, and cycle data to simulate operating conditions and propose maintenance. High vibration does not directly mean a future failure: a machine may be overloaded, faulty, or fitted with a loose sensor. The technician's verified outcome and the cost of unnecessary repairs complete the feedback loop. Formula 1, weather, seismic exploration, and space observation in the slides share the pattern observation → representation → model → decision → verification, but differ in timing, scale, and errors. The seismic example is not evidence that earthquakes can reliably be predicted.

## 2. From an observation to Big Data

### 2.1 Object, unit, and time

A **datum** is a recorded observation. `72` alone lacks meaning; “72 °C on motor A at 10:05” adds unit, object, and time. Historical motor load and safety limits help interpret it; stopping the machine also requires responsibility and judgment. A table **row** should have a defined *granularity*, such as one sale, visit, or customer. A **column** is a characteristic or measure of that unit. Ten visit rows are not necessarily ten different customers.

### 2.2 Five Vs, five problems

“Big” has no universal byte threshold. The **5 Vs** ask different questions: *volume*—how much data and how long it is kept; *velocity*—how fast it arrives and when action is needed; *variety*—how tables, logs, text, image, and audio differ; *veracity*—how reliable, complete, and unbiased the signal is; *value*—net benefit after costs and adoption. A fast but miscalibrated sensor accelerates bad decisions. Units and periods matter: one decimal terabyte is 10¹² bytes, an exabyte 10¹⁸, a zettabyte 10²¹. The slide's 175 ZB for 2025 is an old IDC/Seagate forecast, not a current measurement; the 11 TB Formula 1 figure refers to a team over a race weekend. Neither figure determines one company's storage needs.

| V | Concrete question | Error if ignored |
|---|---|---|
| Volume | How many receipts, kept for how long? | Storage and cost underestimated. |
| Velocity | How soon can an order or alert still change an outcome? | Acting too late or buying unnecessary infrastructure. |
| Variety | Do the photo, sale, and complaint concern the same product, site, and period? | False links. |
| Veracity | Are clocks, codes, duplicates, and site coverage correct? | The model learns errors. |
| Value | What is net benefit versus the baseline? | Data accumulate without better decisions. |

### 2.3 Form and value chain

**Structured data** have a regular schema, such as an orders table; **semi-structured data** have flexible fields or tags, such as many JSON/XML records; **unstructured data** include free text, audio, and images requiring interpretation. A tidy CSV with duplicate orders is still wrong: format does not certify quality. The **data value chain** runs collection → processing → analysis → distribution → use → reuse/feedback. Value arises when a legitimate decision changes; reuse still requires a valid purpose and permissions. The slide's *sell outcomes*, *value data exhaust*, *simulate before acting*, and *sell trust* are business-model possibilities, not established revenue. Test customer demand, rights, cost, and measurable outcomes first.

## 3. Databases, datasets, joins, and cleaning

### 3.1 First define what one row represents

A **database** is an organized collection of queryable data. A **dataset** is the defined subset for a question, with source, period, rows, columns, version, and meanings. An **ERP** records operational transactions such as orders and stock; a **CRM** records customer interactions; sensors record physical signals; an **API** exchanges records between systems. Each can be incomplete or wrong: customer duplicates, faulty sensor timestamps, and refunded orders are ordinary sources of error.

*Hypothetical example*: a company database has a customer table and a sales table. The first has one row per customer; the second has one row per sale, so the same customer can appear many times. A dataset for “September revenue” selects September sales and documents whether refunds are included and whether amounts are gross or net. “I downloaded the database” answers none of these questions. An API is a way to receive records, not a guarantee that each record is final or correct.

### 3.2 Follow a key through a join

A **join** attaches information from one table to another using a matching **key**. In a *hypothetical* example, `sales` has `S1, P03, 2 items` and `products` has `P03, 5 currency units`. Matching P03 gives revenue 2×5=10. If `products` contains P03 twice, the join produces two S1 rows and a careless sum reports 20. The program followed the requested operation; the key relationship was wrong. Before joining, state what one row means in each table, verify that the supposed lookup key is unique, compare **physical row counts**, **distinct sale IDs**, and **rows per sale ID** before and after, and inspect unmatched records. Matching gym bookings to entries may require customer ID, site, class, and time window, not merely a similar name.

An **inner join** keeps only sales with a matching product: if P04 is absent from products, the P04 sale disappears. A **left join** retains every sale and leaves price missing when there is no matching product. The latter can help *find* unmatched records during reconciliation; then decide how to handle them. Replacing missing price with zero without evidence would mean “free,” which has not been observed. Check key, expected cardinality (one sale → one product), physical rows, distinct IDs, and multiplicity per ID before adding revenue.

### 3.3 Cleaning requires a rule, a trace, and a check

**Data cleaning** applies documented rules to missing values, duplicates, inconsistent codes and units, dates, and outliers. An **outlier** is unusual, not proven erroneous. Keep the raw record and the transformation rule so another analyst can reproduce the result. **Data lineage** traces a chart back to its source files and transformations. A duplicate removed silently can be as misleading as one left in place.

If one price field contains `14,99` and another contains `14.99`, software must recognize that the two strings mean the same number before multiplication. A date `03/04/2026` can mean 3 April or 4 March, depending on convention; a silent guess may put a sale in the wrong month. Record the rule, how many rows it affected, and a checked example. A quantity of 1,200 could be a valid large order: ask the source rather than deleting it to make the chart look tidy.

## 4. Decision time, analytics, and charts

### 4.1 Useful timing includes human action

**Batch processing** handles groups of records periodically, for example overnight. **Stream processing** handles arriving events continuously. Choose according to the last useful action, not technological fashion. A *hypothetical* timeline: fraud at 10:00, data at 10:02, model result at 10:03, human intervention at 10:20, irreversible payment at 10:05. Making the model one minute faster does not fix the intervention delay. A rapid request for confirmation might help, while a nightly batch can reconcile accounting records. Streams must handle duplicates, late events, network failures, and false alarms; batches can hide a problem until the next run. Compare cost, risk, speed, and usability.

### 4.2 Four questions produce different analytical outputs

Four kinds of **analytics** answer different questions. *Descriptive*: what happened? Fifteen lost renewals out of 100 is 15%. *Diagnostic*: why might it have happened? Long support waits may be associated with nonrenewal but do not prove causation. *Predictive*: who may fail to renew? Test a forecast on future customers. *Prescriptive*: which action is worthwhile? Compare interventions, costs, and benefits. **Data analysis** investigates a defined question; **business intelligence (BI)** makes measures and reports accessible; **data science** may build and test models. The job matters more than the label.

Follow the same 100 *hypothetical* customers. A report counts 15 nonrenewals: description. Comparing support waits of renewers and nonrenewers suggests a diagnosis, but customers with harder problems may both wait longer and already be likelier to leave: it is no causal proof. A model estimates risk for customers expiring next month: prediction, to be tested against subsequent outcomes. Finally, staff consider calling them. A high-risk customer may be impossible to retain, so the prescriptive choice needs the **incremental** effect and call cost. If a call costs 5 and produces only 4 extra margin on average, it is uneconomic even for a high-risk customer. Each stage requires different evidence.

### 4.3 A chart is a visual answer to a question

A **chart** needs a question, unit, and denominator. A line chart follows time, bars compare categories, a scatterplot shows paired values, and a table preserves exact values. A **dashboard** brings relevant views together for one decision; it is not a collection of attractive charts. Before saying visits rose 20%, check whether they are entry events, unique people, or bookings, whether opening days match, and whether a site or collection method changed. The fitness exercise calls for 8–10 customer *touchpoints* such as website, joining, payment, booking, entry, cancellation, app, training, and assessments, plus quality and privacy risks. *Hypothetical*: 30 bookings and 20 matched entries imply 10 apparent no-shows, 10/30=33.3%, only after checking duplicates and valid matches. Capacity decisions also need waiting lists and cost. Health assessment data do not automatically become marketing data.

A daily-entry line chart shows *when* a drop occurs; bars by site show *where*; a booking-versus-entry scatterplot may reveal classes with many no-shows. Axes need units and periods, and a truncated axis can exaggerate differences. For a capacity decision, 30 bookings and 20 entries remain insufficient: a waiting list of 15 suggests a different choice from a partly empty room with no unmet demand. The dashboard should support action and explain the measure.

## 5. Summarizing numbers without inventing causes

### 5.1 A mean does not describe every customer

A **variable** is a characteristic that can take different values, such as each person's waiting time. A **dataset** should say who was observed and during which period. Consider *hypothetical* waiting times of 2, 3, 4, 5, and 26 minutes. The **mean** adds the five values (2+3+4+5+26=40) and divides by the number of people (40/5=**8 minutes**). The **median** orders the data and takes the middle value: the third of five is **4 minutes**. The 26-minute wait greatly raises the mean but leaves the median at four. Neither is universally “the true average”: the mean can help estimate total waiting burden, while the median describes a typical observation. Service quality also requires seeing who waited unusually long. **Dispersion** describes how widely values spread; a distribution chart can show the long tail.

A **rate** needs matching numerator and denominator. If 30 distinct bookings produce 20 matched entries, 10 bookings appear to be no-shows, so the apparent rate is 10/30=**33.3%**. Dividing by the 20 entries would yield 50% but answer a different and unhelpful question about no-shows. A person can book two classes, so “bookings” and “people” remain different units. Every chart and dashboard should show this definition.

### 5.2 Covariance and correlation, one step at a time

To examine whether two variables move together, observe pairs on the **same units**. Three *hypothetical* stores spend X=1, 2, 3 advertising units and sell Y=10, 20, 30 units. Their means are X̄=(1+2+3)/3=2 and Ȳ=(10+20+30)/3=20. Subtract each mean: X deviations are −1, 0, +1 and Y deviations are −10, 0, +10. Multiply deviations within each store: 10, 0, 10. Their sum 20 is positive, so above-average X tends to accompany above-average Y. **Sample covariance** is 20/(3−1)=**10**, measured in “advertising×sales” units. Change units and that number changes; there is no universal “covariance 10 is high” threshold.

**Standard deviation** describes how widely values are dispersed around their mean, in the same units as the data. It comes from **variance**: square the deviations, add them, divide by the appropriate denominator and take the square root. Squaring prevents positive and negative deviations from cancelling out. **Pearson correlation** divides covariance by the two standard deviations, removing units. For X, sample variance is [(−1)²+0²+1²]/(3−1)=2/2=1 and standard deviation is √1=1. For Y, sample variance is [(−10)²+0²+10²]/(3−1)=200/2=100 and standard deviation is √100=10. We divide by **n−1** because these three stores are treated as a sample; if they were the entire defined population, we would divide by **n=3** and consistently use population standard deviations. Thus r=10/(1×10)=**+1**: these three points lie exactly on an increasing straight line. Generally r ranges from −1 to +1; its sign is direction and its magnitude describes strength of a *linear* pattern. r=0 does not rule out a curved pattern, such as a U shape. With only three observations, extreme r may arise by chance; inspect a scatterplot, sample size, and uncertainty. Above all, +1 does not show that advertising causes sales: larger stores may have both larger budgets and more sales. Store size is a possible **confounder**.

### 5.3 Cross-country comparison and ecological error

The local gambling and single-mother exercise compares country-level aggregates. Changing the children's age, family definition, and denominator produces two nonequivalent analyses: about r=0 over 21 countries and about r=−0.37 over 24. Neither version supports a robust positive association in its defined scope. Neither says directly how likely an *individual* is to gamble or be a single mother. Inferring individual behavior from country means is the **ecological fallacy**. Before interpreting the scatterplot, read unit, period, definitions, missing values, and influential observations. Even a high country-level correlation could reflect income, policy, or other differences among countries.

### 5.4 A causal test needs a credible counterfactual

“Does this promotion increase purchases?” compares what would happen to the *same person* with and without the promotion. Both possibilities cannot be observed for that person. An **A/B test** creates comparable groups by randomly assigning eligible people to A (current experience) and B (promotion), using the same period and purchase definition. In a *hypothetical* example, A has 100 buyers among 1,000=10%, while B has 120 among 1,000=12%. The difference is **+2 percentage points**. Relative to A's 10%, it is (12−10)/10=**20%**. It does not mean every shopper purchases 20% more. The observed difference can be noise; assess uncertainty, margin after discounts, and effects on different groups. A **feedback loop** occurs when a feed shows more videos, gets more video clicks because exposure increased, and mistakes those clicks for universal preference. **Data leakage** uses in training or evaluation a variable available only after the decision, such as a final return to predict an earlier purchase, making performance look too good.

## 6. From a business question to a model: every step explained

### 6.1 What goes into a model, and what comes out

A **model** is a procedure that takes information about a case and returns an estimate. You need not code to understand its logic. Suppose a company wants to identify customers who may not renew. It first defines **one case**: one customer at a specific decision date, say 30 days before expiry. **Features** are pieces of information known at that date. The **target** or **label** is the answer later observed: renewed or not. This timing matters: a complaint sent *after* expiry cannot be a feature for a prediction made *before* expiry.

| Hypothetical customer at prediction date | Contract months (feature) | Complaints before that date (feature) | Renews during next 30 days? (historical target) |
|---|---:|---:|---|
| A | 14 | 0 | Yes |
| B | 2 | 3 | No |
| C | 8 | 1 | Yes |
| D | 3 | 2 | No |

Four rows are far too few for a reliable system; they only expose the mechanism. During **training**, a method sees many historical rows and adjusts a rule linking features to targets. During **testing**, it receives customers not used to build that rule; predictions are compared with their subsequently observed renewals. Testing on training rows can reward memorization. **Generalization** means performance on genuinely new customers. A useful baseline is the staff's current rule, such as “contact anyone with at least two complaints.” A model must improve a real decision relative to that baseline.

### 6.2 Task, Performance, Experience: questions before algorithms

The slides' **T–P–E** framework asks: *Task*—what must the system do? *Performance*—which result on new cases would show success? *Experience*—which examples or feedback teach it? For renewal, T may be ranking customers before expiry. P is not merely the share of correct guesses: include customers retained, unnecessary calls, and campaign cost. E is historical customer information with verified renewal outcomes. If the company changes what “renewal” means or changes its product, E and P need review. Answer these questions before choosing a tree, network, or another method.

### 6.3 Four learning paradigms, one shop example

In **supervised learning**, each training example comes with a known answer. The shop labels old messages “return,” “delivery delay,” or “information” and trains a classifier for new messages. Inconsistent labels from staff become inconsistent teaching signals. In **unsupervised learning**, the answer is not supplied: a method groups messages by word patterns or numerical representations. A person must then determine whether the groups correspond to meaningful problems. A mathematical cluster is not automatically “angry customers.”

In **semi-supervised learning**, there might be 500 messages labeled by people and 50,000 without labels. The reviewed examples guide the use of unlabeled examples, but unrepresentative or wrong labels can spread mistakes. In **reinforcement learning**, an agent makes a sequence of choices and receives a **reward**. It might learn a sequence of discounts using feedback on sales and margin. Reward only order count and it may offer discounts that destroy margin; constraints and safe testing are required. These paradigms differ primarily in **where the feedback comes from**, not in how impressive their names sound. *Data mining* searches for patterns; *Knowledge Discovery in Databases (KDD)* includes preparation, discovery, checking, and use; *pattern recognition* identifies structures. They are not three additional kinds of labels.

### 6.4 AI, ML, deep learning, generation, and explicit rules

**Artificial intelligence (AI)** broadly names systems performing tasks associated with reasoning, perception, or content production. **Machine learning (ML)** is an AI family that adapts rules from examples. **Deep learning** uses multiple learned transformation layers, often neural networks. **Generative AI** produces new text, images, or other content; a **large language model (LLM)** is a language-centered generative model. The categories overlap, but a fraud classifier is not automatically an LLM. An explicit rule, “block submission after the official deadline,” is an example of **symbolic AI** or rule-based software. A hybrid system could use a model to extract a date from a document, an official rule to determine the deadline, and a human to handle exceptions. Choose according to task, authority, error, and cost, not the word AI.

### 6.5 Induction, abduction, and deduction in a complete case

A shop observes more returns after switching suppliers. **Induction** proposes a pattern from observations: “the return rate is higher after the switch.” That is a hypothesis; a simultaneous promotion might also explain it. **Abduction** proposes a plausible explanation, such as “the new packaging is damaged in transit,” to investigate with photos and return reasons. **Deduction** applies a verified premise: if the contract says “products damaged on delivery are refundable” and product X is documented as damaged on delivery, X qualifies under that rule. Induction alone does not establish cause, abduction is not proof, and deduction depends on correct premises and classification of the case.

### 6.6 A decision tree, its nodes, and overfitting

A **decision tree** begins with all cases and asks a question to split them. Using the four customers above, the first node might ask “at least two complaints?” B and D go one way and did not renew in the observed rows; A and C go the other and did. A leaf could label the former group “higher risk.” The learning method selects questions that make the resulting groups more uniform in their historical targets. But adding a branch such as “two-month contract and customer named B” may memorize a chance detail. That is **overfitting**: excellent performance on known examples and poor results on new ones. Limiting tree depth and evaluating on later periods helps reveal it. A readable path is not automatically true or fair.

### 6.7 Why combine trees, and what SHAP actually explains

One tree can change sharply when a few training rows change. An **ensemble** combines trees. In *bagging*, separately trained trees use different samples and their answers are aggregated, reducing instability. In *boosting*, later trees try to correct errors remaining from earlier ones. **XGBoost** is an efficient boosted-tree implementation with controls on complexity. For a *purely illustrative score*, begin at 0.20; a small tree adds 0.10 for a group whose outcome the initial rule underestimated, another adds 0.05, reaching 0.35. A real XGBoost classifier may sum contributions on an internal scale before transforming them, so 0.35 is not necessarily a calibrated 35% probability.

**SHAP** asks a different question: “How can this model's output for this case be allocated among features, relative to a reference output, under a specified mathematical rule?” In a *teaching example* for the same output 0.35, start from reference 0.20, allocate +0.12 to complaints and +0.03 to tenure, and obtain 0.35. These are not euros of benefit or causal effects. Correlated features and the choice of reference can affect the allocation. A large contribution means the model uses that signal; whether reducing complaints actually increases renewal requires separate causal evidence.

### 6.8 A neural network from input to output

A **neural network** represents inputs as numbers. Each connection has a learned **weight**; a node combines weighted inputs and applies a transformation; multiple layers repeat the operation to produce an output. In a *simplified illustration*, complaints=2 and months=3 are put on suitable numerical scales. An early node combines 2×0.4 and 3×0.1, giving 1.1 before a transformation; later nodes produce a score. The weights are not causal importance measures: inputs can interact and scales can change. Training updates weights to reduce errors on examples; testing checks whether learned patterns survive on new cases. If every apple training photo has a white background and every pear a black one, even a powerful network may learn background rather than fruit. Testing with varied backgrounds exposes the problem.

### 6.9 Time until an event and censored observations

**Survival analysis** studies time from a defined starting point to an event, such as joining → leaving a service. Specify the start, event, and horizon. Three *hypothetical* customers each begin follow-up at their own joining date: A leaves after two months; B remains event-free for three months, when **B’s own** follow-up ends because collection stops or B enrolled later; C is followed for five months and then leaves. Durations 2, 3, and 5 are measured from each person’s joining date, not from a shared calendar month zero. We know event and time for A and C, at 2 and 5 months. B is **censored** after three months: we know B stayed for at least three months, not forever. Treating B as “never leaves” invents the future; removing B wastes three months of follow-up. Survival methods use the known observation time while distinguishing censoring from an event. Predictive association here also does not prove that an intervention changes time to exit.

### 6.10 LLMs: from text input to a checkable answer

An LLM is more than a lookup in a database of verified facts. **Tokenization** splits text into units that may be words, parts of words, or punctuation. The model converts them into numerical representations and, given context, generates a distribution over possible next tokens. A **Transformer** uses *attention* to connect relevant parts of the sequence: in “the company sold the division because it was losing money,” it needs context to interpret “it.” **Temperature** changes how widely generation samples less likely tokens; greater variety can help with slogans but cannot verify an official deadline. Fluent sentences can be false. If a model says an exam is at 16:00, check the current Canvas page, year, and assessment type. Document retrieval may add context, but both document and citation still need checking. The slide's *Absolute Zero Reasoner* example concerns self-generated coding tasks with an executor that verifies outcomes and supplies reward; “zero data” in the cited paper does not mean no pretraining or general autonomous intelligence.

## 7. What a system produces and how to measure its errors

### 7.1 Numerical forecast, class, recommendation, and action

The question determines the output. **Regression/numerical prediction** asks “how many minutes late?”. **Classification** asks “is this payment fraud, yes or no?”. **Personalization** asks “which three offers should this person see now?”. **Automation** asks “should this case be routed to review under an explicit rule?”. A classification may feed an action, but they are not the same task. A continuous **score** becomes an alert by setting a **threshold**, for example flag above 0.7. Lowering the threshold flags more cases: it may find more fraud and inconvenience more legitimate customers. The score 0.7 is not automatically a calibrated 70% probability; that must be checked among cases receiving similar scores.

**Personalization** can use item content (*content-based*), such as showing products similar to those viewed; behavior of users with similar patterns (*collaborative filtering*); **context**, such as time, language, or availability; or a **hybrid** of these signals. Showing everyone the three most watched films is **popularity**, not evidence of individual relevance. In a hypothetical example, a viewer of Italian documentaries may receive similar documentaries, but local availability and current context change ranking. Past clicks alone may create a feedback loop. Evaluate usefulness, diversity, returns, or satisfaction according to the service, not clicks alone.

**Automation** follows another chain: receive a document, extract necessary fields, apply a verified rule, route the result, and send exceptions for human review. In a hypothetical mortgage request, monthly debt payments of 600+200 and gross monthly income of 3,200 give **debt-to-income ratio (DTI)**=(600+200)/3,200=**25%**. This is a descriptive ratio, not proof of mortgage eligibility: debt definitions, verified income, other conditions, and responsible review remain necessary. If income is missing or the document ambiguous, the workflow should not invent zero or approve; it should route the case for checking. This distinction follows Lesson 4 slides 30–31.

A numerical forecast should be evaluated in the outcome's unit. In a *hypothetical* example, true delays are 12, 16, and 35 minutes, and forecasts are 10, 20, and 30. The errors “true−forecast” are +2, −4, and +5 minutes. Take their **absolute values**, 2, 4, and 5, so underestimates and overestimates do not cancel. **Mean absolute error (MAE)**=(2+4+5)/3=**3.67 minutes**. This is an average-sized error, but it does not tell us whether a five-minute error on an urgent delivery costs more than one on an ordinary delivery.

### 7.2 Confusion matrix: count cases before calculating rates

First define the **positive** class: here “actual fraud”. Among 1,000 *hypothetical* payments, 20 are frauds and 980 legitimate. The system flags 30: 15 true frauds and 15 legitimate payments. Thus five frauds are missed and 965 legitimate payments are not flagged. The matrix keeps reality separate from the system's answer:

| Reality \ system answer | Flagged “fraud” | Not flagged |
|---|---:|---:|
| Actual fraud | **TP=15**: true positive, found | **FN=5**: false negative, missed |
| Legitimate payment | **FP=15**: false positive, wrong alert | **TN=965**: true negative, passed |

Check totals: 15+5=20 actual frauds, 15+965=980 legitimate, 20+980=1,000. If the cells do not reconcile, fix the count before computing metrics.

### 7.3 The question behind each metric

**Precision** asks: “Among the **30 flagged payments**, what fraction are really frauds?” It is 15/(15+15)=**50%**. The denominator is all alerts. Low precision consumes investigation time and disrupts legitimate customers.

**Recall**, also called **sensitivity**, asks: “Among the **20 actual frauds**, how many did we find?” It is 15/(15+5)=**75%**. The denominator is all real frauds. The five missed frauds are a cost that precision does not show.

**Specificity** asks: “Among the **980 legitimate payments**, how many were correctly treated as legitimate?” It is 965/(965+15)=**98.47%**. The **false-positive rate** uses the same 980 legitimate cases but counts the 15 incorrectly flagged: 15/980=**1.53%**. They sum to 100% when the positive class remains fixed.

**Accuracy** asks: “Among all 1,000 cases, how many labels were correct?” It is (15+965)/1,000=**98%**. Yet a system that marks every payment legitimate would get 980 correct, also 98%, while missing all 20 frauds. Accuracy alone can mislead with rare events.

**F1** combines precision and recall by a harmonic mean: 2×0.50×0.75/(0.50+0.75)=**0.60**. This is not a 60% business benefit. Choose thresholds and metrics according to the cost of missed fraud, the cost of a false block, and review capacity. If a lower threshold finds 18 frauds but flags 60 legitimate payments, recall=18/20=90% and precision=18/(18+60)=23.1%. Finding more fraud can create many more false alerts.

### 7.4 From a score to probability and then a decision

A **probability** needs a defined event, population, and time horizon. “Conversion risk within six years among people similar to those studied” is more meaningful than “20% risk.” **Calibration** asks whether about 20 out of 100 people assigned 20% actually have the outcome in that horizon. **Discrimination** asks whether event cases tend to receive higher scores than non-event cases. **AUC** means *area under the curve*, formed by varying the alert threshold. The **ROC** curve puts false-positive rate (share of legitimate payments flagged) on the horizontal axis and recall/sensitivity (share of frauds found) on the vertical axis. The payment example gives one point (15/980≈**1.53%**, 15/20=**75%**); a lower threshold gives (60/980≈**6.12%**, 18/20=**90%**). The **PR** curve puts recall against precision: the same thresholds give (**75%**, 15/30=**50%**) and (**90%**, 18/78≈**23.1%**). Two points do not determine the entire curve or its area; scores and thresholds across the distribution are needed. **ROC AUC** also conveys a ranking intuition: how often a positive case receives a higher score than a negative one. **PR AUC** emphasizes the trade-off between true alerts and frauds found, especially with a rare positive class. Neither AUC establishes an individual's probability or a useful intervention.

**Positive predictive value (PPV)** is precision when the positive is a test or alert, and depends on the event's base rate. A *teaching-only* example: 90 events among 1,000 people; 70% sensitivity finds about 63 and misses 27; 64% specificity correctly leaves about 582 of the other 910 unflagged and falsely flags about 328. Among 63+328=391 flagged people, 63/391≈**16%** have the event. This is not a reconstruction of individual NACC study results or a clinical test. The NACC study as reported in the corrected course material has 9,606 participants, 877 observed conversions, 13 factors, and about six years' average follow-up; the Lancet Commission's 14 factors belong to a different list. An observed BMI association is no instruction to change weight. Before use, assess discrimination, calibration, **generalization** to new populations and settings, and net **decision utility** where a real intervention exists.

## 8. Data lakes and the lab: from a file to a dashboard figure

### 8.1 Why a shared environment needs controls

A shop has sales tables, shelf photos, written reviews, and app events. Keeping them in unrelated folders may prevent useful connections; indiscriminately dumping them together does not make them understandable. A **data lake** can store different data types, often in their original forms. **Ingestion** brings them in: record source, date, version, and whether arrivals are periodic **batches** or continuous **streams**. **Storage** retains them. **Distillation/curation** prepares analysis-ready versions with consistent dates, types, keys, and definitions. A **raw** zone keeps the traceable original; a **curated** zone holds a prepared version. Retention and privacy follow purpose, permissions, and appropriate time limits, not “keep everything forever.”

Suppose a dashboard shows sales doubling after a new import. The **catalog** and **metadata** explain what “sale” means, which file and period it covers, which currency unit applies, and who owns the dataset. **Data quality** checks for missing, duplicated, and inconsistent rows. **Lineage** traces the KPI back through transformations and might reveal a join multiplying rows. An **audit** records when and by whom data or rules changed. **Data discovery** helps people locate the right dataset through descriptions. Without these controls, the “doubling” may be an import artifact. **Data governance** assigns rules and responsibility for quality, access, and use.

**Authentication** asks “who are you?”; **authorization** asks “what may you view or change?”. An analyst's valid login does not grant access to individual health data. **Schema-on-read** means raw data can be given a structure when read for a purpose; it does not remove checks on units and meaning. **HDFS** is a distributed file system named in one slide architecture, not a requirement for every lake. The slides' maturity stages are a framework for growing capabilities, not measured percentages of firms.

### 8.2 Four formats and their different purposes

**CSV** is text made of rows and separated fields. The row “S003,P03,80” is easy to open and exchange, but the file alone may not say whether 80 is a quantity, price, or code. Types and units need documentation. CSV suits flat tables, yet commas inside values and missing fields need clear parsing rules. **XML** uses hierarchical tags: a product can contain a description and category, and a formal schema may validate the structure. It is verbose but helpful when a structured exchange contract matters.

**JSON** uses flexible key-value objects and arrays. An API event can contain one customer and an array of products, each with its quantity. Fields can disappear or change type across events, so the pipeline must check them. **Parquet** is typed, compressed, column-oriented binary data. A query over millions of transactions that needs only country and watch_time can read mainly those columns. It may be efficient for repeated analysis, though less suited to inspecting one row by eye. No format repairs duplicated customers or wrong dates. A *hypothetical* design receives JSON events, retains governed originals, and prepares Parquet for yearly reporting. Check that definitions survive conversion.

### 8.3 The mixed-format lab: one sale must remain one sale

The **Lesson 4 teaching ZIP** contains sales, customer, product, and forecast files in different formats. Before making a chart, define **what one row means**: one sale identified by sale_id, one product by product_id, and one forecast for a stated month and region. Product P03 occurs twice identically in the product file, and sale S008 is duplicated. “Remove duplicates” is incomplete: a documented rule keeps one identical copy per appropriate key, preserves raw files, and checks that a legitimate transaction has not been deleted.

| Step using the ZIP data | S003 rows after matching | S003 revenue calculation |
|---|---:|---:|
| Original sale S003: 80 units of P03 at 44.99 | 1 | 80×44.99 = **3,599.20** |
| Naive join to two identical P03 product rows | 2 | 3,599.20 + 3,599.20 = **7,198.40**, false doubling |
| Deduplicate P03, then join: one physical row and one distinct sale_id | 1 | **3,599.20** |

Do more than compare grand totals: the naive join creates **two physical S003 rows but still just one distinct sale_id**. Distinct-ID counts alone therefore miss doubled revenue. Compare **physical rows, distinct IDs, and row multiplicity for every ID** before and after; then inspect sales without a matching product or customer, units, and time filters. S006, the March/North case described in the local explanation, is 100×44.99=**4,499.00**. S001 is 1,200×14.99=**17,988.00**; 1,200 is worth investigating, not proven wrong. The documented **actual** total after deduplication is **35,677.80**; a naive join produces **45,973.80**. The currency is unspecified. A plausible-looking total containing replicated sales is still wrong.

### 8.4 From actual to decision: forecast, variance, and dashboard

**Actual** is the observed outcome over a defined period; **forecast** is an earlier prediction of that same outcome. **Variance** may be defined as actual−forecast. **Attainment** is actual/forecast when forecast is nonzero: 1.20 means actual is 20% above forecast, *provided scope and units match*. In a *separate hypothetical example*, forecast of 100 units and actual of 120 units yield variance +20 units and attainment 120/100=1.20=120%. To compare ZIP records, derive **month from each sale date**, join the sale to its customer to obtain **region**, calculate quantity×product price after uniqueness checks, then **aggregate actual revenue by (month, region)**. Before joining forecast, verify **one forecast row per same (month, region) pair**, with matching unit and definition; only then join the aggregates. A duplicated forecast key can multiply rows again. Never compare an all-region forecast with North-only actual, or revenue with units sold. Numerical forecast values from the ZIP were not extracted in the verified explanation, so no real lab variance is claimed here.

**SQL** queries tables; a SELECT request chooses columns and rows, but a successful query can count the wrong rows. The Databricks slides bring together notebooks, catalog, queries, and visualizations. A notebook records steps and reasoning; a catalog stores definitions and permissions; a dashboard puts a few relevant measures in front of a decision maker. For this lab, a useful dashboard states month and region, shows comparable actual and forecast, reports variance only when supported, flags duplicate handling, and lets an analyst trace a KPI to source rows. The 29 September slide tutorial is written course material; the available recording reaches the platform introduction and does not establish that every click was performed orally in class.

## 9. Different cases require different evidence

### 9.1 Hail: from a weather event to damage at one building

The insurance case in the slides follows **detect → match → predict → act → verify → learn**. *Detect* identifies the hail area's location and intensity. *Match* connects it with correctly geocoded insured addresses. *Predict* estimates damage using roof, panels, vulnerability, and coverage. *Act* may start inspection or an alert. *Verify* compares estimates with confirmed damage. *Learn* updates the method. In a *hypothetical* example, two buildings are 3 km from the storm, but only one has exposed solar panels. The same weather map does not mean the same loss. A geocoding or address-table error may matter more than the prediction algorithm. Evidence of value is less harm, faster claims handling, or better-calibrated estimates than the previous process after costs and false alerts, not “we have lots of weather data.”

### 9.2 Art: a generative output is not a scientific forecast

The slides use Refik Anadol's *Machine Dreams: Rainforest* to show environmental data becoming a visual and sound experience. The input is collected ecological material transformed by a generative process; the output is an artwork. Relevant questions concern data provenance, rights of use, accurate description of the process, and audience experience. It would be a mistake to say the work proves the model “understands” the ecosystem or correctly predicts its future. Accuracy is not the central metric for every data application; evaluation follows its purpose.

### 9.3 Fashion: attention, demand, and margin are different

A viral photograph may create **attention**; search activity shows curiosity; browsing and carts approach intent; purchases are transactions; **returns** and margin better reveal economic value. In a *hypothetical* example, a shoe gets 100,000 views but only 500 preorders and many returns for similar styles. Producing 50,000 pairs from views alone would be a bet, not a validated forecast. Compare persistence of search, prices, preorders, production lead times, and returns; a small test run limits risk. A model can organize signals but cannot automatically turn attention into paying demand.

### 9.4 Local exercises, aggregate association, and readings

The 29 September fitness task and local Spotify, Netflix, and gaming pitches are educational proposals, not deployed corporate systems. Fitness touchpoints may help revise schedules and no-show processes, but bookings, entries, and waiting lists need verification, with privacy and responsibility addressed. In “gambling and single mothers,” two Eurostat versions with different ages, units, and denominators yield different coefficients. Do not combine them, assert a robust positive relation, or infer individual causation from country aggregates.

The four McKinsey course readings discuss data-business models, a 2023 AI survey, data preparation for generative AI, and smart industrial data. Treating 2023 self-reported adoption as a current rate would be wrong; treating a consultancy case as proof of the same ROI in one's own firm would also be wrong. Use them to generate hypotheses, vocabulary, and risks to test in a specific business. The 80% 3,200-word blog/report calls for reasoned recommendations covering opportunities, factors, risks, and transformation. It remains separate from the next 10% classroom touchpoint, whose format and date are not confirmed.

## 10. Retrieval practice and reasoned classroom questions

Answer from memory before reading the feedback.

1. **Do zero sales imply zero demand?** No. An empty shelf prevents observed purchases. Check stock availability before fitting a demand forecast.
2. **How can a join double revenue?** A non-unique product key multiplies a sale row. Verify lookup-key uniqueness and **physical rows, distinct sale IDs, and rows per sale ID** before/after: S003 may remain one distinct ID while appearing twice.
3. **What do 30 bookings and 20 entries imply?** An apparent 10/30=33.3% no-show rate after matching and deduplication; it is not automatically the month's absent-customer rate.
4. **Is 98% fraud accuracy sufficient?** No. Inspect TP, FP, FN, and TN. With 2% fraud, finding no fraud still gives 98% accuracy.
5. **Does a large SHAP contribution justify changing BMI or complaints?** It describes the model relative to a reference. Causal intervention requires a separate design, feasibility, and risk assessment.
6. **Does Parquet make data correct?** No. It arranges columns and types for some analytical queries; definitions, units, and duplicates need separate checks.

Questions to ask the lecturer: “Which topics, format, and date are officially confirmed for the next 10% touchpoint?”; “Which key must be unique in each lab file, and which deduplication rule do you expect?”; “For a business model, which baseline and error costs should we use before calling it successful?” They seek operational clarification without presenting uncertain transcript details as fact.

## 11. Final case: a commented international decision memo

**Entirely hypothetical scenario.** A home-goods retailer operates in Italy and Germany and is considering an external demand-forecasting platform. The stated aim is to reduce empty shelves. The real decision is whether to run a pilot, where, under which data rights, and with what stopping rule. The figures below are invented to practice reasoning; they are not results from an actual company.

**Question and baseline.** Each shop currently orders using the average sales of the previous four Saturdays. Before building a model, measure sales lost to stockouts, unsold goods, margin, and whether products were available. Italy and Germany may define a “return” differently and have different promotion calendars or purchasing habits. Do not merge incompatible rows and call the result “the European market.” Local culture affects definitions, customer behavior, and whether store managers trust and use a recommendation. Technology only creates value when the organization can act on it.

**Hypothetical unit economics per store per month.** The current process is **hypothetically estimated** to lose 1,000 currency units of margin to stockouts. A hypothetical 30% reduction would recover 300. More inventory would entail **80 currency units per month in incremental holding and obsolescence cost**, plus 100 per month for a license and 70 per month in staff time: 300−80−100−70=**+50 net per store/month**. Eight stores would yield 8×50=**400 in hypothetical monthly net cash flow**. The **initial working capital** needed to buy extra inventory is a separate outlay that must be estimated. Only if 4,800 represented **all** initial outlays, including that capital, and 400 remained a constant monthly net cash flow, would simple payback be 4,800/400=**12 months**, before taxes, risk, or the cost of capital. If the improvement were only 15%, recovered margin would be 150 and the result 150−250=**−100 per store/month**. Thus a more accurate forecast alone is not the decision criterion; incremental economics relative to the baseline is.

**Data control and power.** Whoever controls transaction data influences which problems the model can see, who may audit mistakes, and how easily the retailer can change suppliers. Ask which fields the vendor receives, for what purpose, whether it may reuse them, how data and decision rules can be exported, who can inspect the model, and who can override a bad recommendation. Metrics also change incentives: rewarding sales alone may encourage excess stock or discounts; margin after returns and service levels expose different costs. Definitions must be checked by country.

**Alternatives and decision.** A: improve the simple rule and data cleaning. B: buy and deploy chain-wide immediately. C: a limited pilot in four stores per country, compared with similar stores keeping the current rule. Choose **C, conditional on agreed definitions, permissions, and exportability**. Eight weeks may reveal technical errors and manager behavior but cannot by itself certify year-round or seasonal profit. Set metrics, costs, stop condition, exceptions, and decision owner before starting. Attribution requires a credible comparison: stores chosen because they performed especially badly may improve anyway (**regression to the mean**), and simultaneous promotions may confound results. Where feasible, randomly assign comparable stores or use a controlled design with stated limits.

**Red Team and contrary evidence.** A model may look good because it uses stock availability recorded only after the ordering decision (leakage), because a join duplicates sales, because only stores with complete data are measured, or because staff ignore impractical recommendations. It may hurt one country while improving an aggregate total. Evaluate results separately by country, category, and season; measure stockouts and excess inventory, not only forecast error; verify who acts and which decision actually changes. If net benefit fails to beat the baseline after costs and a credible test, do not expand. This joins international economics, culture, technology, and control of data into a testable choice rather than a slogan.

# APPENDICE / APPENDIX — FONTI, CORREZIONI E CONFINI

- Fonti principali locali: `Lezioni/2026-09-25/pdf/2026-09-25__spiegazione-estesa.md` con Lesson 1 Canvas aggiornata (61 pp.); analoghi `2026-09-29__spiegazione-estesa.md` con Lesson 2 (45 pp.), `2026-10-06__spiegazione-estesa.md` con Lesson 3 (55 pp.) e `2026-10-13__spiegazione-estesa.md` con Lesson 4 (42 pp.); ZIP `Materiale/canvas-133641__Databricks_Mixed_Formats_Lab_Data.zip`. Sono fascicoli corretti e materiale docente; dove disponibile l'audio/trascrizione sostiene solo parti specifiche. Per il 13 ottobre non c'è audio locale. / Main local sources are the four extended lesson explanations and associated slide decks and Lesson 4 ZIP. Oral coverage is not inferred from a slide; no local 13 October recording exists.
- Correzioni da tenere fuori dalla spiegazione concettuale: 175 ZB è forecast storico; 11 TB F1 riguarda team/weekend; NACC 13 fattori ≠ Lancet 14; BMI associato ≠ intervento; S001 quantità 1200 è insolita ma non errore dimostrato; valuta e forecast numerico del lab non verificati nel fascicolo; esempi JSON della slide 20 hanno virgolette tipografiche non valide; la slide warm-up annuncia 15 quesiti senza fornirli; casi Zillow/Amazon della slide non sono verificati indipendentemente. / These are source-boundary corrections, not extra lecture content.
- Assessment: il Module Descriptor/Canvas già controllato nell'audit di corso riporta HFARM502, due touchpoint del 10% e blog/report 80% da 3.200 parole con scadenza 13 gennaio 2027 ore 16:00; un codice HFARM512 nel template del brief è discordante. Nessuna data/formato/domanda del prossimo 10% risulta confermata. / The main blog deadline and the next in-class assessment are separate; no next-touchpoint date or format is confirmed here.
