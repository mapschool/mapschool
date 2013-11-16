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

Collection
Storage

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

### Publishing

### Analysis

Raster & vector analysis as aggregation & transformation

Transforming raster to vector, vector to raster

The statistical and informative properties of analysis

How analysis works and breaks

### Conceptual review

The unity of data

Edges blending into math and art
