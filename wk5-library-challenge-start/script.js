(function(){
    'use strict';

    //  initialize the map and set its view to our chosen geographical coordinates and a zoom level
    var map = L.map('map').setView([51.505, -0.09], 13);

    //add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //add a marker
    var marker = L.marker([51.5, -0.09]).addTo(map);

    //Adding a circle
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    
    //Adding a polygon 
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);

    // attach some information to a particular object on a map
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    // use popups as layers
    var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
    
    // Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    // improve example by using a popup instead of an alert
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

//-------------------------------------line chart--------------------------------------------//
        // Set dimensions and margins for the chart

const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Set up the x and y scales

const x = d3.scaleTime()
  .range([0, width]);

const y = d3.scaleLinear()
  .range([height, 0]);

// Create the SVG element and append it to the chart container

const svg = d3.select("#chart-container")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create a fake dataset

const dataset = [
  { date: new Date("2024-01-01"), value: 200 },
  { date: new Date("2024-02-01"), value: 250 },
  { date: new Date("2024-03-01"), value: 180 },
  { date: new Date("2024-04-01"), value: 300 },
  { date: new Date("2024-05-01"), value: 280 },
  { date: new Date("2024-06-01"), value: 220 },
  { date: new Date("2024-07-01"), value: 300 },
  { date: new Date("2024-08-01"), value: 450 },
  { date: new Date("2024-09-01"), value: 280 },
  { date: new Date("2024-10-01"), value: 600 },
  { date: new Date("2024-11-01"), value: 780 },
  { date: new Date("2024-12-01"), value: 320 }
];

// Define the x and y domains

x.domain(d3.extent(dataset, d => d.date));
y.domain([0, d3.max(dataset, d => d.value)]);

// Add the x-axis

svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x)
    .ticks(d3.timeMonth.every(1)) 
    .tickFormat(d3.timeFormat("%b %Y"))); 


// Add the y-axis

svg.append("g")
  .call(d3.axisLeft(y))

// Create the line generator

const line = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value));

// Add the line path to the SVG element

svg.append("path")
  .datum(dataset)
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 1)
  .attr("d", line);
}());