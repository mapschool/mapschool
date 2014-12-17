---
title: mapschool
layout: default
language: pt
---

# map school

O que é um mapa? Até 1980, mapas eram dolorosos documentos criados à mão. Atualmente, mapas são quase sempre feitos com ajuda de um computador. Mapas hoje são comuns, onipresentes em instruções de direções, visualizações e em disputas políticas territoriais. Vamos olhar cuidadosamente e discutir sobre os elementos fundamentais de mapas com os olhos de um criador.

Mapas de computadores são fundamentalmente compostos de dados. Dados esses que são abstratamente, compostos por milhões de pontos ou apenas alguns poĺigonos, ou um registro em forma de foto de cores e temperaturas. É importante notar que dados não sejam específico a um certo uso.

Dos dados, nós fazemos números, imagens e decisões. Mais usualmente, nós fazemos imagens, em um processo chamado "simbolização" - decidindo que elementos visuais representarão o que em cada parte do conjunto de dados. Nós analizamos os dados, o que significa transformar, agregar e sumarizar para oferecer diferentes respostas e representar diferentes aspectos do conhecimento. As duas tarefas de simbolizar e analizar são geralmente combinadas, com a simbolização definindo os limites do que que podemos representar e a análise definindo os aspectos dos dados que desejamos focar.


# Dados

Fundamentalmente, dados geográficos são ou **raster** ou **vetor** - composto de pixels, ou de geometria. Os dois tipos são comumente combinados, como quando um vetor representando uma rua é sobreposto dados rasterizados de satélite.

## Raster

![](img/raster.png)

Dados **raster** são como fotos tiradas com uma câmera digital: no menor nível de abstração, é uma lista de pixels com valores. Quando você aumenta o zoom e olha próximo a uma imagem rasterizada, em algum momento você conseguirá ver os pixels separadamente, e a imagem terá uma aparência pixelizada.

Dados raster são usados em imagens da Terra, como as tiradas por satélites - mas isso é apenas o começo. Pixels não precisam ter cores - ao invés disso, cada pixel pode ter um número que representa sua altura e sua informação raster como um todo armazena os dados de elevação. Ou pixels podem armazenar temperatura ou dados de reflexão e serem úteis para trabalhos ambientais.

##### Bandas Rasters

Os pixels dos dados raster não são necessariamente preenchidos com dores: nós chamamos seus conteúdos 'bandas'. Uma imagem normal tem três bandas comuns: Vermelho, Verde e Azul. Combinadas, elas formam imagens com que estamos familiarizados. Alguns dados raster podem ter menos bandas, como uma para elevação, enquanto outros podem ter muito mais - não apenas cores visíveis, mas frequências de ondas que nós não podemos ver, como infravermelho e ultravioleta. Quando dados raster são analizados e mostrados, você pode combinar e escolher as bandas que são mais propícias para o que você está procurand.

##### Formatos Raster

Formatos raster tem como objetivo compactar os dados e torná-los rápidos para análise e visualização. Alguns são versões com suporte geospacial de formatos de imagens comuns, como [GeoTIFF](http://trac.osgeo.org/geotiff/) e JPEG2000.

Internament, formatos de dados raster geranciam dois propósitos - agrupar dados em pixels, e então armazenar o relacionament entre esses pixels e o lugar real deles no globo - a "extenção" dos dados.

## Vetor

![](img/vector_types.png)

Dados **vetorizados** armazena geometrias básicas ao inveś de pixels. Não importa o quanto você aumente o zoom em dados vetorizados, você não verá pixels: os dados armazenados são compostos de pontoes geométricos e linhas, e apenas convertidos em imagem quendo nececssário.

Dados vetorizados são usados para armazenar ruas, construções, pontos de interesse e outras coisas que existem e ocupam espaço no mundo.

##### Formatos vetoriais

O formato vectorial mais conhecido é o [Shapefile](http://en.wikipedia.org/wiki/Shapefile) - um simples formato baseado em arquivo que estranhamente separa os dados necessários em quatro diferentes arquivos - `.shp` (onde as informações geométricas residem), `.prj` (um texto descrevendo a projeção usada), `.shx` (um índice possibilitando buscas rápidas), e `.dbf` (um arquivo de banco de dados contendo todos os dados associados com a geometria do arquive .shp). A maioria desses arquivos são binários, ou seja, abri-los em um editor de texto não mostrará nada interessante, com exceção do arquivo .prj, que define a projeção em arquivo de texto. O arquivo de banco de dados .dbf pode ser lido por aplicativos como LibreOffice Calc porque seu formato é derivado de uma especificação antiga de banco de dados. Porém, esta especificação antiga limita os atributos de dados que podem ser armazenados. Por examplo: o tamanho do arquivo .dbf não pode exceder 2 GB, nomes de campos não podem conter espaços e não podem exceder 10 caracteres, valores nulos não são suportados nem caracteres especiais, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations)

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), e [KML](http://developers.google.com/kml) são formatos mais novos baseados no formato de codificação [JSON](http://www.json.org/) e [XML](http://en.wikipedia.org/wiki/XML) text encoding, respectivamente. Sendo baseados em texto, eles tendem a ser mais simples de implementar em software do que Shapefiles, e combinados com maior flexibilidade e funcionalidades, eles acabaram se tornando padrão em softwares para web. Um ponto negativo de GeoJSON é que existem menos ferramentas criadas para comparar propriedades entre registros facilmente, logo, limpeza de dados e análise são mais desafiadores.

### Topologia

Adicionalmente ao armazenamento de lugares e formas, alguns dados vetoriais coletam informações sobre tipologia, o relacionamento entre as diferentes formas. Por exemplo, divisas políticas geralmente se tocam - você pode pisar com um pé em Arizona e outro no Novo México. Muito do dados geoespaciais, porém, terão uma forma que representa Arizona e outra que representa Novo México, com duas bordas que se sobrepôem precisamente, mas que não possuam outra relação.

Isso acaba deixando as coisas difíveis quando você tenta descobrir coisas como  ‘que estados se tocam?’ ou simplesmente a forma de objetos, enquanto preserva suas bordas alinhadas. Nós usamos o conceito de topologia: alguns dados vetoriais, ao invés de armazenar o formato de Arizona e outro de Novo México, salva uma série de linhas e mantém o registro de quais delas formam os limites de cada objeto. Então, a divisa entre Arizona e Novo México é uma linha só que é usada para desenhar a borda de ambos  estados, e se você modifica a linha, alterará ambos estados.

## Geocodificação

Alguns dados geográficos não são nem vetorias nem raster: ao invés de serem composto por números que computadores entendem, eles são armazenados em texto, incluindo references a nome de lugares, ruas, endereços e outras formas de identificação.

Infelizmente, não é possível simplesmente adicionar esses dados em um mapa. Existe uma processo indireto e muitas vezes inacuradao em transformar palavras como 'Estados Unidos' em pontos como `-120, 40`. Esse processo é o que chamamos de **geocodificação**. Geocodificação se baseia em um banco de dados de nomes de cidades, países, e etc, junto com suas localizações geográficas, e algoritmos que tentam achar a escolha mais próxima para uma entrada imprecisa.

### Geocodificação Reversa

O processo oposto é **geocodificação reversa**. Ele transforma dados geográficos como pontos em texto legível para humanos, como `Estados Unidos` ou `1714 14th Street`. Como a geocodificação, é aproximada - um local na Terra pode estar dentro de fronteiras conflitantes ou entre dois endereço.

Geocodificação normal e reversa são difíceis: erros de posicionamento de coordenadas, dados de endereços mal-formatados  e a situação nunca fixa dos mapas de ruas e prédios contribuem para a dificuldade em transformar endereços em coordenadas, ou vice-versa.

<a class='further-reading' href='/geocoding.html'>leia mais sobre geocodificação</a>

## Coleta de dados

Dados de mapas vêm sendo coletadas de inúmeras maneiras por diversos anos - tudo desde diários de marinheiros a Tweets geocodificados. Atualmente, existem algumas fontes principais que merecem ser discutidas::

![](img/gps.jpg)

**GPS**, a constelação de satélites que lhe fornecem um ponto azul no mapa do seu celular é a fundação para a coleta de dados acurados de data vetorial. Analistas dirigem como GPS altamente acurados e combinam seus resultados em algo confiável.

**Satélites e aviões** observacionais coleta grande parte dos dados raster que nós temos hoje, tirando fotos constantemente de diferentes altitudes e combinando elas em algo que mais parece uma fotografia do mundo. Os mesmos sensitise também capturam o que chamamos de 'espectro não-visível’, como luzes infravermelhas que são úteis para mapear agricultura e desmatamento. Dentre dispositivos avançados incluem-se o [LiDAR](http://en.wikipedia.org/wiki/Lidar), um tipo de sensor laser que mede a altitude e informa dados de altitude em raster.

**Corpotações, governos e comunidades** mantém diferentes mapas mundi que variam em nível de detalhe. Por exemplo, [Google](http://maps.google.com) d [OpenStreetMap](http://www.openstreetmap.org/) focam em mapeamento de todas as ruas e detalhes sobre elas, e fontes como o [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) e [Natural Earth](http://www.naturalearthdata.com/) mantém registros de divisas políticas.

### Armazenamento

Existem muitas maneiras de armazenar dados geográficos. Dados podem ser salvos em impressões, mas recentemente popularizou-se armazená-los de amnesia mais facilmente acessível, digitalmente.

Existem muitos formatos de arquivos e convenções para armazenamento de dados geográfico, e consequentemente uma grande variedade de ferramentas que traduzem entre diferentes representações. Dados são armazenados em bancos de dados ou em arquivos individuais, mas a diferença prática entre eles não é necessariamente importante.

# Informação

Mapas são informações visualizadas: De um lado está todos os dados, números e armazenamento - o principal sobre como gravamos e diferenciamos lugares na Terra. Entre dados e visualização está uma transformação que chamamos de ‘projeção’ - em qual lugares no mundo viram lugares usualmente em superfícies planas, como impressões ou telas de computador.E então finalmente, nós decidimos o detalhe de cor, tom e simbolismo que traduza detalhes sobre os dados em imagens que pessoas podem entender e interpretar.

## Latitude & Longitude

A maneira mais comum de armazenar lugares na Terra é com valores de latitude e longitude. Historicamente, latitude e longitude são algumas vezes representadas em uma notação sexagesimal, como `38° 12'`, mas o padrão moderno é representá-las como simples números como `38.2`, que são mais fáceis de computar e de entender.

![](img/latlon.png)

**Latitude** valores que variam de -90 no pólo sul a 90 no pólo Norte. Por toda a linha do equador, a latitude tem valor 0.

**Longitude** values que variam de -180 a 180, e na linha em que essas se encontra, o que corta o Pacífico de norte a sul, é chamada de antemeridiano. O valor 0 é definido como o Primeiro Meridiano, que corta a África e Europa (especificamente o Observatório Real em Greenwich, Londres).

A combinação de latitude e longitude é usualmente chamada de coordenada, e pode ser representada tanto como 'latitude, longitude', ou 'longitude, latitude': historicamente, esse último era o formato padrão, mas 'longitude, latitude' tem ganho popularidade porque espelha a ordem 'X, Y' usada em espaços cartesianos da matemática.

A ordem das coordenadas podem causar alguma confusão, porque mapas em browser geralmente esperam 'latitude, longitude', enquanto muitos formados de dados utilizam 'longitude, latitude'.

Algumas vezes mais que apenas a posição de latitude e longitude são gravadas como dados: altitude também pode ser incluída, assim como o momento (data) da captura e outros fatores. No caso de inclusão de altitude, é comum utilizar-se como uma terceira coordenada, como 	'longitude, latitude, altitude.'

## O formato da Terra

![](img/earth-shapes.jpg)

Armazenar e apresentar o mundo nos traz a questão sobre qual o formato a Terra possui - podem valores de latitude e longitude serem mapeados perfeitamente a uma esfera e traduzido de volta e manter sua acurácia espacial?

Como a Terra é um objeto rotatório, seus componentes podem mudar de forma, achatando no meio - então ao invés de uma esfera, na verdade a Terra tem um formato similar a uma [esfera oblata](http://pt.wikipedia.org/wiki/Esfera_oblata). Se você olhar cuidadosamente, isso também não é inteiramente verdade -  a Terra é coberta por [elevações diferentes](http://en.wikipedia.org/wiki/Topografia) como montanhas e vales, e inclusive alterações criadas por humanos como cidades.

Para o trabalho cotidiano, nós usamos diferentes estimativas deste formato: padrões como [WGS84](http://en.wikipedia.org/wiki/WGS84) definem valores precisos para o comprimento dos eixos daTerra, então podemos estimar para uma [referência elipsoide](http://en.wikipedia.org/wiki/Reference_ellipsoid) ao invés de uma esfera. Medições locais e ciências que dependem de medições precisas de superfície podem também usar [modelos geoides](https://en.wikipedia.org/wiki/Geoide), que são cálculos tri-dimensionais da altura teórica dos oceanos.

Esse ramo do estudo da Terra é chamado de [Geodésia](https://en.wikipedia.org/wiki/Geodésia), é um projeto contínuo porque nossa habilidade de modelar e medir o movimento da Terra muda rapidamente e a Terra por si só sofre alterações em sua forma.

## Projection

![](img/projections.jpg)

Projections are what we call the mathematical equations that do the trick of turning the world into some flat shape that fits on a printout or a computer screen. It's a messy task to do, this transformation - there's no way to smoosh the world onto a screen without distorting it in some way. You either lose direction, or relative size, or come out with something very weird looking.

<a class='further-reading' href='/datum.html'>read more about datums</a>

## Symbolization

Symbolization is a fancy word for the particular ways that data is transformed into graphics in the world of maps.

Fundamentally, data doesn't look like anything: a list of pixel values or road lines is just as well represented in a spreadsheet or a chart as it is on a map. Thus to 'convert' is not the right word for what we do with data: The decision is more about how to render it.

Symbolic techniques include anything representable in graphics or even 3D, so let's only look at a few:

## Sequential & Categorical

![](img/scales.jpg)

Symbolization tends to highlight two different characteristics of data: sequential and categorical. Sequential, or continuous data could also be called linear - it tends to be number values within a set range, like graduation rates between 0 and 100, or elevation. Categorical, or discrete data is, instead, one of a set number of values - like 'true', 'false', 'democrat' or 'republican'.

This division between data is one of the main concerns for symbolization - a sequential datasource would fit with a scaled point map or a gradient color ramp on a raster, whereas categorical data generally is displayed using multiple symbols for markers, or discrete bucketing of colors.

### Choropleth

Choropleth maps preserve the existing boundaries and shapes of places and represent data by changing their colors, patterns or textures. A familiar example of this kind of map is in election results or demographic makeup, in which data is percentage values for some fixed piece of land - a value per voting precinct or census area.

Choropleth maps are a natural fit for data like rates, densities, or percentages. They aren't recommended for absolute values: since they keep the area of shapes the same, they tend to over-emphasize large features. Also, since choropleth maps rely on color differences to represent information, it's important that the colors are well-chosen to be colorblind-safe, understandable, and consistent.

<a class='further-reading' href='/colors.html'>read more about colors</a>

### Point

Point maps are a better alternative for absolute values - the only geometry that they preserve is a single point for each feature.

The specific point or marker used in this style varies tremendously - Coloring points based on their sequential or categorical value can be useful, but points can also be scaled to different sizes to show their relative value. These scaled symbols can be any shape or image, such as circles, squares, or pictures of what they represent. In cases where there are multiple values that total up, scaled pie charts can be a terrific way to visualize what would otherwise be a complex dataset.

Care must be taken to not show too many points at once, as this will make a map difficult to read. In cases where there are too many points, a choropleth with aggregated values from the points may be a good alternative. Another alternative is to use clustering, where crowded points are grouped together until the map is zoomed in closer.

## Publishing

## Analysis

Raster & vector analysis as aggregation & transformation

### Vector to Raster

It's possible to move between the two types of map data, as disparate as they might seem, and it's actually quite common: it's just not direct.

Typically vector data always becomes raster - what we call 'rasterized' or 'rendered' when it is displayed: computer screens and printers operate on the level of pixels, not lines or shapes. This conversion is imperfect: remember that vector data is not pixel-based, so you can never zoom in and see fuzzy features. Thus, generally, when vector data is converted into a raster format, you can't transform that raster representation back into exactly the source.

Sometimes we convert vector data to raster ahead of time - in order to run some kinds of analysis, it's easier to do the math on a pixel basis.

### Raster to Vector

Likewise, raster data can be vectorized in a number of ways. On raster satellite images of the Earth, people draw, or 'trace', lines for streets, points for houses, or polygons for buildings. This lets us have a version of the data upon which we can do more things - you can figure out driving routes from vector data of streets, but can't do that with a satellite image of streets.

### Simulation

With geographic data, it's possible to simulate certain natural processes, and this simulation is a big part of what working mappers do. Given elevation data for a mountain range, it's possible to simulate highlights and shadows for those mountains in light, in a process called hillshading.

More complex processes are also possible, like determining where water will collect after rainfall, called a 'watershed', or determining everywhere on the map that will be visible if you're standing at a mountaintop, called a 'viewshed'.

### Aggregation

The most common form of aggregation is the idea of a sum - given a large group of numbers, you can add them together to get an idea of them all at once. For instance, the GDP of a country is more immediately informative than simply listing every individual contribution to an economy.

Aggregation in maps is similarly used. Given granular data, like millions of individual household incomes, you can use mapping algorithms to sum or average the values inside of specific areas of the world, to show average income per town or city.

![](img/binning-wide.jpg)

Aggregation is also used along with a technique called **binning**: given many discrete points, you can draw arbitrary shapes on the map, like squares or hexagons, and total all of the points that fall in each shape. That way, instead of having millions of tiny points that are difficult to grasp at a glance, you can style the map as a choropleth.

### Interpolation

Whereas aggregation takes lots of data and distills it into something simpler to analyze and visualize, interpolation 'fills in the blanks' between values. Interpolation is often used for datasets like elevation, where you have raster data values that records the height of every inch of a mountain, but there are a few places missing from the data - what programmers call `null` values.

Interpolation looks at the values around the 'blanks' and assumes that the missing values are basically similar to what's around them - a missing pixel at the top of a mountain will be assumed to be pretty high, while one in a valley is assumed to be low.

There are many ways to interpolate point data:

- **Heatmaps** assign each point a weight and represent density of point values in "hotter" colors.
- **Contour lines** take point sample data and draw lines around them that represent a continuous estimated value. Elevation maps often use this technique.
- A **TIN** (Triangulated Irregular Network) draws triangles between points that can be used to visualize terrains.
- **Voronoi diagrams** take a set of points and turn them into polygons of all of the area around them.

## Afterword

We hope this has been an enlightening and inspiring read: there is so much potential in this field and so many unanswered questions. Maps are a connected topic, stretching into art, mathematics, physics, ecology, and so much more.

We'd love if you can [report any issues or file any suggestions](https://tmcw.wufoo.com/forms/mapschool-feedback/) that came to mind in your read.

### License

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
