import React from "react";
import "../../styles/home.css";
import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";

export const Home = () => {
	return (
		<div className="bg-dark">
            <People/>
            <Planets/>
            <Starships/>
	    </div>
	)
	};

    // <div className="container d-flex">
    //         <div className="card bg-light m-2 ">
    //             <img className="img-thumbnail img-fluid" src="https://media.gettyimages.com/illustrations/spacecraft-delivering-supplies-to-a-colony-on-titan-one-of-saturns-illustration-id1073063960"/>
    //             <p>Check out all the Planets</p> 
    //             <div className="d-flex">
    //                 <button className=" btn btn-primary"id="learn-more">Take me there</button>
    //             </div>
    //         </div>
	// 		<div className="card bg-light m-2">
    //             <img className="img-thumbnail img-fluid" src="https://media.gettyimages.com/photos/american-actors-mark-hamill-carrie-fisher-and-harrison-ford-on-the-picture-id607402182"/>
    //             <p>Check out all the People</p> 
    //             <div className="d-flex">
    //                 <button className=" btn btn-primary"id="learn-more">Take me there</button>
    //             </div>
    //         </div>
	// 		<div className="card bg-light m-2">
    //             <img className="img-thumbnail img-fluid" src="https://media.gettyimages.com/photos/hunting-rebels-picture-id544671790"/>
    //             <p>Check out all the Starships</p> 
    //             <div className="d-flex">
    //                 <button className=" btn btn-primary"id="learn-more">Take me there</button>
    //             </div>
    //         </div>
        
	// 	</div>