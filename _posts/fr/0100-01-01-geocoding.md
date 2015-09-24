---
title: "mapschool: géocodage"
layout: default
language: fr
permalink: geocoding.fr.html
---

Le géocodage est un besoin extrêmement fréquent - depuis les services postaux jusqu’aux analyses démographiques, un grand nombre de jobs vont vous demander à un moment ou à un autre de convertir des noms en lieux, et vice-versa.

## Défis

Le géocodage est difficile pour un certain nombre de raisons. Les noms de rues sont souvent mal orthographiés, et même les sources officielles peuvent changer de manière significative. Le formatage des noms de rues - l’ordre dans lequel le numéro, le type de rue, le nom de la rue, la ville et le pays sont placés - peut varier entre les villes ou les pays. Les points d’adresses peuvent aussi être précisément localisés dans la donnée, ou estimés par le choix d’endroits équidistants le long d’une série d’adresses connue sur une route.

## Données

Les données requises pour faire fonctionner un géocodeur mondial sont très significatives, et rarement disponibles. Des sources commerciales comme l’[API Google Maps](https://developers.google.com/maps/documentation/geocoding/) sont basées sur des données propriétaires, et imposent souvent des [restrictions sur les usages](https://developers.google.com/maps/terms#section_10_12). Aux États-Unis, la plus grande base de données adresses, contrôlée par l’[USPS](https://www.usps.com/), n’est pas accessible au public pour des questions de protection des renseignements personnels.

## Outils

Il y a de nombreux géocodeurs disponibles, aux niveaux de performances, zones de couverture et granularité variables. Une [liste de services de géocodage](http://en.wikipedia.org/wiki/List_of_geocoding_systems) est disponible en anglais sur Wikipédia.

### Services internationaux

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)

### Services français et européen

* [API Javascript de ViaMichelin](http://dev.viamichelin.fr/geocoding-js.html)
* [Geocheck](http://www.ideeslibres.org/GeoCheck/) permet de comparer le résultat de différents services de géocodage, dont certains basés sur OpenStreetMap ou sur la Base Adresse Nationale Ouverte (BANO)

### Service canadien

* [geogratis](http://geogratis.gc.ca/site/fra/geoloc)

### Base de données

* [geonames](http://www.geonames.org/)
