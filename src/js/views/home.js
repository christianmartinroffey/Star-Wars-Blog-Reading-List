import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import People from "./People.js";
import Planets from "./Planets.js";
import Starships from "./Starships.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="bg-dark pt-5">
      <People sectionTitle="People"/>
      <Planets sectionTitle="Planets"/>
      <Starships sectionTitle="Starships" />
    </div>
  );
};

