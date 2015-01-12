---
title: mapschool
layout: default
language: nl
---

# map school

Wat is een kaart? Tot de jaren 80 werden kaarten met de hand gemaakt. Een kostbaar proces. Vandaag de dag worden kaarten veelal met de hulp van computers gemaakt. Kaarten zijn tegenwoordig een alledaags verschijnsel. Zaken als navigatie, visualisatie en politieke grenzen behoren steeds vaker tot standaard eigenschappen van de kaart. Laten we beginnen te kijken naar de basis elementen van digitale kaarten, vanuit het perspectief van de kaartenmaker.

Digitale kaarten bestaan uit data. Data is een abstracte term. Data kan bestaan uit miljarden punten of slechts een paar polygonen, of een fotografische opname van kleur en temperatuur. Data zegt niets over een bepaalde toepassing.

Van data kunnen we getallen, afbeeldingen en beslissingen afleiden. Meestal maken we afbeeldingen. Dit proces heet 'symbolisatie' - bepalen welke visuele elementen iets zeggen over delen van een dataset. We analyseren data, wat wil zeggen dat we transformeren, aggreregeren en samenvatten om verschillende antwoorden te kunnen geven en verschillende aspecten van deze kennis te kunnen uitdragen. De twee aspecten van symbolisatie worden meestal gecombineerd. Symbolisatie bepaalt de limieten waarbinnen we data kunnen vertegenwoordigen en analyseren.

# Data

Geografische data is fundamenteel onder te verdelen in **raster** of **vector** - bestaande uit pixels of geometriën. Deze twee types worden vaak gecombineerd, bijvoorbeeld wanneer een vector weergave van een weg over satellietbeelden wordt gelegd.

## Raster

![](img/raster.png)

**Raster** data is zoals een afbeelding van een digitale camera: op het laagste abstractieniveau is het slechts een lijst met pixels en waardes. Als je 'inzoomt' en raster data van dichtbij bekijkt, zie je op een bepaald punt discrete pixels.

Raster data wordt gebruikt in afbeeldingen van de aarde, zoals de opnames van satellieten - maar dat is maar één van de vele toepassingen. Pixels hoeven niet per sé een kleur te hebben - in plaats daarvan kan iedere pixel een nummer hebben waarmee het hoogte kan aangeven. Raster data vormt zo een digitaal elevatie model. Of pixels kunnen temperatuur of reflectiewaardes bevatten.

##### Rasterbanden

De pixels in raster data zijn niet per sé ingevuld met één kleur: we noemen de inhoud van een raster 'banden'. Een normale afbeelding heeft drie bekende banden: Rood, Groen en Blauw. Gecombineerd levert dit een voor ons vertrouwde afbeelding. Sommige raster data kan minder banden bevatten, zoals die met enkel hoogte informatie, of juist veel meer - niet enkel zichtbare kleuren, maar golflengtes die we niet kunnen zien, zoals infrarood en ultraviolet. Tijdens het analyseren en tonen van raster data, kun je de banden selecteren en combineren totdat je ziet waarnaar je op zoek bent.

##### Rasterformaten

Rasterformaten hebben tot doel om data zo compact en toegankelijk mogelijk te maken voor analyse en weergave. Sommige formaten zijn varianten van bekende beeldformaten zoals [GeoTIFF](http://trac.osgeo.org/geotiff/) and JPEG2000, maar dan met een ruimtelijke component.

Intern hebben rasterformaten twee doelen - data opslaan in pixels en de relatie vastleggen tussen de pixels en de werkelijke plaats op de aardbol - dit heet het 'bereik' van de data. (in het engels heet het 'extent')

## Vector

![](img/vector_types.png)

**Vector** data bestaat uit primaire geometrie in tegenstelling tot raster data. Ongeacht hoe ver je 'inzoomt' op vector data, je krijgt geen pixels in beeld: de data bestaat uit geometrische punten en lijnen die enkel in een afbeelding worden omgezet wanneer nodig.

Vectordata wordt gebruikt om wegen, gebouwen, 'points of interest' (POI) en andere zaken die een fysieke plaats in de wereld hebben in op te slaan.

##### Vectorformaten

Het bekendste vectorformaat is de [Shapefile](http://en.wikipedia.org/wiki/Shapefile) - een simpel bestand-gebaseerd formaat dat de data opslaat in vier verschillende bestanden - `.shp` (waar de daadwerkelijke geometrische data is opgeslagen), `.prj` (tekst die de gebruikte kaartprojectie omschrijft), `.shx` (een index welke het zoeken versnelt), en `.dbf` (een database bestand die alle data bevat die gekoppeld is aan de geometrie van het .shp bestand).

De meeste van zulke bestanden bevatten binarie data, dus openen in een tekstbewerkingsprogramma zal weinig bruikbaars opleveren, behalve het .prj bestand waarin de projectie in normale tekst te zien is. Het .dbf bestand kan worden geopend met bijvoorbeeld LibreOffice Calc, omdat het formaat afstamt van een oud databaseformaat. Helaas dicteert dit oude formaat ook een limiet op de attribuutdata die je kan opslaan in een shapefile. Zo kan de grootte van een .dbf de 2 GB niet overschrijden en mogen veldnamen niet meer dan 10 karakters bevatten. Ook spaties en NULL waardes zijn niet toegestaan, evenals speciale tekens, [enz.](http://en.wikipedia.org/wiki/Shapefile#Limitations).

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), en [KML](http://developers.google.com/kml) zijn nieuwere formaten, gebaseerd op respectievelijk [JSON](http://www.json.org/) en [XML](http://en.wikipedia.org/wiki/XML). Doordat ze tekstgebaseerd zijn, zijn ze veelal eenvoudiger te implementeren in software dan Shapefiles. Dankzij flexibiliteit en nieuwe mogelijkheden van deze formaten zijn ze de inmiddels de standaard in web software. Een nadeel van GeoJSON is dat er minder tools zijn om eigenschappen van verschillende bestanden te vergelijken, waardoor data analyse en opschoning lastiger is.

### Topologie

Naast opslag van plaatsen en vormen, kan vector data ook de zogenaamde topologie bijhouden, de relatie tussen de verschillende vormen. Een voorbeeld zijn politieke grenzen die elkaar vaak raken - je kunt met één voet in Arizona staan en met de ander in New Mexico. Veel geografische data bestaat uit een vorm die Arizona voorstelt en een andere voor New Mexico, met exact overlappende grenzen, maar zonder verdere associatie.

Dit maakt het lastig als je bijvoorbeeld wil weten welke staten elkaar raken, of de vormen wil versimpelen met behoud van de grenzen. We gebruiken hier het concept topologie: in plaats van het opslaan van de vormen van Arizona of New Mexico, worden enkele vectorlijnen opgeslagen en wordt tegelijkertijd bijgehouden welke de grens vormt van welk object. Zo wordt de grens tussen deze twee staten een enkele lijn waarmee de grens wordt getekend. Als je deze lijn aanpast, verandert de vorm van beide staten.

## Geocoding

Naast raster en vector bestaat er nog een type geografische data dat niet bestaat uit getallen die voor computers zijn bedoeld, maar is opgeslagen als tekst, en bevat verwijzingen naar plaatsnamen, straten, adressen, et cetera.

Helaas is het niet mogelijk om deze data eenvoudig op de kaart te tonen. Er is een indirect en vaak onnauwkeurig proces voor nodig om woorden zoals 'Verenigde Staten' te vertalen naar coordinaten zoals `-120, 40`. Dit proces noemen we **geocoding**. Voor geocoding is een database nodig met daarin straatnamen, landen, et cetera, gekoppeld aan geografische locaties. Algoritmes proberen met die data de beste overeenkomst te vinden voor de opgegeven invoer.


### Reverse Geocoding

Het tegenovergestelde procees heet **reverse geocoding**. Hierbij wordt geografische data zoals coordinaten omgevormd naar voor mensen begrijpelijke tekst zoals `Verenigde Staten` of `1714 14th Street`. Net zoals bij `forward geocoding` is het een benadering - een plaats op aarde kan binnen conflicterende of overlappende grenzen vallen.

Zowel geocoding als reverse geocoding zijn ingewikkelde processen: foutieve coordinaten, verkeerd geformuleerde adressen en een netwerk van wegen en gebouwen dat blijft veranderen.

<a class='further-reading' href='/nl/0100-01-01-geocoding.html'>lees meer over geocoding</a>

## Dataverzameling

Door de jaren heen is kaartdata op talloze manieren verzameld - van logboeken uit de scheepvaart tot geografisch gepositioneerde Tweets. Momenteel zijn er een paar bronnen interessant:

![](img/gps.jpg)

**GPS**, de verzameling satellieten die ervoor zorgen dat je op je mobiele telefoon een blauw puntje te zien krijgt, vormt de basis voor het verzamelen van nauwkeurige vectordata. Kaartenmakers rijden met super nauwkeurige GPS apparaten en combineren hun resultaten tot een betrouwbare dataset.

**Satellieten en vliegtuigen** verzamelen de meeste rasterdata die vandaag de dag beschikbaar is. Ze maken doorlopend foto's van verschillende hoogtes en hoeken, en combineren dit tot iets wat lijkt op een foto van onze wereld. Deze sensoren kunnen ook de zogenaamde 'niet-zichtbare spectra', zoals infrarood licht, vastleggen. Dat is van belang voor het in kaart brengen van agricultuur en ontbossing. Een veelgebruikte technologie hiervoor is [LiDAR](http://en.wikipedia.org/wiki/Lidar), een type lasersensor waarmee hoogte en type kan worden vastgesteld vanuit een vliegtuig, auto of satelliet.

**Bedrijven, overheden en gemeenschappen** houden allen verschillende wereldkaarten bij, met verschillende detailniveau's. Zo richten [Google](http://maps.google.com) en [OpenStreetMap](http://www.openstreetmap.org/) zich vooral op wegen, terwijl [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) en [Natural Earth](http://www.naturalearthdata.com/) juist de politieke grenzen vastleggen.

### Opslag

Er zijn vele manieren om geografische data op te slaan. Data kan worden opgeslagen door het af te drukken, maar in deze tijd is het veel gemakkelijker en sneller om het digitaal op te slaan en te delen.

Er zijn verschillende bestandstypes en conventies voor het opslaan van geografische data. Daaraan verwant bestaan er ook verschillende programma's om geografische representaties te vertalen. Data kan worden opgeslagen in databases of in losse bestanden.

# Informatie

Kaarten zijn gevisualiseerde informatie: Aan de ene kant heb je datums, nummers en opslag - de basis waarmee we plaatsen op deze planeet opslaan. Tussen data en visualistie zit nog een belangrijke stap: 'projectie'. Projectie is het proces waarbij plaatsen op Aarde worden vertaald naar een plat oppervlak zoals papier of een computerscherm. Uiteindelijk bepalen we de details zoals kleuren, tinten en symbolen. Hiermee vertalen we details vanuit de data naar plaatjes die door mensen begrepen en geïnterpreteerd kunnen worden.

## Lengte- en Breedtegraad

De meestvoorkomende methode om plaatsen op Aarde te noteren is via de zogenaamde lengte- en breedtegraad. Historisch werden deze getallen genoteerd volgens het sexagesimale stelsel: `38° 12'`. Een nieuwe standaard geeft ze als eenvoudigere getallen weer: `38.2`. Dit maakt het voor computers gemakkelijker om ermee te werken.

![](img/latlon.png)

**Lengtegraden** lopen van -90 op de Zuidpool tot 90 op de Noord Pool. Over de gehele lengte van de evenaar is deze waarde 0.

**Breedtegraden** lopen van -180 tot 180. Op de 180e graad komen deze tellingen weer bij elkaar en zodoende is de aardbol in twee helften verdeeld, westelijk en oostelijk halfrond. Deze graad noemen we de anti-meridiaan. De 0 graad is de Primaire Meridiaan, en deze doorsnijdt Afrika en Europa (om precies te zijn: het Royal Observatory in Greenwich, Londen).

De combinatie van lengte- en breedtegraad is een coördinaat. Deze kan worden genoteerd als 'lengtegraad, breedtegraad', of als 'breedtegraad, lentegraad'. Vroeger was de eerste notatie standaard, maar nu is 'lengtegraad, breedtegraad' populairder omdat de 'X, Y' volgorde spiegelt die we gebruiken voor coordinaten in de Euclidische meetkunde.

De volgorde van coordinatenparen kan verwarrend zijn, met name in webbrowsers waar de protocollen vaak 'breedtegraad, lengtegraad' verwachten.

Soms wordt naast de lengte- en breedtegraad nog meer data opgeslagen zoals hoogte en tijd en andere factoren. Hoogte wordt meestal opgeslagen als derde coördinaat: 'lengtegraad, breedtegraad, hoogte'.


## De Vorm van de Aarde

![](img/earth-shapes.jpg)

Het opslaan en presenteren van de wereld roept de vraag op welke vorm zij eigenlijk heeft: kunnen lengte- en breedtegraden worden vertaald naar een perfecte bolvorm en terug, met behoud van hun ruimtelijke accuraatheid?

De Aarde is in het midden een beetje bobbelig - het lijkt meer op een [ellipsoïde](http://nl.wikipedia.org/wiki/Ellipsoïde) dan op een perfecte bol. Als je nog nauwkeuriger kijkt zul je zien dat de Aarde bedekt is met niveauverschillen zoals bergen en valleien en zelfs door mensen gemaakte structuren zoals steden.

In de praktijk gebruiken we een benadering van deze vorm. Standaarden zoals [WGS84](http://nl.wikipedia.org/wiki/WGS_84) definiëren vrij nauwkeurige de waardes voor elke lengte van beiden assen van de Aarde. Hieruit kunnen we een [referentie-ellipsoïde](http://nl.wikipedia.org/wiki/Referentie-ellipsoïde) afleiden in plaats van een bolvorm. Wetenschap en lokale metingen gebaseerd op een nauwkeurig oppervlaktemodel kunnen ook [geoïde's](http://nl.wikipedia.org/wiki/Geo%C3%AFde) gebruiken. Dit zijn drie-dimensionale berekeningen van de theoretische oceaanhoogtes.

Deze tak van aardwetenschappen noemen we [geodesie](http://nl.wikipedia.org/wiki/Geodesie). Geodesie is een doorlopend project naarmate onze kennis en kunde om de aarde te meten snel veranderd, terwijl de Aarde zelf qua vorm ook veranderd.

## Projecties

![](img/projections.jpg)

Projecties zijn wiskundige vergelijkingen waarmee we de wereld plat kunnen weergeven op bijvoorbeeld een computerscherm of op papier. Het is een ingewikkelde klus - er bestaat geen manier om dit te doen zonder dat er vervorming optreedt. Projectie gaat altijd ten koste van richting, relatieve grootte, vorm, et cetera.

<a class='further-reading' href='/nl/0100-01-datum.html'>lees meer over datums</a>

## Symbolisatie


Symbolisatie is een chique woord voor de manier waarop data wordt vertaald naar grafische elementen op de kaart.

In de basis heeft data geen voorkomen. Een lijst met pixelwaardes of wegsegmenten kan net zo goed worden weergegeven in een spreadsheet als op een kaart. Er bestaan vele symboliseringstechnieken waaronder 3D. Laten we er een paar bekijken:

## Sequentieel & Categorisch

![](img/scales.jpg)

Symbolisatie gaat met name over twee verschillende karakteristieken van data: sequentieel en categorisch. Seqentieel of continue data noemen we ook wel lineair: het is vaak een nummer met waarden binnen een vast bereik, zoals beoordelingen tusssen 0 en 100, of bijvoorbeeld hoogte. Categorische data daarentegen, is een set waardes of getallen zoals 'waar', 'onwaar', 'democratisch' of 'republikeins'.

Deze onderverdeling is een van de voornaamste redenen voor symbolisatie: een sequentiële databron past beter op een geschaalde puntenkaart of een graduele kleurenschaal op een raster. Categorische data laat zich over het algemeen beter weergeven via meerdere symbolen in onderscheidende kleuren.


### Choropletenkaart

De choropletenkaart wordt in de aardrijkskunde vaak gebruikt om de bevolkingsspreiding in een bepaalde regio weer te geven. Op choropletenkaarten veranderen de kleuren van grensvlakken om data weer te geven. De grenzen zelf blijven gelijk qua vorm. Een bekend voorbeeld van een choropletenkaart zijn de kaarten van verkiezingen waarbij de data bestaat uit percentages voor stukjes land, zoals het aantal stemmen per partij per district.

Choropletenkaarten zijn geschikt voor bijvoorbeeld dichtheden, percentages en hoeveelheden. Ze zijn niet goed geschikt voor absolute waardes. Dit komt doordat de omvang van de gebieden gelijk blijft en daardoor buitensporig veel nadruk legt op grote eenheden in de data. Omdat choroplethkaarten gebaseerd zijn op kleurverschillen om informatie weer te geven, is het belangrijk dat deze kleuren goed gekozen worden en geschikt zijn voor kleurenblinden. Daarnaast moeten ze begrijpbaar en consistent zijn.

<a class='further-reading' href='nl/0100-01-01-colors.html'>lees meer over kleuren</a>

### Punten

Puntenkaarten zijn een beter alternatief voor absolute waardes: de enige soort meetdata die zij opslaan zijn punten.

De stijl van een punt kan zeer uiteenlopen. Het kleuren van punten gebaseerd op hun sequentiële of categorische waarde kan nuttig zijn. Punten kunnen ook qua grootte worden geschaald om hun relatieve waarde weer te geven. Deze geschaalde symbolen kunnen elke vorm hebben, zoals cirkels, rechthoeken of zelfs afbeeldingen. In bepaalde gevallen waar meerdere waardes een totaal moeten tonen, kan een zogenaamd taartpuntdiagram worden gebruikt ter visualisatie.

Het is van belang om niet teveel punten tegelijk te tonen. Dit gaat ten koste van de leesbaarheid van de kaart. In zulke gevallen kan een choropletenkaart de waardes 'aggregeren' (verzamelen). Alternatieven zijn bijvoorbeeld clustering, waarbij nabijgelegen punten in groepjes worden weergegeven totdat de kaart verder wordt ingezoomd.


## Uitgeven

## Analyse

Analyse met rasters & vectoren door middel van aggregatie en transformatie


### Vector naar Raster

Hoe verschillend deze twee datatypes ook zijn, het is mogelijk om ze naar elkaars formaat te converteren. 

Meestal wordt vectordata omgezet naar rasterdata. Dit noemen we 'rasterizatie': computerschermen en printers werken op het niveau van pixels, niet met lijnen en vormen. Deze conversie is niet perfect. Vectordata is niet gebaseerd op pixels, en wordt nooit vaag naarmate je verder inzoomt. Over het algemeen kun je vectordata die is omgezet naar rasterdata niet weer terug transformeren naar vectordata zonder verlies van nauwkeurigheid.

Soms wordt vectordata omgezet naar rasterdata omdat het gemakkelijker is om wiskundige analyse te doen op basis van pixels dan op lijnen.


### Raster naar Vector

Rasterdata kan op een aantal manieren worden omgezet naar vectordata. Mensen tekenen bijvoorbeeld bovenop satellietbeelden, het zogenaamde 'tracen'. Lijnen voor straten en grenzen, punten voor huizen of polygonen voor gebouwen. Bovenop deze data kunnen we nog meer doen, zoals het berekenen van routes op basis van de vectordata van straten. Dat kan met rasterdata niet zo gemakkelijk.


### Simulatie

Een andere toepassing van geografische data is simulatie. Bijvoorbeeld simulatie van natuurlijke processen zoals overstromingen. Op basis van hoogtedata voor bijvoorbeeld een bergpas, is het mogelijk om een uitschieters en schaduwen te kleuren. Dit proces heet 'hillshading' of 'shaded relief'.

Er zijn complexere processen mogelijk zoals het bepalen waar water zich verzamelt na regenval: de zogenaamde 'watershed' of 'stroomgebied'. Of het bepalen van het gezichtsveld op een bepaalde plek; de zogenaamde 'viewshed'.


### Aggregatie

De bekendste vorm van aggregatie is sommeren - het optellen van grootheden. Een goed voorbeeld is het Bruto Nationeel Product van een land: dat zegt in één oogopslag meer dan het simpelweg tonen van iedere individuele bijdrage aan de economie.

Aggregatie wordt in het geval van kaarten op vergelijkbare wijze toegepast. Korrelige data zoals de miljoenen inkomens van huishoudens, kun je sommeren of middelen per geografisch gebied, om zo het gemiddelde inkomen per dorp of stad te tonen.

![](img/binning-wide.jpg)

Naast aggregatie kan ook een andere techniek worden gebruikt: **hexbinning**. Bij hexbinning worden discrete punten door willekeurige vormen op de kaart omsloten, zoals zeshoeken of vierkanten. De totale puntentelling per vorm kan vervolgens worden weergegeven of er kan een kleur worden toegekend. Dit maakt data bestaande uit miljoenen punten in één oogopslag interpretabel.


### Interpolatie

In tegenstelling tot aggregatie, waarbij grote hoeveelheden data worden vereenvoudigd tot iets wat eenvoudiger weer te geven en te analyseren is, gaat het bij interpolatie om het 'invullen van de leegte' tussen waardes. Interpolatie wordt vaak toegepast op datasets zoals hoogte. Hierbij kunnen er gaten voorkomen in de rasterdata, dit worden ook wel `null` waardes genoemd.

Interpolatie gaat uit van de waardes rondom de 'gaten', en gaat uit van het principe dat de ontbrekende waardes vergelijkbaar zouden moeten zijn met de waardes eromheen - van een ontbrekende pixel op de top van een berg mag worden aangenomen dat de waarde behoorlijk hoog zal zijn.

Er zijn meerdere manieren om puntdata te interpoleren:


- **Heatmaps** kennen aan elk punt een zogenaamd gewicht toe, en geven de hogere dichtheid van punten weer met "hetere" kleuren.
- **Contourlijnen** (of isolijnen) tekenen lijnen rondom punten die een doorlopende geschatte waarden weergeven. Meestal gebruikt voor het weergeven van hoogte.
- Een **TIN** (Triangulated Irregular Network) is opgebouwd uit driehoeken tussen de gemeten punten en wordt toegepast om terrein te visualiseren.
- **Voronoi diagrammen** worden bepaald door afstanden tot een specifiek geïsoleerd punt van objecten in de ruimte, dat wil zeggen door een discrete verzameling punten. Voronoi-diagrammen worden gebruikt in vele uiteenlopende gebieden, van computerwetenschap tot biologie of het vinden van het dichtstbijzijnde benzinestation of ziekenhuis.


## Nawoord

We hopen dat dit een verhelderend en inspirerend verhaal was. Er zit zoveel potentie in dit vakgebied met nog zoveel onbeantwoorde vragen. Kaarten zijn een breed onderwerp; het raakt aan de kunst, wiskunde, natuurkunde, ecologie en nog veel meer.

[Opmerkignen en suggesties](https://tmcw.wufoo.com/forms/mapschool-feedback/) zijn van harte welkom.


### Licentie

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
