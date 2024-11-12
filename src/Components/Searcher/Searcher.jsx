// Searcher.jsx
import React, { useState, useRef, useContext } from "react";
import "./SearcherStyles.css";
import { searchCountry } from "../../Utils/apiFetch";
import { LocationContext } from "../../Context/LocationContext";

const Searcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);
  const { updateLocation, updateCity } = useContext(LocationContext);

  const closeReferences = () => {
    setData([]);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      if (value.length > 0) {
        const result = await searchCountry(value);
        if (Array.isArray(result)) {
          setData(result);
          setError(null);
        } else {
          setError(result);
          setData([]);
        }
      }
    }, 300);
  };

  const handleClickItem = (lat, lon, city) => {
    updateLocation(lat, lon);
    updateCity(city);
    closeReferences();
   

    console.log("Ciudad seleccionada:", city);
    console.log("Coordenadas:", lat, lon);
  };

  return (
    <form className="searcher" onSubmit={(e) => e.preventDefault()}>
      <input
        id="input-id"
        onChange={handleChange}
        name="search"
        type="search"
        placeholder="Ingresar ciudad"
        autoComplete="off"
      />

      {data.length > 0 && (
        <div className="references">
          <span onClick={closeReferences} className="close">
            x
          </span>
          {data.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickItem(item.lat, item.lon, item.name+", "+item.country);
              }}
            >
              {item.name}, {item.country}.
            </a>
          ))}
          {error && <div>{error}</div>}
        </div>
      )}
    </form>
  );
};

export default Searcher;
