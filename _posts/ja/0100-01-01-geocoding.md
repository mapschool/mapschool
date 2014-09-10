---
title: "ちずのつくりかた: ジオコーディング"
layout: default
language: ja
permalink: geocoding.html
---

ジオコーディングは非常に幅広いニーズをもちます。郵便配達サービスから人口統計まで、場所に付与された名称と位置情報を紐付ける必要性は多種多様な職種から必要とされています。

## 課題

ジオコーディングを行うにあたっては、いくつかの課題があります。例えばストリートの名称はタイプミスして入力されていることがよくありますし、市町村の公式データや標識のなかですら、表記方法が統一されていません。ストリートの名称の表記方法 -住所を記述する際の家屋番号 (訳注: 日本での"号") 、ストリートの種類、ストリートの名称、市町村の順番など- ですら、国や地域、市町村ごとに違いがあり、統一された表記方法はありません。住所をあらわすポイントは、完全にその一点を意味するポイントデータか、あるいは道路ごとに設定された住所の値と道路の幅から自動算出された推定値から算出されます。

## データ

ジオコーディングを全世界どこでも処理できるようにするためには膨大な量のデータが必要であり、そのデータの収集は簡単に達成可能なものではありません。[Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) のような商用ソースはプロプライエタリなデータを元にしており、多くの場合、[出力・利用方法に制限など](https://developers.google.com/maps/terms#section_10_12) が存在します。アメリカにおいて、住所を示すポイントデータとして最も量が多いデータセットは [USPS/アメリカ合衆国郵便公社](https://www.usps.com/) が管理しており、こちらはプライバシーの観点から公開利用を行うことが許可されていません。

## ツール

ジオコーダーとして利用可能なツールはいくつか存在しており、それぞれにパフォーマンスやカバー範囲、検索の粒度が異なっています。

### 全世界対象のサービス

* [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/)
* [MapQuest Open Geocoder](https://developer.mapquest.com/web/products/open/geocoding-service)
* [Yahoo Geocoder](https://developer.yahoo.com/boss/geo/)
* [Twofishes](http://demo.twofishes.net/)

### アメリカ地域限定サービス

* [geocoder.us](http://geocoder.us/)
* [US Census Geocoding Service](http://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf)
* [Mapbox](https://www.mapbox.com/developers/api/geocoding/)

### カナダ地域用サービス

* [geogratis](http://geogratis.gc.ca/site/eng/geoloc)

### データベース

* [geonames](http://www.geonames.org/)