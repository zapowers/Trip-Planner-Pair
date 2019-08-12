console.log("running")
const mapboxgl = require("mapbox-gl");
import marker from './marker.js'

mapboxgl.accessToken = 'pk.eyJ1Ijoic29sb2tvIiwiYSI6ImNqejhtajN2NDA0NmwzYm1wZWlzdnZ2MnMifQ.ZkZXof3id4PvaIG9Frpjwg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "128px";
markerDomEl.style.height = "128px";
markerDomEl.style.backgroundImage = "url(https://emojis.slackmojis.com/emojis/images/1450458551/184/nyancat_big.gif?1450458551)";
new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
