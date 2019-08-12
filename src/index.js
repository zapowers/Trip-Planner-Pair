console.log("running")
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoic29sb2tvIiwiYSI6ImNqejhtajN2NDA0NmwzYm1wZWlzdnZ2MnMifQ.ZkZXof3id4PvaIG9Frpjwg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});


