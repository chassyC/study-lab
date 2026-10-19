# Big Data & AI in Business — 25 settembre 2026

**Come leggere questa lezione.** Il pomeriggio ha due registrazioni: Rizzi imposta la domanda aziendale e i limiti della misura; Campana spiega tipi di dati, analytics e passaggio all'uso. I timestamp qui sono relativi ai rispettivi file PLAUD. Le 61 pagine del PDF Canvas sostengono i concetti, ma non trasformano ogni slide in una frase pronunciata. Il valore di un sistema di dati si dimostra nella decisione che migliora, non nel volume raccolto.

## 1. Prima si sceglie la decisione, poi il dato

Un'impresa può possedere milioni di righe e non sapere che cosa fare domani. Rizzi distingue opportunità e rischi dell'AI nel business (Rizzi 10–20′; slide 5): la prima domanda è **chi prenderà quale decisione**, la seconda è quale risultato misurare rispetto al processo attuale. Nel caso del riordino, «prevedere la domanda» è un mezzo. La decisione è quante unità acquistare e quando; il risultato è evitare scaffali vuoti senza pagare scorte inutili. Se il responsabile non può modificare l'ordine, un modello anche accurato non crea quel valore.

**Esempio ipotetico svolto.** Un negozio esaurisce spesso un prodotto il sabato. Frame: ridurre le rotture di stock mantenendo il margine. Acquire: vendite giornaliere, disponibilità effettiva, promozioni e tempi del fornitore. Build: confrontare una previsione con la regola già usata, su settimane non adoperate per costruirla. Adopt: dare al responsabile una proposta con ragione e possibilità di correzione. Monitor: confrontare rotture, invenduto, margine e falsi allarmi. Se le vendite sono zero perché il prodotto era già finito, zero non significa domanda zero. La fonte del problema cambia il modello e l'azione.

**Trasferimento.** Una dashboard nuova migliora automaticamente gli acquisti? **No:** occorrono una regola decisionale, un utilizzatore, un confronto prima/dopo e controlli su promozioni e disponibilità. La sequenza Frame → Acquire → Build → Adopt → Monitor è nella slide 60 e nella parte finale di Campana (circa 65–72′).

### Il «why» non è uno slogan motivazionale

Rizzi insiste sull'ordine **why → what/how** (circa 13–18′): la ragione della scelta deve venire prima dello strumento. In business il *why* è un problema con un esito che conta per cliente e impresa; il *what* è il prodotto o servizio da cambiare; il *how* è il metodo, eventualmente con dati o AI. **Esempio ipotetico svolto:** «installiamo un chatbot» è un *how*. «I clienti attendono due giorni per una risposta che sblocca un ordine» è un problema. Prima di costruire, misura richieste, tempi, errori e casi che richiedono un operatore; forse una pagina di informazioni aggiornata risolve più problemi di un modello generativo. Il perché non rende automaticamente giusta la tecnologia, ma permette di confrontare alternative. **Trasferimento:** un'azienda dichiara «vogliamo diventare data-driven». Quale domanda manca? Quale decisione reale cambia, per chi, entro quando e con quale risultato osservabile.

## 2. Big Data: scala, velocità e rappresentazione

«Big» non è una soglia universale di byte. Un insieme diventa difficile quando volume, velocità o varietà superano strumenti e processi disponibili; il punto è ottenere una risposta utile entro il tempo richiesto (Campana 0–10′; slide 29–31). Le slide 12–16 accostano stime del traffico mondiale, sensori di Formula 1 e previsioni meteo. Il dato di circa 11 TB riguarda, nella slide 13, lo scambio di un **team durante un weekend di gara**, non una singola automobile; è un numero didattico della slide, non una misurazione qui verificata indipendentemente. Più dati trasferiti non provano una strategia di gara migliore: il segnale deve essere interpretabile e disponibile prima della decisione.

Rizzi usa censimento 1890, meteo ed esplorazione per mostrare che elaborare osservazioni su larga scala precede l'AI generativa (Rizzi circa 39–58′; slide 18). Nel censimento statunitense del 1890 la tabulazione elettrica di Hollerith consentì di codificare informazioni su schede perforate e trattarle con macchine: il caso documenta un salto nel **processo di elaborazione**, non l'eliminazione degli errori di raccolta. Fonte storica: [U.S. Census Bureau, Hollerith machine](https://www.census.gov/about/history/bureau-history/census-innovations/technology/hollerith-machine.html). Chi raccoglie sceglie categorie e definizioni; il numero finale dipende da quelle scelte.

La metafora «mappa e territorio» (Rizzi circa 59–69′; slide 20–22) distingue la realtà dalla sua misura. Una app che conta passi non osserva direttamente salute, intenzione o qualità dell'attività. Anche un dato corretto può essere incompleto rispetto alla domanda. Il controllo umano non è decorativo: definisce lo scopo, interpreta l'eccezione e risponde della scelta.

**Trasferimento.** Due negozi chiamano «cliente attivo» chi ha comprato negli ultimi 30 e 90 giorni. Posso sommare i conteggi? **No:** occorre prima rendere uguali definizione e periodo; un grafico elegante di numeri incompatibili resta sbagliato.

### Come leggere le unità e le stime di scala

Una **unità** dice che cosa viene contato; un **periodo** dice a quale finestra si riferisce; una **stima** dice quanto è incerta la cifra. Le slide 12–14 usano grandezze globali per provocare una domanda sulla capacità di elaborazione. La slide 12 riporta una previsione attribuita a IDC/Seagate nel 2019: circa 175 zettabyte annui per il 2025, trasformati didatticamente in circa 480 **exabyte al giorno**. È una previsione storica, non una misura del 25 settembre 2026. Dividere un totale annuo per 365 produce una media giornaliera; non significa che tutti i giorni o luoghi producano la stessa quantità. Il confronto con anni o imprese richiede stessa definizione di dati generati, copiati o trasferiti.

I prefissi decimali seguono potenze di dieci: 1 kilobyte = 10³ byte, 1 megabyte = 10⁶, 1 gigabyte = 10⁹, 1 terabyte = 10¹², 1 exabyte = 10¹⁸, 1 zettabyte = 10²¹, 1 yottabyte = 10²⁴. I prefissi binari usano potenze di due: 1 kibibyte = 2¹⁰ byte e 1 yobibyte = 2⁸⁰ byte. La slide 32 affianca le due scale in modo ambiguo; per un acquisto di storage o un confronto scientifico scrivi sempre simbolo, base, periodo e oggetto. **Esempio ipotetico svolto:** un laboratorio riceve 2 TB al giorno per 30 giorni, quindi circa 60 TB di dati grezzi decimali prima di copie e indici. Se ogni file viene duplicato per sicurezza, la capacità necessaria supera 60 TB; il numero globale di exabyte non risponde alla domanda locale.

**Trasferimento.** Un fornitore promette «un miliardo di dati processati»; è un'unità utile? **No:** chiedi se sono byte, eventi o record, in quanto tempo, con quali copie e quale latenza di risposta. Una quantità senza definizione non dimensiona il sistema.

### Quattro ambienti in cui la stessa grammatica cambia

La slide 15 accosta Formula 1, meteorologia, esplorazione sismica e osservazione dello spazio. In Formula 1 la finestra è una scelta durante la gara: dati di sensori e simulazione devono arrivare prima di pit stop o regolazione. Nel meteo osservazioni da stazioni, satelliti e radar alimentano un modello fisico; il risultato è una previsione con incertezza e orizzonte temporale, utile soltanto se chi riceve un'allerta può prepararsi. Nell'esplorazione sismica i segnali del sottosuolo aiutano a stimare una struttura non visibile direttamente; la misura è indiretta e dipende dal modello. Nello spazio strumenti diversi osservano porzioni diverse del fenomeno e l'interpretazione richiede calibrazione. **Non** segue che il corso abbia dimostrato previsioni affidabili dei terremoti: non convertire un esempio di elaborazione geofisica in quella promessa. La sequenza comune è osservazione → rappresentazione → modello → decisione → verifica, mentre tempi, errori e interventi sono differenti.

**Trasferimento.** Un modello meteo emette una probabilità di pioggia per l'intera provincia. Può sostituire il sensore di temperatura di una macchina? **No:** oggetto, scala spaziale e azione sono diversi. Si possono combinare soltanto con una relazione pertinente e una prova che il segnale aggiunga valore.

### Quattro opportunità della slide di attività, non quattro ricavi già realizzati

La slide 26/28 propone **sell outcomes**, **value data exhaust**, **simulate before acting** e **sell trust** come spunti di gruppo. *Sell outcomes* significa offrire un risultato misurato invece di vendere solo il prodotto: una lavatrice con manutenzione inclusa richiede accordi su disponibilità, misurazione e responsabilità. *Data exhaust* sono tracce prodotte durante un'attività; possono suggerire servizi nuovi ma non sono gratis né automaticamente riutilizzabili: qualità, consenso o altra base valida e scopo contano. *Simulate before acting* usa un modello per confrontare scenari prima di un investimento; la simulazione dipende dalle ipotesi. *Sell trust* significa rendere credibile l'uso dei dati con sicurezza, spiegazioni e controllo; non è una prova che il cliente pagherà di più. **Esempio ipotetico svolto:** un produttore di ascensori offre meno fermi come servizio, usa sensori per decidere manutenzioni, simula frequenze e comunica al cliente dati e limiti. Il ricavo resta ipotesi finché contratto, costi e risultati sono misurati. **Trasferimento:** quale delle quattro opportunità sceglieresti per una PMI senza permessi di riuso dei dati? Parti dal risultato operativo consentito, non dalla rivendita del data exhaust.

### Da dato a informazione, conoscenza e giudizio

Rizzi descrive un percorso **evento → dato grezzo → informazione → conoscenza → giudizio umano** (circa 65–69′; slide 23). Un sensore registra «72»; senza unità, ora e macchina è soltanto un valore. «72 °C sul motore A alle 10:05» è informazione contestualizzata. Confrontarlo con storia, carico e manutenzione può suggerire che il cuscinetto sta usurandosi: questa è conoscenza operativa condizionata. Decidere se fermare la macchina coinvolge costo del fermo, sicurezza, incertezza e responsabilità. Nessun passaggio è automatico; un'etichetta errata può trasformare un numero preciso in una conclusione falsa. La slide 24 aggiunge due limiti: non tutto ciò che si può misurare conta e non tutto ciò che conta è facilmente misurabile. Fiducia del cliente e qualità del lavoro possono richiedere più di un indicatore semplice.

**Esempio ipotetico svolto:** la dashboard mostra 500 visite al sito. Per sapere se c'è interesse utile occorrono periodo, persone uniche, bot, pagine viste e conversioni; per decidere una campagna servono costi e confronto con altre fonti. «500» non è una strategia. **Trasferimento:** una metrica cresce del 30% ma i reclami aumentano. Quale dei due è «vero»? Possono esserlo entrambi; bisogna chiedere che cosa misurano, se il risultato desiderato si è verificato e quali effetti sono rimasti fuori metrica.

## 3. Formato e qualità sono domande diverse

Campana distingue **structured data** (schema regolare, per esempio ordini con colonne), **semi-structured data** (campi o tag flessibili, per esempio molti JSON) e **unstructured data** (testo libero, audio, foto) (Campana 0–15′; slide 33–35). Il formato non certifica qualità: un CSV può essere strutturato ma pieno di duplicati; un testo può essere utile ma richiedere estrazione e controllo. Si classifica il contenuto e il suo schema, non soltanto l'estensione del file.

Le **5 V** mettono a fuoco problemi differenti (Campana 15–25′; slide 36–40): *volume* è quantità; *velocity* è ritmo di arrivo e necessità di risposta; *variety* è diversità di forme; *veracity* è affidabilità; *value* è beneficio netto dopo costi e adozione. Non sono una formula che produce ROI. **Esempio ipotetico:** un sensore invia un dato ogni secondo: volume e velocity crescono. Se è mal calibrato, la veracity cala; se nessuno può fermare la macchina in tempo, il possibile value operativo può essere nullo. «Garbage in, garbage out» indica la propagazione di errori o bias, non suggerisce di scartare dati senza capire come sono stati prodotti.

**Trasferimento.** Un'azienda raddoppia i sensori e i falsi allarmi. Quale V controlli per prima? **Veracity**, insieme a calibrazione, definizione dell'anomalia e costo dell'errore; il volume da solo non risolve il problema.

### Le 5 V, una per una

**Volume: quanto e per quanto tempo.** Conta record, dimensione, crescita e duplicazioni. Un retailer con milioni di scontrini ha bisogno di spazio e procedure per caricarli, indicizzarli e conservarli. Il volume non rivela da solo se un dato è utile: conservare per anni campi mai usati aggiunge costo e rischio. **Esempio ipotetico:** 10 negozi producono 1 GB di log al giorno ciascuno; in 100 giorni sono 1 TB grezzo, ma copie, indici e backup aumentano il fabbisogno. La scelta parte dai dati necessari alla decisione, dal periodo di conservazione e dalla possibilità di eliminarli. **Verifica:** se raddoppiano i log ma nessuna decisione cambia, quale valore incrementale hai dimostrato? Nessuno finché non identifichi uso e confronto.

**Velocity: quanto presto serve l'informazione.** Non coincide con «dati arrivano veloci». Una macchina può emettere un evento ogni secondo, ma se la manutenzione è pianificata settimanalmente può bastare un riepilogo batch; un guasto che danneggia subito l'impianto richiede invece un allarme controllato. Definisci il tempo dall'evento all'azione, i ritardi accettabili e cosa succede quando la rete cade. **Esempio ipotetico:** un allarme arriva in 2 secondi, ma il tecnico può intervenire solo il giorno dopo; ridurre l'elaborazione a 0,2 secondi non cambia il risultato. **Verifica:** quale parte della catena ha la latenza decisiva? Potrebbe essere l'intervento umano, non il calcolo.

**Variety: forme e significati diversi.** Ordini, immagini, chat e misure non si uniscono semplicemente mettendoli nella stessa cartella. Servono chiavi, timestamp, unità e una definizione dell'oggetto osservato. **Esempio ipotetico:** una foto dello scaffale e una riga di vendite riguardano lo stesso prodotto soltanto se codice, negozio e ora coincidono. La varietà può dare contesto, ma può anche moltiplicare errori di collegamento. **Verifica:** un'immagine del negozio A può spiegare la vendita nel negozio B? No, salvo una relazione esplicita e verificata.

**Veracity: quanto puoi fidarti del segnale.** Controlla calibrazione, completezza, duplicati, provenienza e bias di campionamento. Non esiste un bollino unico: una fonte può misurare bene la temperatura e male la presenza di persone. **Esempio ipotetico:** un sensore non aggiorna l'ora dopo un cambio di fuso; un aumento di temperatura appare prima del guasto ma è in realtà successivo. Per evitare una falsa previsione, confronta log, orologio e manutenzione del dispositivo. **Verifica:** se il modello ottiene ottimi risultati su dati con timestamp sbagliati, hai dimostrato previsione? No: può usare informazione dal futuro.

**Value: beneficio netto di una scelta cambiata.** Richiede un confronto con la pratica attuale e include costi del sistema, falsi allarmi, adozione, rischio e durata del beneficio. **Esempio ipotetico:** un modello evita 20 rotture di stock ma genera 200 ordini inutili; senza margini e costi di magazzino non sai se ha creato valore. Un'analisi può essere corretta ma economicamente superflua se una regola più semplice produce lo stesso risultato. **Verifica:** quale baseline useresti? Il processo di riordino realmente usato prima, misurato su periodi comparabili.

Le 5 V sono una griglia diagnostica, non tappe in sequenza: volume alto con valore basso e varietà bassa con valore alto sono entrambi possibili.

## 4. Il dato diventa valore solo se arriva all'uso

La **data value chain** illustrata da Campana (circa 21–25′) procede da raccolta a processing, analysis, distribution, use e reuse. «Processing» pulisce e rende compatibili i dati; «analysis» trasforma dati in un'ipotesi o stima; «distribution» porta l'output a chi può agire; «use» cambia una scelta; «reuse» usa l'esito per correggere il ciclo. Il passaggio finale non concede uso illimitato: scopo, diritti e privacy restano vincoli.

**Esempio ipotetico svolto.** Una lavatrice con sensori di vibrazione genera misure. Il produttore collega ogni misura a macchina, ora e manutenzione; segnala anomalie confrontate con guasti verificati; invia un avviso al tecnico, che controlla prima di sostituire un pezzo; registra guasto reale e falso allarme. Un **digital twin** è una rappresentazione simulata di oggetto o processo, aggiornata con dati pertinenti, utile a provare scenari. Non è la lavatrice stessa né garantisce di prevedere ogni rottura (Rizzi circa 72–88′ per applicazioni e attività; slide 16). Se la simulazione è alimentata da un sensore guasto, la sofisticazione peggiora la fiducia senza migliorare la diagnosi.

**Trasferimento.** Il responsabile non apre l'avviso di manutenzione. Dov'è interrotta la catena? **Tra distribution e use**. Prima di aggiungere dati si deve capire il flusso di lavoro, l'urgenza e chi è autorizzato ad agire.

### Digital twin: modello, sensore, simulazione, feedback

Il **gemello digitale** non è un duplicato fisico: è una rappresentazione aggiornata di alcune proprietà di un oggetto o processo. Prima si decide la domanda, per esempio «quale componente della lavatrice potrebbe guastarsi entro una settimana?». Poi si scelgono sensori pertinenti (vibrazione, temperatura, cicli), si associano alla singola macchina e si controlla che misurino correttamente. Un modello collega pattern a possibili guasti, ma una correlazione può dipendere anche da carico, età o installazione. La simulazione chiede «che cosa potrebbe accadere se aumentano i cicli?», non osserva direttamente il futuro. Il tecnico verifica l'allarme; la manutenzione effettiva e gli errori tornano come feedback. Il ciclo è utile solo se riduce guasti e interventi inutili rispetto al metodo precedente.

**Esempio ipotetico svolto:** tre lavatrici emettono la stessa vibrazione alta. Una ha un cuscinetto difettoso, una è sovraccarica e una ha il sensore allentato. Un allarme basato su una sola soglia tratta i tre casi come identici; un modello migliore aggiunge storico dei cicli e controllo tecnico. Non basta chiamarlo «digital twin» per sapere quale dei tre è guasto. **Trasferimento:** se una simulazione prevede un guasto ma il componente sostituito era sano, che cosa registri? L'esito negativo, il costo dell'intervento e le condizioni dell'input: sono i dati necessari per migliorare soglie e modello.

## 5. Quattro domande di analytics, quattro prodotti diversi

Le slide 53–54 distinguono **descriptive** («che cosa è successo?»), **diagnostic** («perché?»), **predictive** («che cosa potrebbe accadere?») e **prescriptive analytics** («quale azione conviene?»). Campana le attraversa nell'esempio didattico di clienti persi (circa 45–55′). Se una dashboard registra un calo dei rinnovi, è descrittiva. Cercare ritardi, prezzi e alternative dei clienti è diagnostico; una correlazione non dimostra ancora la causa. Stimare chi rischia di non rinnovare è predittivo. Confrontare costo e beneficio di offerte o interventi è prescrittivo. Il monitoraggio dell'esito chiude il ciclo, ma non è un quinto tipo delle slide.

**Esempio ipotetico svolto.** Su 100 clienti, 15 non rinnovano. La quota 15% descrive il periodo. Un'analisi trova che molti di questi hanno atteso assistenza più a lungo, ma serve confronto con chi ha rinnovato e con altri fattori. Un modello assegna rischi futuri; per decidere a chi offrire un intervento serve stimare probabilità di risposta, costo e margine, poi verificare il risultato. Un punteggio di rischio non dice da solo che l'offerta causerà un rinnovo.

**Data analysis** è l'esame di dati per una domanda; **data analytics** include processi, strumenti e uso delle analisi; **data science** include anche progettazione e validazione di modelli; **business intelligence** fornisce report, query e visualizzazioni per decisioni. I confini si sovrappongono (slide 47–55): sarebbe errato dire che analytics guarda solo al passato e data science solo al futuro.

**Trasferimento.** Una previsione di abbandono è già una scelta di sconto? **No:** serve sapere se lo sconto cambia il comportamento, quanto costa e quale gruppo ne beneficia.

### Data analysis, analytics, data science e BI: scegli per responsabilità

La **data analysis** prende una domanda circoscritta e cerca risposte nei dati: «quanti clienti hanno cancellato?», con definizione di cliente e periodo. La **data analytics** comprende anche scelta delle fonti, preparazione, tecniche e inserimento della risposta in un processo: «come monitoriamo cancellazioni e quale intervento testiamo?». La **data science** può costruire e validare modelli statistici o ML, chiedendosi se generalizzano e quali errori commettono. La **business intelligence (BI)** organizza query, metriche, dashboard e report per utenti che decidono. Questi sono accenti professionali, non confini rigidi: una dashboard può contenere una previsione e uno scienziato dei dati può fare una semplice tabella quando basta.

La slide 51 nomina anche **business analytics**: è l'applicazione di metodi analitici a domande e decisioni d'impresa, per esempio scegliere prezzi, turni o investimenti. Non è sinonimo di BI: una dashboard BI può descrivere vendite per negozio, mentre un'analisi aziendale può stimare che cosa cambia se un negozio modifica gli orari, includendo costo del personale e domanda attesa. Non è neppure una disciplina separata da ogni data analytics: usa dati e metodi comuni, con responsabilità focalizzata sull'esito di business. **Esempio ipotetico:** un responsabile vede in BI che il martedì ha poche vendite; business analytics confronta ricavi addizionali possibili e costo di una promozione, poi testa su negozi comparabili. Una correlazione fra promozione e vendite non basta a provare che la promozione sia stata la causa.

**Esempio ipotetico svolto:** il direttore di una palestra chiede perché le presenze calano. La BI mostra presenze per corso e periodo; l'analisi controlla che il nuovo lettore accessi non abbia perso dati; l'analytics confronta cancellazioni, orari e cause plausibili; un modello di data science potrebbe stimare il rischio di no-show su nuovi iscritti. L'ultima attività ha senso soltanto se il personale può agire su quella stima. **Limite:** i nomi degli strumenti non sono prova di causalità; «analytics = passato, science = futuro» è falso perché anche analytics può essere predittiva o prescrittiva. **Trasferimento:** se un semplice confronto per orario spiega e risolve il problema, serve ML? No: la soluzione più semplice che migliora la decisione è sufficiente.

## 6. Batch, stream e data lake: scegliere il tempo utile

**Batch processing** tratta blocchi a intervalli; **stream processing** elabora eventi in arrivo (Campana circa 59–65′; slide 56–59). Un report di magazzino per il giorno seguente può aspettare la notte. Un possibile guasto che danneggia subito la macchina richiede un allarme entro una finestra molto più breve. La velocità scelta include costi, resilienza, duplicati, eventi in ritardo e falsi allarmi. In entrambi i casi i dati vanno puliti e controllati; stream non significa verità istantanea.

Le slide 56–59 distinguono quattro attività della pipeline: **collect** acquisisce record e registra fonte, ora e autorizzazione; **process** li converte in un formato e una struttura confrontabili, con batch o stream secondo il tempo utile; **clean** corregge o segnala valori impossibili, duplicati e campi mancanti senza cancellare silenziosamente casi scomodi; **analyze** formula e prova un'interpretazione. **Esempio ipotetico svolto:** tre negozi inviano vendite: uno usa euro, uno centesimi e uno invia due volte lo stesso ordine. Sommare i file al momento della raccolta produce un totale falso. Il processing uniforma unità e chiavi; il cleaning segnala il duplicato e i mancanti; solo allora l'analisi confronta vendite e stock. Se il negozio con stock zero mostra vendite zero, non concludere automaticamente che non ci sia domanda: manca l'osservazione delle vendite che avrebbe potuto fare. **Trasferimento:** uno stream velocissimo salta la deduplica. È più utile di un batch corretto? Dipende dalla decisione: per un allarme si può tollerare un dato provvisorio etichettato, per un bilancio no; in entrambi i casi serve riconciliazione successiva.

Un **data lake** conserva dati di forme diverse, spesso prima di imporre uno schema di analisi. Nella registrazione Campana lo menziona come possibilità (circa 60′); non è una dimostrazione di un'architettura completa. Perché il lake non diventi un deposito opaco servono catalogo, provenienza, permessi, qualità, regole di conservazione e una domanda d'uso. **Esempio ipotetico:** immagini, ordini e log del negozio finiscono nello stesso lake. Un analista può legarli soltanto se ha chiavi e periodi compatibili e un diritto di accesso pertinente. Essere «nello stesso posto» non crea un insight.

**Trasferimento.** Uno stream segnala frode dopo che la transazione è già irreversibile. Basta ridurre la latenza del calcolo? **No:** va misurato il tempo completo da evento a decisione e verificato se l'azienda può ancora bloccare, chiedere conferma o recuperare.

## 7. Applicazioni: stessa grammatica, rischi differenti

Le slide 41–45 e Campana (circa 26–45′) attraversano retail, salute, finanza, fabbrica, energia, logistica e città. Non vanno imparate come promesse di successo. Nel retail conta la previsione della domanda insieme alle scorte; in finanza una transazione sospetta esige controllo di errori e tempi; in fabbrica un sensore va collegato a un guasto verificato; in salute un segnale può richiedere conferma clinica e protezione di dati delicati; nella logistica una rotta più breve sulla mappa può essere più lenta nel traffico reale. Per ogni caso chiedi **fonte, qualità, finestra d'azione, chi decide, baseline, costo dell'errore e diritto d'uso**. Il racconto orale su singole aziende non è qui trasformato in risultato aziendale verificato.

**Esempio ipotetico di trasferimento.** Un comune vuole regolare i semafori usando telecamere. Occorrono conteggi affidabili per orario e direzione, una misura dei tempi di viaggio prima e dopo e un controllo degli effetti su pedoni e vie vicine. Più videocamere non prova una mobilità migliore; serve anche una valutazione della raccolta di immagini personali.

### Applicazioni confrontate: il dato necessario cambia con l'errore costoso

**Retail.** Una previsione della domanda serve a scegliere scorte e prezzi. Input: vendite, stock, promozioni e lead time; limite: vendita zero può derivare da stock zero. Esempio ipotetico: un prodotto vende 20 unità al giorno normale e 60 durante uno sconto. Se il modello tratta le 60 come domanda ordinaria, acquista troppo; separare il periodo promozionale riduce l'errore. Test: margine e invenduto, non sola accuratezza della previsione.

**Salute.** Dati di sensori, immagini e storia clinica possono sostenere un professionista, ma un falso negativo può lasciare senza intervento una persona e un falso positivo può provocare esami o ansia inutili. Esempio ipotetico: una app rileva un ritmo anomalo; il passo corretto è una verifica clinica secondo protocollo, non una diagnosi automatica. Servono validazione su popolazioni pertinenti, privacy e responsabilità umana. Il racconto orale è illustrativo, non prova l'efficacia di una terapia.

**Finanza e assicurazioni.** Un sistema può segnalare transazioni sospette o stimare rischi, ma deve tenere conto di base rate, frodi rare, falsi blocchi e obblighi normativi. Esempio ipotetico: bloccare 1.000 pagamenti per trovare un caso vero può costare più del danno evitato; la soglia si valuta con costi ed esiti reali. Un punteggio non è prova di intenzione fraudolenta.

**Fabbrica ed energia.** La manutenzione predittiva combina sensori e storia dei guasti; il fabbisogno energetico combina carichi, prezzi e disponibilità. Una temperatura alta può segnalare guasto oppure una giornata calda o una misura difettosa. Prima di fermare una linea, occorrono controlli e costo del fermo. L'obiettivo non è prevedere tutto: è evitare guasti importanti senza interruzioni inutili.

**Logistica e città.** Ottimizzare rotte richiede tempi reali, vincoli dei mezzi, sicurezza e finestre di consegna; un tragitto più corto può essere più lento. Per semafori o raccolta rifiuti, dati da IoT e camere non bastano: vanno confrontati effetti su pedoni, quartieri e privacy. Un beneficio misurato in una zona può spostare il problema in quella vicina.

**Trasferimento trasversale:** in quale settore il falso negativo è più costoso? Non c'è una classifica fissa. Devi nominare esito, frequenza, costo, possibilità di recupero e persona che decide; così la stessa tecnica viene valutata nel suo contesto.

### Edge computing: dove vengono elaborati i dati

Internet of Things (IoT) indica oggetti connessi che possono raccogliere e scambiare dati. Edge computing significa invece elaborare dati vicino alla sorgente: sul dispositivo o su un elaboratore locale, prima di inviare eventualmente risultati a un centro remoto. Una lavatrice che trasmette tutte le misure a un server genera dati IoT; questa sola trasmissione non dimostra che li stia elaborando vicino alla sorgente.

Il meccanismo è scegliere quali operazioni fare vicino al fenomeno e quali centralizzare. Filtrare misure, calcolare un indicatore o riconoscere una condizione locale può evitare di attendere ogni volta un viaggio dei dati sulla rete. Ridurre trasferimenti e dipendenza dalla connessione può aiutare una decisione tempestiva; il vantaggio dipende però dal carico di lavoro, dalla rete e dalle capacità del dispositivo.

Esempio ipotetico: in una lavanderia, un elaboratore locale confronta le vibrazioni delle macchine con una soglia di attenzione e segnala al tecnico quali controllare. Conserva i dati necessari quando manca la connessione; in seguito invia riepiloghi al sistema centrale, che confronta l’andamento di più sedi. La segnalazione locale e il confronto tra sedi rispondono a due tempi decisionali diversi.

Il limite è che un dispositivo locale dispone di memoria, energia e potenza finite; anche software e soglie devono essere aggiornati e controllati. Elaborazione locale non significa automaticamente dato corretto, sicurezza o riservatezza: accessi e informazioni inviate vanno comunque gestiti. Per decidere l’architettura, confronta tempi di risposta, carico della rete e falsi allarmi rispetto al bisogno operativo, senza assumere che edge sia sempre la scelta migliore.

#### Verifica la comprensione

**Domanda:** Una macchina invia tutte le misure a un server remoto. Basta questo per parlare di edge computing?

**Feedback:** No. Hai descritto generazione e trasmissione di dati IoT. Occorre indicare quale elaborazione avviene vicino alla sorgente. Nell’esempio, è il confronto locale delle vibrazioni con la soglia, da verificare anche per falsi allarmi.

**Domanda:** L’allarme locale basta per confrontare l’usura di tutte le sedi della lavanderia?

**Feedback:** Non necessariamente. Un allarme serve alla risposta locale; confrontare sedi richiede dati comparabili e un’analisi comune. Edge e sistema centrale possono svolgere parti diverse dello stesso processo.

### Dalla categoria al conteggio: schede e tabulazione

Il passaggio decisivo delle schede perforate è la codifica (encoding): una posizione concordata sulla scheda rappresenta una categoria. Il lettore rileva la presenza del foro in quella posizione; il sistema di tabulazione traduce il segnale in un conteggio. Prima si stabilisce che cosa rappresentare, poi si registra il codice, infine si aggregano le osservazioni. La macchina non deve interpretare ogni volta una descrizione libera.

Esempio ipotetico e semplificato: cinque ordini devono essere classificati come consegna a domicilio (A) oppure ritiro in negozio (B). Ogni scheda rappresenta un solo ordine e prevede due posizioni concordate: un foro in A oppure un foro in B. Le schede A, B, A, A, B producono il totale A = 3 e B = 2. Il controllo 3 + 2 = 5 torna con i cinque ordini: dalla categoria si è passati al codice, alla lettura e al totale.

Il limite non scompare con l’automazione. Se una scheda ha entrambi i fori o nessuno, il sistema deve segnalarla come ambigua o incompleta, senza assegnarla silenziosamente a una categoria. Se due operatori usano definizioni diverse di “ritiro”, un conteggio veloce può aggregare dati non comparabili. Controllare duplicati, categorie e casi mancanti resta necessario anche nei database moderni.

Il collegamento con il caso storico di Hollerith è il principio della codifica leggibile dalla macchina e della tabulazione. L’esempio degli ordini serve a rendere visibile il meccanismo: non riproduce la scheda originale del censimento, i suoi campi o il suo esatto circuito elettrico.

#### Verifica la comprensione

**Domanda:** Ci sono tre schede A, due B e una con entrambi i fori. Puoi dire che hai contato sei ordini classificati correttamente?

**Feedback:** No. Hai cinque ordini classificati e un caso ambiguo da controllare. Contarlo in entrambe le categorie gonfierebbe il totale; sceglierne una senza verifica introdurrebbe un’informazione non presente.

**Domanda:** Perché un conteggio automatico può essere corretto nei calcoli ma poco utile per decidere?

**Feedback:** Può contare fedelmente codici raccolti con definizioni incoerenti, duplicati o categorie inadatte alla domanda. Devi controllare sia l’operazione di conteggio sia il significato dei dati.

### Click, ranking ed esposizione: quando il dato cambia il processo

Un click è un comportamento osservato; l’interesse è un’interpretazione di quel comportamento. Click e like possono essere usati come proxy, cioè indicatori indiretti, per stimare quali contenuti potrebbero interessare a una persona. Non misurano direttamente soddisfazione, comprensione o utilità: si può cliccare per curiosità, errore o disaccordo.

Considera un sistema ipotetico di raccomandazione che usa le interazioni per ordinare i contenuti: questo ordinamento è il ranking. Più interazioni su un tema possono far salire contenuti simili; la posizione più visibile aumenta le opportunità di vederli e cliccarli. Si crea un feedback loop, un circuito di retroazione: comportamento osservato → stima dell’interesse → ordinamento → esposizione → nuovo comportamento. Il sistema influenza quindi anche i dati che raccoglierà dopo.

Esempio ipotetico: un contenuto A riceve 10 click su 100 esposizioni, mentre B ne riceve 100 su 1.000. Entrambi hanno un tasso di click, click-through rate (CTR), del 10%: click divisi per esposizioni. I 100 click di B, da soli, non dimostrano un interesse maggiore. Anche il confronto dei tassi richiede contesto: pubblico, posizione e periodo possono differire, e poche osservazioni rendono il risultato più incerto.

Il limite operativo è confondere “più interazioni” con “risultato migliore”. Per valutare il sistema, definisci prima il risultato desiderato e affianca alle interazioni controlli pertinenti, per esempio utilità dichiarata, reclami o varietà dei contenuti mostrati. Un confronto pianificato tra alternative può aiutare a valutare l’effetto del ranking; una semplice crescita dei click non dimostra da sola né la causa né il beneficio. Questo è un modello didattico del meccanismo, non una descrizione dell’algoritmo o degli obiettivi di ogni piattaforma reale.

#### Verifica la comprensione

**Domanda:** B riceve dieci volte i click di A nell’esempio. Quale controllo cambia l’interpretazione?

**Feedback:** Le esposizioni: B viene mostrato dieci volte tanto. Entrambi raggiungono il 10% di CTR. Non basta comunque questo valore per concludere che i pubblici abbiano lo stesso interesse o che i contenuti siano ugualmente utili.

**Domanda:** Dopo un cambiamento del ranking aumentano i click su un tema. Hai provato che quel tema interessa di più alle persone?

**Feedback:** No. Potresti averlo mostrato più spesso o in posizioni migliori. Controlla esposizione, pubblico e periodo, e separa il comportamento osservato dal risultato che vuoi migliorare. Il feedback loop rende il dato successivo dipendente dalle scelte del sistema.

### Utilizzatore, beneficiario e pagante: rendere concreta la proposta

Quando proponi un’applicazione dei dati, separa tre ruoli. L’utilizzatore (user) consulta il sistema o agisce sul suo output; il beneficiario (beneficiary) ottiene un vantaggio dal risultato; il pagante (payer) sostiene la spesa o autorizza il budget. Possono coincidere, ma non è automatico. Dire soltanto “i dati creano valore” lascia aperto per chi, attraverso quale decisione e con quale motivo per finanziare il servizio.

Esempio ipotetico: un negozio valuta uno strumento che suggerisce i riordini. L’addetto agli acquisti lo usa per scegliere quantità e tempi; il negozio può beneficiare di meno rotture di stock o minori scorte inutili; i clienti possono trovare più spesso il prodotto. Il titolare o il responsabile del budget decide se pagare. Il fornitore del software sarebbe invece chi riceve il corrispettivo: ricevere denaro e beneficiare del miglioramento operativo sono ruoli da descrivere separatamente.

La proposta deve collegare dati disponibili → decisione modificata → risultato osservabile → costo sostenibile. Prima di adottarla, confronta il processo proposto con quello attuale, registrando disponibilità dei prodotti, giacenze e costo del lavoro necessario a usare il sistema. Considera anche raccolta e pulizia dei dati, formazione e manutenzione. Un risparmio atteso resta un’ipotesi finché il confronto non mostra se il beneficio si realizza e a quali condizioni.

Il limite è che beneficio operativo e disponibilità a pagare non sono la stessa prova. Un risultato migliore non dimostra automaticamente che il responsabile abbia budget, accetti le condizioni o consideri il servizio conveniente rispetto alle alternative. Nel lavoro di gruppo indica quindi utilizzatore, beneficiario e pagante previsti, la misura del beneficio e la prova ancora necessaria per verificare sia l’efficacia sia la disponibilità a finanziare la soluzione.

#### Verifica la comprensione

**Domanda:** L’addetto trova utile il sistema di riordino. Hai già identificato il cliente pagante?

**Feedback:** No. Hai raccolto un segnale dall’utilizzatore. Devi identificare chi autorizza la spesa e verificare se il beneficio atteso giustifica costi e condizioni per quel soggetto.

**Domanda:** Il sistema riduce le rotture di stock, ma fa aumentare molto le giacenze. La proposta è già conveniente?

**Feedback:** Non basta il primo indicatore. Devi confrontare il beneficio di maggiore disponibilità con costo e rischio delle scorte, oltre ai costi del sistema. La convenienza dipende dal risultato complessivo e dalle alternative, non dal miglioramento di una sola metrica.

### Denuncia e immagini: collegare prove diverse senza trasformarle in un verdetto

Parafrasi circoscritta. Le unità 85–86 richiamano una richiesta assicurativa e immagini acquisite da droni per confrontare informazioni sul danno. La trascrizione non consente di verificare azienda, luogo, evento o risultato del caso raccontato. Il nucleo da studiare è multimodal evidence: informazioni di forme diverse, come un modulo e una fotografia, possono contribuire allo stesso controllo soltanto se riguardano lo stesso oggetto e un momento pertinente. La spiegazione seguente è didattica aggiunta, non una ricostruzione del caso.

Una denuncia contiene campi strutturati — identificativo della pratica, bene, data dell’evento, danno dichiarato — e può includere testo libero. Le immagini mostrano ciò che il sensore ha ripreso, entro risoluzione, inquadratura e condizioni di acquisizione. Metadata sono le informazioni che aiutano a interpretarle: data e ora, provenienza, posizione, dispositivo e trasformazioni subite. Collegare il file alla pratica non significa ancora che confermi o smentisca il danno: un’immagine successiva a una riparazione può non mostrare ciò che era presente prima.

Passaggi. (1) Definisci quale domanda è controllabile: per esempio, se una zona del tetto presenta un danno visibile compatibile con quanto dichiarato. (2) Verifica che identificativo del bene, luogo e finestra temporale coincidano; registra eventuali errori di localizzazione o orologio. (3) Conserva provenienza e trasformazioni, distinguendo il file ricevuto da ritagli o immagini elaborate. (4) Controlla copertura, risoluzione e condizioni: un’area non visibile è informazione mancante, non assenza di danno. (5) Confronta osservazioni e documenti, descrivendo accordi e discrepanze. (6) Sottoponi le discrepanze rilevanti a verifica umana e a eventuali ulteriori prove, secondo il processo autorizzato. Registra come è stata raggiunta la conclusione.

Esempio ipotetico svolto. Una pratica dichiara danni al tetto dopo una grandinata. Un’immagine del giorno dopo mostra solo il lato nord; il danno segnalato riguarda il lato sud. Il confronto è inconcludente: non si può segnare “nessun danno”. Si richiede una vista pertinente o altra documentazione e si mantiene aperta la verifica. Se invece una fotografia mostra un’area danneggiata, conferma un’osservazione visibile in quel momento; da sola non stabilisce causa, costo, copertura assicurativa o intenzione della persona.

Limiti. Il confronto multimodale può ridurre errori di identificazione e indirizzare un controllo, ma non prova automaticamente frode o diritto al rimborso. Un’immagine non legge l’intenzione e una discrepanza può dipendere da data, campo visivo, riparazioni, qualità o documentazione incompleta. Servono accesso lecito, protezione dei dati, competenze pertinenti e possibilità di correggere gli errori. Non dedurre dal racconto ASR che un sistema reale abbia già superato questi controlli.

**Fonte e limiti:** Campana, esportazione ASR timestampata, unità 85–86, 00:35:03–00:35:51; il segmento successivo inizia a 00:35:51. Nessun ascolto diretto attestato.

**Domanda di applicazione.** Una foto non mostra il danno dichiarato. Posso classificarlo subito come frode?

**Risposta.** No. Prima verifica bene, data, campo visivo e qualità della foto, poi confronta le altre prove. Nel caso del tetto sud ripreso solo da nord manca proprio l’osservazione necessaria. Anche un’incompatibilità verificata richiede un processo di valutazione: non dimostra da sola intenzione fraudolenta.

**Feedback.** Risposta forte: distingue “non visibile” da “inesistente”, osservazione da interpretazione e discrepanza da intenzione. Risposta da correggere: “la foto è un dato oggettivo, quindi il cliente mente”; trascura ciò che la foto non mostra e le alternative da verificare.


### Quando il modello è incerto: fallback, revisione e controllo del risultato

Parafrasi circoscritta. La parte finale del testo richiama validazione, un piano alternativo e il ritorno a un processo ordinario quando la stima non è abbastanza affidabile. Il dettaglio numerico dell’esempio non definisce una regola universale. Il nucleo utile è progettare prima che cosa accade quando il modello non può sostenere una decisione. La procedura seguente è spiegazione aggiunta.

Fallback è il percorso alternativo previsto per proseguire quando il percorso principale non è utilizzabile. Può essere una regola già verificata, una decisione rinviata se il tempo lo consente oppure human review, cioè l’esame da parte di una persona con informazioni e autorità per intervenire. Non basta mostrare “bassa confidenza” sulla dashboard: occorre stabilire chi riceve il caso, entro quando decide e che cosa il sistema fa nell’attesa. Il processo precedente non diventa automaticamente sicuro: va verificato anche lui.

Confidence score è un numero prodotto o associato al modello. Per usarlo occorre sapere che cosa misura e come è stato validato. Se uno score è presentato come probabilità, calibration significa verificare se gruppi di casi con una probabilità simile mostrano frequenze coerenti nei dati pertinenti. Una formula espressa in percentuale non prova calibrazione; uno score alto non corregge dati mancanti o una situazione diversa da quelle valutate. La decisione sulla soglia dipende da costo degli errori, conseguenze, dati di validazione e capacità di revisione, non dal valore 85% citato nell’ASR.

Passaggi. (1) Definisci decisione, tempo utile e conseguenza dell’errore. (2) Verifica il modello su casi non usati per costruirlo e sulle condizioni d’uso previste. (3) Stabilisci segnali di arresto o escalation, cioè passaggio a un responsabile: dati mancanti, input fuori dal campo verificato, modello indisponibile o affidabilità insufficiente secondo criteri validati. (4) Prova il fallback e assegna responsabilità e tempi, includendo il caso in cui il revisore non sia disponibile. (5) Registra input, proposta, motivo del passaggio e decisione effettiva. (6) Monitora errori, tempi, casi inviati a revisione e risultati: una coda umana sovraccarica può annullare il vantaggio del modello.

Esempio ipotetico svolto. Un magazzino usa una previsione per proporre il riordino. Oggi mancano le giacenze di un negozio. Uno score apparentemente alto non rende completa l’informazione: il sistema segnala il campo mancante, sospende la proposta automatica per quel negozio e la invia al responsabile. Nell’attesa usa il comportamento autorizzato e già provato per l’eccezione, con un tempo limite esplicito. Il responsabile controlla stock e ordini in viaggio prima di decidere; il sistema conserva esito e motivo. Non si inventa una giacenza e non si aspetta indefinitamente che qualcuno intervenga.

Limiti. Human review non significa che una persona approvi automaticamente la proposta; deve poterla capire, correggere o rifiutare. Un fallback va provato su casi realistici e quando le dipendenze si guastano, non solo quando tutto funziona. La qualità del sistema include conseguenze degli errori, continuità del servizio e tempo fino alla decisione, oltre alla metrica del modello. Nessun esempio qui certifica sicurezza, risparmio o conformità di un impianto reale.

**Fonte e limiti:** Campana, esportazione ASR timestampata: unità 159, 01:08:27; unità 164–165, 01:10:42–01:11:46. Il valore “85%” compare nell’esempio ASR senza definizione validata della misura; non viene adottato come soglia generale. Nessun ascolto diretto attestato.

**Domanda di applicazione.** Il modello mostra uno score del 90%, ma manca un dato indispensabile. Posso eseguire comunque la proposta?

**Risposta.** No. Prima occorre sapere che cosa rappresenta lo score e se il caso resta nel campo validato. Il dato indispensabile mancante attiva la gestione dell’eccezione: acquisirlo, usare un fallback verificato o passare a un responsabile nei tempi previsti. Il 90% è un numero ipotetico dell’esercizio, non una soglia operativa.

**Feedback.** Risposta forte: separa score, qualità dell’input e responsabilità dell’azione; descrive un percorso alternativo concreto. Risposta da correggere: “sopra l’85% possiamo fidarci”; trasforma un dettaglio ASR non validato in regola universale e ignora il dato mancante.




### Conoscenza, capacità e direzione

**Fonte slide 6.** Triade grafica knowledge, capability, meaning & direction. Knowledge, capability e meaning & direction della slide indicano tre requisiti di una decisione guidata dai dati.

**Meccanismo.** Knowledge è comprendere segnali e qualità; capability è poter intervenire con persone e tempi adeguati; meaning & direction definisce l’esito desiderato e i costi accettabili. Il numero da solo non coordina questi elementi.

**Esempio ipotetico svolto.** Un negozio sa che un prodotto finisce il sabato, può ordinare entro venerdì e vuole evitare sia rotture sia invenduto. Confronta la nuova regola con quella precedente. Se il fornitore consegna solo lunedì, la conoscenza non diventa azione utile.

**Limite.** La figura non misura quanto dei tre requisiti possieda un’impresa; dichiarare un obiettivo non prova fattibilità o beneficio.

**Richiamo attivo.** Il modello trova il problema ma nessuno può cambiare l’ordine: che cosa manca? **Feedback:** Manca capability: l’informazione arriva, ma non può modificare la scelta nel tempo necessario.

### 175 ZB e 120.000 anni: seguire le unità

**Fonte slide 12.** Stima storica 175 ZB/anno≈480 EB/giorno e calcolo a 1 Gbit/s: circa 120.000 anni per scaricare un giorno globale. La slide usa la stima storica 175 ZB/anno≈480 EB/giorno e domanda quanto durerebbe un download a 1 Gbit/s.

**Meccanismo.** Con unità decimali, 480 EB=480×10¹⁸ byte=3,84×10²¹ bit. A 10⁹ bit/s servono 3,84×10¹² secondi; divisi per circa 31,5 milioni di secondi/anno danno circa 122.000 anni, arrotondati dalla slide a 120.000. Un gigabit non è un gigabyte.

**Esempio ipotetico svolto.** Immagina un unico collegamento che operi sempre a 1 Gbit/s senza pause. La stima di un solo giorno mondiale richiederebbe circa 120.000 anni su quel canale: il confronto illustra perché occorre selezionare dati pertinenti, non copiare tutto per decidere.

**Limite.** 175 ZB era una previsione storica attribuita nella slide, non una misura corrente. Il calcolo ignora overhead, parallelismo e diverse definizioni dei dati prodotti.

**Richiamo attivo.** 1 Gbit/s equivale a 1 GB/s? **Feedback:** No. Un byte ha 8 bit: idealmente 1 Gbit/s=0,125 GB/s. Confonderli riduce falsamente il tempo di otto volte.

### Undici terabyte nel weekend di gara

**Fonte slide 13.** Circa 11 TB scambiati da un team F1 durante un weekend; sensori, simulazioni e video alimentano decisioni di gara. La slide attribuisce a un team F1 circa 11 TB trasferiti fra circuito e fabbriche durante un weekend e propone equivalenti visivi.

**Meccanismo.** Con unità decimali, 11 TB≈11.000 GB e 11.000/256≈43 telefoni; usando invece 1 TB=1.024 GB si ottengono 44. La slide indica 44 senza esplicitare la convenzione. Dividere 11 TB decimali per 2,7 milioni di foto implica circa 4 MB/foto; per 2.200 film, circa 5 GB/film. Sono dimensioni assunte, non universali.

**Esempio ipotetico svolto.** Un’anomalia gomme arriva prima del pit stop; il team confronta telemetria, pista e strategia. Se l’avviso arriva dopo il pit stop, i dati del weekend non aiutano quella decisione. Gli 11 TB riguardano il team, non una sola auto.

**Limite.** Cifra ed equivalenti sono esempi della slide, non misure qui verificate. “Analysed within seconds” non significa che ogni byte del weekend sia processato in pochi secondi.

**Richiamo attivo.** I 44 telefoni dimostrano la composizione esatta dei dati del team? **Feedback:** No. È un’analogia basata su 256 GB ipotetici per telefono e arrotondamenti.

### La pila di libri oltre Plutone

**Fonte slide 14.** Analogia: 480 EB/giorno≈480 trilioni di libri da 1 MB; pila da 3 cm/libro≈14 miliardi km, oltre Plutone. La slide trasforma 480 EB/giorno in libri ipotetici da 1 MB e spessore 3 cm.

**Meccanismo.** 480 EB=480×10¹² MB decimali. Se un libro contiene esattamente 1 MB, sono 480×10¹² libri; moltiplicando per 0,03 m si ottengono 14,4×10¹² m, cioè circa 14 miliardi km. La slide usa Plutone come confronto intuitivo.

**Esempio ipotetico svolto.** Per spiegare la scala a un compagno, scrivi prima “1 libro=1 MB” e “spessore=3 cm”, poi esegui le conversioni con unità. Se lo spessore raddoppia, la pila raddoppia benché i dati stimati restino uguali.

**Limite.** È una metafora aritmetica fondata su una stima storica, non una pila reale né una nuova misura astronomica. Il confronto spaziale dipende dalla distanza scelta.

**Richiamo attivo.** Perché la lunghezza cambia se raddoppia lo spessore del libro? **Feedback:** La formula è numero libri×spessore: la metafora dipende dalle ipotesi anche quando la quantità di dati non cambia.

### La crescita globale nella figura è una serie di stime

**Fonte slide 19.** Infografica di crescita globale: circa 2 ZB 2010, 64 ZB 2020, 180 ZB 2025, scenario 17 YB 2050 e 90× 2010–25. La figura indica circa 2 ZB nel 2010, 64 ZB nel 2020, 180 ZB nel 2025 e uno scenario di 17 YB nel 2050; 180/2=90×.

**Meccanismo.** Con prefissi decimali 1 YB=1.000 ZB, quindi 17 YB=17.000 ZB. Per leggere la curva verifica anno, unità, cosa viene contato e se il punto è stima storica o scenario futuro. I 180 ZB della figura e 175 ZB della slide 12 non vanno fusi come osservazioni identiche.

**Esempio ipotetico svolto.** Un manager deve dimensionare lo storage della propria impresa: invece di applicare il 90× mondiale, misura i propri flussi per mese, copie e conservazione. Quando incontra 175 e 180 ZB per il 2025, controlla fonte e definizione prima di confrontarli.

**Limite.** Il 2050 è scenario illustrativo; nessuno dei punti è qui promosso a misura attuale verificata. Il 90× non autorizza una proiezione lineare fino al 2050.

**Richiamo attivo.** Il rapporto 180/2 dimostra che ogni azienda è cresciuta 90×? **Feedback:** No. È un rapporto fra due stime globali della figura, non un risultato di una singola azienda o una legge futura.

### Quantify e datify: trasformare senza confondere

**Fonte slide 20.** Slide-lancio QUANTIFY / DATIFY. La slide lancia QUANTIFY/DATIFY come passaggio dalla realtà a una rappresentazione in dati.

**Meccanismo.** Quantify assegna una misura a una proprietà definita, come minuti di attesa. Datify rende registrabili aspetti di un comportamento o processo, come timestamp, categorie e passaggi di un ticket. Prima si definiscono oggetto, unità, evento e scopo; poi si controlla ciò che la traccia omette.

**Esempio ipotetico svolto.** Un servizio clienti misura 48 ore fra apertura e chiusura di un reclamo e registra passaggi fra operatori. Se l’attesa dipende da un ricambio esterno, la sola durata non spiega il collo di bottiglia; il processo datificato fornisce contesto da verificare.

**Limite.** Sono spiegazioni didattiche aggiunte ai termini della slide, non parole esatte del docente. Datificare non rende l’esperienza intera o neutra; servono anche diritti d’uso.

**Richiamo attivo.** Contare click equivale a misurare la soddisfazione? **Feedback:** No. Il click è una traccia osservabile; la soddisfazione è un concetto diverso che richiede definizione e controlli propri.

### Esperienza, traccia, metrica: leggere la datification

**Fonte slide 21.** Infografica datification: esperienze umane diventano connessioni, click, follower, biometria, dashboard e rating. L’infografica connette amicizia, interesse, salute, prestazione e reputazione a click, follower, biometria, dashboard e rating.

**Meccanismo.** Il percorso è esperienza→evento registrato→variabile→interpretazione. Una connessione può essere contata ma non misura automaticamente amicizia; un segnale corporeo non misura salute nel suo insieme. La scelta della traccia delimita la conclusione.

**Esempio ipotetico svolto.** Una piattaforma vede 2.000 click e 30 acquisti: 30/2.000=1,5%. Prima di chiamarlo interesse controlla periodo, click ripetuti e bot. Se 500 click sono automatici, cambiano denominatore e interpretazione.

**Limite.** I numeri della grafica sono illustrativi, non dati verificati. Ridurre relazioni umane a follower o rating nasconde aspetti non raccolti e può alterare gli incentivi.

**Richiamo attivo.** Un conteggio di follower prova una buona reputazione? **Feedback:** No. Conta connessioni secondo regole della piattaforma; reputazione richiede qualità, contesto e altre verifiche.

### Dall’opportunità al pitch: svolgere il brief

**Fonte slide 28.** Brief visivo attività: scegliere opportunità e settore, progettare dati/problema, creare valore, pitch; dichiarare rischio e safeguard. La slide di gruppo chiede choose, design, create value e pitch, più un rischio e un safeguard.

**Meccanismo.** Choose seleziona opportunità e settore; design specifica problema e dati; create value dice chi beneficia e quale decisione cambia; pitch collega prova, esito e tutela. Un rischio va abbinato a un controllo concreto.

**Esempio ipotetico svolto.** Un produttore di ascensori sceglie sell outcomes: misura ore di fermo per macchina, testa una manutenzione suggerita su edifici comparabili e propone un contratto basato sulla disponibilità. Rischio: sensore errato; tutela: verifica tecnica e contestazione dei conteggi da parte del cliente.

**Limite.** La slide è un brief, non prova che gruppi o imprese abbiano completato il lavoro. Beneficio e ricavo restano ipotesi fino a contratti, costi ed esiti verificati.

**Richiamo attivo.** Quale fase collega dato e beneficio per il cliente? **Feedback:** Create value: dichiara la decisione o il servizio cambiato e come misurarne l’esito. Un pitch senza questa catena è una promessa.

### Iceberg dei formati: una metafora

**Fonte slide 35.** Immagine iceberg che etichetta structured, semi-structured e unstructured senza proporzioni dichiarate. L’immagine etichetta structured, semi-structured e unstructured data attorno a un iceberg.

**Meccanismo.** Le categorie descrivono quanto schema è esplicito: tabella regolare, campi flessibili come JSON, o contenuti come audio e immagini che richiedono estrazione o annotazione. Forma e qualità sono domande diverse.

**Esempio ipotetico svolto.** Un retailer combina ordini in tabella, eventi web in JSON e foto degli scaffali. Per spiegare una rottura di stock collega codice prodotto, negozio e ora; la foto aggiunge contesto solo se mostra lo scaffale corretto.

**Limite.** L’area disegnata dell’iceberg non misura proporzioni fra categorie. La parte sommersa non è automaticamente più numerosa, utile o vera.

**Richiamo attivo.** Puoi ricavare la quota reale di dati non strutturati dalla figura? **Feedback:** No. Non è un grafico quantitativo con unità, campione e periodo; è una metafora delle forme.

### Valore e complessità: leggere gli assi con cautela

**Fonte slide 52.** Figura delle quattro analytics con cerchi annidati e assi value e complexity crescenti. La figura annida descriptive, diagnostic, predictive e prescriptive analytics su assi di value e complexity crescenti.

**Meccanismo.** Le domande cambiano l’output: descrivere, cercare spiegazioni, stimare, confrontare azioni. Procedere verso prescrizione può richiedere più ipotesi e controlli, ma value e complexity non sono misure della figura: una descrizione semplice può avere più valore di un modello non usato.

**Esempio ipotetico svolto.** Un report mostra un raddoppio di resi il lunedì. Un controllo descrittivo scopre un import duplicato ed evita un ordine sbagliato. Un algoritmo che propone sconti sarebbe più complesso senza risolvere quell’errore.

**Limite.** I cerchi annidati non impongono che ogni predictive contenga tutti i metodi diagnostic né che più complessità produca sempre più valore. Serve confronto con costi e baseline.

**Richiamo attivo.** La posizione più alta nella figura è sempre la scelta migliore? **Feedback:** No. È uno schema didattico: scegli il metodo che migliora la decisione con dati e costi sostenibili.

### Big data analytics: scala, metodo, decisione

**Fonte slide 55.** Big data analytics su dataset grandi e diversificati usa data mining, ML, predictive, text/NLP/statistica per insight e decisioni. La slide tratta grandi dataset eterogenei e cita data mining, predictive analytics, ML, text/NLP e statistica.

**Meccanismo.** Prima verifica se scala e varietà creano un problema reale; poi scegli il metodo in base alla domanda; infine prova se l’output cambia una decisione. Data mining cerca pattern, text/NLP tratta segnali linguistici, predictive stima esiti futuri.

**Esempio ipotetico svolto.** Un retailer collega ordini e reclami testuali. Definisce “reso concluso”, pulisce duplicati, raggruppa motivi nei testi e confronta un conteggio per prodotto con una previsione su mesi nuovi. Il buyer adotta l’output solo se migliora la gestione scorte rispetto alla regola attuale.

**Limite.** Tecniche “advanced” e volume non garantiscono insight. Testo libero può contenere dati personali; una correlazione fra parole e resi non dimostra una causa.

**Richiamo attivo.** NLP su molti file è automaticamente migliore di un report semplice? **Feedback:** No. Servono domanda, baseline ed esito utile verificato; la complessità aggiunta può non creare valore.

### Analyze: metodi distinti dopo la pulizia

**Fonte slide 59.** Analyze: data mining, predictive analytics e deep learning sono esempi dopo preparazione dei dati. La slide elenca data mining, predictive analytics e deep learning come opzioni dopo collect, process e clean.

**Meccanismo.** Data mining cerca gruppi o relazioni da interpretare; predictive stima un target su casi nuovi; deep learning è una famiglia di modelli a molti livelli per rappresentazioni complesse. Non imita letteralmente il ragionamento umano: la frase della slide è una semplificazione.

**Esempio ipotetico svolto.** Una fabbrica pulisce log dei sensori; esplora vibrazioni durante sovraccarico, prova a stimare guasti su macchine escluse dal training e valuta una rete profonda solo se batte una baseline semplice. Il tecnico considera anche i falsi allarmi.

**Limite.** Cluster non significa causa, previsione non significa intervento, e modello profondo non significa prestazione migliore. Output e test devono corrispondere alla domanda.

**Richiamo attivo.** Il deep learning è obbligatorio dopo data mining? **Feedback:** No. Sono opzioni per problemi diversi; scegli il metodo più semplice che risponde e verificalo su dati nuovi.

### Tre trappole dopo la messa in uso

**Fonte slide 61.** Tre trappole: più dati≠più valore, maggiore accuratezza≠miglior tecnologia, deploy≠affidabilità permanente. La slide contesta più dati=più valore, accuratezza massima=miglior tecnologia, deploy=affidabilità permanente.

**Meccanismo.** Valore richiede rilevanza, qualità e azione. La scelta tecnica considera accuratezza, costo, rischio, velocità e usabilità. Dopo il deploy possono cambiare dati, comportamenti e ambiente: monitorare input, errori ed esiti aiuta a rilevare drift e decidere se aggiornare o fermare.

**Esempio ipotetico svolto.** Un negozio raccoglie più click senza cambiare decisioni. Un modello B è leggermente più accurato di A ma produce la risposta dopo la scadenza dell’ordine: A può essere più utile. Sei mesi dopo cambia il catalogo; il team controlla errori per categoria e risultati di stock.

**Limite.** Non esiste soglia universale: una metrica in calo può dipendere da dati o logging cambiati. Indaga prima di attribuire il problema al modello.

**Richiamo attivo.** Perché una metrica ottima al lancio non basta per i mesi successivi? **Feedback:** Misura solo il test di allora. Il contesto può cambiare; senza monitoraggio di input, errori ed esiti reali non sai se il sistema continua ad aiutare.

## Ripasso a libro chiuso

1. Spiega con il negozio la differenza tra metrica tecnica e decisione aziendale. **Risposta:** la previsione è un input; ordine, scorte, margine e confronto col processo attuale stabiliscono il valore.
2. Perché un sensore più veloce può peggiorare un sistema? **Risposta:** propaga rapidamente un errore se misura male o genera allarmi che nessuno sa gestire.
3. Distingui descriptive, predictive e prescriptive sul rinnovo clienti. **Risposta:** descrivere il calo, stimare il rischio futuro e confrontare interventi economicamente sono tre domande diverse.
4. Disegna la data value chain fino al reuse. **Risposta:** un risultato deve raggiungere l'operatore, cambiare l'azione e produrre feedback, sempre entro diritti e scopo.

## Note di verifica e limiti

I numeri sulle dimensioni mondiali dei dati nelle slide sono stime storiche, non misure correnti; il valore «480» della slide 12 è in **exabyte**, mentre la trascrizione può renderlo in gigabyte. La slide 32 mescola prefissi: 1 YB = 10²⁴ byte, 1 YiB = 2⁸⁰ byte. «80–90% non strutturato» non è una quota universale verificata. Il censimento 1890 non ebbe 200 milioni o miliardi di abitanti: il dato corretto è 62.979.766. Nell'esempio clienti i numeri sono didattici, non dati di un'impresa identificata; non attribuire all'85% una base o un periodo non provati. Il testo delle due trascrizioni è stato esaminato; gli audio originali non sono stati ascoltati integralmente in questa lavorazione (**direct_audio_review: pending**).


