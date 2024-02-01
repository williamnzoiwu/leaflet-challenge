let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

// Creating the map object
let myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


d3.json(url).then((data) => {

    // Set marker colors
    function setColor(depth) {
        switch (true) {
            case depth > 90:
                return "red";
            case depth > 70:
                return "orangered";
            case depth > 50:
                return "orange";
            case depth > 30:
                return "yellow";
            case depth > 10:
                return "yellowGreen";
            default:
                return "green";
        }
    }

    // Set radius
    function setRadius(mag) {
        if (mag == 0) {
            return 1;
        }
        return mag * 4;
    }

    function pointStyle(feature) {
        return {
            fillColor: setColor(feature.geometry.coordinates[2]),
            radius: setRadius(feature.properties.mag),
            fillOpacity: 1,
            color: "black",
            weight: 1
        }
    }

    L.geoJson(data, {
        pointToLayer: function (feature, latLong) {
            let marker = L.circleMarker(latLong);
            marker.bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + "Magnitude: " + feature.properties.mag + "</p><p>" + "Depth: " + feature.geometry.coordinates[2] + "</p>");
            return marker;
        },
        style: pointStyle

    }).addTo(myMap);


    //Create legend
    let legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "legend");
        div.innerHTML += "<h4>Depth Key</h4>";
        div.innerHTML += '<i style="background: green"></i><span>-10 - 10</span><br>';
        div.innerHTML += '<i style="background: yellowgreen"></i><span>10 - 30</span><br>';
        div.innerHTML += '<i style="background: yellow"></i><span>30 - 50</span><br>';
        div.innerHTML += '<i style="background: orange"></i><span>50 - 70</span><br>';
        div.innerHTML += '<i style="background: orangered"></i><span>70 - 90</span><br>';
        div.innerHTML += '<i style="background: red"></i><span>90+</span><br>';

        return div;
    };

    legend.addTo(myMap);
});