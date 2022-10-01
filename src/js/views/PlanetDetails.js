import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetDetails() {
  const {store, actions} = useContext(Context);
  const params = useParams();
  const planets = store.planets;
  const [details, setDetails] = useState();
  
  const planet = planets.filter(planet => planet.uid == params.id)
    console.log(planet, 'planet obj');

    const planetURL = planet.map((detail, index) => detail.url)
    const URLToString = planetURL.toString();
    console.log(planetURL, URLToString, "planet's URL");
    
  
// useEffect(() => {
     
  fetch(URLToString, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  })
      .then(response => response.json())
      .then(data => setDetails(data.result.properties))
      .then(console.log(details, "planet details"));

// });


  return (
    <div>
          <p> The individual planet's info</p> 

      <p>Link to URL <a href={planetURL}>here</a></p>
    
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
  
<Link to="/">
      <button className="btn btn-primary">Go back to the homepage</button> 
      </Link>
    </div>
  )
}

// 
// ))}

export default PlanetDetails
// import React from 'react'

// 
//   return (
//     <div>PlanetDetails</div>
//   )
// }

// 