// Common settings
var platform = new H.service.Platform({
  app_id: 'devportal-demo-20180625',
  app_code: '9v2BkviRwi9Ot26kp2IysQ',
  useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});


//map 1
function moveMapToBerlin(map){
  map.setCenter({lat:52.5159, lng:13.3777});
  map.setZoom(14);
}
var map = new H.Map(document.getElementById('map1'),
  defaultLayers.normal.map, {pixelRatio: pixelRatio});
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers);
moveMapToBerlin(map);