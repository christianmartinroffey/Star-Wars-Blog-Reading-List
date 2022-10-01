import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

function PersonPage() {
  const params = useParams();
  console.log(params.id, "params");
  const {store, actions} = useContext(Context);
  const people = store.people;
  const [details, setDetails] = useState();
  
    const person = people.filter(person => person.uid == params.id)
    console.log(person, 'person obj');

    const personURL = person.map((detail, index) => detail.url)
    const URLToString = personURL.toString();
    console.log(personURL, URLToString, "person's URL");
    
  
// useEffect(() => {
     
  fetch(URLToString, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  })
      .then(response => response.json())
      .then(data => setDetails(data.result.properties))
      .then(console.log(details, "person details"));

// });



  return (
    <div>
      <p>Link to URL <a href={personURL}>here</a></p>
    
    { details == undefined ? ("...loading") : (
        <div>
          <p> Name: {details.name}</p>
          <p> ID: {details.uid}</p>
          <p> Height: {details.height}</p>
          <p> Mass: {details.mass}</p>
          <p> Hair Color: {details.hair_color}</p>
        </div>
    )
    }
      <p> The individual person's info</p> 
<Link to="/">
      <button className="btn btn-primary">Go back to the homepage</button> 
      </Link>
    </div>
  )
}

// 
// ))}

export default PersonPage