import React, { Component } from 'react';

export default class Info extends Component {
	render() {
		return (
			<form>
				<p className="required">* Required</p>
				<div>
					<label htmlFor="name"><p>Company Name: *</p><input type="text" name="name" id="name" placeholder="Bob Loblaw" required /></label>
					<label htmlFor="url"><p>Company URL: *</p><input type="text" name="url" id="url" placeholder="http://bobloblawslawblog.com" required /></label>
				</div>
				<div>
				<label htmlFor="category">
					<p>Business Category: *</p>
					<select name="category" id="category" disabled required>
						<option value="Law">Law</option>
						<option value="Sales">Sales</option>
						<option value="Medicin">Medicin</option>
					</select>
				</label>
				<label htmlFor="ucr">
					<p>Unique Client Reference: *</p>
					<select name="ucr" id="ucr" disabled required>
						<option value="1">46974613</option>
						<option value="2">Sales</option>
						<option value="3">Medicin</option>
					</select>
				</label>
				</div>
				<div>
					<label htmlFor="location">
						<p>State / County / Region: *</p>
						<select name="location" id="location" disabled required>
							<option value="1">Glamorgan</option>
							<option value="2">London</option>
							<option value="3">Bristol</option>
						</select>
					</label>
				</div>
			</form>
		)
	}
}
