import React from "react";

const CardComponent = (props) => {
  return (
    <div className="card">
        <div className="image">
          <img src={props.imageURL} alt="avatar" />
        </div>
    </div>
  );
};

export default CardComponent;
