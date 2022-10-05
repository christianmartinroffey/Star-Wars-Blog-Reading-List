import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


function StarshipsDetails() {

  const {store, actions} = useContext(Context);
  const params = useParams();
  const numberForImg = params.id;
  const starships = store.starships;
  const [details, setDetails] = useState();
  

  const starship = starships.filter(starship => starship.uid == params.id)
    console.log(starship, 'planet obj');

    const starshipURL = starship.map((detail, index) => detail.url)
    const URLToString = starshipURL.toString();
    console.log(starshipURL, URLToString, "starship's URL");
    
  
useEffect(() => {
     
  fetch(URLToString, {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  })
      .then(response => response.json())
      .then(data => setDetails(data.result.properties))
      .then(console.log(details, "starship details"));

});

  return (
    <div className="container p-3">
    <h1> The individual starship's info</h1> 
<p>Link to URL <a href={starshipURL}>here</a></p>
<div className="row pb-5">
<img className="col-6 card" src={`https://starwars-visualguide.com/assets/img/starships/${numberForImg}.jpg`} ></img>
<div className="col-6">
{ details == undefined ? (<div><p> ...loading</p> <br/></div>) : (
  <div>
    <p>Name: {details.name}</p>
    <p>Model: {details.model}</p>
    <p>Starship class: {details.starship_class}</p>
    <p>Manufacturer: {details.manufacturer}</p>
    <p>Cost in credits: {details.cost_in_credits}</p>
    <p>Length: {details.length}</p>
    <p>Crew: {details.crew}</p>
    <p>Passengers: {details.passengers}</p>
    <p>Max Atmosphering Speed: {details.max_atmosphering_speed}</p>
    <p>Hyperdrive rating: {details.hyperdrive_rating}</p>
    <p>MGLT: {details.MGLT}</p>
    <p>Cargo capacity: {details.cargo_capacity}</p>
    <p>Consumables: {details.consumables}</p>
    <p>Hyperdrive rating: {details.hyperdrive_rating}</p>
    <p>Pilots: {details.pilots}</p>
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

export default StarshipsDetails