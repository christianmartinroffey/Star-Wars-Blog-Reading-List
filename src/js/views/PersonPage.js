import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

function PersonPage() {
  const params = useParams();
  console.log(params.id, "params");
  const {store, actions} = useContext(Context);
  const people = store.people;
  console.log(people, "Person page");
  const [details, setDetails] = useState();

  
    const person = people.filter(person => person.uid == params.id)
    console.log(person, "name");

    const personUID = person.map((detail, index) => detail.uid)
    console.log(personUID, "deets");
    
  

      fetch(`https://www.swapi.tech/api/people/${personUID}`)
      .then(response => response.json())
      .then(data => setDetails(data.results))
      .then(()=> console.log(details, "person details"))
      .catch(err => console.error(err.message))



  return (
    <div>
      {person.map((details, index) => (
        <div>
          <p> Name: {details.name}</p>
          <p> ID: {details.uid}</p>
          <p> Heigh: {details.height}</p>
          <p> Mass: {details.mass}</p>
          <p> Hair Color: {details.hair_color}</p>
        </div>
      ))}
       
      <p> The individual person's info</p> 
    </div>
  )
}

// 
// ))}

export default PersonPage