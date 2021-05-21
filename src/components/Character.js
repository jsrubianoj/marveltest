import React from 'react'

const Character = (props) => {

  const { character } = props;

  return (
    <div>
      <div className="character-card">
      <div>
        <img
          className="character-img"
          src={character.sprites.front_default}
          alt={character.name}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{character.name}</h3>
          <div># {character.id}</div>
        </div>
        <div className="card-bottom">
          <div className="card-description">
            {character.description}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Character
