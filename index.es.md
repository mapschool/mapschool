---
title: mapschool
layout: default
language: es
---

# map school

¿Qué es un mapa? Hasta la década de 1980  los mapas eran minuciosos documentos creados a mano. Hoy en día, los mapas casi siempre se realizan con la ayuda de una computadora. Hoy los mapas son algo común, pudiéndose encontrar en indicaciones de ruta, visualizaciones o disputas de fronteras políticas. Profundicemos en los elementos fundamentales que componen los mapas desde el punto de vista del creador.

Los mapas digitales están compuestos fundamentalmente por datos. Abstrayéndonos, los datos pueden estar compuestos por miles de millones de puntos, por unos simples polígonos o un registro en forma de foto de colores o temperaturas. Es importante destacar que los datos no se restringen a una finalidad concreta.

A partir de los datos podemos hacer cálculos, gráficos y tomar decisiones. El uso más común es generar imágenes, mediante un proceso llamado "simbolización" (decidir que elementos visuales representarán las diferentes partes de un conjunto de datos). Podemos analizar los datos, lo que significa que podemos transformarlos, agregarlos y resumirlos para dar diferentes respuestas y representar distintos aspectos de conocimiento. Las dos tareas, simbolización y análisis, a menudo se combinan, con la simbolización limitando lo que podemos representar y el análisis definiendo los aspectos de los datos en los que nos enfocamos.


# Datos

Fundamentalmente, los datos geográficos pueden ser bien **mapas de bits** (en adelante **raster**) compuestos por píxeles o bien **vectoriales** compuestos por figuras geométricas. Los dos tipos a menudo se combinan como cuando se superponen datos vectoriales de carreteras sobre datos satelitales _raster_.

## Raster

![](img/raster.png)

Los datos **raster** son como una fotografía que podrías haber tomado con una cámara digital: al menor nivel de abstracción es una lista de píxeles con valores. Cuando haces _zoom_ y miras más de cerca los datos _raster_, en algún momento llegarás a ver estos píxeles individuales. Entonces decimos que la imagen se ve pixelada.

Los datos _raster_ son usados en fotografías de la tierra, como las tomadas por los satélites, pero esto es solo el principio. Los píxeles no necesitan tener colores; en su lugar, cada píxel podría tener un número que representara la altitud y los datos _raster_ en su conjunto almacenaría los datos sobre el relieve. O, por ejemplo, podrían almacenar la temperatura o la radiación reflejada y se útiles para trabajos medioambientales.

##### Bandas _Raster_

Los píxeles de los datos _raster_ no necesariamente está rellenos con colores: a su contenido le damos el nombre de "bandas". Una imagen normal tiene tres bandas familiares: Roja, Verde y Azul. Combinadas, forman una imagen como las que estamos acostumbrados a ver. Algunos datos _raster_ pueden tener menos bandas, como por ejemplo una sola para datos de elevación; otras pueden tener muchas más, -o solo colores visibles, sino longitudes de onda que los humanos no podemos ver, como el infrarrojo y el ultravioleta. Cuando los datos _raster_ son analizados y mostrados puedes combinar y elegir qué bandas usar de forma que se ajuste a lo que estás buscando.

##### Formatos _raster_

Los formatos _raster_ tratan de compactar los datos y hacerlos rápidamente accesibles para que puedan ser analizados y mostrados. Algunos son versiones con datos geoespaciales de formatos de imágenes comunes, como [GeoTIFF](http://trac.osgeo.org/geotiff/) y JPEG2000.

Internamente, los formatos de datos _raster_ cumplen dos tareas: empaquetar los datos en píxeles y después, almacenar la relación entre estos píxeles y lugares reales del mundo a los que representan (la extensión de los datos).

## Vectorial

![](img/vector_types.png)

Los datos de tipo **vectorial** almacenan información geométrica en lugar de píxeles. No importa cuánto aumentes el _zoom_ en tu vector, nunca verás píxeles: la información almacenada está compuesta por puntos y líneas geométricas que solo se convierten a imagen cuando es necesario.

Los datos vectoriales se suelen usar para guardar información relativa a carreteras, edificios, puntos de interés y otros elementos que tienen un lugar determinado en el mundo.

##### Formatos vectoriales

El formato vectorial más popular es el [shapefile](http://en.wikipedia.org/wiki/Shapefile) - un formato simple basado en ficheros que separa la información necesaria en cuatro ficheros distintos - `.shp` (almacena la información geométrica), `.prj` (describe la proyección usada), `.shx` (índice que permite búsquedas rápidas) y `.dbf` (fichero de base de datos que contiene toda la información asociada a la geometría del fichero .shp). La mayoría de estos ficheros son binarios por lo que no es posible abrirlos en un editor de texto. El fichero .prj es el único que almacena la proyección en texto plano. El fichero .dbf se puede abrir desde LibreOffice Calc ya que su formato está basado en una estructura de bases de datos antigua. Sin embargo esta estructura limita el número de atributos que se pueden almacenar en un fichero _shapefile_. Por ejemplo: el tamaño del fichero .dbf no puede superar los 2 GB, los nombres de los campos no pueden contener espacios y tampoco pueden superar los 10 caracteres, no soporta valores NULL y tampoco algunos caracteres especiales, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations)

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), y [KML](http://developers.google.com/kml) son formatos más modernos basados en los formatos de texto [JSON](http://www.json.org/) y [XML](http://en.wikipedia.org/wiki/XML) respectivamente. Al ser formatos de texto tienden a ser más simples de implementar en _software_ que el formato _shapefile_ y, gracias a sus características y flexibilidad, se han convertido en un estándar en el _software_ web actual. El único inconveniente con GeoJSON es que no hay muchas herramientas disponibles para comparar propiedades entre los registros de una forma sencilla lo que hace que la limpieza y análisis de datos sea un poco tediosa.

### Topología

Además de almacenar lugares y formas algunos vectores contienen información sobre la topología, es decir, las relaciones entre las diferentes formas. Por defecto los bordes políticos suelen estar pegados, puedes tener un pie en Arizona y otro en Nuevo México. Aunque mucha información geoespacial tendría una forma que representa Arizona y otra que representa Nuevo México con dos bordes que se superponen pero, no tendrían ninguna otra asociación.

Esto hace que sea difícil determinar algo como '¿Cuántos estados son colindantes?' o simplificar las formas de los objetos mientras se mantienen los bordes alineados. Se usa el concepto de topología: información vectorial, en lugar de almacenar una forma de Arizona y otra de Nuevo México, lo que ahorra muchas líneas y mantiene la información de los objetos colindantes. En definitiva, la frontera entre Arizona y Nuevo México es una simple línea usada para dibujar el borde de ambos estados y, si modificas dicha línea, la forma de ambos estados cambiaría.

## Geocoding

Un punto importante sobre información geográfica no es ninguno de los anteriores. En lugar de estar compuesta por números, que es lo que entienden los ordenadores, se almacena en texto - referencias a nombres de lugares, calles, direcciones, etc.

Desafortunadamente no es posible mapear esto directamente. Debido a las variaciones en nomenclaturas y las diferentes formas de definir un lugar, hay un proceso indirecto y, a menudo inexacto, cuando transformamos las palabras 'Estados Unidos' en el punto `-120, 40`. A este proceso es a lo que llamamos **geocoding** (o geocodificación).

El proceso inverso es **geocoding inverso**, donde los datos legibles disponibles son posiciones geográficas precisas y el objetivo es una descripción humana como `Estados Unidos` o `1714 14th Street`. Del mismo modo, esto tampoco es siempre exacto - puede haber un lugar en la tierra dentro de bordes que estén superpuestos y en conflicto o entre direcciones de puntos. 
El geocoding y geocoding inverso pueden ser difíciles: errores en las posiciones de las coordenadas, formato escaso de direcciones y un continuo cambio en las estructuras de las calles y edificios contribuye a la dificultad a la hora de convertir direcciones en coordenadas o viceversa.

## Recogida de datos

Los datos para los mapas han sido recogidos de multitud formas a lo largo de los años – desde los registros de marinos hasta los _tweets_ geocodificados. Actualmente hay unas cuantas fuentes que merece la pena mencionar:

![](img/gps.jpg)

**GPS**, la constelación de satélites que ubica con un punto azul tu teléfono móvil en un mapa es la base de la recogida de datos vectoriales precisos. Los topógrafos emplean unidades de GPS de alta precisión y combinan sus resultados obteniendo datos fiables.

Los **satélites y aviones** de observación recogen la mayoría de los datos _raster_ actuales, tomando fotos continuamente desde diferentes alturas y combinándolas para obtener algo similar a una foto del mundo. Los mismos sensores también capturan lo que se denomina 'espectro no visible', como la luz infrarroja que es muy útil en cartografía de agricultura y deforestación. Algunas plataformas incluyen [LiDAR](http://en.wikipedia.org/wiki/Lidar), un tipo de sensor láser que mide la altitud y produce datos _raster_ de altitud.

**Empresas, gobiernos y comunidades** mantienen diferentes mapas del mundo con diferentes detalles. Por ejemplo, Google y [OpenStreetMap](http://www.openstreetmap.org/) se centran en cartografiar las carreteras y sus detalles, y fuentes como [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) y [Natural Earth](http://www.naturalearthdata.com/) que realizan un seguimiento de las fronteras políticas.

### Almacenamiento

Hay muchas formas de almacenar la información geográfica. Los datos pueden guardarse como copias impresas pero recientemente es más común hacerlo digitalmente, mucho más sencillo de acceder y compartir.

Hay muchos tipos de archivos y estándares para almacenar datos geográficos, y en consecuencia también hay muchas herramientas para pasar de unos a otros. Los datos se almacenan en bases de datos o en archivos, aunque las diferencias entre las dos opciones no son necesariamente importantes.

# Información

Los mapas representan información: En un extremo se encuentran los datums, números y el almacenamiento - la maquinaria que empleamos para grabar y diferenciar los diferentes lugares de la tierra. Entre los datos y la visualización tenemos una transformación que denominamos 'proyección - con la que pasamos de zonas de la tierra a zonas generalmente en superficies planas, como mapas impresos o pantallas de ordenador. Y, finalmente, decidimos los detalles de color, tono y la simbología que tratan de trasladar los detalles de los datos a imágenes que la gente pueda entender e interpretar.

## Latitud y Longitud

La forma más común para almacenar lugares en la tierra es con valores de latitud y longitud. Históricamente la latitud y la longitud son algunas veces representadas en notación sexagesimal, tal que así `38° 12'`, pero el nuevo estándar es para representarlos como números simples, tal que así `38.2`, que son fáciles para que los ordenadores lo entiendan.

![](img/latlon.png)

**Latitud** rango de valores de -90 en el Polo Sur al 90 en el Polo Norte. A lo largo del ecuador el valor de la latitud es 0.

**Longitud** comienza en el 0 en el Primer Meridiano que divide África y Greenwich, y se extiende hasta -180 y 180 en el antimeridiano.

La combinación de latitud y longitud es normalmente llamado coordenada,  puede ser representado como 'latitud, longitud', o 'longitud, latitud': históricamente, la primera era estándar, pero 'longitud, latitud' recientemente ha ganado popularidad porque refleja el orden 'X, Y' de coordenadas en el espacio euclídeo de las matemáticas.

La ordenación de las coordenadas puede causar alguna confusión, como los buscadores basados en _software_  de mapas a menudo esperan 'latitud, longitud', mientras que muchos formatos de conexión especifican 'longitud, latitud'.

A veces además de la posición de la latitud, longitud es almacenada como dato: la altitud también puede ser incluida, así como el tiempo de captura y otros factores. En el caso de incluir la altitud, es normalmente almacenada como tercera coordenada, tal que así 'longitud, latitud, altitud.'

## The Shape of the Earth

![](img/earth-shapes.jpg)

Almacenar y presentar el mundo nos conduce a la cuestión de ¿cuál es su forma? ¿pueden los valores de longitud y latitud asimilarse a una esfera perfecta y de vuelta, y aún mantener su precisión espacial?

En tanto la tierra es un objeto que rota y sus componentes pueden cambiar su forma, ésta se deforma hacia su parte media, por lo que en lugar de parecerse a una esfera, se parece más bien a un [esferoide](https://es.wikipedia.org/wiki/Esferoide).  Si nos acercamos aún más, esto tampoco es del todo cierto, la tierra está cubierta de [diferencias de elevaciones](https://es.wikipedia.org/wiki/Topograf%C3%ADa) como montañas y valles, e incluso cambios producidos por el hombre como las ciudades. 

Para el trabajo diario, utilizamos diferentes formas aproximadas: estándares como el sistema [WGS84](https://es.wikipedia.org/wiki/WGS84) definen de forma precisa los valores de ambos ejes de la tierra, y así utilizar un [elipsoide de referencia](https://es.wikipedia.org/wiki/Elipsoide_de_referencia) en lugar de una esfera. Las medidas locales y científicas que se apoyan en valores de la superficie más precisos utilizan [modelos de geoide](https://es.wikipedia.org/wiki/Geoide), que ofrecen valores tridimensionales de las alturas teóricas de los océanos en toda la superficie de la tierra.

Esta rama de las ciencias, llamada [geodesia](https://es.wikipedia.org/wiki/Geodesia), es un proyecto continuo ya que nuestra capacidad para modelar y medir la tierra está en constante evolución, al igual que la tierra cambia de forma constantemente.

## Proyecciones

Llamamos proyecciones a las ecuaciones matemáticas que hacen el truco que convertir el mundo en usa forma plana que puede utilizarse en una impresión o una pantalla de computadora. Es un trabajo sucio esta transformación, no hay forma de aplastar el mundo en una pantalla sin distorsionarlo de alguna manera. O distorsionas las direcciones, o los tamaños relativos o acabos con algo con una apariencia realmente extraña.

## Simbolización

Simbolización es la palabra elegante para designar la forma en que los datos son transformados en gráficos en el mundo de los mapas.

En esencia, los datos no se parecen a nada: una lista de los valores de los píxeles o las líneas de carretera están tan bien representados en una hoja de cálculo o un gráfico como en un mapa. Por ello, 'convertir' no es la palabra correcta para lo que hacemos con los datos: en el nivel más básico, todo es una decisión.

Las técnicas simbólicas incluyen cualquier cosa representable en gráficos o incluso en 3D, así que sólo vamos ver unas cuantas:

## Secuencial y Categórica

![](img/scales.jpg)

La simbolización tiende a destacar dos características diferentes de datos: secuenciales y categóricas. Los datos secuenciales, o continuos, también podrían ser llamados lineales - que tienden a ser valores numéricos dentro de un rango establecido, como un rango entre 0 y 100. Los datos categóricos, o discretos, son en cambio uno de determinado número de valores - como 'verdadero', 'falso', 'demócrata' o 'republicano'.

Esta división entre datos es una de las principales preocupaciones de la simbolización - una fuente de datos secuencial encajaría con un mapa de puntos de escala, mientras que los datos categóricos trabajarían con múltiples símbolos de marcadores, y así sucesivamente.

### Coropletas

Los mapas de coropletas preservan los límites y las formas existentes de los lugares y representan los datos cambiando sus colores, diseños y texturas. Un ejemplo conocido de este tipo de mapa es el de los resultados electorales o la composición demográfica, en la que los datos son valores porcentuales para un lugar concreto - un valor por distrito electoral o área del censo. 

Los mapas de coropletas son un ajuste natural para datos como rangos, densidades o porcentajes. No son recomendables valores absolutos: ya que mantienen el área de las formas, tienden a exagerar la importancia de los elementos grandes. Además, puesto que los mapas de coropletas dependen de las diferencias de color para representar la información, es muy importante escoger bien los colores para que seas comprensibles y consistentes, y teniendo en cuenta el daltonismo.

##### Coropletas en profundidad

La selección de colores en un mapa de coropletas generalmente se llama la "paleta" o "rampa de color", especialmente cuando los colores son secuenciales. [ColorBrewer] (http://colorbrewer2.org/) es un conjunto bien documentado de colores comprensibles y claros.

### Puntos

Los mapas de puntos son una mejor alternativa para valores absolutos, la única geometría que preservan es un único punto por cada fenómeno.

El punto específico o marcador usado en este estilo varía tremendamente, los puntos coloreados basados en su valor secuencial o valor categórico pueden ser útiles, pero los puntos también pueden escalarse para tener diferentes tamaños y así mostrar sus valores relativos. Estos símbolos escalados pueden ser de cualquier forma o imagen, tales como círculos, cuadrados o pictogramas de aquello que representan. En aquellos casos en los que hay varios valores que mostrar, los gráficos de tartas pueden ser una alternativa excelente para visualizar lo que de otra manera sería una compleja visualización.

Ha de tenerse cuidado para no mostrar demasiados puntos al mismo tiempo, esto hará que el mapa sea difícil de leer. En aquellos casos en los que hay muchos puntos, un mapa de coropletas con valores agregados de los puntos es una buena alternativa. Otra alternativa es utilizar la técnica de _clustering_, en la que la gran cantidad de puntos se agrupan hasta que se acerca el encuadre del mapa.

## Publicación

## Analysis

Raster & vector analysis as aggregation & transformation

### Vector to Raster

It's possible to move between the two types of map data, as disparate as they might seem, and it's actually quite common: it's just not direct.

Typically vector data always becomes raster - what we call 'rasterized' or 'rendered' when it is displayed: computer screens and printers operate on the level of pixels, not lines or shapes. This conversion is imperfect: remember that vector data is not pixel-based, so you can never zoom in and see fuzzy features. Thus, generally, when vector data is converted into a raster format, you can't transform that raster representation back into exactly the source.

Sometimes we convert vector data to raster ahead of time - in order to run some kinds of analysis, it's easier to do the math on a pixel basis.

### Raster to Vector

Likewise, raster data can be vectorized in a number of ways. On raster satellite images of the earth, people draw, or 'trace', lines for streets, points for houses, or polygons for buildings. This lets us have a version of the data upon which we can do more things - you can figure out driving routes from vector data of streets, but can't do that with a satellite image of streets.

### Simulation

With geographic data, it's possible to simulate certain natural processes, and this simulation is a big part of what working mappers do. Given elevation data for a mountain range, it's possible to simulate highlights and shadows for those mountains in light, in a process called hillshading.

More complex processes are also possible, like determining where water will collect after rainfall, called a 'watershed', or determining everywhere on the map that will be visible if you're standing at a mountaintop, called a 'viewshed'.

### Agregación

La forma más común de agregación es la idea de suma – dado un grupo de números, se pueden juntar todos para tener una idea general. Por ejemplo, el PIB de un país aporta más información que una lista con cada contribución individual al conjunto de la economía.

La agregación en los mapas se utiliza de una forma similar. Datos muy minuciosos, como millones de datos individuales de ingresos familiares, se pueden usar algoritmos para cartografiar la suma o la media de los valores en un área específica del mundo para mostrar la media de ingresos por ciudad.

La agregación también se utiliza junto con una técnica llamada **binning**: si tenemos muchos puntos discretos se pueden dibujar formas arbitrarias en el mapa, como cuadrados o hexágonos, y tomar la suma total de puntos que hay en cada forma. De esta manera, en lugar de tener millones de puntos diminutos difíciles de captar a simple vista se pueden presentar los datos en un mapa de cloropletas.

### Interpolación

Mientras que la agregación toma gran cantidad de datos y los condensa en algo más fácil de analizar y visualizar, la interpolación 'llena los espacios en blanco' que haya entre los valores. La interpolación se utiliza a menudo para conjuntos de datos como la altitud, donde se tiene una matriz de datos con valores de altura de cada centímetro de una montaña, pero hay unos pocos lugares en los que faltan datos - lo que los programadores llaman valores `**null**`.

La interpolación examina los valores alrededor de los 'blancos' y asume que los valores que faltan son similares a los que están alrededor de ellos – la presencia de un píxel 'null' en la cima de una montaña se supone que también estará alto, mientras que otro en un valle se supone que estará bajo.

Hay diversas formas de interpolar datos puntuales:

- **Heatmaps** asignan a cada punto una importancia y representan la densidad de de puntos en colores "más cálidos". 
- Las **curvas de nivel** toman una muestra de datos y dibujan líneas alrededor de ellos, representando un valor estimado continuo. Los mapas de elevación suelen utilizar esta técnica. 
- Un **TIN** (Red Irregular de Triángulos) dibuja triángulos entre los puntos que pueden ser utilizados para visualizar el terreno. 
- **Diagramas de Voronoi** toman un conjunto de puntos y los convierten en polígonos de toda el área a su alrededor.

## Afterword

We hope this has been an enlightening and inspiring read: there is so much potential in this field and so many unanswered questions. Maps are a connected topic, stretching into art, mathematics, physics, ecology, and so much more.

We'd love if you can [report any issues or file any suggestions](https://tmcw.wufoo.com/forms/mapschool-feedback/) that came to mind in your read.

### License

[Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/deed.en_US)
