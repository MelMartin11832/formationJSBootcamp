import * as React from 'react';
import { Tabs } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import MenuItem from './menu-item';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		const { children } = props;
		this.handleSelect = this.handleSelect.bind(this);
		const { history } = this.props;
		const childrenArray = Array.isArray(children) ? children : [...children];
		this.paths = childrenArray.map(c => {
			return c.props.children && c.props.children.props.path
				? c.props.children.props.path
				: '/';
		});

		const currentIndex = this.paths.indexOf(history.location.pathname);
		this.state = {
			indexOngletActif: currentIndex !== -1 ? currentIndex + 1 : 1,
		};
	}

	handleSelect(index) {
		this.props.history.push(this.paths[index - 1]);
		this.setState({ indexOngletActif: index });
	}

	render() {
		return (
			<Tabs
				defaultActiveKey={this.state.indexOngletActif}
				id="menu-application"
				onSelect={this.handleSelect}
			>
				{this.props.children}
			</Tabs>
		);
	}
}

const MenuOnglet = ({ children }) => (
	<Route
		path="/"
		render={({ history }) => {
			return <Menu history={history}>{children}</Menu>;
		}}
	/>
);

Menu.propTypes = {
	children: (props, propName, componentName) => {
		const prop = props[propName];

		let error = null;
		React.Children.forEach(prop, child => {
			if (child.type !== MenuItem) {
				error = new Error(
					'`' + componentName + '` children should be of type `MenuItem`.'
				);
			}
		});
		return error;
	},
};

export default MenuOnglet;
