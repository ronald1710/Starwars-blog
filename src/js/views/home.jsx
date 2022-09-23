import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
  const [addCharacters, setAddCharacters] = useState([]);
  const getCharacters = () => {
    fetch("https://www.swapi.tech/api/people")
      .then((resp) => resp.json())
      .then((resp) => setAddCharacters(resp))
      //.catch((err) => console.error(err));
  };
  console.log (addCharacters)
  useEffect(() => {
    getCharacters();
  }, []);
  /*  let img = [
    "https://avatars.githubusercontent.com/u/63676653?v=4",
    "https://avatars.githubusercontent.com/u/19788020?v=4",
    "https://media-exp1.licdn.com/dms/image/C4E03AQF1xGz_cQzESA/profile-displayphoto-shrink_200_200/0/1609468795571?e=1668038400&v=beta&t=h3BrPhHgrcG0Af4ofge7zkOQaRlDEWqBAoOQCHl_vQ8",
    "https://media-exp1.licdn.com/dms/image/C4E03AQHb4GjapOKkCg/profile-displayphoto-shrink_800_800/0/1533756703637?e=1668038400&v=beta&t=7Nl2m0G_Urda-Iq7ip5B47eOoeBol5-IrY9v1LisJkI",
  ];
let name = addCharacters.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])*/

  return (
    <div>
      <div>
        <h1 className="text-danger mx-2">Character</h1>
        <div className="overflow-auto">
          <div className="d-flex">
             {/* {addCharacters.results.map((singlename, index) => {
              return (
              <Card key={index}>
                {singlename.name}
              </Card>
            );
            })}
           {/*<Cards key={i}  img={singleimg} alt={alt[i]} tittle={tittle[i]} description={description[i]} link={link[i]} desLink={desLink[i]} />;*/}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-danger mx-2 mt-4">Planets</h1>
        <div className="overflow-auto">
          <div className="d-flex">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
