"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SearchResultData } from "../types/app";


const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const position: [number, number] = [
    searchResultData[0].lat || 30.0444,
    searchResultData[0].long || 31.2357,
  ]; // Default to Cairo

  // fix default marker icon (leaflet bug with webpack) // الويب باك بعرفش يجيب صورة الايقون من النود موديولز فالكود\ هاد بحل المشكلة
  const defaultIcon = L.icon({
    iconUrl: '/marker.png',
    iconSize: [40, 40],
    iconAnchor: [15, 30],
  });
  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* هاي الخريطة نفسها */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {searchResultData.map((listing) => (
          <Marker key={listing.long} position={[listing.lat, listing.long]}>
            <Popup>{listing.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
