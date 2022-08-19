import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const People = (url) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    useEffect(() => {
  
    });


  const onClickHandler = (person) => {
    actions.addToFavorite(person);
    console.log("add to favourite clicked", person.name)
    
};

  return (
    <div className="row">
      <div className="container d-flex">
        
        <div className="overflow-auto card d-flex" style={{width: "18rem"}}>
        <h2>Characters</h2>
          {people.map((person, index) => (
            <Card
              key={index}
              sectionTitle={"People"}
              url={person.url}
              cardTitle={person.name}
              id={person.uid}
              imgId={person.uid}
             
            />
          ))}
        </div>
        </div>
      </div>
  );
};

export default People;


