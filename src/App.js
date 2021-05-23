import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Footer from "./components/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postsPerPage, setPostsPerPage] = useState(24);
  const PUBLIC_KEY = "fee0c64d0320fe9c6662ad7516e5643b";
  const API_URL = "https://gateway.marvel.com/";
  const ts = "1";
  const hash = "c9a5c9158b8f213bb2d44c5b1de2fea6";


  useEffect((limit = postsPerPage, offset = postsPerPage*page) => {
    axios
      .get(
        `${API_URL}v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`
      )
      .then((res) => {
        setCharacters(res.data.data.results);
        setTotal(Math.ceil(1463/postsPerPage))
      })
      .catch((error) => console.log(error));
  }, [page]);

  

  return (
    <div className="App">
      <Header />
      <CharacterGrid
        postsPerPage={postsPerPage}
        loading={loading}
        characters={characters}
        page={page}
        setPage={setPage}
        total={total}
      />
      <Footer/>
    </div>
  );
}

export default App;
