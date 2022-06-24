import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 19.42047,
    lng: 72.8561,
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Let's Have a Cup of Coffe</h1>
        <div className="col-lg-12">
          <LoadScript googleMapsApiKey="AIzaSyDg2NzYFdGpxCSy6PMnSJdxuM3tTLkp9KE">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default Map;
