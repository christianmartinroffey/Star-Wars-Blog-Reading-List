import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

function Card({sectionTitle, cardTitle, id, imgId}) {

    const {store, actions} = useContext(Context);
    const favorites = store.favorites
    const [isActive, setIsActive] = useState(false)

    // useEffect(() => {
    //     if (store.favorites.find(obj => obj.uid == uid) == undefined) setIsActive(false);
    // }, [store.favorites])

    const imgUrl = (
        sectionTitle === "People" ?
        `https://starwars-visualguide.com/assets/img/characters/${imgId}.jpg`
        : 
        id === "p-1" ?
        "https://picsum.photos/300/300"
        : sectionTitle === "Planets" ?
        `https://starwars-visualguide.com/assets/img/planets/${imgId}.jpg`
        :
        `https://starwars-visualguide.com/assets/img/starships/${imgId}.jpg`
    )
    
    const routerLink = (
        sectionTitle === "People" ?
        `/people/${id}`
        : sectionTitle === "Planets" ?
        `/planets/${id}`
        : sectionTitle === "Starships" ?
        `/starships/${id}`
        : <></>
    );

    // const onClickHandler = () => {
    //         actions.addToFavorites(cardTitle)
    //         console.log("button clicked", cardTitle)
       
    //     }
    

    const setIsActiveHandler = () => {
            setIsActive(true)
            actions.addToFavorites(cardTitle, id)
            console.log("add to favorite button clicked", cardTitle, id)
      
    }

    return (
        <div className="card col-5" style={{width: "18rem"}}>
        <div className="container mb-1">
        <h5 className="card-title">{cardTitle}</h5>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex">
                <Link to={routerLink}>
                    <button className="btn btn-outline-primary">Learn more!</button>
                </Link>
                <button name={id} disabled={isActive == true} className={`btn ms-auto ${isActive ? "active" : ""}`} onClick={setIsActiveHandler}><span className="fa fa-heart text-success"></span>
                </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card