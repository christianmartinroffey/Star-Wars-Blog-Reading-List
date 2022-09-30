import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

function Starships() {
  const { store, actions } = useContext(Context);
  const starships = store.starships;
  useEffect(() => {

  });


const onClickHandler = (starship) => {
  actions.addToFavorite(starship);
  console.log("add to favourite clicked", starship.name)
  
};

return (
 
    <div className="container ">
      <h2 className="text-white">Starships</h2>
      <div className="d-flex overflow-auto gap-3" style={{width: "100%"}}>
        {starships.map((starship, index) => (
          <Card
            key={index}
            sectionTitle={"Starships"}
            url={starship.url}
            cardTitle={starship.name}
            id={starship.uid}
            imgId={starship.uid}
           
          />
        ))}
      </div>
      </div>

);
};

{/* <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/> */}
export default Starships