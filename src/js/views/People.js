import React, {useState, useEffect, useContext} from "react";

const People = () => {
    
    const [people, setPeople] = useState([]);

    useEffect(() => {

        async function fetchPeople () {
            let response = await fetch('https://www.swapi.tech/api/people/?format=json');
            let data = await response.json();
            setPeople(data.results); 
        }
        fetchPeople();
    }, []);

    
    // const goToFavorite = () => {
        
    //     const filterPeople = (person, i) => {
    //         people.forEach( person => {
                
    //             return(
    //                 <li> 
    //                     <li><a class="dropdown-item" href="#">{person.name}</a></li>
    //                 </li>    
    //             );
    //         })
    //     };
    //    window.alert("something")
    //     filterPeople();
    // };


    // const getThePeople = () => {
    //     people.filter((person) => person.uid < 5) }
    //     return person 
    // };
 
//check if there is data for people
console.log(people, "peopledata");
    if( people.length === 0 ){
        return <div> </div>
    }

    return(
        <>
            <div className="container d-flex">
                <div className="min-vw-50 d-flex">
                {people.map((person, index) => (
                <div className="card bg-light m-2">
                    <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/>
                    <p>{person.name}</p>
                    <p> {person.uid}</p>
                    <button className="primary"></button>
                
                </div>
            ) )}
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