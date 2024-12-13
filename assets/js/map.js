var map = L.map('map', {
    center: [-12.217676114921659, -76.95000820923973],
    zoom: 13.8888,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-12.215590546855625, -76.95027344317927], [-12.215590546855625, -76.95027344317927]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);


var villa_salvador = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:villa_salvador", //gisweb:villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 villa_salvador.addTo(map);


 var Iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:iglesia_salvador", //gisweb:iglesia villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Iglesia.addTo(map);


 var Hospital = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:hospital_salvador", //gisweb:hospital villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Hospital.addTo(map);



 var Colegio = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:colegio_salvador", //gisweb:centros educativos villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Colegio.addTo(map);

 
 var Farmacia = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:farmacia_salvador", //gisweb:farmacia villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Farmacia.addTo(map);


 var curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_villa_salvador/wms?", {
    layers: "web_villa_salvador:curvas_salvador", //gisweb:curvas de nivel villa salvador
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 curvas_nivel.addTo(map);




 var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "villa_salvador":villa_salvador,
    "Iglesia":Iglesia,
    "Hospital":Hospital,
    "Colegio":Colegio,
    "Farmacia":Farmacia,
    "curvas_nivel":curvas_nivel
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);