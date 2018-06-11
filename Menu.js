import React, { Component } from 'react';

const menuItems = ["Rank Checker", "SEO Check-Up", "CitationTracker", "Google+ Local Wizard", "CitationBurst", "ReviewBiz", "ReviewFlow"];

export default class Menu extends Component {
	render() {
		return (
			<ul className="menuBar">
				{menuItems.map((item, id) => (
					<li key={id}><a href="#"> {item} </a></li>
				))}
			</ul>
		)
	}
}
