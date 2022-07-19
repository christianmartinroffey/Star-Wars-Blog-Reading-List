import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions } = useContext(Context);

    const onClickHandler = () => {
        actions.addToFavorite();
        
    };

    return(
        <div className="container d-flex">
            <div className="card bg-light m-2">
                <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/placeholder.jpg"/>
                <p>{}</p> 
                <div className="d-flex">
                    <button className=" btn btn-primary"id="learn-more">learn more</button>
                    <button className="btn" id="favorite" onClick={onClickHandler}><span className="fa fa-heart text-success"></span></button>
                </div>
            </div>
        </div>
    )
};

export default Planets