import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

function PersonPage() {
  const params = useParams();
  const numberForImg = params.id;
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
    <div className="container p-3">
      <h1> The individual person's info</h1> 
      <p>Link to URL <a href={personURL}>here</a></p>
      <div className="row pb-5">
      <img className="col-6 card" src={`https://starwars-visualguide.com/assets/img/characters/${numberForImg}.jpg`} ></img>
  <div className="col-6">
    { details == undefined ? ("...loading") : (
        <div>
          <p> Name: {details.name}</p>
          <p> Height: {details.height}</p>
          <p> Mass: {details.mass}</p>
          <p> Hair Color: {details.hair_color}</p>
        </div>
    )
    }
      </div>
      </div>
<Link to="/">
      <button className="btn btn-primary">Go back to the homepage</button> 
      </Link>
    </div>

  )
}

// 
// ))}

export default PersonPage