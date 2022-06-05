
function initMap() {
  const dollar ={ lat: 13.046226003455638, lng: 77.57061928210264 };
 map = new google.maps.Map(document.getElementById("map"), {

    center: dollar,
    zoom: 15,
    mapId: 'd82667698b1f19c4',
    mapTypeControl: false,
  });
marker = new google.maps.Marker({
    position: dollar,
    map: map,
    animation: google.maps.Animation.DROP,
  });
  marker.addListener("click", toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  }
  else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
