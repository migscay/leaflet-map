import logo from './logo.svg';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function reverseGeocodingWithGoogle(latitude, longitude) {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?
      latlng=${latitude},${longitude}&key={AIzaSyACgrYtHS-28GQj_N0OsB7ELo6bUMNlZKE}`)
  .then( res => res.json())
  .then(response => {
      console.log("User's Location Info: ", response)
   })
   .catch(status => {
      console.log('Request failed.  Returned status of', status)
   })
}

// Excerpt from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
function geoFindMe() {
  if (!navigator.geolocation){
   console.log("Geolocation is not supported by your browser");
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    reverseGeocodingWithGoogle(longitude, latitude);
    console.log(`latitude is ${latitude}, longtitude is ${longitude}`);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe();

function App() {
  return (
    // <MapContainer center={[45.4, -75.7]} zoom={12}>
    // <MapContainer center={[latitude, longitude]} zoom={12}>
    // <MapContainer center={[150.70539109999999, -33.7478729]} zoom={12}>
    <MapContainer center={[-33.7478729, 150.70539109999999]} zoom={12}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>  );
}

export default App;
