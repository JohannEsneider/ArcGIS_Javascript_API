require([
    "esri/Map",
    "esri/views/MapView"
  ], function(Map, MapView) {
  
    
    var map = new Map({
    basemap: "topo-vector",
    });
  
    var view = new MapView({
    container: "viewDiv6",  
    map: map,
    center: [-40, 28],
    zoom: 2
    });
});