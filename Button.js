import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const {
			variant,
			content
		} = this.props;
		
		return (
			<button className={variant}>
				{content}
			</button>
		)
	}
}