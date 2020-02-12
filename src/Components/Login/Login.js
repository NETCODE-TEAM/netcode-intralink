import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import Logo from '../Logo/Logo.js';

import appBg from '../../Assets/app-bg.png'
import './Login.scss';

class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      email:"",
      password:""
    }
  }
  handleChange = event => {
    const { name, value } = event.target;
    
    this.setState({ [name]:value });
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" })
  }

  render() {

    const { email, password } = this.state;

    return (
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="title">Login</h1>
            <input
              type="email"
              name="email"
              placeholder="email"
              handleChange={this.handleChange}
              value={email}
              required />
            <input
              type="password"
              name="password"
              placeholder="password"
              handleChange={this.handleChange}
              value={password}
              required />
            <button
              type="submit"
              handleSubmit={this.handleSubmit}>
              SIGN IN
            </button>
            <div className="wrapper-Fpass-rem">
              <input type="checkbox" id="checkbox-remember" className="checkbox"/>
              <label htmlFor="checkbox-remember">Remember me !</label>
              <Link to="/login/reset" >Forgot Password ?</Link>
            </div>
          </form> 
          <div className="footer">
            Don't have an account ?
            <Link to="/register">REGISTER HERE !</Link>
          </div>
        </div>
        <div 
          id="logo-container"
          style={{ backgroundImage: `url(${appBg})` }}>
          <Logo/>
        </div>
      </div>
    )
  }
}
export default withRouter(Login);
