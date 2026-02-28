import React from "react";
// Cada clic en los botones
export default function TemperatureControls({
  incrementTemperature,
  decrementTemperature,
  resetTemperature,
}) {
  return (
    <div>
      <button onClick={incrementTemperature}>Subir Temperatura</button>
      <button onClick={decrementTemperature}>Bajar Temperatura</button>
      <button onClick={resetTemperature}>Reiniciar</button>
    </div>
  );
}
