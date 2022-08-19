import React, { useContext } from "react";
import { Link } from "react-router-dom";
import People from "../views/People";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	console.log(store.favorites);
	
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
					<Link to="/">
						<img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
					</Link>
					<div className="d-flex">
						<div className="dropdown d-flex m-2">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favourites
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a className="dropdown-item" href="#">{store.favorites}</a></li>
						</ul>
						</div>
						
					</div>
					
			</div>
		</nav>
	);
};
