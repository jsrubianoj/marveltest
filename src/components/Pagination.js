import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button>
        <div onClick={onLeftClick}>👈</div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button>
        <div onClick={onRightClick}>👉</div>
      </button>
    </div>
  );
};

export default Pagination;
