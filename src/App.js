import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const PUBLIC_KEY = "fee0c64d0320fe9c6662ad7516e5643b";
  const API_URL = "https://gateway.marvel.com/";
  const ts = "1";
  const hash = "c9a5c9158b8f213bb2d44c5b1de2fea6";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_URL}v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      )
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <Header />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {characters.map((char) => (
          <div className="card" style={{ width: "18rem", display: "flex" }}>
            <img
              className="card-img-top"
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt={char.id}
            />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">{char.description}</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
