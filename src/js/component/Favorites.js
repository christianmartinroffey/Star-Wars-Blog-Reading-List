import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

function Favorites() {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites
	  
    const [active, isActive] = useState();
   
    
    const handleDelete = (value) => {
      console.log("delete clicked", favorites);
      actions.removeFavoriteFromDropdown(value)
  }


  return (
    <div>
        {!favorites ? "Add a favorite" :
		favorites.map((favorite, id) => 
		        <li className="d-flex text-center"><a className="dropdown-item" href="/">{favorite}</a>
            <button value={favorite} className={`btn ms-auto ${isActive ? "" : ""}`} onClick={handleDelete}><span className="fa fa-minus-circle text-danger"></span>
                </button>
            </li>
						)}
    </div>
  )
}

export default Favorites