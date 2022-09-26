import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-4 mx-2">
      <img src={props.img} className="card-img-top" height={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <div className="container-flex">

          <div className="float-start">
            <Link
              type="button"
              className="btn btn-info"
              to={
                props.type === "planets"
                  ? `/planets/${props.id}`
                  : `/characters/${props.id}`
              }
            >
              Ver mas!
            </Link>
          </div>

          <div > 
            <button 
              onClick={() => {
                actions.setFavorito([...store.favoritos, { name: props.name }]);
                console.log(store);
              }}
              className="float-end border border-0 bg-transparent"
            >
              <a>
                <i className="bi bi-suit-heart btn btn-secondary" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };
