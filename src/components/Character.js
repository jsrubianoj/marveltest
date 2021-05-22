import React from 'react'

const Character = (props) => {
  const {char} = props

  return (
    <div>
      <div className="col">
      <div
        className="card mx-auto"
        style={{ width: "18rem", marginTop: "10px" }}
      >
        <img
          className="card-img"
          src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          alt={char.id}
          style={{ width: "262px", height: "262px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{char.name}</h5>
          <p className="card-text fs-6">{char.description}</p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Character
