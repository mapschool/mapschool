---
title: "mapschool: geocodificação"
layout: default
language: en
permalink: geocoding.pt.html
---

Geocodificação é uma necessidade extremamente comum - de serviços postais a análises demográficas, existem muitos empregos que requerem transformar nomes em lugares e vice-versa.

## Desafios

Geocodificação é difícil por vários motivos. Nomes de ruas são frequentemente mal-escritos, e até mesmo registros oficiais de cidades variam significativamente. O formato do nome das ruas - a ordem em que o número da casa, nome da rua, cidade e país são posicionados - varia entre cidades e países. Coordenadas de endereço também pode ser ou precisas ou estimads escolhendo pontos equidistantes entre endereços conhecidos em uma estrada.

## Dados

A quantidade de dados requeridos para rodar um geocodificador mundial é significante e não facilmente disponível. Fontes comerciais como a [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) são baseadas em dados proprietários, e geralmente requerem [restrições no uso](https://developers.google.com/maps/terms#section_10_12). Nos EUA, a maior fonte de pontos de endereço, controlada pela [USPS](https://www.usps.com/), não está dispońivel para uso público devido a preocupações com privacidade.

## Ferramentes

Existem muitos geocodificadores dispońiveis, com uma grande variedade de performance, cobertura e granularidade.

### Serviços mundiais

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)

### Serviços americanos

* [geocoder.us](http://geocoder.us/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)

### Serviços canadenses

* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### Bancos de dados

* [geonames](http://www.geonames.org/)