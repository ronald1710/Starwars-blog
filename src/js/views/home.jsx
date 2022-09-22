import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => (
  <div>
    <div>
      <h1 className="text-danger mx-2">Character</h1>
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
