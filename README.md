# Map School

## Maps

Data
Information
Transformation
Analysis

## Data

Fundamentally, geographical data is one of two kinds: **raster**, or **vector**.

### Raster

**Raster** data is like a picture that you'd take with a digital camera: at the lowest level of abstraction, it's a big list of pixels that have values. When you 'zoom in' and look closer at raster data, at some point you'll see these individual pixels, and it will look pixelated.

Raster data is how you'd store pictures of the earth, like the kinds taken from satellites, but that's not all that you would use it for. Pixels don't need to have colors - instead, each pixel can have a number that represents height and the raster data as a whole stores elevation data. Or pixels can store temperature or reflection data and be useful for environmental work.

### Vector

**Vector** data is more like a PDF or a math equation: instead of pixels, vector data has points and lines defined in math. So zooming in on vector data makes the features larger, but at no point do they become pixellated, since there are no pixels in play here.

Vector data is how you'd store roads, buildings, points of interest, or other things that have some place in the world.

### Geocoding

A great deal of geographic data is none of the above - instead of being composed of the numbers that computers fancy, we have spreadsheets with text data or tweets with references to places, streets, addresses, and so on.

Unfortunately, you can't just put this data on a map - the words "United States' mean many different things, like a centroid of the continental US, or polygon boundaries of all states plus Alaska, DC, and Hawaii, or even a box containing all of the above. Thus it's a rough translation we call 'geocoding' that turns rough text descriptions into data we can directly use - usually vector data.

### Data Collection

Map data has been collected in countless ways through the years - everything from sailors logs to twitter creates data. Currently, there are a few major sources that merit discussion:

**GPS**, the satellite constellation that gives your cell phone a blue dot on the map, is the foundation of collecting accurate vector data. Surveyors will drive with highly accurate GPS units and combine their results into something trustworthy.

A number of observational **satellites and airplanes** collect the majority of the raster data we have today, constantly taking photos from different altitudes and combining them into something that looks a little like a picture of the world. The same sensors also capture what we call 'non-visible spectrums', like infrared light, that's useful for mapping agriculture. Some tricked-out rigs include LiDAR, a kind of laser sensor that measures altitude and yields us raster altitude data.

**Corporations, governments, and communities** maintain different world maps of varying detail. For instance, both Google and OpenStreetMap focus on mapping all roads and details about them, and sources like the CIA World Factbook and Natural Earth keep track of political borders.

#### Storage



## Information

What is a map, graphically

### Datum

A geographic datum is a specific way of measuring places on earth. Back in the day, this was a hard problem, since surveyors would require a very high level of accuracy for specific areas: measurements down to the inch for a town. And so, instead of just saying latitude, longitude, we'd say "meters from this spot measured North/South."

Practicing cartographers don't need to know much about the internal operations of datums anymore, since it's handled in software and most special formats can be automatically translated. A global standard called WGS84 caught on for general-purpose mapping and is the recommended way to store data.

### Projection

Projections are what we call the mathematical equations that do the trick of turning the world, which is a sphere, into some flat shape that fits on a printout or a computer screen. It's a messy task to do, this transformation - there's no way to smoosh the world onto a screen without distorting it in some way. You either lose direction, or relative size, or come out with something very weird looking.

### Symbolization

Symbolization is a fancy word for the particular ways that data is transformed into graphics in the world of maps.

Fundamentally, data doesn't look like anything: a list of pixel values or road lines is just as well represented in a spreadsheet or a chart as it is on a map. Thus to 'convert' isn't the right word for what we do with data: at the most basic level, everything is a decision.

Symbolic techniques include anything representable in graphics or even 3D, so let's only look at a few:

#### Choropleth

Choropleth maps preserve the existing boundaries and shapes of places and represent data by changing their colors, patterns or textures. A familiar example of this kind of map is in election results or demographic makeup, in which data is percentage values for some fixed piece of land - a value per voting precinct or census area.

Choropleth maps are a natural fit for data like rates, densities, or percentages. They aren't recommended for absolute values: since they keep the area of shapes the same, they tend to over-emphasize large features.

#### Point

Point maps are a better alternative for absolute values - the only geometry that they preserve is a single point per feature.

The specific point or marker used in this style varies tremendously - some maps scale text itself, or circles or squares.

### Publishing

### Analysis

Raster & vector analysis as aggregation & transformation

#### From Raster to Vector and Back

It's possible to move between the two types of map data, as disparate as they might seem, and it's actually quite common: it's just not direct.

Typically vector data always becomes raster when it is displayed: computer screens and printers operate on the level of pixels, not lines or shapes. This conversion is imperfect: remember that vector data is not pixel-based, so you can never zoom in and see fuzzy features. Thus, generally, when vector data is converted into a raster format, you can't transform that raster representation back into exactly the source.

Sometimes we convert vector data to raster ahead of time - in order to run some kinds of analysis, it's easier to do the math on a pixel basis.

The statistical and informative properties of analysis

How analysis works and breaks

### Conceptual review

The unity of data

Edges blending into math and art
