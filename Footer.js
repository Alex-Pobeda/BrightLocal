import React, { Component } from 'react';

const footerItems = ["Main Site", "Video Guides", "Forum", "Webinars & Training", "Help Centre", "Contact Support"];

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<ul>
					{footerItems.map((item, id) => (
						<li key={id}><a href="#"> {item} </a></li>
					))}
				</ul>
				<h1><a href="https://www.brightlocal.com/" title="BrightLocal"><span>Bright</span>Local</a></h1>
			</footer>
		)
	}
}
