import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDo5aC_qbsYEla4mgsKTCR1aFkHw9xr-ok",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  return (
    <div>
      <h1 className="display-3 text-center mt-5 mb-5">
        Drop in For a Cup of Coffee
      </h1>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="max-width"
      ></GoogleMap>
    </div>
  );
}
