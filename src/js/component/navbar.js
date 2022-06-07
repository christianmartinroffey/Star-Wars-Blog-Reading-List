import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
					<img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
				</Link>
				<div className="ml-auto ">
					<Link to="/demo">
						<button className="btn btn-success">Favourites 	&#8595; </button>
					</Link>
				</div>
				<form class="d-flex">
      				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      					<button class="btn btn-outline-success" type="submit">Search</button>
    				</form>
			</div>
		</nav>
	);
};
