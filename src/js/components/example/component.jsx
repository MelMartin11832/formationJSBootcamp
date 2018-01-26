import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Tab from 'js/components/shared/tab';
import Img from 'js/components/shared/img';
import { data } from './data';
import authenticathed from './../auth/authenticated-component';

class ComponentEx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bigSize: false,
			redirect: '',
		};
		this.toggleSize = () =>
			this.setState({
				bigSize: !this.state.bigSize,
			});
		this.onClickReturn = () =>
			this.setState({
				redirect: '/',
			});
	}

	componentWillMount() {
		/*
    * Fetch
    */
	}

	render() {
		const { redirect, bigSize } = this.state;

		if (redirect) return <Redirect to={redirect} />;

		const img = data.map(d => {
			return {
				title: d.label,
				body: (
					<Img
						path={d.path}
						label={d.label}
						bigSize={bigSize}
						toggleSize={this.toggleSize}
						key={d.path}
					/>
				),
			};
		});

		return (
			<div className="contenu">
				<div className="row">
					<button
						className="btn btn-primary btn-lg col-md-2"
						onClick={this.onClickReturn}
					>
						Retour
					</button>
				</div>
				<Tab elements={img} />
			</div>
		);
	}
}

export default authenticathed(ComponentEx);
