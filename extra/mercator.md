# Web Mercator

You may have heard about the ills of the Spherical Mercator projection. Here's a little bit more that should make things make sense.

Projections are by nature compromises - optimizing accuracy of a straight line will distort shapes or areas, and vice versa.

For large wall maps like those you might see in a classroom, mapmakers try to maintain the right sizes of continents as best they can while making the map look 'normal' - meaning, really, that the western hemisphere is on the left, the north is on the top, and it looks like something between a circle and a rectangle. You can make the map look a little less normal and improve it technically, but familiarity is important.

The Mercator projection, on the other hand, doesn't do a good job of maintaining the size of continents. Africa is much too small, Greenland too large, and the poles are distorted beyond belief. It's also a perfect square, instead of the nice oblong shapes of older maps. On first glance, and through the eyes of the norm-enforcing academics, this is simply a loss - why would this choice be the one that won popularity throughout the internet? Unfortunately the folks who malign the web mercator projection and those who understand why it was chosen are disjoint and thus for the young GIS explorer, the choice seems arbitrary and wrong. Let's straighten that out.

The first element of understanding will be a quick introduction to how web maps work. When you open a typical map on the internet, like Google Maps, the first view might be the entire world on your screen. You can then zoom in and see other parts of the world.
