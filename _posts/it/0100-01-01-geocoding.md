---
title: "mapschool: geocodifica"
layout: default
language: it
permalink: geocoding.it.html
---

La geocodifica è un bisogno estremamente comune - dai servizi postali all'analisi demografica, ci sono un sacco di lavori che ti richiedono di trasformare nomi in luoghi e viceversa.

## Sfide

La geocodifica è difficile per una serie di ragioni. I nomi delle strade sono spesso scritti non correttamente, e perfino le sorgenti cittadine ufficiali e i cartelli stradali variano significativamente. La formattazione degli indirizzi stradali - l'ordine nel quale sono posti numero civico, tipo di strada, nome, città e nazione - varia tra le città e le nazioni. Anche i punti degli indirizzi possono essere dati precisi o stimati scegliendo luoghi equidistanti lungo un intervallo conosciuto di indirizzi di una strada.

## Dati

I dati necessari a far girare un geocoder su scala mondiale sono rilevanti e non immediatamente disponibili. Fonti commerciali come la [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) sono basate su dati proprietari, e spesso richiedono [restrizioni sui risultati](https://developers.google.com/maps/terms#section_10_12). Negli Stati Uniti la più grande fonte di indirizzi puntuali, controllata dall'[USPS](https://www.usps.com/), non è disponibile per il rilascio pubblico a causa di potenziali problemi di privacy.

## Strumenti

Ci sono molti geocoder disponibili, con livelli variabili di prestazioni, area di copertura, e granularità.

### Servizi Globali

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)

### Servizi limitati agli Stati Uniti

* [geocoder.us](http://geocoder.us/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)

### Servizi Canadesi

* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### Database

* [geonames](http://www.geonames.org/)
