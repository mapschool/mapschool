---
title: mapschool
layout: default
language: it
---

# A scuola di mappe

Cos'è una mappa? Fino agli anni 80, le mappe erano documenti creati scrupolosamente a mano. Oggigiorno le mappe sono quasi sempre fatte con l'aiuto di un computer. Esse sono comunemente viste mescolate con direzioni di percorso, visualizzazioni e dispute sui confini amministrativi. Guardiamo più a fondo e pensiamo quali sono gli elementi fondanti delle mappe dal punto di vista del creatore.

Le mappe sono fondamentalmente composte da dati. I dati sono entità astratte, possono essere composti da miliardi di punti o solamente da pochi poligoni, oppure da registrazioni simil-fotografiche di colori e temperature. E' importante che i dati non siano vincolati ad uno specifico contesto d'uso.

Dai dati noi produciamo numeri, immagini e decisioni. Più comunemente facciamo immagini, in un processo chiamato 'simbolizzazione' - la decisione di quali elementi visuali rappresenteranno diverse parti di un insieme di dati. Analizziamo i dati, ovvero li trasformiamo, aggreghiamo e sintetizziamo per dare risposte diverse e rappresentare aspetti diversi della conoscenza. Simbolizzazione ed analisi sono spesso combinate, con la simbolizzazione che forma i limiti di quello che possiamo rappresentare e l'analisi che definisce gli aspetti dei dati sui quali ci concentriamo.

# Dati

Fondamentalmente, i dati geografici sono o **raster** o **vettoriali** - composti da pixel, o da geometrie. I due formati sono comunemente utilizzati insieme, come nel caso in cui dati vettoriali che rappresentano strade sono sovrapposti su dati satellitari raster.

## Raster

![](img/raster.png)

I dati **raster** sono come una fotografia che scatteresti con una fotocamera digitale: al livello di astrazione più basso, sono come una lista di pixel con un valore associato. Quando effettui un ingrandimento e guardi più da vicino i dati raster, ad un certo punto vedrai questi pixel discreti, e l'immagine apparirà 'pixelata'.

I dati raster sono usati nelle fotografie della Terra, come quelle scattate dai satelliti - ma questo è solo l'inizio. I pixel non hanno necessità di possedere un colore - ad esempio ogni pixel può avere un numero che rappresenta l'altezza e i dati raster nell'insieme immagazzinano dati relativi all'altitudine. Oppure i pixel potrebbero immagazzinare dati sulla temperatura o sul riverbero ed essere utili per lavori in campo ambientale.

##### Bande Raster

I pixel nei dati raster non sono necessariamente solo colore di riempimento: i loro contenuti sono detti ‘bande’. Una immagine normale ha tre bande familiari: Rosso, Verde, e Blu. Combinate esse producono una immagine alla quale siamo abituati. Alcuni dati raster possono avere meno bande, ad esempio solamente quella per l’Elevazione, ed altri ne possono avere molte di più - non solo colori visibili, ma lunghezze d’onda che noi non possiamo vedere, come l’infrarosso e l’ultravioletto. Quando i dati raster sono analizzati e mostrati, puoi combinarli e scegliere le bande da usare a seconda di ciò che stai cercando.

##### Formati Raster

I formati raster mirano a compattare i dati e renderli velocemente acccessibili per analisi e visualizzazione. Alcuni di essi sono versioni con l’aggiunta di informazioni geospaziali di comuni formati d’immagine, come [GeoTIFF](http://trac.osgeo.org/geotiff/) e JPEG2000.

Internamente, i formati di dati raster gestiscono due compiti - impacchettare dati all’interno dei pixel, ed archiviare la relazione tra quei pixel e luoghi reali sul globo - l’'estensione' dei dati.

## Vettori

![](img/vector_types.png)

I dati **vettoriali** contengono geometrie basilari piuttosto che dati sotto forma di pixel. Non importa quanto si zoomerà sui dati vettoriali, non vedrai i pixel: i dati contenuti sono composti da geometrie come punti e linee, e sono solo convertiti in una immagine quando necessario.

Dati vettoriali servono per archiviare strade, edifici, punti di interesse, ed altre cose che hanno una posizione nel mondo.

##### Formati vettoriali

Il formato vettoriale più diffuso è lo [Shapefile](http://it.wikipedia.org/wiki/Shapefile) - è un semplice formato che stranamente suddivide i dati necessari in quattro file distinti - `.shp` (dove risiedono le geometrie), `.prj` (una stringa che descrive la proiezione utilizzata), `shx` (un indice per abilitare ricerche veloci) e `.dbf` (un file contenente il database di tutti i dati associati alle geometrie descritte nel file .shp). Molti di questi file sono composti da dati di tipo binario, se li si aprisse un editor di testo esso non mostrerà nulla di leggibile a parte il file .prj, che definisce la proiezione in solo testo. Il database (.dbf) può essere letto da LibreOffice Calc perché il suo formato deriva da una vecchia specifica di base di dati. Ciononostante, questa vecchia specifica limita la quantità dei dati degli attributi che puoi archiviare in uno shapefile. Per esempio: la dimensione di un file dbf non può eccedere i 2 GB, i nomi dei campi non possono contenere spazi e non possono eccedere i 10 caratteri, non sono supportati ne' i valori NULL ne' molti caratteri speciali, [eccetera](http://it.wikipedia.org/wiki/Shapefile#Limiti).

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), e [KML](http://developers.google.com/kml) sono nuovi formati basati rispettivamente sulle codifiche [JSON](http://www.json.org/) e [XML](http://it.wikipedia.org/wiki/XML). Essendo basati su testo, essi tendono ad essere più semplici da implementare rispetto agli Shapefile e, combinati con ulteriore flessibilità e caratteristiche, essi sono diventati lo standard nei nuovi software per il web. L'inconveniente del formato GeoJSON è costituito dal fatto che esistano meno strumenti per confrontare facilmente proprietà fra le occorrenze, quindi la pulizia e l'analisi dei dati è impegnativa.

### Topologia

Oltre ad archiviare luoghi e forme, alcuni dati vettoriali tengono traccia della topologia, cioè le relazioni tra forme diverse. Per esempio, i confini amministrativi spesso si toccano - puoi stare con un piede in Arizona e l'altro in Nuovo Messico. Molti dati geospaziali però avranno solo una forma che rappresenta l'Arizona ed un'altra che rappresenta il Nuovo Messico, con i due confini che si sovrappongono ma che non hanno altra associazione.

Questo diventa complicato quando vuoi chiederti ad esempio 'quali stati si toccano?' o semplificare le forme degli oggetti preservando l'allineamento dei confini. Usiamo il concetto di topologia: alcuni dati vettoriali, invece di archiviare una forma per l'Arizona ed un'altra per il Nuovo Messico, salvano un sacco di linee e tengono traccia di quali formano il confine di quale oggetto. Quindi il confine tra Arizona e Nuovo Messico è un'unica linea che è usata per disegnare il confine di entrambi gli stati e, se modifichi la linea, cambierà la forma di entrambi gli stati.

## Geocodifica

Una gran quantità di dati geografici non é nè vettoriale nè raster: invece di essere composta da numeri comprensibili dai computer, è memorizzata come dati testuali, e include riferimenti a toponimi, strade, indirizzi e altri strumenti di identificazione.

Sfortunatamente, non è possibile mettere semplicemente questi dati su una mappa. C'è un processo indiretto e spesso inpreciso coinvolto nel trasformare parole come 'Stati Uniti' nel punto '-120, 40'. Questo processo è quello che chiamamo **geocodifica**. La geocodifica si basa su basi di dati di toponimi stradali, nazioni, ed altro ancora, insieme alle posizioni geografiche, e gli algoritmi tentano di trovare il corrispettivo migliore per inserimenti impreecisi.

### Geocodifica inversa

Il processo opposto è la **geocodifica inversa**. Questo trasforma dati geografici come i punti in testo leggibile da persone, ad esempio `Stati Uniti` o `1714 14th Street`. Come per la geocodifica, è approssimativo - un luogo sulla Terra può essere all'interno di confini sovrapposti o in conflitto oppure tra indirizzi diversi.

La geocodifica e la geocodifica inversa sono difficoltose: errori sulle coordinate della posizione, indirizzi malamente formattati, ed una griglia di strade ed edifici in variazione continua contribuiscono alla difficoltà di convertire indirizzi in coordinate, o viceversa.

<a class='further-reading' href='/geocoding.it.html'>Leggi l'approfondimento sulla geocodifica</a>

## Raccolta dei dati

I dati alla base delle mappe sono stati raccolti in molti modi durante il corso degli anni - ogni fonte dai diari dei navigatori ai tweet geolocalizzati. Attualmente ci sono un paio di sorgenti maggiori che meritano una discussione:

![](img/gps.jpg)

Il **GPS**, la costellazione di satelliti che fornisce al tuo cellulare un punto blu sulla mappa, è il fondamento della raccolta accurata di dati vettoriali. Gli agrimensori guideranno con unità GPS altamente accurate e combineranno i loro risultati in un qualcosa di affidabile.

I **satelliti e gli aeroplani** da osservazione raccolgono la maggior parte dei dati raster che oggi possediamo, scattando costantemente immagini da altitudini differenti e combinandole in qualcosa che assomiglia ad una fotografia del mondo. Gli stessi sensori catturano quelli che chiamiamo 'spettri non visibili', come la luce infrarossa che è utile per mappare l'agricoltura e la deforestazione. Tra i vari armamentari si include il [LiDAR](http://it.wikipedia.org/wiki/Lidar), un tipo di sensore laser che misura l'altitudine e ci fornisce dati raster su di essa.

**Le aziende, i governi, e le comunità**  mantengono diverse mappe del mondo di dettaglio variabile. Ad esempio, [Google](http://maps.google.com) ed [OpenStreetMap](http://www.openstreetmap.org/) si focalizzano sul mappare le strade ed i dettagli su di esse, e fonti come il [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) ed il [Natural Earth](http://www.naturalearthdata.com/) tengono traccia dei confini politici.

## Archiviazione

Ci sono diversi modi di conservare dati geografici. Possono essere conservati come stampe, ma recentemente è diventato molto popolare conservarle in un modo facilmente accessibile e condivisibile, digitalmente.

Ci sono diversi tipi di file e convenzioni per archiviare dati geografici, e di conseguenza una varietà di strumenti per tradurre tra le diverse rappresentazioni. I dati sono archiviati in basi di dati o file individuali, ma la differenza pratica tra le due non è necessariamente importante.

# Informazione

Le mappe sono informazione visuazzizata: ad un capo giacciono i problemi legati ai rifermenti, numeri, ed archiviazione - gli aspetti pratici di come registriamo e differenziamo differenti luoghi della Terra. Tra dati e visualizzazione c'è una trasformazione che chiamiamo 'proiezione' - con la quale luoghi sulla Terra diventano luoghi su superfici generalmente piatte, come stampe o schermi di computer. E poi, finalmente, decidiamo i dettagli dei colori, toni, e simbolismi che provano a tradurre dettagli riguardo ai dati in immagini che le persone possono capire ed interpretare.

## Latitudine & Longitudine

Il modo più comune di archiviare luoghi sulla Terra è via i valori di latitudine e longitudine. Storicamente esse sono rappresentate nella notazione sessagesimale, come `38° 12'`, ma il nuovo standard è di rappresentarle come semplici numeri, ad esempio `38.2`, che per un computer sono facili da capire.

![](img/latlon.png)

I valori di **latitudine** variano fra -90 al Polo Sud e 90 al Polo Nord. Lungo l'equatore il valore di latitudine è 0.

I valori di **longitudine** variano fra -180 e 180, e  la linea dove questi si incontrano, che attraversa il Pacifico in direzione nord/sud, è chiamata antimeridiano. Il valore 0 è definito come Primo Meridiano, e attraversa l'Africa e l'Europa (in particolare il Royal Observatory di Greenwich, Londra).

La combinazione di latitudine e longitudine è chiamata comunemente coordinata, e può essere rappresentata da 'latitudine, longitudine', o 'longitudine, latitudine': storicamente lo standard era il primo, ma il secondo ha guadagnato popolarità recentemente perchè rispecchia l'ordinamento 'X,Y' delle coordinate del piano euclideo in matematica.

L'ordinamento delle coordinate può causare qualche confusione, poichè i software per mappare basati sul web spesso si aspettano 'latitudine, longitudine', mentre molti formati di comunicazione specificano 'longitudine, latitudine'.

A volte vengono registrate come dati più informazioni rispetto alla sola latitudine e longitudine: può essere inclusa l'altitudine, l'orario di acquisizione ed altri fattori. Nel caso dell'altitudine, essa è generalmente archiviata come una terza coordinata, come 'longitudine, latitudine, altitudine'.

## La Forma della Terra

![](img/earth-shapes.jpg)

Archiviare e fornire una rappresentazione del mondo ci pone la questione di quale forma abbia - latitudine e longitudine possono essere mappate su una sfera perfetta e viceversa, manenendo la loro accuratezza spaziale?

Siccome la Terra è un oggetto che ruota su se stesso ed i suoi componenti possono cambiare forma, essa è gonfia nel mezzo - pertanto, invece di essere una sfera, è in realtà di forma più simile ad uno [sferoide oblato](https://it.wikipedia.org/wiki/Ellissoide) (schiacciato ai poli). Se si guarda da più vicino, questo non è neppure completamente vero - la Terra è ricoperta da [differenze di elevazione](http://it.wikipedia.org/wiki/Topografia) come montagne e valli, ed anche modifiche fatte dall'uomo come le città.

Per il lavoro quotidiano usiamo diverse stime di questa forma: standard quali il [WGS84](http://it.wikipedia.org/wiki/WGS84) definiscono valori precisi per la lunghezza di entrambi gli assi della Terra, quindi possiamo stimare rispetto ad un [ellissoide di riferimento](http://it.wikipedia.org/wiki/Ellissoide_di_riferimento) piuttosto che ad una sfera. Le misure locali e la scienza che si basa su valori precisi di superficie possono usare [modelli di geoide](https://it.wikipedia.org/wiki/Geoide), che sono calcoli tridimensionali di altezze degli oceani teoriche.

Questa branca delle scienze della terra, chiamata [geodesia](http://it.wikipedia.org/wiki/Geodesia), è un progetto in continua evoluzione visto che la nostra abilità nel modellare e misurare la terra si muove velocemente e la Terra stessa cambia forma.

## Proiezione

![](img/projections.jpg)

Le proiezioni sono quelle equazioni matematiche che riescono a trasformare il mondo in una qualunque forma piatta che sta su una stampa o su uno schermo di computer. E' un compito ingarbugliato da svolgere questa trasformaziione - non c'è modo di piazzare il mondo su uno schermo senza distorcerlo in qualche modo. Puoi perdere o la direzione, o la dimensione relativa, od uscirne con qualcosa con un aspetto veramente strano.

<a class='further-reading' href='/datum.it.html'>Leggi l'approfondimento sui datum geografici</a>

## Simbolizzazione

"Simbolizzazione" è una parola elaborata che indica i modi con i quali i dati sono trasformati in grafica nel modo delle mappe.

I dati fondamentalmente non assomigliano a niente: una lista di valori di pixel o di percorsi stradali è rappresentata ugualmente da un foglio di calcolo od un grafico così come lo è su una mappa. Pertanto  'convertire' non è la parola giusta per quello che facciamo con i dati: la decisione è presa sul come rappresentarli.

Le tecniche simboliche includono tutto ciò che è rappresentabile nella grafica o nelle tre dimensioni, perciò diamo una occhiata ad alcune:

## Sequenziale & Categorico

![](img/scales.jpg)

La simbolizzazione tende ad evidenziare due caratteristiche differenti dei dati: la sequenzialità e la categoricità. I dati sequenziali, o continui, possono essere anche detti lineari -tendono ad essere numeri in un certo intervallo, come le gradazioni comprese fra 0 e 100, o l'elevazione. I dati categorici, o discreti, sono invece compresi in un insieme di valori - come 'vero', 'falso', 'democratico' o 'repubblicano'.

Questa divisione fra i dati è una dei principali problemi della simbolizzazione - una fonte di dati sequenziale starebbe bene con una mappa con punti scalati o una scala graduata di colori su di un raster, mentre i dati categorici sono generalmente mostrati con diversi simboli per i marcatori, o un insiem discreto di colori.

### Coropleti

Le mappe coropletiche preservano i confini e le forme di luoghi esistenti e rappresentano i dati cambiando i loro colori, pattern o consistenza. Un esempio familiare di questo tipo di mappe si trova nei risultati delle elezioni o nella disposizione demografica, dove i dati sono percentuali per alcune parti stabilite di territorio - un valore per circoscrizione elettorale o sezione di censimento.

Le mappe coropletiche sono una scelta naturale per dati come tassi, densità o percentuali. Non sono raccomandate per valori assoluti: poichè mantengono le aree, tendono a sovraenfatizzare grandi caratteristiche. E, siccome le mappe a coropleto si basano sulle differenze di colori per rappresentare le informazioni, è importante che i colori siano ben scelti per essere visibili ai daltonici, comprensibili e coerenti.

<a class='further-reading' href='/colors.it.html'>Maggiori informazioni sui colori</a>

### Puntuali

Le mappe puntuali sono una alternativa migliore per valori assoluti - l'unica geometria che preservano è un unico punto per ogni oggetto.

Il punto o il marcatore specifico usato in qeusto modo varia tremendamente - colorare i punti in base al loro valore sequenziale o categorico può essere utile, ma i punti possono essere anche scalati su dimensioni differenti per mostrare il loro valore relativo. Questi simboli scalati possono essere di qualunque forma o figura, come cerchi, quadrati o immagini di ciò che rappresentano. Nei casi dove ci sono valori multipli che si sommano, grafici a torta scalati possono essere un modo fantastico di visualizzare quello che altrimenti sarebbe un insieme complesso di dati.

Bisogna aver cura di non mostrare troppi punti in una volta, poichè renderebbe la mappa difficile da leggere. Nei casi dove ci sono troppi punti, un coropleto con valori aggregati dai punti potrebbe essere una buona alternativa. Un'altra alternativa è l'uso della clusterizzazione, nella quale i punti ammassati sono raggruppati insieme finchè la mappa non viene ingrandita con lo zoom.

## Pubblicazione

## Analisi

Analisi raster e vettoriale come aggregazione e trasformazione

### Da vettore a raster

E' possibile muoversi tra i due tipi di dati, nonostante possano sembrare completamente diversi, e questo è in realtà abbastanza comune: non c'è però un modo diretto.

Tipicamente i dati vettoriali diventano sempre raster - quando sono mostrati vengono detti 'rasterizzati' o 'renderizzati': gli schermi dei computer e le stampanti operano a livelo di pixel, non con le linee e le forme. Questa conversione è imperfeta: ricordati che i dati vettoriali non sono basati su pixel, pertanto non potrai mai zoomare e vedere oggetti sfocati. Dunque, in generale, quando i dati vettoriali vengono convertiti in un formato raster, non puoi ritrasformare quella rappresentazione raster esattamente nella sorgente.

A volte convertiamo i dati vettoriali in raster prima del tempo - a volte per fare qualche tipo di analisi è più semplice condurre operazioni a livello di pixel.

### Da raster a vettoriale

Allo stesso modo, i dati raster possono esser vettorizzati in un certo numero di modi. Sulle immagini satellitari raster della Terra, le persone disegnano, o 'tracciano', linee che rappresentano strade, punti che rappresentano case, o poligoni che rappresentano edifici. Questo ci permette di avere una versione dei dati sulla quale possiamo fare più cose - puoi calcolare rotte stradali dai dati vettoriali delle strade, ma non puoi farlo con le immagini satellitari delle strade.

### Simulazione

Con i dati geografici, è possibile simulare certi processsi naturali, e questa simulazione è una gran parte di quello che fanno i mappatori. Forniti dati di elevazione per una catena montuosa, è possibile simulare zone illuminate e zone d'ombra per le montagne sotto una sorgente luminosa, in un processo chiamato hillshading.

Sono possibili anche processi più complessi, come determinare dove l'acqua si raccoglierà dopo un temporale, ovvero uno 'spartiacque', o determinare tutti i punti sulla mappa che saranno visibili da una particolare cima, chiamato 'orizzonte di vista'.

### Aggregazione

La forma più comune di aggregazione è l'idea di somma - dato un grande gruppo di numeri, puoi sommarli insieme per avere una idea di tutti insieme in una volta. Per esempio, il PIL di una nazione è immediatamente informativo rispetto all'elencare semplicemente ogni contributo individuale all'economia.

L'aggregazione nelle mappe è usata in modo simile. Forniti dati granulari, come milioni di sngoli redditi familiari, puoi usare algoritmi geografici per sommare o fare la media di valori all'interno di specifiche aree del mondo, per mostrare il reddito medio per paese o città.

![](img/binning-wide.jpg)

L'aggregazione è usata anche insieme ad una tecnica chiamata **binning**: dati molti punti discreti, puoi disegnare forme arbitrarie sulla mappa, come quadrati od esagoni, e fare il totale di tutti i punti che ricadono all'interno di ogni forma. In questo modo, invece di avere milioni di piccoli punti che sono difficili da comprendere in una occhiata, puoi rappresentare la mappa come un coropleto.

### Interpolazione

Mentre l'aggregazione prende molti dati e li distilla in qualcosa di più semplice da analizzare e visualizzare, l'interpolazione 'riempe gli spazi vuoti' tra i valori. L'interpolazione è spesso usata per insiemi di dati come l'elevazione, dove hai valori di dati raster che registrano l'altezza di ogni centimetro di una montagna, ma dove ci sono alcuni luoghi che mancano nell'insieme - quello che i programmatori chiamano valori `null` (nulli).

L'interpolazione guarda i valori intorno agli spazi vuoti ed assume che i valori mancanti siano basicamente simili a quello che li circonda - un pixel mancante in cima ad una montagna sarà considerato abbastanza in alto, mentre uno in una vallata sarà considerato essere in basso.

Ci sono molti modi per interpolare i dati puntuali:

- Le **heatmap** assegnano ad ogni punto un peso e rappresentano la densità di valori in colori più "caldi".
- Le **linee di contorno** prendono campioni puntuali di dati e disegnano linee intorno ad essi che rappresentano un valore continuo stimato. Le mappe dell'elevazione usano spesso questa tecnica.
- Una **RTI** (Rete di Triangolazione Irregolare) disegna triangoli tra punti che possono essere usati per visualizzare terreni.
- I **diagrammi di Voronoi** prendono un insieme di punti e li trasfomano in poligoni che includono l'area intorno.

## Postfazione

Speriamo che questa sia stata una lettura illuminante ed d'ispirazione: c'è così tanto potenziale in questo campo e così tante questioni aperte. Le mappe sono un argomento connesso, che si espande in arte, matematica, fisica e molto di più.

Ci piacerebbe se potessi [segnalare problemi o portare i tuoi suggerimenti](https://tmcw.wufoo.com/forms/mapschool-feedback/) che ti vengono in mente durante la lettura.

### Licenza

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/deed.it)
