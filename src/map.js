const token =
  "pk.eyJ1IjoiZ2JlZGFkIiwiYSI6ImNrOXo3d3oycDA1cG0zZm1kcTh1YnJ5NTIifQ.jrtAxSSc9W9Rezz9Eeq8KQ";

let map = L.map("map").setView([48.6891733257851, 6.18390463043762], 14);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: token,
  }
).addTo(map);
/* const myIcon = L.icon({
  iconUrl: "src/assets/images/mapPinPointer.png",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
}); */

L.marker([48.69, 6.175])
  /* { icon: myIcon } */
  .bindPopup("Hello <b>Leaflet GL</b>!<br>Whoa, it works!")
  .addTo(map)
  .openPopup();
/* let gl = L.mapboxGL({
  accessToken: token,
  style: "mapbox://styles/mapbox/bright-v8",
}).addTo(map); */

const getTodosAsync = async function () {
  const response = await fetch(
    "https://api.jcdecaux.com/vls/v1/stations?contract=nancy&apiKey=665f552827ccdfd3c8a5695f9e87378663d7cb80"
  );
  const jsonData = await response.json();
  console.log(jsonData[5]);

  jsonData.map((station) => {
    L.marker([station.position.lat, station.position.lng])

      .bindPopup(
        `${station.name.slice(8)} <br>Places disponibles : ${
          station.available_bike_stands
        }<br> Vélos disponibles : ${station.available_bikes}`
      )
      .addTo(map)
      .openPopup();
  });
};

getTodosAsync();

const makeReservation = () => {};
