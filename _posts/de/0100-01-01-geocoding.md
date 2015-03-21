---
title: "mapschool: Geokodierung"
layout: default
language: de
permalink: geocoding.de.html
---

Geokodierung wird überall gebraucht. Von Postdiensten bis hin zu demographischen Analysen; es gibt eine Vielzahl von Aufgaben, bei denen Ortsnamen in geographische Positionen umgewandelt werden müssen und umgekehrt.

## Herausforderungen

Geokodierung ist kompliziert. Straßennamen werden oft falsch geschrieben, sogar die Bezeichnungen in offiziellen Quellen und Beschilderung sind manchmal unterschiedlich. Das Muster von Adressen — die Art wie Hausnummer, Straßenname, Stadt und Land angeordnet werden — unterscheidet sich zwischen einzelnen Ländern. Adresspositionen können zudem auf genauen Informationen basieren oder durch Schätzung anhand existierender Hausnummern entlang einer Straße gewonnen werden.

## Daten

Die Daten, die für einen weltweiten Geocoding-Service gebraucht werden, sind erheblich und nicht ohne Weiteres verfügbar. Kommerzielle Quellen wie die [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) basieren auf proprietären Daten und haben oft Auflagen bei deren [Verwendung](https://developers.google.com/maps/terms#section_10_12). In den USA ist die größte Sammlung von Adressaten des [USPS](https://www.usps.com/) wegen des Datenschutzrechts nicht öffentlich verfügbar.

## Werkzeuge

Verschiedene Geokodierungsservices sind verfügbar mit variierender Leistung, abgedecktem Gebiet und Detailgrad.

### Weltweite Dienste

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)

### US-Amerikanische Dienste

* [geocoder.us](http://geocoder.us/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)

### Kanadische Dienste

* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### Datenbanke

* [geonames](http://www.geonames.org/)
