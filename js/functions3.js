require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch"
  ], function(Map, MapView, GraphicsLayer, Sketch) {
  
    var graphicsLayer = new GraphicsLayer();
    
    var map = new Map({
    basemap: "topo-vector",
    layers:[graphicsLayer]
    });
  
    var view = new MapView({
    container: "viewDiv3",  
    map: map,
    center: [-40, 28],
    zoom: 2
    });

    var sketch = new Sketch({
        view: view,
        layer: graphicsLayer
    });

    view.ui.add(sketch, "top-left");

    var stroke = {
        color: [255, 0, 0],
        width: 1
    }

    var fillColor = [255,255,255, .5];


    var pointSymbol = sketch.viewModel.pointSymbol;
       pointSymbol.color = fillColor;
       pointSymbol.outline = stroke;
       pointSymbol.size = 8;

       var polylineSymbol = sketch.viewModel.polylineSymbol;
       polylineSymbol.color = stroke.color;
       polylineSymbol.width = stroke.width;

       var polygonSymbol = sketch.viewModel.polygonSymbol;
       polygonSymbol.color = fillColor;
       polygonSymbol.outline = stroke;

       sketch.on("create", function(event) {
        if (event.state === "complete") {
          var attributes = {
            name: "My Graphic",
            type: event.graphic.geometry.type
          }
          event.graphic.attributes = attributes;

          var popupTemplate = {
            title: "{name}",
            content: "I am a {type}."
          }
          event.graphic.popupTemplate = popupTemplate;
        }
      });


});