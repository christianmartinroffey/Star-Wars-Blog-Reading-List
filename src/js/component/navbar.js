import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
					<Link to="/">
						<img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
					</Link>
					<div className="d-flex">
						<Link to="/favorites">
							<button className="btn btn-success m-2">Favourites 	&#8595; </button>
						</Link>
						<form class="d-flex">
							<input class="form-control m-2" type="search" placeholder="Search" aria-label="Search"></input>
								<button class="btn btn-outline-success m-2" type="submit">Search</button>
						</form>
					</div>
			</div>
		</nav>
	);
};
