import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const People = () => {
    const { store, actions } = useContext(Context);
  
//   if (store.people.length === 0) {
//     return <div> </div>;
//   }

  return (
    <>
      {/* <div className="container d-flex">
        <div className="min-vw-50 d-flex">
          {people.map((person, index) => (
            <div className="card bg-light m-2">
              <img
                className="img-thumbnail"
                src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
              />
              <p>{person.name}</p>
              <p> {person.uid}</p>
              <Link to="/people/:uid">
                <button className=" btn btn-primary" id="learn-more">
                  Learn more about this character
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default People;
