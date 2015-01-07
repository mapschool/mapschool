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