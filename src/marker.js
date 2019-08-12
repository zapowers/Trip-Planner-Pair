const makeMarker = function (type, coordsArray) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "30px";
  markerDomEl.style.height = "30px";
  if (type.toLowerCase() === 'hotel'){
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  }
  else if (type.toLowerCase() === 'restaurant'){
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }
  else {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }

  new mapboxgl.Marker(markerDomEl).setLngLat(coordsArray).addTo(map);
}

export default makeMarker;
