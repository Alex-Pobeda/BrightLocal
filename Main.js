import React, { Component } from 'react';
import Info from './Info';
import Button from './Button';

export default class Main extends Component {
	render() {
		return (
			<div id="main">
				<h5><a href="#">Clients & Locations</a> / Edit Client</h5>
				<h1>The Search Dawgs</h1>
				<div className="main__info">
					<div className="main__info-inner">
						<Info />
						<hr />
						<Button content="Update Client" variant="green" />
						<Button content="Cancel" variant="orange" />
						<Button content="Delete Client" variant="red" />
					</div>
				</div>
			</div>
		)
	}
}
