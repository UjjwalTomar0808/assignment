import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map(props) {
  const latitude = props.latitude;
  const longitude = props.longitude;
  const mapRef = useRef(null);

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
    id="Map"
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: "40vh", width: "40vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={redIcon}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
