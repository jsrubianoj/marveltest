import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Footer from "./components/Footer";
import { fallbackCharacters } from "./data/marvelCharacters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(12);
  const PUBLIC_KEY = "fee0c64d0320fe9c6662ad7516e5643b";
  const API_URL = "https://gateway.marvel.com/";
  const ts = "1";
  const hash = "c9a5c9158b8f213bb2d44c5b1de2fea6";

  useEffect(() => {
    setLoading(true);
    const limit = postsPerPage;
    const offset = postsPerPage * page;

    axios
      .get(
        `${API_URL}v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`,
        { timeout: 7000 }
      )
      .then((res) => {
        if (res?.data?.data?.results && res.data.data.results.length > 0) {
          setCharacters(res.data.data.results);
          setTotal(Math.ceil((res.data.data.total || 1463) / postsPerPage));
        } else {
          loadFallback(page);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.warn("Marvel API unavailable, loading fallback character catalog:", error?.message);
        loadFallback(page);
        setLoading(false);
      });
  }, [page, postsPerPage]);

  const loadFallback = (currentPage) => {
    const start = currentPage * postsPerPage;
    const pagedFallback = fallbackCharacters.slice(start, start + postsPerPage);
    setCharacters(pagedFallback);
    setTotal(Math.ceil(fallbackCharacters.length / postsPerPage));
  };

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
      <Footer />
    </div>
  );
}

export default App;
