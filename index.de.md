---
title: mapschool
layout: default
language: de
---

# map school

Was ist eine Karte? Bis in die 1980er Jahre waren das Dokumente, die mühevoll von Hand gefertigt wurden. Heute werden Karten fast ausschließlich am Computer erstellt. Karten sind heute so weit verbreitet, dass man sie in Routenanweisungen, Datenvisualisierungen und bei der Klärung von Grenzkonflikten findet. Lassen sie uns einen genaueren Blick auf die grundlegenden Elemente von Karten werfen — aus der Sicht des Gestalters.

Im Grunde sind digitale Karten die Visualisierung von Daten. Abstrakt betrachtet sind Daten Milliarden von Punkten oder einige Polygone auf der einen oder Bild-ähnliche Aufnahmen von Farben oder Temperatur. Es ist wichtig zu erwähnen, dass Daten jeweils unabhängig von deren Nutzung sind.

Auf Basis von Daten können Zahlen und Darstellungen abgeleitet oder Entscheidungen getroffen werden. Meistens werden mithilfe von Daten durch Visualisierung Darstellungen erzeugt — einem Prozess, bei dem entschieden wird, welche graphischen Elemente welchen Teil des Datensatzes repräsentieren sollen. Durch Analyse von Daten, d.h. durch Transformation, Aggregation und Zusammenfassung, können Fragen beantwortet und bestimmte Erkenntnisse hervorgehoben werden. Visualisierung und Analyse werden oft kombiniert — Visualisierung bestimmt die Grenzen dessen, was man darstellen kann und Analyse bestimmt, auf welche Aspekte eines Datensatzes man sich fokussiert.

# Daten

Es gibt zwei grundlegende Arten geographischer Daten: **Vektor** , bestehend aus Geometrien, und **Raster**, bestehend aus Pixeln. Beide Arten werden ich kombiniert, zum Beispiel wenn Straßendaten über ein Satellitenbild gelegt werden.

## Raster

![](img/raster.png)

**Rasterdaten** sind vergleichbar mit einem Photo, dass man mit einer Digitalkamera aufnimmt: Auf der untersten Abstraktionsebene ist es schlicht eine Liste von Pixel mit zugeordneten Werten. Wenn man hereinzoomt und einen genaueren Blick auf die Daten wirft, kann man ab einem bestimmten Punkt einzelne Pixel erkennen — das Bild wirkt dann “pixelig”.

Rasterdaten werden für Aufnahmen der Erdoberfläche verwendet, wie sie von Satelliten erstellt werden. Pixel müssen allerdings nicht zwangsläufig Farben repräsentieren: Tatsächlich kann jedes Pixel einen numerischen Wert haben; z.B. für Höhe, das ganze Raster zeigt dann Höheninformation eines Gebietes. Andere Beispiele sind Angaben zu Temperatur oder Reflexion, wie sie in Umweltwissenschaften verwandt werden.

### Kanäle

The Pixel eines Rasters repräsentieren nicht notwendigerweise Farben: Der Inhalt eines Pixel wird in Kanälen beschrieben. Ein normals Photo hat drei Kanäle: Rot, Grün und Blau. Zusammengenommen ergeben diese Kanäle ein Bild wie wir es kennen. Manche Rasterformate haben weniger Kanäle (Höhendaten haben nur einen Kanal, manche haben mehrere, z.B. für nicht sichtbare Wellenlängen wie Infrarot und Ultraviolett. Wenn Rasterten analysiert und dargestellt werden, können einzelne Kanäle für einen bestimmten Anwendungsfall ausgewählt und kombiniert werden.

### Rasterformate

Rasterformate haben das Ziel, Daten zu komprimieren und für Analyse und Visualisierung schnell verfügbar zu machen. Einige Formate sind geo-spezifische Erweiterungen gängiger Grafikformate, wie [GeoTIFF](http://trac.osgeo.org/geotiff/
) und JPEG2000.

Intern erledigen Rasterformate zwei Aufgaben: Daten in Pixel anzuordnen und die Beziehung zwischen diesen Pixel und einer Position auf der Erde herzustellen.

## Vektor

![](img/vector_types.png)

Vektordateien halten keine Pixel vor, sondern einfache Geometrien. Unabhängig davon wie weit man hinein zoomt; man sieht keine Pixel: Die Daten werden als Punkte und Linien gespeichert und nur in Graphiken dargestellt wenn nötig.

Vektordateien werdne zu Vorhaltung von Straßen, Gebäuden, interessanten Punken und ähnlichen Dinge, die auf der Erde verortet werden können.

### Verktorformate

Das am weitesten verbreitete Vektorformat ist [Shapefile](http://en.wikipedia.org/wiki/Shapefile) — ein einfaches, dateibasiertes Format, das seltsamerweise die notwendingen Informationen auf vier separate Deteien verteilt: `.shp` (wo die eigentlichen Geometrien vorgehalten werden), `prj` (eine Zeichenkette, die die verwendete Kartenprojektion beschreibt), `.shx` (ein Index für schnelleres Suchen) und `.dbf` (eine Datenbankdatei, die Attribute vorhält, die mit den Geometrien des `.shp` verknüpft sind). Die meisten dieser Dateien sind Binärdaten, wenn man sie in einem einfachen Texteditor öffnet, wird man nicht viel erkennen können; abgesehen von `.prj`, das die Projektion in _Plain Text_ beschreibt. Die `.dbf` Datein kann mit Libre Office Clac gelesen werden, weil das Format an eine alte Datenbankspezifikation angelehnt ist. Diese Spezifikation limitiert jedoch die Größe der Daten die mit einem Shapefile gespeichert werden können. Zum Beispiel darf einen `.dbf`-Datei nicht größer als 2GB sein, die Felder dürfen keine Leerzeichen enthalten und nicht länger als zehn Zeichen sein, NULL-Werte werden nicht unterstüzt, ebenso wie zahlreiche Sonderzeichen, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations).

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson) und [KML](http://developers.google.com/kml) sind neuere Formate basierend auf [JSON](http://www.json.org/) bzw. [XML](http://en.wikipedia.org/wiki/XML). Alle Formaten sind textbasiert und sie sind im Vergleich zu Shapefiles einfacher in Software zu integrieren. Diese zusätzliche Flexibilität und Eigenschaften haben dazu begetragen, dass diese Formate jetzt ein Standard in neuen web-basierten Anwendungen. Ein Nachteil von GeoJSON ist, dass es weniger Tools gibt, um Eigenschaften über mehrere Datensätze zu vergleichen, was Datenaufbereitung und -analyse erschwert.

### Topologie

Zusätzlich zu Orten und Geometrien halten manche Vektorformate auch die Topologie zwischen Objekten, also ihrer räumlichen Beziehung, vor. Politische Grenzen zum Beispiel berühren sich oft — man kan zum Beispiel mit einem Fuß in Arizona und mit dem anderen in New Mexico stehen. Viele Formate speichern jeweils einen Fläche für Arizona und New Mexico mit zwei Grenzabschnitten, die sich genau überlappen, aber sonst keine Beziehung beschreiben.

Das ist ein Problem, wenn man herausfinden möchte, welche Staaten Nachbarn sind oder wenn man die Geometrien vereinfachen möchte, während die Grenze weiter überlappen sollen. Dafür wurde das Konzept von Topologie eingeführt: Statt beide Flächen unabhängig zu speichern, werden nur die Linien vorgehalten zusammen mit Informationen, welche dieser Linien die Grenzen welcher Flächen darstellen. Die Grenze zwischen Arizona und New Mexico wird als eine einzige Linie vorgehalten. Wenn man die Linie verändert, verändert sich gleichzeitig die Fläche beider Staaten.

## Geocodierung

Manche geographische Information liegt weder als Vektor noch als Raster vor: Die Information liegt als Text vor, z.B. in Ortsnamen, Straßen oder Adressen. Leider können diese Informationen nicht einfach auf einer Karte dargestellt werden. Es gibt einen indirekten und leider oft ungenauen Prozess, um Angaben wie 'United States' in einen Punkt `-120, 40` zu ¨berführen. Dieser Prozess wird **Geocodierung** genannt. Geocodierung basiert auf Datenbank mit Straßennamen, Länden und ähnlichem mit ihren geographischen Positionen und Algorithmen, um das naheliegendste Ergebnis für einen ungenaue Eingabe zu finden.

### Reverse Geocoding

Der umgekehrte Prozess wird **reverse Geocoding** genannt. Damit werden geographische Positionen in menschverständlichen Text umgewandelt, z.B. `United States` oder `1714 14th Street`. Genau wie die Geocodierung ist es nur eine Annäherung – ein Ort auf der Erde kann innerhalb überlappender, in Konflikt stehender Grenzen liegen oder zwischen zwei Adresspunkten.

Geocodierung und reverse Geocoding sind schwierige Vorgänge: Falsche Koordinaten, schlecht formatierte Adressinformationen und sich ständig verändernde Straßen- und Gebäudestrukturen tragen zum Problem bei, Adressen in Koordination und umgekehrt zu transformieren.

## Datenerfassung

Über die Zeit wurden Geodaten auf verschiedene Art und Weise erfasst: Angefangen von Logbüchern Seereisender bis hin zu geokodierten Tweets. Derzeit gibt es folgende relevante Methoden:

![](img/gps.jpg)

**GPS**, eine Konstellation von Satelliten, die für den blauen Punkt auf der Karte im Smartphone sorgt, ist die Grundlage zur Erfassung akkurater Vektordaten. Vermesser nutzen hochgenaue GPS-Geräte und kombinieren ihre Messungen zu einem zuverlässigen Ergebnis.

Erdbeobachtungssatelliten und -flugzeuge erfassen den Großteil der Rasterdaten, indem ständig Photos der Erdoberfläche aus verschiedenen Höhen aufgenommen und zu einem Gesamtbild der Erde zusammengeführt werden. Die gleichen Sensoren erfassen auch nicht-sichtbare Parameter; z.B. Infrarot, das in der Land- und Forstwirtschaft eingesetzt wird. Einige Geräte sind auch mit [LiDAR](http://en.wikipedia.org/wiki/Lidar) ausgestattet, einer Art Lasersensor, der Höheninformationen erfasst.

***Unternehmen, Regierungen und Communities*** verwalten Datensätze der Erde von unterschiedlicher Genauigkeit. [Google](http://maps.google.com) und [OpenStreetMap](http://www.openstreetmap.org/) bieten Daten über Straßen an während andere Quellen wie [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) oder [Natural Earth](http://www.naturalearthdata.com/) die Grenzen aller Länder vorhalten.

### Datenspeicherung

Es gibt verschiedene Möglichkeiten Geodaten zu speichern. Daten können als gedruckte Karten, neuerdings werden Geodaten jedoch digital vorgehalten, sodass sie einfach zugänglich und weiterzugeben sind.

Es gibt verschiedene Dateitypen und Konventionen, um Geodaten zu speichern, und demnach eine Reihe vom Werkzeugen, um zwischen diesen Konventionen zu konvertieren. Daten können in Datenbanken oder individuellen Dateien gespeichert werden, der praktische Unterschied soll hier jedoch nicht weiter vertieft werden.

## Informationen

Karten sind visualisierte Informationen: Auf der einen Seite haben wie die Fragen nach Datum, Zahlen und Speicherung — die Grundlagen dessen, wie wir verschiedene Orte auf der Erde erfassen und unterscheiden. Zwischen Rohdaten und deren Visualisierung finden eine Transformation statt, die man Projektion nennt und bei der Orte auf der Erde auf flache Oberflächen, wie Drucksache oder Bildschirme projiziert werden. Zuletzt werden Farben, deren Töne und Symbole bestimmt, mit denen Details der Rohdaten in Grafiken überführt werden, die Menschen verstehen und interpretieren können.

### Breite und Länge

Die gebräuchlichste Form Orte auf der Erde darzustellen ist Länge (_longitude_) und Breite (_latitude_). Frühe wurden Länge und Breite im Sexagesimalsystem dargestellt, z.B. `38° 12'`; heutzutage ist jedcoh die Darstellung als einfache Dezimalzahl gebräuchlicher (38,2), da diese von Computer einfacher verarbeitet werden können.

![](img/latlon.png)

Geographische **Breite** reicht von -90 am Südpol bis 90 am Nordpol. Am Äquator beträgt der Werte stets 00.

Geographische **Länge** reicht von -180 bis 180; die Linie wo die Werte aufeinandertreffen teilt den Pazifik in Nord-Süd-Richtung. Der Nullmeridian verläuft durch Afrika und Europa (inbesondere das Royal Observatory in Greenwich, London).

Die Kombination von Länge und Breite wird als Koordinate bezeichnet und wird üblicherweise als 'Breite,Länge' oder 'Länge,Breite' dargestellt: Eigentlich war erstere Form der Standard; 'Länge,Breite' wird kürzlich jedoch auch häufiger verwendet, da es der 'X,Y' im euklidischen System entspricht.

Die Folge der Koordinaten führt oft zu Verwirrung, da browwser-basierte Kartensoftware normalerweise 'Breite,Länge' (_'longitude,latitude'_) erwarten, während andere Protokolle von 'Länge,Breite' (_'latitude,longitude'_) verlangen.

Manchmal werden Länge und Breite durch weitere Werte ergänzt, z.B. Höhe über Meeresspiegel, Zeitpunkt der Datenerfassung oder ähnliches. Höhe wird normalerweise als dritte Koordinate angegeben, also 'Breite,Länge,Höhe'.
