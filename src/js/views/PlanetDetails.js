import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetDetails() {
  const {store, actions} = useContext(Context);
  const params = useParams();
  const numberForImg = params.id;
  const planets = store.planets;
  const [details, setDetails] = useState();
  

  const planet = planets.filter(planet => planet.uid == params.id)
    console.log(planet, 'planet obj');

    const planetURL = planet.map((detail, index) => detail.url)
    const URLToString = planetURL.toString();
    console.log(planetURL, URLToString, "planet's URL");
    
  
useEffect(() => {
     
  fetch(URLToString, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  })
      .then(response => response.json())
      .then(data => setDetails(data.result.properties))
      .then(console.log(details, "planet details"));

});

  return (
    <div className="container p-3">
          <h1> The individual planet's info</h1> 
      <p>Link to URL <a href={planetURL}>here</a></p>
      <div className="row pb-5">
      <img className="col-6 card" src={`https://starwars-visualguide.com/assets/img/planets/${numberForImg}.jpg`} ></img>
      <div className="col-6">
    { details == undefined ? (<div><p> ...loading</p> <br/></div>) : (
        <div>
       
          <p>Name: {details.name}</p>
          <p>Diameter: {details.diameter}</p>
          <p>Rotation Period: {details.rotation_period}</p>
          <p>Orbital Period : {details.orbital_period}</p>
          <p>Population: {details.population}</p>
          <p>Gravity: {details.gravity}</p>
          <p>Climate: {details.climate}</p>
          <p>Terrain: {details.terrain}</p>
          <p>Surface Water: {details.surface_water}</p>
          <p>Gravity: {details.gravity}</p>
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


export default PlanetDetails
