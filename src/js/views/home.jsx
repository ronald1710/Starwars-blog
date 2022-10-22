import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="container">
        <h1 className="text-danger mx-2">Character</h1>
        <div className="overflow-auto">
          <div className="d-flex">
            {store.characters.map((singlename, index) => {
              return (
                <Card
                  img={store.imgPersonas[index].url}
                  key={index}
                  name={singlename.character_name}
                  type="characters"
                  id={singlename.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-danger mx-2 mt-4">Planets</h1>
        <div className="overflow-auto">
          <div className="d-flex">
            {store.planets.map((singlename, index) => {
              return (
                <Card
                  img={store.imgPlanetas[index].url}
                  key={index}
                  name={singlename.planet_name}
                  type="planets"
                  id={singlename.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
