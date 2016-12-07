---
title: "지도교실: 지오코딩"
layout: default
language: kr
permalink: geocoding.kr.html
---

지오코딩은 일상생활에서 매우 흔하게 쓰인다. 택배업무에, 인구 통계 등 다양한 곳에서 장소의 이름을 지구 위의 좌표로 바꾸거나 혹은 그 반대의 일을 필요로 한다.

## 어려운 지오코딩

지오코딩이 어려운 데에는 많은 이유가 있다. 도로명의 철자가 틀리는 경우도 많고 도시의 공식적인 데이터 소스들 조차 변수가 많다. 주소를 쓰는 방법은 도시, 나라마다 다르다. 주소데이터는 독립적인 데이터일 수도 있지만, 이미 알고있는 주소를 기반으로 하여 추정되는 경우도 있다.

## 데이터

전세계를 지오코딩하기 위한 데이터는 매우 중요하지만, 구하기 쉽지 않다. [구글 지오코딩](https://developers.google.com/maps/documentation/geocoding/)과 같이 소유권이 있는 데이터를 바탕으로 한 상업적인 데이터는 종종 [결과물에 제한](https://developers.google.com/maps/terms#section_10_12)을 둔다. 미국의 경우, 주소 데이터의 허브라고 할 수 있는 우편 시스템인 [USPS](https://www.usps.com/)는 사생활 침해를 우려하여 이 주소 데이터를 공개하지 않는다.

## 도구

시중엔 다양한 지오코더가 나와있으며 성능, 데이터가 커버하는 영역, 디테일 등은 각각의 지오코더에 따라 다르다.

### 전세계 서비스
* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)
* [Mapzen Search](https://mapzen.com/products/search/)

### 미국 전용 서비스
* [geocoder.us](http://geocoder.us/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)

### 캐나다 서비스
* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### 데이터 베이스
* [geonames](http://www.geonames.org/)