require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Editor"
  ], function(Map, MapView, FeatureLayer, Editor) {
  
    var myPointsFeatureLayer = new FeatureLayer({
      url: "https://services9.arcgis.com/uJjwt5t1eaHFOQzJ/arcgis/rest/services/my_points/FeatureServer"
    });

    var myPolygonsFeatureLayer = new FeatureLayer({
      url: "https://services9.arcgis.com/uJjwt5t1eaHFOQzJ/arcgis/rest/services/my_polygons/FeatureServer"
    });

    var map = new Map({
    basemap: "topo-vector",
    layers: [myPointsFeatureLayer, myPolygonsFeatureLayer]
    });
  
    var view = new MapView({
    container: "viewDiv4",  
    map: map,
    center: [-40, 28],
    zoom: 2
    });

  var editorWidget = new Editor({
    view: view
  });
  view.ui.add(editorWidget, "top-left");



});