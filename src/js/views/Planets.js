import React, {useState, useEffect} from "react";


const Planets = () => {

const [planets, setPlanets] = useState([]);

useEffect(() => {

    async function fetchPlanets () {
        let response = await fetch('https://www.swapi.tech/api/planets/?format=json');
        let data = await response.json();
        setPlanets(data.results); 
    }
    fetchPlanets();
}, []);
//check if there is data for planets
console.log("data", planets);

//const planetName = (planet.name);


    return(
      <div className="container d-flex bg-">
      <div className="card bg-light m-2">
          <p>card image </p>
          <p>title of the character</p> 
          <p>gender: value</p>
          <p>hair color: value</p>
          <p>eye color: value</p> 
          <div className="d-flex">
              <button className=" btn btn-primary"id="learn-more">learn more</button>
              <button className="btn" id="favorite"><span className="fa fa-heart text-success"></span></button>
          </div>
      </div>
      <div className="card bg-light m-2">
          <p> card image</p>
          <p>title of the character</p> 
          <p>gender: value</p>
          <p>hair color: value</p>
          <p>eye color: value</p> 
          <div className="d-flex">
              <button className=" btn btn-primary">learn more</button>
              <button className="btn"><span className="fa fa-heart text-success"></span></button>
          </div>
      </div>
  </div>
        
    )
};

export default Planets