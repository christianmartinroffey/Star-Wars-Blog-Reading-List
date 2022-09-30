
import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const People = (url) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    const sectionTitle = "People";

  return (
      <div className="container pb-5 ">
        <h2 className="text-white">{sectionTitle}</h2>
        <div className="d-flex overflow-auto gap-3" style={{width: "100%"}}>
          {people.map((person, index) => (
            <Card
              key={index}
              sectionTitle={sectionTitle}
              url={person.url}
              cardTitle={person.name}
              id={person.uid}
              imgId={person.uid}
             
            />
          ))}
        </div>
        </div>

  );

};

export default People;


