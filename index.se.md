---
title: mapschool
layout: default
language: se
---

# map school

Vad är en karta? Fram till 1980-talet var kartor något som skapades för hand med stor möda. Numera görs kartor oftast med hjälp av datorer. Kartor används i en mängd sammanhang: för vägbeskrivningar, visualiseringar och i politiska gränsdispyter. Här kommer vi titta på en kartas beståndsdelar ur kartografens synpunkt.

Kartor består i grunden av data. Datan se ut på olika sätt. Miljontals punkter, några polygoner eller något som liknar ett fotografi med färger. Det är viktigt att se att datan inte bara kan användas på ett sätt.

Från datan kan vi skapa siffror, bilder och beslut. Det vanligaste är att vi gör bilder. Den här processen kallas symbolisering - vi bestämmer hur vi ska representera olika delar av datan. Vi analyserar datan genom att transformera, aggregera och summera den för att få fram svar och insikter. Symbolisering och analys sker ofta samtidigt. Symboliseringen ger begränsningar i vad vi kan visa och i analysen definieras den aspekt av datan vi fokuserar på.

# Data

I grund och botten finns två sorters geografisk data, **raster-** eller **vektordata**, dessa är uppbyggda av pixlar eller geometri. Typerna används ofta tillsammans, ett exempel är kartor där vägdata läggs ovanpå en satellitbild.

## Raster

![](img/raster.png)

**Rasterdata** är precis som en bild du tar med en digitalkamera. Abstrakt sett är en rasterbild en lista på pixlar med olika värden. När du zoomar in i en rasterbild kommer du förr eller senare att se pixlarna.

Rasterbilder används för fotografier av jorden, exempelvis satellitbilder. Rasterbilder kan visa mycket annat än bara färger. Varje pixel kan ha ett nummer som representerar höjd, på så sätt kan vi spara en höjdmodell i en rasterbild. Pixlarna kan lagra information om temperatur och reflektionsdata och användas i miljöarbete.

##### Rasterband
    
Pixlarna i en rasterbild behöver inte nödvändigtvis bara innehålla färg. Innehållet i en rasterbild kallas för "band". Ett vanligt fotografi har tre band: röd, grön och blå. Tillsammans bildar de sådana bilder vi är vana att se. Viss rasterdata kan ha färre band, till exempel ett band för höjdvärden. Andra bilder kan ha många fler, exempelvis band för olika våglängder som infrarött och ultraviolett. När rasterdata analyseras och visas kan man kombinera och välja ut band som passar för det aktuella användningsområdet.

##### Rasterformat
    
Rasterformaten försöker spara data på ett kompakt sätt och göra den tillgänglig för snabb analys och visning. Vissa av formaten är vanliga bildformat med extra funktionalitet för geospatial användning, t.ex. [GeoTIFF](http://trac.osgeo.org/geotiff/) och JPEG2000.

Internt så gör rasterformaten två saker: lagrar data i pixlar och lagrar förhållandet mellan pixlarna och deras faktiska plats på jordklotet - datans omfång.

## Vektordata

![](img/vector_types.png)
    
**Vektordata** lagrar geometrisk data istället för pixeldata. Oavsett hur mycket du zoomar in på vektordata så kommer du aldrig att se pixlar. Datan lagras som geometriska punkter och linjer och konverteras till en bild bara när det behövs.

Vektordata används för att lagra data om vägar, byggnader, sevärdheter och andra saker som finns på jorden.

##### Vektorformat
    
Det vanligaste vektorformatet är [shapefiler](http://en.wikipedia.org/wiki/Shapefile). Shapefiler är ett enkelt filbaserat format som klumpigt nog sparar datan i fyra olika filer: `.shp` (där den geometriska datan sparas), `.prj` (en textsträng som beskriver den projektion som används) och `.dbf` (en databasfil som innehåller all data som hör till geometrierna i .shp-filen). De flesta av dessa filer består av binär data. Du kan alltså inte öppna dem i en textredigerare och få ut något vettigt. Undantaget är .prj-filen som definierar projektionen i ren text. .dbf-filen kan läsas i LibreOffice Calc eftersom dess format kommer från en gammal specifikation för databaser. Specifikationen begränser attributen som kan sparas i en shapefil. Exempelvis kan inte en .dbf-fil vara större än 2 GB, fältnamn kan inte innehålla mellanslag och inte vara längre än 10 tecken, NULL-värden stöds ej, specialtecken stöds ej, [osv.](http://en.wikipedia.org/wiki/Shapefile#Limitations)

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), och [KML](http://developers.google.com/kml) är nyare format baserade på [JSON](http://www.json.org/) och [XML](http://en.wikipedia.org/wiki/XML). Eftersom de är textbaserade är de lättare att använda än shapefiler. Tack vare deras flexibilitet och funktioner har de blivit standardvalet i nya webbapplikationer. En nackdel med GeoJSON är att det finns få verktyg för att jämföra egenskaper mellan filer, vilket kan göra dataputsning och analys svårare.

### Topologi
   
Förutom att lagra platser och former så håller ibland vektordata koll på topologi, relationen mellan olika objekt. Till exempel så ligger ofta gränser mellan regioner precis intill varandra - du kan stå med en fot i Arizona och den andra i New Mexico. Många sorters geodata har i den situation ett objekt som representerar Arizona och ett annat som motsvarar New Mexico, med två gränser som överlappar, men utan någon annan relation.

Det här blir knepigt när man vill ställa frågan "vilka stater tar i varandra?" eller när man vill förenkla objektens form men ändå behålla gränserna sida vid sida. Här används konceptet topologi. Istället för att spara ett objekt för Arizona och ett annat för New Mexico så sparar vi en mängd linjer och håller koll på vilka som utgör gränsen till vilket objekt. Gränsen mellan Arizona och New Mexico blir alltså en enda linje som vi använder för att rita ut gränsen mellan staterna. Om vi modifierar linjen så ändras formen på båda staterna.

## Geokodning

Viss geodata består varken av vektor- eller rasterdata. Istället för att bestå av siffror som en dator kan förstå så lagras textdata som platsnamn, gatunamn, adresser och liknande.

Sån här data är inte enkel att sätta ut på en karta. Det finns en indirekt och ofta bristfällig metod för att transformera ord som "Förenta staterna" till punkter som `-120, 40`. Den här metoden kallas **geokodning**. Geokodning bygger på databaser med gatunamn, namn på länder och annat i kombination med algoritmer som försöker att hitta den bästa matchningen för texten som matas in.

### Omvänd geokodning

Motsatsen kallas **omvänd geokodning**. Här transformeras geografisk data som punkter till text som människor kan läsa, t.ex. `Förenta staterna` eller `1714 14th Street`. Precis som med vanlig geokodning får man ut ett ungefärligt svar, en plats på jorden kan ligga mellan adresser eller i överlappande regioner.

Geokodning och omvänd geokodning är svårt, koordinatfel, dåligt formaterad adressdata och ett gatunät i ständig förändring bidrar till svårigheten att göra adresser till koordinater och vice versa.

<a class='further-reading' href='/geocoding.html'>läs mer om geokodning</a>

## Datainsamling

Kartdata har samlats in på många sätt genom tiderna, allt från seglares loggböcker till geokodade tweets. Här presenteras de viktigaste moderna metoderna:

![](img/gps.jpg)
    
**GPS**, satellitkonstellationen som ger din smartphone en blå prick på kartan, är grunden för insamling av exakt vektordata. Lantmätare använder GPS-mottagare med hög precision och kombinerar deras mätningar vilket ger högkvalitativ data.

**Satelliter och flygplan** samlar in den mesta rasterdata som finns tillgänglig idag. Ständigt fotograferande från olika höjder skapar de en bild av världen. Sensorerna samlar också in det som kallas osynlig strålning. Infrarött används t.ex. för att kartera lantbruksmark och skogsavverkning. Andra flygningar använder [LiDAR](http://en.wikipedia.org/wiki/Lidar), en lasersensor som mäter höjd.

**Företag, stater och andra grupper** skapar världskartor med olika detaljrikedom. [Google](http://maps.google.com) och [OpenStreetMap](http://www.openstreetmap.org/) fokuserar på att kartera alla vägar och information om dem. Andra institutioner som [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) och [Natural Earth](http://www.naturalearthdata.com/) håller koll på politiska gränser.

### Lagring

Det finns många sätt att lagra geografisk data. Datan kan sparas som utskrifter, men numera är det vanligast att lagra den digitalt.

Det finns många olika filformat och konventioner för att lagra geografisk data. Det har lett till  en mängd verktyg för att konvertera mellan dem. Data lagras i databaser eller i filer, men den praktiska skillnaden är inte nödvändigtvis viktig.

# Information

Kartor är visualiserad information. På ena sidan finns problem som datum, siffror och lagring - de tekniska aspekterna om hur vi lagrar och skiljer på platser på jorden. Mellan data och visualisering finns en transformation som kallas "projektion". Här blir platser på jorden platser på vanligtvis platta ytor som papper eller datorskärmar. I det sista steget kan vi bestämma oss för färger, toner och symboler som försöker översätta detaljer ur datan till bilder som människor kan förstå och tolka.

## Latitud & longitud

Det vanligaste sättet att lagra platser på jorden är med latitud- och longitudvärden. Historiskt sett har dessa representeras i sexagesimal notation, exempelvis `38° 12'`, men den nya standarden är att representera koordinater som vanliga nummer i stil med `38.2` vilket är lättare för datorer att tolka.

![](img/latlon.png)

**Latitudvärden** går från -90 vid Sydpolen till 90 vid Nordpolen. Längs ekvatorn är latituden 0.

**Longitudvärden** går från -180 till 180. Linjen där dessa möts kallas antimeridianen. Värdet 0 är definiterat som nollmeridianen och skär genom Afrika och Europa, specifikt genom The Royal Observatory i Greenwich, London.

Kombinationen av latitud och longitud kallas oftast en koordinat och kan representeras som "latitud, longitud", eller "longitud, latitud". Historiskt sett har den första stilen använts, men "longitud, latitud" har på senare tid blivit mer populär eftersom den speglar "X, Y"-ordningen från matematikens euklidiska geometri.

Ordningen på koordinaterna kan skapa förvirring. Webbläsarbaserad kartmjukvara förväntar sig ofta "latitud, longitud", medan andra system kräver "longitud, latitud".

Ibland inkluderas mer än latituden och longituden. Höjd, tiden för insamling och andra faktorer kan finnas med. I fallet med höjd så sparas det ofta som en tredje koordinat på formen "longitud, latitud, altitud".

## Jordens form

![](img/earth-shapes.jpg)

Att lagra och presentera information om jorden leder oss till frågan om dess form, kan latitud- och longitudvärden representeras på en perfekt sfär och sedan fås tillbaka, med bibehållen exakthet?

Eftersom jorden är ett roterande objekt och dess beståndsdelar kan ändra form så sväller den på mitten. Istället för att vara en sfär så liknar det mer en [tillplattad sfäroid](http://en.wikipedia.org/wiki/Oblate_spheroid). Tittar man ännu närmare så är stämmer inte det här heller. På jorden finns [höjdskillnader](http://en.wikipedia.org/wiki/Topography) som berg och dalar.

I vardagliga sammanhang används olika uppskattningar för jordens form. Standarder som [WGS84](http://en.wikipedia.org/wiki/WGS84) definierar precisa värden för längderna på jordens båda axlar. Från detta kan vi estimera en [referensellipsoid](http://en.wikipedia.org/wiki/Reference_ellipsoid). Lokala mätningar och vetenskaper som kräver prcisa värden kan också använda [geoidmodeller](https://en.wikipedia.org/wiki/Geoid) som är tredimensionella beräkningar av teoretiska havsnivåer.

Den här delen av geovetenskap kallas [geodesi](https://en.wikipedia.org/wiki/Geodesy) och är ett ämne i ständig förändring eftersom möjligheterna att modellera och mäta jorden går framåt samtidigt som jorden i sig ändrar form. 

## Projektioner

![](img/projections.jpg)

Projektioner är vad vi kallar de matematiska ekvationer som förvandlar jordklotet till en platt skiva som passar att skrivas ut eller visas på en skärm. Det är en svår uppgift. Det finns inget sätt att platta till jorden utan att förvränga den på något sätt. Antingen förlorar man riktningar eller relativa storlekar, eller så får man en karta som ser konstig ut.

<a class='further-reading' href='/datum.html'>läs mer om datum</a>

## Symbolisering
    
Symbolisering handlar om de olika sätt data görs om till bilder i kartornas värld.

I grund och botten ser inte data ut på något speciellt sätt. En lista av pixelvärden eller väglinjer kan lika väl visas i ett kalkylblad eller i ett diagram som på en karta. Konvertera är inte det rätta ordet för det vi gör med datan, det viktiga besultet handlar om hur vi ska rita ut datan.

Tekniker för detta kan vara vad som helst som går att representera med grafik eller till och med 3D, här kommer vi titta på några vanliga alternativ.

## Linjär & diskret data

![](img/scales.jpg)

Symbolisering leder fram till en titt på två karakteristiska typer av data: linjär och diskret data. Linjär data tenderar att vara värden inom ett intervall, t.ex. värden mellan 0 - 100 eller höjdvärden. Diskret data är fasta värden som "sant", "falskt", "demokrat", "republikan".

Den här uppdelningen av data är en viktig del för symbolisering. En linjär datakälla kan passa bra att symbolisera som en punktkarta med proportionella symboler eller en färgramp. Diskret data kan visas med olika färger eller symboler.

### Koropletkartor

En koropletkarta bibehåller befintliga gränser och former på platser och representerar data genom att ändra platsens färg. Ett vanligt exempel är kartor som visar valresultat där datan visar ett procentvärde för varje region.

Koropletkartor passar bra för data som hyror, täthet eller procenttal. Dom passar mindre bra för absoluta värden. Eftersom de bibehåller storleken på objekten kan de överdriva vikten av stora kartobjekt. Eftersom koropletkartor bygger på färgskillnader för att representera information är det viktigt att välja färger som fungerar för färgblinda, går att förstå och är konsekventa.

<a class='further-reading' href='/colors.html'>läs mer om färger</a>

### Punktkartor

Punktkartor är ett bättre val för absoluta värden. Den enda geometrin som bevaras är en punkt för varje objekt.

Typen av punkt eller markör som används i punktkartor varierar. Att färglägga punkter baserat på deras linjära eller diskreta värde kan vara användbart, men punkterna kan också skalas till olika storlekar för att visa deras värden. Symbolerna kan bestå av vara valfri form eller grafik: cirklar, kvadrater eller bilder av det dom representerar. I fall där det finns flera värden för varje objekt kan cirkeldiagram vara ett bra sätt att visualisera komplex data.

Omsorg krävs för att inte visa för många punkter på en gång. En stor mängd punkter gör kartan svårläst. I fall med många punkter kan en koropletkarta med aggregerade värden från punkterna vara ett alternativ. Ett annat alternativ är klustring, där täta områden slås samman tills kartan zoomas in tillräckligt.

## Publicering

## Analys

Raster- och vektoranalys som aggregation och transformering. 

### Vektor till raster

Det går att röra sig mellan de två olika typerna av kartdata, trots att de kan verka så olika. Det är faktiskt en vanlig operation, det är bara inte en direkt operation.

Vektordata blir alltid rasteriserad eller "renderad" när den visas. Bildskärmar och skrivare arbetar med pixlar, inte med linjer och former. Konverteringen blir aldrig perfekt. Kom ihåg att vektordata inte består av pixlar, så man kan aldrig zooma in och se suddiga kanter. Alltså, när vektordata konverteras till rasterformat så kan man inte konvertera bilden tillbaka till exakt samma vektordata igen.

Ibland konverteras vektordata till rasterformat för att göra vissa sorters analyser där matematiken blir enklare med pixeldata. 

### Raster till vektor

Rasterdata kan vektoriseras på olika sätt. På satellitbilder kan man rita eller "kalkera" linjer för gator, polygoner för byggnader eller punkter för träd. På det här sättet får vi data som vi kan göra intressanta saker med. Det går exempelvis att ta fram vägbeskrivningar från vektordata över ett gatunät, men inte från en satellitbild.

### Simuleringar

Det går att simulera naturliga processer med geodata. Det här är en stor del av vad kartografer gör. Med tillgång till höjddata över ett bergsområde kan man simulera hur ljus skapar skuggor i landskapet, en process som kallas terrängskuggning.

Mer komplexa simuleringar kan visa hur vatten samlas vid regn eller beräkna de delar av kartan som är synliga om du står på en bergstopp.

### Aggregation

Den vanligaste formen av aggregation är idén om en summa. Givet en stor mängd nummer kan man slå ihop dom för att få en överblick över ett fenomen. Till exempel är ett lands bruttonationalprodukt mer användbar än en lista över varenda individuellt tillskott till ett lands ekonomi.

Aggregation i kartor används på ett liknande sätt. Med data som miljondals individuella hushålls inkomst kan man använda algoritmer för att summera eller beräkna medeltalet av värdena i specifika områden, och på så sätt visa snittinkomsten i exempelvis olika städer.

![](img/binning-wide.jpg)

Aggregation används ibland tillsammans med en teknik som kallas **binning**. Givet ett antal diskreta punkter kan man rita ut valfria geometriska objekt på kartan, exempelvis kvadrater eller hexagoner, för att sedan slå samman alla punkter som hamnar i varje objekt. Istället för att ha miljoner punkter som är svåra att överblicka kan vi nu visa datan likt en koropletkarta.

### Interpolering

Aggregation tar stora mängder data och destillerar den till något lättare att analysera och överblicka. Interpolering gör motsatsen och fyller i tomrummen mellan värden. Interpolering används ofta för datamängder som höjddata. Man kan ha rasterdata som visar höjden för varje del av ett berg, men på några ställen kan det saknas data, det som programmerare kallar `null`-värden.

Interpoleringen tittar på värden runt de tomma områdena och antar att värdena som saknas liknar värdena som finns runt omkring. En pixel som saknas på toppen av ett berg antas ligga högt upp, en pixel i en dalgång antas ligga lägre.

Det finns många sätt att interpolera punktdata:

- **Värmekartor** tilldelar varje punkt en vikt och representerar tätheten av punkter i varmare färger
- **Isolinjer** tar punktdata och ritar linjer som representerar ett uppskattat kontinuerligt värde. Ett vanligt exempel är höjdkurvor.
- Ett **TIN** (Triangulated Irregular Network) ritar trianglar mellan punkter och kan användas för att visualisera terrängmodeller.
- **Voronoidiagram** tar en mängd punkter och skapar polyoger av de områden som finns runt omkring dem.

## Efterord

Vi hoppas att det här har varit lärorik och inspirerande läsning. Det finns mycket potential i detta område och många obesvarade frågor. Kartor är ett område som ansluter till många fält, konst, matematik, fysik, ekologi och mycket mer.

Vi ser gärna att du [rapporterar fel eller kommer med förslag](https://tmcw.wufoo.com/forms/mapschool-feedback/) för att förbättra texten.

### Licens

[Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en_US)
