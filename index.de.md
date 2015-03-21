---
title: mapschool
layout: default
language: de
---

# map school

Was ist eine Karte? Bis in die 1980er Jahre waren das Dokumente, die mühevoll von Hand gefertigt wurden. Heute werden Karten fast ausschließlich am Computer erstellt. Karten sind heute extrem weit verbreitet; man findet sie in Routenanweisungen, Datenvisualisierungen order bei der Klärung von Grenzkonflikten findet. Lassen sie uns einen genaueren Blick auf die grundlegenden Elemente von Karten werfen — aus der Sicht des Gestalters.

Im Grunde sind digitale Karten die Visualisierung von Daten. Abstrakt betrachtet sind Daten Milliarden von Punkten oder einige Polygone auf der einen Seite oder Bild-ähnliche Aufnahmen von Farben oder Temperatur auf der anderen. Es ist wichtig zu erwähnen, dass Daten jeweils unabhängig von deren Nutzung sind.

Auf Basis von Daten können Zahlen und Darstellungen abgeleitet oder Entscheidungen getroffen werden. Meistens werden auf Grundlage von Daten durch Visualisierung Darstellungen erzeugt — einem Prozess, bei dem entschieden wird, welche graphischen Elemente welchen Teil des Datensatzes repräsentieren sollen. Durch Analyse von Daten, d.h. durch Transformation, Aggregation und Zusammenfassung, können Fragen beantwortet und bestimmte Erkenntnisse hervorgehoben werden. Visualisierung und Analyse werden oft kombiniert — Visualisierungsmethoden bestimmen den Rahmen dessen, was man darstellen kann und Analyse bestimmt, auf welche Aspekte eines Datensatzes man sich fokussiert.

# Daten

Es gibt zwei grundlegende Arten geographischer Daten: **Vektor** , bestehend aus diskreten Geometrien, und **Raster**, bestehend aus Pixeln. Beide Arten werden ich kombiniert, zum Beispiel wenn Straßendaten über ein Satellitenbild gelegt werden.

## Raster

![](img/raster.png)

**Rasterdaten** sind vergleichbar mit einem Photo, dass man mit einer Digitalkamera aufnimmt. Auf der untersten Abstraktionsebene ist ein Photo schlicht eine Liste von Pixel mit zugeordneten Werten. Wenn man hereinzoomt und einen genaueren Blick auf die Daten wirft, kann man ab einem bestimmten Punkt einzelne Pixel erkennen — das Bild wirkt dann "pixelig".

Rasterdaten werden für Aufnahmen der Erdoberfläche verwendet, wie sie von Satelliten erstellt werden. Pixel müssen allerdings nicht zwangsläufig Farben repräsentieren. Tatsächlich kann jedes Pixel einen numerischen Wert haben; z.B. für Höhe, das ganze Raster zeigt dann das Gelände eines Gebietes. Andere Beispiele sind Angaben zu Temperatur oder Lichtreflexion, wie sie in Umweltwissenschaften verwandt werden.

### Kanäle

The Pixel eines Rasters repräsentieren nicht notwendigerweise Farben: Der Inhalt eines Pixel wird in Kanälen beschrieben. Ein normals Photo hat drei Kanäle: Rot, Grün und Blau. Zusammengenommen ergeben diese Kanäle ein Bild wie wir es kennen. Manche Rasterformate haben weniger Kanäle (Höhendaten haben nur einen Kanal, manche haben mehrere, z.B. für nicht sichtbare Wellenlängen wie Infrarot und Ultraviolett). Wenn Rasterten analysiert und dargestellt werden, können einzelne Kanäle für einen bestimmten Anwendungsfall ausgewählt und kombiniert werden.

### Rasterformate

Rasterformate haben das Ziel, Daten zu komprimieren und für Analyse und Visualisierung schnell verfügbar zu machen. Einige Formate sind geo-spezifische Erweiterungen gängiger Grafikformate, wie [GeoTIFF](http://trac.osgeo.org/geotiff/
) und JPEG2000.

Intern erledigen Rasterformate zwei Aufgaben: Daten in Pixel anzuordnen und die Beziehung zwischen diesen Pixel und einer Position auf der Erde herzustellen.

## Vektor

![](img/vector_types.png)

Vektordaten halten keine Pixel vor, sondern einfache Geometrien. Unabhängig davon wie weit die Daten vergrößert; man sieht keine Pixel: Die Daten werden als Punkte und Linien gespeichert und nur in Graphiken dargestellt wenn nötig.

Vektordateien werden zu Vorhaltung von Straßen, Gebäuden, interessanten Punken und ähnlichen Dingen, die auf der Erde verortet werden können, verwendet.

### Verktorformate

Das am weitesten verbreitete Vektorformat ist [Shapefile](http://en.wikipedia.org/wiki/Shapefile) — ein einfaches, dateibasiertes Format, das seltsamerweise die notwendingen Informationen auf vier separate Dateien verteilt: `.shp` (wo die eigentlichen Geometrien vorgehalten werden), `prj` (eine Zeichenkette, die die verwendete Kartenprojektion beschreibt), `.shx` (ein Index für schnelleres Suchen) und `.dbf` (eine Datenbankdatei, die Attribute vorhält, die mit den Geometrien des `.shp` verknüpft sind). Die meisten dieser Dateien sind Binärdaten, wenn man sie in einem einfachen Texteditor öffnet, wird man nicht viel erkennen können; abgesehen von `.prj`, das die Projektion in _Plain Text_ beschreibt. Die `.dbf` Datein kann mit Libre Office Calc gelesen werden, weil das Format an eine alte Datenbankspezifikation angelehnt ist. Diese Spezifikation limitiert jedoch die Größe der Daten die mit einem Shapefile gespeichert werden können. Zum Beispiel darf eine `.dbf`-Datei nicht größer als 2GB sein, die Felder dürfen keine Leerzeichen enthalten und nicht länger als zehn Zeichen sein, NULL-Werte werden nicht unterstüzt, ebenso wie zahlreiche Sonderzeichen, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations).

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson) und [KML](http://developers.google.com/kml) sind neuere Formate basierend auf [JSON](http://www.json.org/) bzw. [XML](http://en.wikipedia.org/wiki/XML). Alle Formate sind textbasiert und sie sind im Vergleich zu Shapefiles einfacher in Software zu integrieren. Diese zusätzliche Flexibilität und Eigenschaften haben dazu beigetragen, dass diese Formate jetzt meist Standard in neuen web-basierten Anwendungen sind. Ein Nachteil von GeoJSON ist, dass es weniger Tools gibt, um Eigenschaften über mehrere Datensätze zu vergleichen, was Datenaufbereitung und -analyse erschwert.

### Topologie

Zusätzlich zu Orten und Geometrien halten manche Vektorformate auch die Topologie zwischen Objekten, also deren räumlichen Beziehungen, vor. Politische Grenzen zum Beispiel berühren sich oft — man kan zum Beispiel mit einem Fuß in Arizona und mit dem anderen in New Mexico stehen. Viele Formate speichern jeweils eine Fläche für Arizona und New Mexico mit zwei Grenzabschnitten, die sich genau überlappen, aber sonst keinerlei Beziehung haben.

Das ist ein Problem, wenn man herausfinden möchte, welche Staaten Nachbarn sind oder wenn man die Geometrien vereinfachen möchte, während die Grenze weiter überlappen soll. Dafür wurde das Konzept von Topologie eingeführt: Statt beide Flächen unabhängig zu speichern, werden nur die Linien vorgehalten, zusammen mit Informationen, welche dieser Linien die Grenzen welcher Flächen darstellen. Die Grenze zwischen Arizona und New Mexico wird als eine einzige Linie gespeichert. Wenn man dann die Linie verändert, verändert sich gleichzeitig die Fläche beider Staaten.

## Geocodierung

Manche geographische Information liegt weder als Vektor noch als Raster vor: Die Information liegt als Text vor, z.B. in Ortsnamen, Straßen oder Adressen. Leider können diese Informationen nicht einfach auf einer Karte dargestellt werden. Es gibt einen indirekten und leider oft ungenauen Prozess, um Angaben wie 'United States' in einen Punkt `-120, 40` zu überführen. Dieser Prozess wird **Geocodierung** genannt. Geocodierung basiert auf Datenbank mit Straßennamen, Städten und Ländern mit ihren geographischen Positionen sowie Algorithmen, um das naheliegendste Ergebnis für eine ungenaue Eingabe zu finden.

### Reverse Geocoding

Der umgekehrte Prozess wird **reverse Geocoding** genannt. Damit wird für eine geographische Position eine Ortsbezeichnung gefunden, z.B. `United States` oder `1714 14th Street`. Genau wie die Geokodierung ist dies nur eine Annäherung – ein Ort auf der Erde kann innerhalb überlappender, in Konflikt stehender Grenzen liegen oder zwischen zwei Adresspunkten.

Geokodierung und reverse Geocoding sind schwierige Vorgänge: Falsche Koordinaten, schlecht formatierte Adressinformationen und sich ständig verändernde Straßen- und Gebäudestrukturen tragen zum Problem bei, Adressen in Koordination zu transformieren und umgekehrt.

<a class='further-reading' href='/geocoding.de.html'>Mehr zur Geokodierung erfahren.</a>

## Datenerfassung

Über die Zeit wurden Geodaten auf verschiedene Art und Weise erfasst: Angefangen von Logbüchern Seereisender bis hin zu geokodierten Tweets. Derzeit gibt es folgende relevante Methoden:

![](img/gps.jpg)

**GPS**, eine Konstellation von Satelliten, die für den blauen Punkt auf der Karte im Smartphone sorgt, ist die Grundlage zur Erfassung akkurater Vektordaten. Vermesser nutzen hochgenaue GPS-Geräte und kombinieren ihre Messungen zu einem zuverlässigen Ergebnis.

Erdbeobachtungssatelliten und -flugzeuge erfassen den Großteil der Rasterdaten, indem ständig Photos der Erdoberfläche aus verschiedenen Höhen aufgenommen und zu einem Gesamtbild der Erde zusammengeführt werden. Die gleichen Sensoren erfassen auch nicht-sichtbare Parameter; z.B. Infrarot, das in der Land- und Forstwirtschaft eingesetzt wird. Einige Geräte sind auch mit [LiDAR](http://en.wikipedia.org/wiki/Lidar) ausgestattet, einer Art Lasersensor, der Höheninformationen erfasst.

***Unternehmen, Regierungen und Communities*** verwalten Datensätze der Erde von unterschiedlicher Genauigkeit. [Google](http://maps.google.com) und [OpenStreetMap](http://www.openstreetmap.org/) bieten Daten über Straßen an, während andere Quellen wie [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) oder [Natural Earth](http://www.naturalearthdata.com/) die Grenzen aller Länder vorhalten.

### Datenspeicherung

Es gibt verschiedene Möglichkeiten Geodaten zu speichern. Daten können als gedruckte Karten bereit gestellt werden; neuerdings werden Geodaten jedoch digital vorgehalten, sodass sie einfach zugänglich und weiterzugeben sind.

Es gibt verschiedene Dateitypen und Konventionen, um Geodaten zu speichern, und daher auch eine Reihe von Werkzeugen, um zwischen diesen Formaten zu konvertieren. Daten können in Datenbanken oder individuellen Dateien gespeichert werden, der praktische Unterschied soll hier jedoch nicht weiter vertieft werden.

# Informationen

Karten sind visualisierte Informationen: Auf der einen Seite haben wie die Fragen nach geodätischem Datum, Zahlen und deren Speicherung — die Grundlagen dessen, wie wir verschiedene Orte auf der Erde erfassen und unterscheiden. Dann findet zwischen Rohdaten und deren Visualisierung eine Transformation statt, die man Projektion nennt und bei der Orte auf der Erde auf flache Oberflächen, wie Drucksachen oder Bildschirme projiziert werden. Zuletzt werden Farben, deren Töne und Symbole bestimmt, mit denen Details der Rohdaten in Grafiken überführt werden, die Menschen verstehen und interpretieren können.

## Breite und Länge

Die gebräuchlichste Form, um Orte auf der Erde darzustellen, ist Länge (_longitude_) und Breite (_latitude_). Früher wurden Länge und Breite im Sexagesimalsystem dargestellt, z.B. `38° 12'`; heutzutage ist jedoch die Darstellung als einfache Dezimalzahl gebräuchlicher (38,2), da diese von Computern einfacher verarbeitet werden können.

![](img/latlon.png)

Geographische **Breite** reicht von -90 am Südpol bis 90 am Nordpol. Am Äquator beträgt der Wert stets 0.

Geographische **Länge** reicht von -180 bis 180; die Linie, an der die Werte aufeinander treffen, teilt den Pazifik in Nord-Süd-Richtung. Der Nullmeridian verläuft demgegeüber durch Afrika und Europa (inbesondere das Royal Observatory in Greenwich, London).

Die Kombination von Länge und Breite wird als Koordinate bezeichnet und wird üblicherweise als 'Breite,Länge' oder 'Länge,Breite' angegben. Eigentlich war erstere Form der Standard; 'Länge,Breite' wird kürzlich jedoch auch häufiger verwendet, da es der 'X,Y'-Notation im euklidischen System entspricht.

Die Folge der Koordinaten führt oft zu Verwirrung, da browwser-basierte Kartensoftware normalerweise 'Breite,Länge' (_'longitude,latitude'_) erwarten, während andere Protokolle von 'Länge,Breite' (_'latitude,longitude'_) verlangen.

Manchmal werden Länge und Breite durch weitere Werte ergänzt, z.B. Höhe über Meeresspiegel, Zeitpunkt der Datenerfassung oder Ähnlichem. Höhe wird normalerweise als dritte Koordinate angegeben, also 'Breite,Länge,Höhe'.

## Zur Form der Erde

![](img/earth-shapes.jpg)

Wenn wir Repräsentationen der Erde speichern führt das zu der Frage welche Form diese eigentlich hat — können Länge und Breite auf eine perfekte Kugel abgebildet werden und dabei ihre Genauigkeit behalten?

Die Erde ist ein rotierendes Objekt, das seine Form durch die Rotation verändert und mittig ausbeult. Statt einer perfekten Kugel ist die Erde eher ein [abgeflachter Ellipsoid](http://de.wikipedia.org/wiki/Rotationsellipsoid). Bei genauerem Bertrachtem stellt man fest, dass da auch nicht ganz stimmt: Die Erde hat etliche Höhenunterschiede wie Berge, Täler und sogar menschengemachte Veränderungen wie Städte.

Bei der täglichen Arbeit verwendet man deshalb Annäherungen an diese Form: Standards wie [WGS84](http://de.wikipedia.org/wiki/World_Geodetic_System_1984) definieren genaue Werte für die Länge beider Erdachsen, sodass man mit einem [Referenzellipsoid](http://de.wikipedia.org/wiki/Reference_ellipsoid) statt einer Sphäre arbeiten kann. Lokal begrenzte Messungen, die auf hochgenauen Höhenangaben basieren, verwenden auch [Geoidmodelle](https://de.wikipedia.org/wiki/Geoid), die dreidimensionale Berechnungen der Höhe über dem Meer bereithalten.

Dieses Teilgebiet der Geowissenschaften wird [Geodäsie](https://de.wikipedia.org/wiki/H%C3%B6here_Geod%C3%A4sie) genannt und beschäftigt sich mit der Vermessung und Modellierung der Erde.

## Kartenprojektionen

![](img/projections.jpg)

Kartenprojektionen sind mathematische Gleichungen, die die Erde in eine flache Form überführt, die dan auf einem Bildschirm dargestellt oder auf Papier gedruckt werden kann. Diese Transformation ist eine komplexe Aufgabe und ohne Verzerrungen unmöglich, die das Verhältnis von Flächen, Winkeln oder Distanzen betreffen.

<a class='further-reading' href='/datum.de.html'>Mehr über geodätische Daten erfahren.</a>

## Visualisierung

Visualisierung ist der Überbegriff für verschiedene Methoden mit denen Daten in Grafiken und Karten umgewandelt werden.

Daten haben grundsätzlich kein vorgegbenes Aussehen: Eine Liste von Pixeln oder Linien von Straßen können in einer Tabelle oder einem Tortendiagramm ebenso dargestellt werden wie auf einer Karte. "Umwandeln" ist demnach nicht der korrekte Begriff: Es ist mehr eine Frage wie man die Daten darstellt.

Visualisierungsmethoden beinhalten alles was grafisch ausgedrückt werden kann, also zum Beispiel auch 3D. Im folgenden betrachten wir einige dieser Methoden genauer.

## Sequenzielle und kategorische Daten

![](img/scales.jpg)

Visualisierung zeigt verdeutlicht meist zwei Charakteristika von Daten: Sequenzielle oder kategorische Daten. Sequenzen oder kontinuierliche Daten können auch als linear bezeichnet werden — es handelt sich dabei meist um numerische Werte innerhalb eines bestimmten Bereichs, so zum Beispiel Höhenangaben. Kategorien oder diskrete Daten sind meist auf eine vorgegebene Anzahl von Werten beschränkt: wahr oder falsch, Demokrat oder Republikaner.

Der Unterschied zwischen diskreten und kontinuierlichen Daten ist eine der wichtigsten Fragen bei der Visualisierung. Sequenzielle Daten können durch skalierte Punkte oder mittels eines Farbgradienten in einem Raster dargestellt werden, diskrete Daten hingegen üblicherweise mittels verschiedener Symbole oder Farben.

### Choroplethenkarten

Choroplethenkarten orientieren sich an existierenden Grenzen von Gebieten und deren Flächen und stellen Daten mittels wechselnder Farben, Muster und Texturen dar. Ein bekanntes Beispiel sind dafür sind Wahlkarten oder demographische Karte, bei denen die Daten einen bestimmten Prozentwert repräsentieren.

Choroplethenkarten werden für Häufigkeiten, Dichten oder Anteile verwendet. Für absolute Werte sollen sie möglichst nicht verwendet werden, da die Flächengrößen nicht normalisiert werden und daher große Flächen hervorgehoben werden. Choroplethenkarten setzen auf Farbunterschiede, daher sollten die gewählten Farben verständlich, konsistent und für rot-grün Blinde zugänglich sein.

<a class='further-reading' href='/colors.de.html'>Mehr über Farben erfahren.</a>

### Punktkarten

Punkte sind die bessere Alternative für absolute Werte — die Geometrie einer Fläche wird auf einen Punkt reduziert.

Die Art und Weise, wie dieser Punkt dargestellt wird, ist unterschiedlich. Man kann den Punkt nach seinem Wert oder Kategorie einfärben oder man skaliert die Größe des Punktes entsprechend der darzustellenden Information. Diese Symbole können alle möglichen Formen annehmen: Kreise, Quadrate oder Bilder dessen was die Punkte repräsentieren. In Fällen, in denen sich mehrere Werte aufsummieren lassen, können skalierte Tortendiagramme ein geeignetes Mittel sein, um einen komplexen Datensatz darzustellen.

Allerdings muss man aufpassen, dass man nicht zu viele Punkte auf der Karte darstellt, da diese schwer lesbar wird. In solchen Fälle kann man eine Choroplethenkarte einsetzen, bei der die Werte der einzelnen Punkte aggregiert werden. Eine Alternative ist das Clusteringverfahren, bei der eng beieinander liegende Punkte zusammengefasst werden, bis man weiter herein zoomt.

## Veröffentlichung

## Datenanalyse

Raster- und Vektordatenanalyse als Aggregation und Transformation

### Vektor zu Raster

Es ist möglich zwischen beiden Datentypen zu transformieren. Raster und Vektor mögen sehr gegensätzlich erscheinen, haben allerdings viele Gemeinsamkeiten, die jedoch zunächst nicht offensichtlich sind.

Typischerweise werden Vektordaten immer in Raster verwandelt — nämlich dann, wenn man von "gerenderten" Daten spricht, denn Grafiken werden auf Bildschirmen immer als Folge von Pixeln dargestellt und nicht durch Linien oder Flächen. Diese Umwandlung ist natürlich nicht perfekt. Wie bereits erwähnt, sind Vektordaten nicht pixelbasiert, sodass man beim Vergrößern nie unscharfe Elemente sieht. Wenn demnach Vektordaten in ein Raster transformiert werden, kann  das Ergebnis nie exakt zurück transformiert werden.

Vektordaten werden jedoch auch vor der Visualisierung oft in Raster transformiert, weil es zum Beispiel einfacher ist, bestimmte mathematische Berechnungen auf Basis von Pixeln durchzuführen.

### Raster zu Vektor

Gleichermaßen können Rasterdaten in Vektordaten transformiert werden. Auf Grundlage von Satellitenbildern kann man so zum Beispiel die Linien von Straßen oder Polygone von Gebäuden nachzeichnen. Das Resultat ist eine neue Version der gleichen Information, die für neue Zwecke verwendet werden kann. Routenplanung kann so nur mit Hilfe von Vektordaten, jedoch nicht mittels Rasterdaten, durchgeführt werden.

### Simulation

Mit Hilfe geographischer Daten können bestimmte natürliche Prozess simuliert werden. Diese Modellierung ist ein großer Teil der täglichen Arbeit eines Kartographen. Mit Höheninformationen von Gebirgszügen können Licht und Schatten auf Bergen berechnet und für eine plastische Darstellung auf Karten angewandt werden. Dieser Prozess wird auch _Hillshading_ genannt.

Komplexere Modellierungen sind auch möglich, zum Beispiel die Berechnung des Abflusses von Regenwasser in einem Flusseinzugsgebiet oder die Berechnung eines _Viewsheds_, also dessen was man unter Einbezug des Geländes von einem bestimmten Punkt aus sehen kann.

### Aggregation

Die gebräuchlichste Form der Aggregation ist die Summe — man kann eine große Anzahl von Zahlen addieren, um ein Gesamtbild zu erhalten. Das Bruttoinlandsprodukt eines Staates als Summe ist so wesentlich Aussagekräftiger als eine Liste einzelner Beiträge.

Aggregation in Karten wird auf ähnliche Weise eingesetzt. Einzeldaten, wie Millionen von Haushaltseinkommen, können mittels eines Algorithmus über eine bestimmte Fläche summiert oder gemittelt werden und so das mittlere Einkommen einer Stadt darstellen.

![](img/binning-wide.jpg)

Aggregation wird auch bei der Gruppierung von Daten eingesetzt. Ausgehend von einer Menge von Einzelpunkten, kann man Gebiete in gleich große und gleichförmige Flächen unterteilen (z.B. Quadrate oder Hexagone) und die Anzahl der Punkte pro Fläche aufsummieren. Anstelle von Millionen Punkten, die schwer verständlich sind, kann man die Information dann mit einer Choroplethenkarte darstellen.

### Interpolation

Während bei der Aggregation große Datenmengen in etwas transformiert, das einfacher zu analysieren und visualisieren ist, werden mittels Interpolation fehlende Werte berechnet. Interpolation wird zum Beispiel bei Höhendaten verwendet, bei denen jedem Pixel eines Rasters ein Wert zugeordnet werden, manche Werte jedoch fehlen. Programmierer nennen das `null`-Werte.

Unter der Annahme, dass der fehlende Wert ähnlich zu denen seiner Umgebung ist, schaut man bei der Interpolation auf die Werte in der unmittelbaren Umgebung eines fehlenden Wertes. Eine fehlendes Pixel auf der Spitze eines Berges wird sehr wahrscheinlich einen hohen Höhenwert haben, während er im Tal eher niedrig sein wird.

Es gibt verschiedene Arten Punktdaten zu interpolieren:

- **Heatmaps** geben jedem Punkt ein Gewicht und stellen Gebiete mit hoher Punktdichte in wärmeren Farben dar.
- **Isolinien** stellen auf Basis von Punktdaten Linien gleichen Wertes dar. Diese Methode wird oft für Höhenkarten verwandt.
- Ein **TIN** (_Triangulated Irregular Network_) verbinden einzelne Punkte mit Linien und wird für Geländemodelle eingesetzt.
- **Voronoi-Diagramme** zerteilen ein Gebiet auf Basis von Punkten so in einzelne Flächen, dass jede Fläche genau einen Punkt beinhaltet und die Fläche zwischen den Punkte maximal ausgedehnt wird.

## Nachwort

Wir hoffen, dass dies ein aufschlussreicher und inspirirender Einstieg in das Thema "Karten" war. Das Sachgebiet hat großes Potential und viele ungeklärte Fragen. Karten sind ein verbindendes Thema, dass sich in Kunst, Mathematik, Physik Ökologie und vieles andere erstreckt.

Wir freuen uns über [Hinweise und Vorschläge](https://tmcw.wufoo.com/forms/mapschool-feedback/), die dir beim Lesen eingefallen sind.

### Lizenz

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
