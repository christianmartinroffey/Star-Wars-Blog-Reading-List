import React, {useState, useEffect, useContext} from "react";
// import {Dimmer, Loader} from 'semantic-ui-react';

const People = () => {
    
    const [people, setPeople] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchPeople () {
            let response = await fetch('https://www.swapi.tech/api/people/?format=json');
            let data = await response.json();
            setPeople(data.results); 
        }
        fetchPeople();
    }, []);

 
//check if there is data for people
console.log(people, "peopledata");

    
    if( people.length === 0 ){
        return <div> </div>
    }

    return(
        <>
        <div className="container">
            <div className="card">
                <div className="min-vw-50 d-flex">
                {people.map((person, index) => (
                <div className="card api-card bg-light m-2">
                    <img className="img-thumbnail" src="https://www.nika-actief.nl/wp-content/uploads/2016/12/400x200.png"/>
                    <p>{person.name}</p>
                    <p>{person.uid}</p>
                    <button className="btn btn-primary">Learn More</button>
                
                </div>
            ) )}
                </div>
            </div>
            </div>
        </>
    )
};

export default People;


{/* <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/>
                <p>{person.name}</p>  
                <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button onClick={goToFavorite} className="btn" id="favorite"><span className="fa fa-heart text-success"></span></button>
                </div> */}