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
						<div class="dropdown d-flex m-2">
						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favourites
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a class="dropdown-item" href="#">{store.favorites}</a></li>
						</ul>
						</div>
						<form class="d-flex">
							<input class="form-control m-2" type="search" placeholder="Search" aria-label="Search"></input>
								<button class="btn btn-outline-success m-2" type="submit">Search</button>
						</form>
					</div>
					
			</div>
		</nav>
	);
};
