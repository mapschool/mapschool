---
title: "mapschool: geocoding"
layout: default
language: en
permalink: geocoding.html
---

Geocoding is an extremely common need - from postal services to demographic analysis, there are plenty of jobs that require you to turn names into places and vice-versa.

## Challenges

Geocoding is difficult for a number of reasons. Street names are often misspelled, and even official city sources and signage varies significantly. The formatting of street names - order in which house number, street type, street name, city, and country are placed - varies between cities and countries. Address points also can either be precise in data, or estimated by choosing equidistant places along a known address range on a road.

## Data

The data required to run a worldwide geocoder is significant and not readily available. Commercial sources like the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) are based on proprietary data, and often require [restrictions on the output](https://developers.google.com/maps/terms#section_10_12). In the US, the largest source of address point data, controlled by the [USPS](https://www.usps.com/), is not available for public release because of potential privacy concerns.

## Tools

There are many geocoders available, with varying levels of performance, coverage areas, and granularity.

### Worldwide Services 

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [OpenCage Geocoder](http://geocoder.opencagedata.com/)
* [Twofishes](http://demo.twofishes.net/)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)

### US-Only Services

* [geocoder.us](http://geocoder.us/)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)


### Canadian Services

* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### Databases

* [geonames](http://www.geonames.org/)

### Code libraries

* node - [node geocoder](http://nchaulet.github.io/node-geocoder/)
* Perl - [Geo::Coder::Many](https://metacpan.org/pod/Geo::Coder::Many)
* PHP - [Geocoder PHP](http://geocoder-php.org)
* Python - [geopy](https://github.com/geopy/geopy)
* Ruby - [Ruby Geocoder](http://www.rubygeocoder.com)
