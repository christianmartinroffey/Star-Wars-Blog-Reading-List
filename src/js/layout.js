import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home }  from "./views/home";
import injectContext from "./store/appContext";
import People from "./views/People";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Planets  from "./views/Planets";
import Starships  from "./views/Starships";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People/>
						</Route>
						<Route exact path="/planets">
							<Planets/>
						</Route>
						<Route exact path="/starships">
							<Starships/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
