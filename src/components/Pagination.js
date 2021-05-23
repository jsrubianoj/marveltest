import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div
      className="d-grid gap-2 d-md-flex justify-content-center"
      style={{ margin: "20px" }}
    >
      <button className="btn btn btn-light me-md-2" type="button">
        <div onClick={onLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </button>
      <div className="subtitle d-flex align-items-center">
        <h5>
          Page {page} of {totalPages}
        </h5>
      </div>
      <button className="btn btn btn-light" type="button">
        <div onClick={onRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
