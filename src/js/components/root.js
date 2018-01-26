import React from 'react';
// import { Tab, Tabs } from "react-bootstrap";
import PageTitle from 'js/components/shared/page-title';
import Home from 'js/components/home';
import { Example, StatelessComponent, Component } from 'js/components/example';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from "js/components/auth/private-route";
import * as menu from './menu';
import Login from './auth/login';
import 'css/app.css';

class Root extends React.Component {
	render() {
		return (
			<div className="application container">
				<PageTitle title="Spoc administration" />
				<Router>
					<span>
						<Route exact path="/" component={Home} />
						<Switch>
							<Route path="/login" component={Login} />
							<menu.MenuOnglet>
								<menu.MenuItem title="example" eventKey={1}>
									<Route exact path="/example" component={Example} />
								</menu.MenuItem>
								<menu.MenuItem title="stateless-component" eventKey={2}>
									<Route
										exact
										path="/stateless-component"
										component={StatelessComponent}
									/>
								</menu.MenuItem>
								<menu.MenuItem title="component" eventKey={3}>
									<Route exact path="/component" component={Component} />
								</menu.MenuItem>
							</menu.MenuOnglet>
						</Switch>
					</span>
				</Router>
			</div>
		);
	}
}

export default Root;
