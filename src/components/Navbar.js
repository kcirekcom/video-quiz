import React, { Component } from 'react';
import logo from '../assets/logo.png';
import bell from '../assets/icon-bell.png';
import question from '../assets/question.png';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="app-header">
				<img src={ logo } className="app-logo" alt="Pearson logo" />
				<div className='nav-items'>
          <img src={ bell } alt="Bell icon" />
          <img src={ question } alt="Question icon" />
					<span>Casey</span>
				</div>
			</nav>
		)
  }
}