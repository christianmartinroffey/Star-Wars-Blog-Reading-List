import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

function Favorites() {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites
	  console.log(store.favorites, "stored in the favourites dropdown");
    const [active, isActive] = useState();
    const cardTitle = store.favorites;
    
    const handleDelete = () => {
      console.log("delete clicked", cardTitle)
  }

  return (
    <div>
        {!favorites ? "Add a favorite" :
		favorites.map((favorite) => 
		        <li className="d-flex text-center"><a className="dropdown-item" href="/">{favorite}</a>
            <button value={cardTitle} className={`btn ms-auto ${isActive ? "" : ""}`} onClick={handleDelete}><span className="fa fa-minus-circle text-danger"></span>
                </button>
            </li>
						)}
    </div>
  )
}

export default Favorites