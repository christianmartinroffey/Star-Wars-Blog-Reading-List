import React, {useState, useEffect} from "react";


const Planets = () => {

const [planets, setPlanets] = useState([]);

useEffect(() => {

    async function fetchPlanets () {
        let response = await fetch('https://www.swapi.tech/api/planets/?format=json');
        let data = await response.json();
        setPlanets(data.results); 
        const fullPlanets = "";
;
    }
    fetchPlanets();
}, []);



//check if there is data for people
console.log(planets, "planetdata");
    if( planets.length === 0 ){
        return <div> </div>
    }

    return(
        <div className="container d-flex">
            <div className="card bg-light m-2">
                <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/>
                <p>{planets[0].name}</p> 
                <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button className="btn" id="favorite"><span className="fa fa-heart text-success"></span></button>
                </div>
            </div>
        </div>
    )
};

export default Planets