import React, { useState, useEffect } from "react";
import Character from "./Character";
import Pagination from "./Pagination";

const CharacterGrid = (props) => {
  const {characters, page, setPage,total, loading} = props;
  

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };
  
  return (
    <div className="grid-container">
      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {characters.map((char) => {
          return <Character char={char}/>
        })}
      </div>
      
    </div>
  );
};

export default CharacterGrid;
