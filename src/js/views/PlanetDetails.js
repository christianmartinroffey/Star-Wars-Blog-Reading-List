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
          {/* <p> Height: {details.height}</p>
          <p> Mass: {details.mass}</p>
          <p> Hair Color: {details.hair_color}</p> */}
        </div>
// details from API below
// id = db.Column(db.Integer, primary_key=True)
// name = db.Column(db.String(150), unique=True)
// height = db.Column(db.Integer)
// mass = db.Column(db.Integer)
// hair_color = db.Column(db.String(250))
// skin_color = db.Column(db.String(250))
// eye_color = db.Column(db.String(250))
// year_of_birth = db.Column(db.String(250))
// gender = db.Column(db.String(250))
// uid = db.Column(db.String(50))
// children = db.relationship('Favorite', lazy=True
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
