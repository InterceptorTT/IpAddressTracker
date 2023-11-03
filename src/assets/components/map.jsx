import {MapContainer, TileLayer, Marker} from "react-leaflet"
import "leaflet/dist/leaflet.css"

function Map({data}) {
    let position = [0, 0];

    if(data && data.location){
      const {lat, lng} = data.location;
      position = [lat, lng];
    }
    
        return(
        <div>
          {data && data.location &&
            <MapContainer className="h-screen z-0" center={[position[0]-2, position[1]]} zoom={6} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={position}>
            </Marker>
          </MapContainer>
          }
        </div>
    )
}

export default Map;
