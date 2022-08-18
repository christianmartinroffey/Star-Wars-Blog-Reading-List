import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const People = () => {
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
    <>
      <div className="container-fluid d-flex">
        <div className="min-vw-50 d-flex overflow-auto card d-flex">
        <h2>People</h2>
          {people.map((person, index) => (
            <div className="card bg-light m-2">
              <img
                className="img-thumbnail"
                src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
              />
              <p>{person.name}</p>
              <p> {person.uid}</p>
              <Link to="/people/:uid">
              <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button className="btn" id="favorite" onClick={onClickHandler}><span className="fa fa-heart text-success"></span></button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default People;
