import React from "react";
import { useState, useEffect } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControlers from "./components/TemperatureControlers";
import HistoryList from "./components/HistoryList";

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const addtoHistory = (newTemp) => {
    const entrada = {
      temp: newTemp,
      time: new Date().toLocaleTimeString(),
    };
    setHistory([...history, entrada]);
  };

  //subir temperatura
  const incrementTemperature = () => {
    const newTemp = temperature + 1;

    if (newTemp > 40) return;

    setTemperature(newTemp);
    addtoHistory(newTemp);
  };

  //Bajar temperatura
  const decrementTemperature = () => {
    const newTemp = temperature - 1;

    if (newTemp < 0) return;

    setTemperature(newTemp);
    addtoHistory(newTemp);
  };

  //Resetear
  const resetTemperature = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControlers
        incrementTemperature={incrementTemperature}
        decrementTemperature={decrementTemperature}
        resetTemperature={resetTemperature}
      />
      <HistoryList history={history} />
    </div>
  );
}
