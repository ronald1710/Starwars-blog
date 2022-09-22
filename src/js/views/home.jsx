import React from "react";
import "../../styles/home.css";
import {Card} from "../component/card";

export const Home = () => (
	<div>
        <h1>Character</h1>
        <div className="d-flex overflow-scroll">{/* arregar scroll */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
);
