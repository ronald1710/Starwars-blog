import React from "react";
import PropType from "prop-types";
const Card = (props) => {
  return (
    <div className="card col-4 mx-2">
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Gender: {props.gender}
        </p>
        <p className="card-text">
          Hair color: {props.hair}
        </p>
        <p className="card-text">
          Eye color: {props.eye}
        </p>
        <div className="container d-flex">
          <div className="float-start">
            <a href="#" className="btn btn-primary">
              Learn more!
            </a>
          </div>
          <div className="float-end">
            <a href="#" className="btn btn-warning mx-5">
              <i className="bi bi-suit-heart"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  img: PropType.string,
  name: PropType.string,
  gender: PropType.string,
  hair: PropType.string,
  eye: PropType.string,
  
};
export { Card };
