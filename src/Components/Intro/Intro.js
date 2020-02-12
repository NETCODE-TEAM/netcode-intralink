import React from 'react';
import { withRouter, Link } from "react-router-dom";

import Logo from '../Logo/Logo.js';

import './Intro.scss'

class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 
			 	"Community Local Network || Discussion Plateform",
			show: "",
			count:0,
		}
	}
	update(){
		let length = this.state.text.length;
		let count = this.state.count;
		let letter = this.state.text.charAt(count)

		if(count <= length){
			this.setState({show:this.state.show+letter},()=>this.setState({count:this.state.count+1}))
		}
		else if(count=== length+1){
			clearInterval(this.typeTimer);
		}
	}
	componentDidMount() {
		 this.typeTimer = setInterval(()=>
		 		this.update()
			,125)
	}
	
	render() {
		return (
			<div className="intro-container"> 
				<div className="bg-overlay"/>
				<div id="logo-container">
					<Logo/>
				</div>
				<div id="intro-wrapper">
					<div id="slogan-wrapper">
						<h3 id="slogan">{this.state.show}_</h3>
						<Link 
						id="intro-button" 
						to="/login">Get Started</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Intro)
