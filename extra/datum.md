## Datum

A geographic datum is a specific way of measuring places on earth. Back in the day, this was a hard problem, since surveyors would require a high level of accuracy for specific areas: measurements down to the inch for a town. And so, instead of just saying latitude, longitude, we'd say "meters from this spot measured North/South."

Practicing cartographers don't need to know much about the internal operations of datums anymore, since it's handled in software and most special formats can be automatically translated. A global standard called WGS84 caught on for general-purpose mapping and is the recommended way to store data.

Though you don't often need to know the details of transforming between datums, when working with geo data from different sources it is *very* important that you confirm that the datums match. Working with data in different map datums can result in non-trivial errors, particularly at small scales on the order of 0-200m.
