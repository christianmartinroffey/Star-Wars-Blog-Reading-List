import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const People = (sectionTitle, url) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    console.log(people, "from store in page view");
   

    useEffect(() => {
  
    });
  
  
  // if (store.people.length === 0) {
  //   return <div> </div>;
  // }

  const onClickHandler = (person) => {
    actions.addToFavorite(person);
    console.log("add to favourite clicked", person.name)
    
};

  return (
      <div className="container-fluid">
        <div className="min-vw-50 d-flex overflow-auto card d-flex" style={{width: "18rem"}}>
        <h2>{People}</h2>
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



 {/* <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button className="btn" id="favorite" onClick={onClickHandler}><span className="fa fa-heart text-success"></span></button>
                </div> */}