import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const Planets = (url) => {
    const { store, actions } = useContext(Context);
    const planets = store.planets;
   
    const sectionTitle = "Planets";

  // const onClickHandler = (planet) => {
  //   actions.addToFavorite(planet);
  //   console.log("add to favourite clicked", planet.name)
  // };

    return(

        <div className="container ">
        <h2 className="text-white">{sectionTitle}</h2>
        <div className="d-flex overflow-auto gap-3" style={{width: "100%"}}>
          {planets.map((planet, index) => (
            <Card
              key={index}
              sectionTitle={"Planets"}
              url={planet.url}
              cardTitle={planet.name}
              id={planet.uid}
              imgId={planet.uid}
             
            />
          ))}
        </div>
        </div>
    )
};

export default Planets;