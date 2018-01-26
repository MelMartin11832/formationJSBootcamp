import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { getToken } from 'js/components/auth/auth-storage';

export default props => {
	const { component: Component } = props;
	const rest = Object.assign({}, props);
	delete rest.component;
	const isAuthenticated = getToken();
	return (
		<Route
			props={rest}
			render={props => {
				if (isAuthenticated) {
					return <Component props={props} />;
				}
				return (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				);
			}}
		/>
	);
};
