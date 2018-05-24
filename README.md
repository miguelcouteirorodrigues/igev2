# igev2
Informação Geográfica e Visualização - Trabalho 2

What it is:
igev2 is a simple geographical map of the Oporto region of Portugal, made using d3 v4 and topojson v4.
It displays the towns that make up the district area, highlighting each one based on the amount of buildings that existed as of 2011.

Features:
  - Click and hold to pan around
  - Scroll to zoom in and out
  - Click to highlight a town and show a variation map between 2011 and 2016
  - Hover over the map to get the town's name
  - Hover over the points on the graph to get the corresponding value
  
The 2011 data was based on that year's census, with the 2016 being randomized from the 2011 one.

Requires node.js

1. Navigate to node-postgres-promises using a CLI
2. Run using npm start
3. Open browser (with CORS disabled) and navigate to http://localhost:3000 (default location; check node install in case of different port)

Disabling CORS:
  - Google Chrome: create desktop shortcut and add -disable-web-security to target (right-click on shortcut, Properties)
