require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
  ], function(Map, MapView, Graphic, GraphicsLayer) {
  
  var map = new Map({
  basemap: "topo-vector"
  });
  
  var view = new MapView({
    container: "viewDiv2",
    map: map,
    center: [-118.80500,34.02700],
    zoom: 13
  })
  
  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);


  var point = {
    type: "point",
    longitude: -118.80657463861,
    latitude: 34.0005930608889
  };

  var simpleMarkerSymbol = {
    type: "simple-marker",
    color:  [0, 150, 0],
    outline: {
      color: [255, 255, 255],
      width: 2
    },
    size: 10
  };

  var attributes = {
    Name: "¿En donde estoy ubicado?",
    Location: " Point Dume State Beach",
  };

  var popupTemplate = {
    title: "{Name}",
    content: "Estoy en: <b>{Location}</b>."
  }

  var pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate
  });

  graphicsLayer.add(pointGraphic);


  var simpleLineSymbol = {
    type: "simple-line",
    color: [225, 0, 0],
    width: 2,
    style: "dash"
  };

  var polyline = {
    type: "polyline",
    paths: [
      [-118.821527826096, 34.0139576938577],
      [-118.814893761649, 34.0080602407843],
      [-118.808878330345, 34.0016642996246]
    ]
  }

  var polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
  })
  graphicsLayer.add(polylineGraphic);


  var polygon = {
    type: "polygon",
    rings: [
      [-118.818984489994, 34.0137559967283],
      [-118.806796597377, 34.0215816298725],
      [-118.791432890735, 34.0163883241613],
      [-118.79596686535, 34.008564864635],
      [-118.808558110679, 34.0035027131376]
    ]
  }


  var simpleFillSymbol = {
    type: "simple-fill",
    color: [50, 100, 255, .5],
    outline: {
      color: [50, 100, 255],
      width: 1
    },
    style: "backward-diagonal"
  }


  var polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: simpleFillSymbol
  });

  graphicsLayer.add(polygonGraphic);


  var pictureGraphic = new Graphic({
    geometry: {
      type: "point",
      longitude:-118.80657463861,
      latitude: 34.0005930608889
    },
    symbol: {
      type: "picture-marker",
      url: "https://developers.arcgis.com/labs/images/bluepin.png",
      width: "14px",
      height: "26px"
    }
  });
  graphicsLayer.add(pictureGraphic);


  var textGraphic = new Graphic({
    geometry: {
      type: "point",
      longitude: -118.80657463861,
      latitude: 34.0005930608889
    },
    symbol: {
      type: "text",
      color: [25,25,25],
      haloColor: [255,255,255],
      haloSize: "1px",
      text: "¡Esta es mi ubicación!",
      xoffset: 0,
      yoffset: -25,
      font: {
        size: 12
      }
    }
  });
  graphicsLayer.add(textGraphic);
  });