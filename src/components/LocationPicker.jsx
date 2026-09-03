import { useEffect } from "react";
import { MapContainer, TileLayer, Rectangle, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BOUNDS } from "../data/constants";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const rectBounds = [
  [BOUNDS.latMin, BOUNDS.lonMin],
  [BOUNDS.latMax, BOUNDS.lonMax],
];

function ClickHandler({ onPick }) {
  useMapEvents({
    click(e) {
      const lat = Math.min(Math.max(e.latlng.lat, BOUNDS.latMin), BOUNDS.latMax);
      const lon = Math.min(Math.max(e.latlng.lng, BOUNDS.lonMin), BOUNDS.lonMax);
      onPick(Math.round(lat * 100) / 100, Math.round(lon * 100) / 100);
    },
  });
  return null;
}

function RecenterOnPick({ lat, lon }) {
  const map = useMapEvents({});
  useEffect(() => {
    map.panTo([lat, lon]);
  }, [lat, lon]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

export default function LocationPicker({ lat, lon, onPick }) {
  const center = [(BOUNDS.latMin + BOUNDS.latMax) / 2, (BOUNDS.lonMin + BOUNDS.lonMax) / 2];

  return (
    <div>
      <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1C3A52" }}>
        <MapContainer
          center={center}
          zoom={6}
          minZoom={5}
          maxZoom={9}
          maxBounds={rectBounds}
          maxBoundsViscosity={1.0}
          style={{ height: 260, width: "100%" }}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Rectangle bounds={rectBounds} pathOptions={{ color: "#3FA9A0", weight: 1, fillOpacity: 0.04 }} />
          <Marker position={[lat, lon]} />
          <ClickHandler onPick={onPick} />
          <RecenterOnPick lat={lat} lon={lon} />
        </MapContainer>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={() => onPick(12.2, 81.5)} className="oe-pill text-xs px-3 py-1.5 rounded-full" style={{ background: "#0F2438", color: "#EAF4F4", border: "1px solid #1C3A52" }}>
          Near coast
        </button>
        <button onClick={() => onPick(13.4, 84.2)} className="oe-pill text-xs px-3 py-1.5 rounded-full" style={{ background: "#0F2438", color: "#EAF4F4", border: "1px solid #1C3A52" }}>
          Open ocean
        </button>
      </div>
    </div>
  );
}