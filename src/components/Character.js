import { InsertEmoticonSharp } from "@material-ui/icons";
import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";

const Character = (props) => {
  const { char } = props;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Comics</Popover.Title>
      <Popover.Content>
        <strong>{char.name}</strong> appears in {char.comics.available} comics:
        <div>
          {char.comics.items.map((items, idx) => {
            return <div className="pokemon-type-text">-{items.name}</div>;
          })}
        </div>
      </Popover.Content>
    </Popover>
  );

  const Comics = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Details</Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <div className="col">
        <div
          className="card mx-auto"
          style={{ width: "18rem", marginTop: "10px" }}
        >
          <img
            className="card-img mx-auto"
            src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            alt={char.id}
            style={{
              width: "262px",
              height: "262px",
              margin: "8px",
              borderRadius: "10px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <p className="card-text fs-6">{char.description}</p>
            <Comics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
