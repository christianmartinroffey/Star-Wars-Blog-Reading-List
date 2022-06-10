import React from "react";
import "../../styles/home.css";
import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";

export const Home = () => (
	<div className="bg-dark">
		<People/>
		<Planets/>
		<Starships/>
	</div>

);
