import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharactersViews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.characterIndividual);
  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualPeople(params?.theid);
    }
  }, [params?.theid]);
  return <div>characters {params?.theid}
  <p>Nombre: {store.characterIndividual?.name}</p>
  </div>;

};
