export default function Weather({ lat, lon }) {
  return (
    <div className="weather-widget" data-lat={lat} data-lon={lon} role="status" aria-live="polite">
      <div className="wx-loading">Loading weather…</div>
    </div>
  );
}
