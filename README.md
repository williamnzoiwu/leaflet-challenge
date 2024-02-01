# leaflet-challenge
## Leaflet Module 15 Challenge
This folder contains a javascript file creating an interactive map that displays visulizations for earthquake data from the United States Geological Survey. It also contains an html and css file containing elements for the web page.

The javascript file first establishes the base url for the JSON file where the earthquake data will be pulled from. It the creates a map with an open street map tile layer using leaflet, and uses the d3 library to read the JSON.

The script then creates the markers displaying the earthquakes on the map, with the color varying based on the depth of the earthquake. The earthquakes with the lowest depths have a dark green color, gradually changing from yellow, to orange, to red for the ones with the largest depth. The radius of the markers is then set as well, with the markers growing in size based on their magnitude. Next the marker interactivity and popups are set up so that when the user hovers over a marker, the cursor changes to a pointer finger. When the marker is clicked, a popup shows up, displaying the locatin of the earthquake, along with its magnitude and depth.

Lastly, the script creates a map legend displaying the key for the marker colors and earthquake depth as follows:

-10 to 10: Green

10 to 30: Yellow Green

30 to 50: Yellow

50 to 70: Orange

70 to 90: Orange Red

90 and above: Red

The javascript file is located in the js folder within the static folder, and the css file is located in the css folder within the static folder. The html file is in the parent folder.
