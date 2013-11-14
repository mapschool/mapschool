# Map School

## Maps

Data
Information
Transformation
Analysis

## Data

### The two basic forms: Raster & Vector

Fundamentally, geographical data is one of two kinds: **raster**, or **vector**.

#### Raster

**Raster** data is like a picture that you'd take with a digital camera: at the
lowest level of abstraction, it's a big list of pixels that have values. When
you 'zoom in' and look closer at raster data, at some point you'll see these
individual pixels, and it will look pixelated.

Raster data is how you'd store pictures of the earth, like the kinds taken from
satellites, but that's not all that you would use it for. Pixels don't need to
have colors - instead, each pixel can have a number that represents height
and the raster data as a whole stores elevation data. Or pixels can store
temperature or reflection data and be useful for environmental work.

#### Vector

**Vector** data is more like a PDF or a math equation: instead of pixels,
vector data has points and lines defined in math. So zooming in on vector
data makes the features larger, but at no point do they become pixellated,
since there are no pixels in play here.

Vector data is how you'd store roads, buildings, points of interest, or
other things that have some place in the world.

Datums & Accuracy
Collection
Storage

## Information

What is a map, graphically

#### Projections

Projections are what we call the mathematical equations that do the trick of
turning the world, which is a sphere, into some flat shape that fits on a
printout or a computer screen. It's a messy task to do, this transformation -
there's no way to smoosh the world onto a screen without distorting it in some
way. You either lose direction, or relative size, or come out with something
very weird looking.

Symbolization
Publishing

### Analysis

Raster & vector analysis as aggregation & transformation
Transforming raster to vector, vector to raster
The statistical and informative properties of analysis
How analysis works and breaks

### Conceptual review

The unity of data
Edges blending into math and art
