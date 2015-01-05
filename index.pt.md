---
title: mapschool
layout: default
language: pt
---

# map school

O que é um mapa? Até 1980, mapas eram dolorosos documentos criados à mão. Atualmente, mapas são quase sempre feitos com ajuda de um computador. Mapas hoje são comuns, onipresentes em instruções de direções, visualizações e em disputas políticas territoriais. Vamos olhar cuidadosamente e discutir sobre os elementos fundamentais de mapas com os olhos de um criador.

Mapas de computadores são fundamentalmente compostos de dados. Dados esses que são abstratamente, compostos por milhões de pontos ou apenas alguns poĺigonos, ou um registro em forma de foto de cores e temperaturas. É importante que esses dados não sejam específico a um certo uso.

Dos dados, nós fazemos números, imagens e decisões. Mais usualmente, nós fazemos imagens, em um processo chamado "simbolização" - decidindo que elementos visuais representarão o que em cada parte do conjunto de dados. Nós analizamos os dados, o que significa transformar, agregar e sumarizar para oferecer diferentes respostas e representar diferentes aspectos do conhecimento. As duas tarefas de simbolizar e analizar são geralmente combinadas, com a simbolização definindo os limites do que que podemos representar e a análise definindo os aspectos dos dados que desejamos focar.


# Dados

Fundamentalmente, dados geográficos são ou **raster** ou **vetor** - composto de pixels, ou de geometria. Os dois tipos são comumente combinados, como quando um vetor representando uma rua é sobreposto a dados rasterizados de satélite.

## Raster

![](img/raster.png)

Dados **raster** são como fotos tiradas com uma câmera digital: no menor nível de abstração, é uma lista de pixels com valores. Quando você aumenta o zoom e olha próximo a uma imagem rasterizada, em algum momento você conseguirá ver os pixels separadamente, e a imagem terá uma aparência pixelizada.

Dados raster são usados em imagens da Terra, como as tiradas por satélites - mas isso é apenas o começo. Pixels não precisam ter cores - ao invés disso, cada pixel pode ter um número que representa sua altura e sua informação raster como um todo armazena os dados de elevação. Ou também, pixels podem armazenar temperatura ou dados de reflexão e serem úteis para trabalhos ambientais.

##### Bandas Rasters

Os pixels dos dados raster não são necessariamente preenchidos com cores: nós chamamos seus conteúdos de 'bandas'. Uma imagem normal tem três bandas comuns: Vermelho, Verde e Azul. Combinadas, elas formam imagens com que estamos familiarizados. Alguns dados raster podem ter menos bandas, como apenas uma para elevação, enquanto outros podem ter muito mais - não apenas cores visíveis, mas frequências de ondas que nós não podemos ver, como infravermelho e ultravioleta. Quando dados raster são analizados e mostrados, você pode combinar e escolher as bandas que são mais propícias para o que você está procurand0.

##### Formatos Raster

Formatos raster tem como objetivo compactar os dados e torná-los rápidos para análise e visualização. Alguns são versões com suporte geospacial de formatos de imagens comuns, como [GeoTIFF](http://trac.osgeo.org/geotiff/) e JPEG2000.

Internamente, formatos de dados raster geranciam dois propósitos - agrupar dados em pixels, e então armazenar o relacionamento entre esses pixels e o lugar real deles no globo - a "extensão" dos dados.

## Vetor

![](img/vector_types.png)

Dados **vetorizados** armazena geometrias básicas ao inveś de pixels. Não importa o quanto você aumente o zoom em dados vetorizados, você não verá pixels: os dados armazenados são compostos de pontos geométricos e linhas, e apenas convertidos em imagem quando necessário.

Dados vetorizados são usados para armazenar ruas, construções, pontos de interesse e outras coisas que existem e ocupam espaço no mundo.

##### Formatos vetoriais

O formato vetorial mais conhecido é o [Shapefile](http://en.wikipedia.org/wiki/Shapefile) - um simples formato baseado em arquivo que estranhamente separa os dados necessários em quatro diferentes arquivos - `.shp` (onde as informações geométricas residem), `.prj` (um texto descrevendo a projeção usada), `.shx` (um índice possibilitando buscas rápidas), e `.dbf` (um arquivo de banco de dados contendo todos os dados associados com a geometria do arquive .shp). A maioria desses arquivos são binários, ou seja, abri-los em um editor de texto não mostrará nada interessante, com exceção do arquivo .prj, que define a projeção em arquivo de texto. O arquivo de banco de dados .dbf pode ser lido por aplicativos como LibreOffice Calc porque seu formato é derivado de uma especificação antiga de banco de dados. Porém, esta especificação antiga limita os atributos de dados que podem ser armazenados. Por exemplo: o tamanho do arquivo .dbf não pode exceder 2 GB, nomes de campos não podem conter espaços e não podem exceder 10 caracteres, valores nulos não são suportados nem caracteres especiais, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations)

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), e [KML](http://developers.google.com/kml) são formatos mais novos baseados no formato de codificação [JSON](http://www.json.org/) e [XML](http://en.wikipedia.org/wiki/XML) text encoding, respectivamente. Sendo baseados em texto, eles tendem a ser mais simples de implementar em software do que Shapefiles, e combinados com maior flexibilidade e funcionalidades, eles acabaram se tornando padrão em softwares para web. Um ponto negativo de GeoJSON é que existem menos ferramentas criadas para comparar propriedades entre registros facilmente, logo, limpeza de dados e análise são mais desafiadores.

### Topologia

Adicionalmente ao armazenamento de lugares e formas, alguns dados vetoriais coletam informações sobre Topologia, o relacionamento entre as diferentes formas. Por exemplo, divisas políticas geralmente se tocam - você pode pisar com um pé em Arizona e outro no Novo México. Muito do dados geoespaciais, porém, terão uma forma que representa Arizona e outra que representa Novo México, com duas bordas que se sobrepôem precisamente, mas que não possuam outra relação.

Isso acaba deixando as coisas difíceis quando você tenta descobrir coisas como  ‘que estados se tocam?’ ou simplesmente a forma de objetos, enquanto preserva suas bordas alinhadas. Nós usamos o conceito de topologia: alguns dados vetoriais, ao invés de armazenar o formato de Arizona e outro de Novo México, salva uma série de linhas e mantém o registro de quais delas formam os limites de cada objeto. Então, a divisa entre Arizona e Novo México é uma linha só que é usada para desenhar a borda de ambos  estados, e se você modifica a linha, alterará ambos estados.

## Geocodificação

Alguns dados geográficos não são nem vetoriais nem raster: ao invés de serem composto por números que computadores entendem, eles são armazenados em texto, incluindo refereências a nomes de lugares, ruas, endereços e outras formas de identificação.

Infelizmente, não é possível simplesmente adicionar esses dados em um mapa. Existe uma processo indireto e muitas vezes inacuradao em transformar palavras como 'Estados Unidos' em pontos como `-120, 40`. Esse processo é o que chamamos de **geocodificação**. Geocodificação se baseia em um banco de dados de nomes de cidades, países, e etc, junto com suas localizações geográficas, e algoritmos que tentam achar a escolha mais próxima para uma entrada imprecisa.

### Geocodificação Reversa

O processo oposto é **geocodificação reversa**. Ele transforma dados geográficos como coordenadas em texto legível para humanos, como `Estados Unidos` ou `1714 14th Street`. Como a geocodificação, é aproximada - um local na Terra pode estar dentro de fronteiras conflitantes ou entre dois endereço.

Geocodificação normal e reversa são difíceis: erros de posicionamento de coordenadas, dados de endereços mal-formatados  e a situação nunca fixa dos mapas de ruas e prédios contribuem para a dificuldade em transformar endereços em coordenadas, ou vice-versa.

<a class='further-reading' href='/geocoding.pt.html'>leia mais sobre geocodificação</a>

## Coleta de dados

Dados de mapas vêm sendo coletadas de inúmeras maneiras por diversos anos - tudo desde diários de marinheiros a Tweets geocodificados. Atualmente, existem algumas fontes principais que merecem ser discutidas::

![](img/gps.jpg)

**GPS**, a constelação de satélites que lhe fornecem um ponto azul no mapa do seu celular é a fundação para a coleta de dados acurados de data vetorial. Pesquisadores dirigem com GPS altamente acurados e combinam seus resultados em algo confiável.

**Satélites e aviões** observacionais coletam grande parte dos dados raster que nós temos hoje, tirando fotos constantemente de diferentes altitudes e combinando elas em algo que mais parece uma fotografia do mundo. Os mesmos satélites também capturam o que chamamos de 'espectro não-visível’, como luzes infravermelhas que são úteis para mapear agricultura e desmatamento. Dentre os dispositivos avançados incluem-se o [LiDAR](http://en.wikipedia.org/wiki/Lidar), um tipo de sensor laser que mede a altitude e informa dados de altitude em raster.

**Corporações, governos e comunidades** mantém diferentes mapas mundi que variam em nível de detalhe. Por exemplo, [Google](http://maps.google.com) e [OpenStreetMap](http://www.openstreetmap.org/) focam em mapeamento de todas as ruas e detalhes sobre elas, e fontes como o [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) e [Natural Earth](http://www.naturalearthdata.com/) mantém registros de divisas políticas.

### Armazenamento

Existem muitas maneiras de armazenar dados geográficos. Dados podem ser salvos em impressões, mas recentemente popularizou-se armazená-los de maneira mais facilmente acessível, digitalmente.

Existem muitos formatos de arquivos e convenções para armazenamento de dados geográfico, e consequentemente uma grande variedade de ferramentas que traduzem entre diferentes representações. Dados são armazenados em bancos de dados ou em arquivos individuais, mas a diferença prática entre eles não é necessariamente importante.

# Informação

Mapas são informações visualizadas: De um lado estão todos os dados, números e armazenamento - o principal sobre como gravamos e diferenciamos lugares na Terra. Entre dados e a visualização está uma transformação que chamamos de ‘projeção’ - em qual lugares no mundo viram lugares usualmente em superfícies planas, como impressões ou telas de computador. E então finalmente, nós decidimos o detalhe de cor, tom e simbolismo que traduza detalhes sobre os dados em imagens que pessoas podem entender e interpretar.

## Latitude & Longitude

A maneira mais comum de armazenar lugares na Terra é com valores de latitude e longitude. Historicamente, latitude e longitude são algumas vezes representadas em uma notação sexagesimal, como `38° 12'`, mas o padrão moderno é representá-las como simples números como `38.2`, que são mais fáceis de computar e de entender.

![](img/latlon.png)

**Latitude** valores que variam de -90 no pólo sul a 90 no pólo Norte. Por toda a linha do equador, a latitude tem valor 0.

**Longitude** values que variam de -180 a 180, e na linha em que essas se encontra, o que corta o Pacífico de norte a sul, é chamada de antemeridiano. O valor 0 é definido como o Primeiro Meridiano, que corta a África e Europa (especificamente o Observatório Real em Greenwich, em Londres).

A combinação de latitude e longitude é usualmente chamada de coordenada, e pode ser representada tanto como 'latitude, longitude', ou 'longitude, latitude': historicamente, esse último era o formato padrão, mas 'longitude, latitude' tem ganho popularidade porque espelha a ordem 'X, Y' usada em espaços cartesianos da matemática.

A ordem das coordenadas podem causar alguma confusão, porque mapas em browser geralmente esperam 'latitude, longitude', enquanto muitos formatos de dados utilizam 'longitude, latitude'.

Algumas vezes mais que apenas a posição de latitude e longitude são gravadas como dados: altitude também pode ser incluída, assim como o momento (data) da captura e outros fatores. No caso de inclusão de altitude, é comum utilizar-se como uma terceira coordenada, como 	'longitude, latitude, altitude.'

## O formato da Terra

![](img/earth-shapes.jpg)

Armazenar e apresentar o mundo nos traz a questão sobre qual o formato a Terra possui - podem valores de latitude e longitude serem mapeados perfeitamente a uma esfera e traduzido de volta e manter sua precisão espacial?

Como a Terra é um objeto rotatório, seus componentes podem mudar de forma, achatando no meio - então ao invés de uma esfera, na verdade a Terra tem um formato similar a uma [esfera oblata](http://pt.wikipedia.org/wiki/Esfera_oblata). Se você olhar cuidadosamente, isso também não é inteiramente verdade -  a Terra é coberta por [elevações diferentes](http://en.wikipedia.org/wiki/Topografia) como montanhas e vales, e inclusive alterações criadas por humanos como cidades.

Para o trabalho cotidiano, nós usamos diferentes estimativas deste formato: padrões como [WGS84](http://en.wikipedia.org/wiki/WGS84) definem valores precisos para o comprimento dos eixos daTerra, então podemos estimar para uma [referência elipsoide](http://en.wikipedia.org/wiki/Reference_ellipsoid) ao invés de uma esfera. Medições locais e ciências que dependem de medições precisas de superfície podem também usar [modelos geoides](https://en.wikipedia.org/wiki/Geoide), que são cálculos tri-dimensionais da altura teórica dos oceanos.

Esse ramo do estudo da Terra é chamado de [Geodésia](https://en.wikipedia.org/wiki/Geodésia), e é um projeto contínuo porque nossa habilidade de modelar e medir o movimento da Terra muda constantemente e a Terra por si só sofre alterações em sua forma.

## Projeção

![](img/projections.jpg)

Projeções é como chamamos as equações matemáticas que fazem o truque de transformar o mundo em um formato achatado que possa ser usado em impressões e telas de computador. Essa transformação é uma tarefa complicada de se executar - não é possível achatar o mundo sem distorcê-lo de alguma forma. Você ou perde direção, ou tamanho relativo ou acaba com algo com uma aparência muito estranha.

<a class='further-reading' href='/datum.pt.html'>leia mais sobre datums</a>

## Simbolização

Simbolização é uma palavra chique para as maneiras particulares em que dados são transformados em gráficos no mundo dos mapas.

Fundamentalmente, dados não se parecem com nada: uma lista de valores de pixels ou linhas representando uma rua são tão bem representadas em uma planilha de dados ou num gráfico como em um mapa. Por isso, ‘converter’ não é a palavra certa para o que fazemos com dados: A decisão é mais sobre como renderizá-los.

Técnicas simbólicas incluem qualquer coisa representável graficamente ou até mesmo em 3D, então vamos dar uma olhada em algumas delas:

## Sequenciais & Categóricas

![](img/scales.jpg)

Simbolizacão tende a enfatizar 2 diferentes característica dos dados: sequencial e categórica. Sequencial, ou dados contínuos também podem ser chamados de linear - e tendem a ser valores numéricos em um intervalo, como valores de graduação entre 0 e 100, ou elevação. Categórica, ou dados discretos são, por sua vez, um conjunto de valores como ‘falso’, ‘verdadeiro’, ‘democrata’, ‘republicano’.

Essa divisão entre dados é uma das principais procupações da simbolização - uma fonte de dados sequencial caberia em um mapa escalar ou em uma superfície de cores gradientes em um raster, enquanto dados categóricos geralmente são mostrados usando múltiplos símbolos para marcadores, ou um com uma lista discreta de cores.

### Cloropético

Mapas cloropéticos preservam as divisas e formas existentes e representam dados mudando cores, padrões e texturas. Um exemplo familiar desse tipo de mapa é o dos resultados das eleições ou de amostras demográficas, nos quais os dados são valores percentuais para um pedaço fixo de terra - um valor por votos contados ou área de censo.

Mapas cloropéticos são ótimos para dados como votos, densidades ou porcentagens. Eles não são recomendados para valores absolutos: porque como eles mantém o formato das áreas iguais, eles tendem a super-enfatizar destaques maiores. Também, como mapas cloropéticos dependem de diferença de cores para representar informação, é importante que as cores sejam bem escolhidas para que sejam reconhecíveis por daltônicos, compreensíveis e consistentes.

<a class='further-reading' href='/colors.pt.html'>leia mais sobre cores</a>

### Ponto

Mapas de pontos são melhores alternativas para valores absolutos - a única geometria que eles preservam é um simples ponto para cada destaque.

O ponto ou marcador específico usado nesse estilo varia tremendamente - colorir pontos baseado em seu valor sequencial ou categórico pode ser úteis, mas pontos também podem ser escalados para tamanhos diferentes para mostrar seus valores relativos. Esses símbolos podem ter qualquer forma ou imagem, como círculos, quadrados ou figuras que eles representem. Caso existam diversos valores que completem um total, gráficos de pizza podem ser uma ótima maneira de visualizar grupo de dados, que de outra maneira, seriam muito complexos.

É preciso tomar cuidado ao mostrar muitos pontos de uma vez, porque isso deixará o mapa difícil de ler. Nesses casos onde existem muitos pontos, um cloroplético com dados agregados pode ser uma boa alternativa. Outra alternativa é agregar onde pontos se aglomeram até que o nível de zoom do mapa é próximo o suficiente para que sejam visualizados separadamente.

## Publicando

## Análise

Análise de Rasters & vetores como agregação & transformação

### Vetor para Raster

É possível mudar entre dois tipos de dados de mapa, por mais diferente que eles pareçam, e isto é feito comumente: apenas não de maneira direta.

Tipicamente dados vetoriais sempre se tornam raster - o que chamamos de ‘rasterizado’ ou ‘renderizado’ quando é mostrado: monitores e impressoras operam no nível dos pixels, não em termos de linhas e formas. Essa conversão é imperfeita: lembre-se que dados vetoriais não são baseados em pixels, logo você não pode nunca aproximar o zoom e ver uma imagem nítida. Então, geralmente, quando dados vitoriais são convertidos em formato raster, você não poderá transformar aquela representação reter de volta exatamente como a fonte original.

As vezes nós convertemos data vetorial para raster antes do tempo - para executar algum tipo de análise, por ser mais fácil executar operações matemáticas com base em pixels.

### Raster para Vetor

Da mesma forma, dados raster também podem ser vetorizados de inúmeras maneiras. Em imagens rasterizadas de satélite da Terra, pessoas desenham, ou ‘tracejam’, linhas para ruas, pontos para casas ou polígonos para prédios. Isso nos permite ter uma versão dos dados em qual nós podemos fazer mais coisas - você pode achar rotas de direção de dados vetoriais de ruas, mas não pode fazer isso com uma imagem de satélite das mesmas ruas.

### Simulação

Com dados geográficos, é possível simular certos processos naturais, e esse tipo de tarefa é grande parte do trabalho que mapeadores fazem. Dadas informações de elevação de uma cadeia de montanhas, é possível simular picos claros e sombras dessas montanhas na luz, em um processo chamado ‘hillshading’.

Processos mais complexos também são possívels, como determinar onde água será acumulada depois de uma queda de chuva, chamado de 'watershed', ou determinar onde em um mapa será visível se você estiver no topo de uma montanha, chamado de 'viewshed'.

### Agregação

A forma mais comum de agregação é a idéia de uma soma - dado um grande grupo de números, você pode agrupar-los para ter uma idéia te todos eles de uma vez só. Por exemplo, o PIB de um país  é mais imediatamente informativo que a simplesmente listar cada contribuição individual para uma economia.

Agregação em mapas é usada similarmente. Dada informações granularizadas, como milhões em arrecadamentos individuais por residência, você pode executar algoritmos de mapeamento para somar ou definir a média dos valores dentro de uma área específica do mundo, para mostrar a média de renda por cidade, por exemplo.

![](img/binning-wide.jpg)

Agregação é também usado junto com uma técnica chamada de  **binning**: dados muitos pontos discretos, você pode desenhar formas arbitrárias no mapa, como quadrados ou hexágonos, a calcular todos os pontos que são incluídos em cada forma. Dessa maneira, ao invés de ter milhões de pequenos pontos que são difíceis de analisar rapidamente, você pode estilizar o mapa como um cloropético.

### Interpolação

Enquanto agregação pega muitos dados e transforma eles em algo mais simples de analizar e visualizar, interpolação ‘preenche as lacunas’ entre os valores. Interpolação é comumente usado para conjuntos de dados como elevação, onde você tem valores de dados raster que registram a altura de cada polegada de uma montanha, mas que possuam poucos dados faltando - o que progamadores chamam de valores nulos.

Interpolação olha para os valores ao redor das ‘lacunas’ e assume que o valor faltando é similar aos que estão próximos dele - um pixel faltando no topo de uma montanha será assumido ser bem alto, enquanto outro em um vale é assumido que seja de baixa altitude.

Existem muitas maneiras de interpolar dados de pontos:

- **Mapas de calor** atribui um peso a cada ponto e representa a densidade de um ponto com cores ‘mais quentes’.
- **Linhas de contorno** pega pontos de dados de amostra e desenha linhas ao redor deles que representam um valor estimado contínuo. Mapas de elevação geralmente usam essa técnica.
- Um **TIN** (Rede Irregular Triangulada) desenha triângulos entre pontos que podem ser usados para visualizar terrenos.
- **Diagramas de Voronoi** pagam um grupo de pontos e transformam eles em polígonos de todas as áreas ao redor deles.

## Posfácio

Nós esperamos que essa tenha sido uma leitura elucidante e inspiradora: existe tanto potencial nesta área e tantas perguntas não respondidas. Mapas são tópicos conectados, construídos em arte, matemática, física, ecologia e muito mais.

Nó adoraríamos se você pudesse [reportar qualquer problema ou enviar sugestões](https://tmcw.wufoo.com/forms/mapschool-feedback/) que venham a sua mente durante sua leitura.

### Licença

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
