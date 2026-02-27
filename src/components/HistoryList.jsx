import React from "react";
import { useState, useEffect } from "react";

function HistoryList({ history }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [history.length]);

  return (
    <div>
      <h1>Historial</h1>
      {history.length === 0 ? (
        <p>No hay historial</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              [{item.time}]{item.temp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryList;
