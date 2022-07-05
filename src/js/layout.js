import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home }  from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import People from "./views/People";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Planets  from "./views/Planets";
import Starships  from "./views/Starships";
import Hello from "./component/Hello.js";



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
						{/* <Route exact path="People/:uid">
							<People/>
						</Route> */}
						<Route exact path="Planets/:uid">
							<Planets/>
						</Route>
						<Route exact path="Starships/:uid">
							<Starships/>
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/hello">
							<Hello />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
