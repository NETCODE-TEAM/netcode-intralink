import React,{useEffect} from 'react';
import "./Nav.css";
import imgLogo from "./assets/logo.png";
import search from "./assets/search.svg";
import notif from "./assets/notif.png";
import profile from "./assets/profile.jpg";
import back from "./assets/back.png";
import twitter from "./assets/twitter.svg";
import discord from "./assets/discord.svg";
import telegramme from "./assets/telegramme.svg";
import vectorBg from "./assets/Taieri.svg";
import pencilGray from "./assets/pencil-gray.png";

const Nav = (props) => {
	const showNav = () =>{
		let navSlider = document.querySelector(".nav-slider");
		navSlider.classList.toggle("nav-sliding");
	}
	const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.currentTarget===document.querySelector('.nav-slider')){
       console.log("hello")}
      })
   }
	return (
		<div id="nav-wrapper">
			<div id="nav-container">
				<div id="nav-logo-wrapper">
					<img src={imgLogo} alt="logo" id="nav-logo"onClick={()=>showNav()}/>
				</div>
				<div className="nav-slider nav-sliding">
					<div id="nav-back-container">
						<img src={back} alt="nav-back" id="nav-back" onClick={()=>showNav()}/>
					</div>
					<div id="nav-modify-profile-container" style={{backgroundImage:`url(${vectorBg})`}}>
						<div id="nav-modify-profile-wrapper">
							<div id="nav-modify-profile" style={{backgroundImage:`url(${profile})`}}>
								<div id="nav-modify-profile-pencil-container" onClick={()=>{if(props.changeRoute("profile"))props.modifyProfile()}}>
									<img src={pencilGray} alt="modify-profile-pencil" id="nav-modify-profile-pencil"/>
								</div>
							</div>
							<span id="user-name">UserName</span>
						</div>
					</div>
					<ul className="nav-list-wrapper">
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>props.changeRoute("home")}>HOME</button></li>
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>props.changeRoute("discussion")}>DISCUSSION</button></li>
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>props.changeRoute("setting")}>SETTING</button></li>
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>props.changeRoute("help")}>HELP</button></li>
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>props.changeRoute("about")}>ABOUT</button></li>
						<li className="nav-list-item"><button className="nav-link-item" onClick={()=>{if(!props.setLoggedIn())props.changeRoute('intro')}} >LOGOUT</button></li>
					</ul>
					<div id="nav-social-container">
						<img src={twitter} alt="social-twitter" className="social"/>
						<img src={discord} alt="social-discord" className="social"/>
						<img src={telegramme} alt="social-telegramme" className="social"/>
					</div>
					<span id="nav-version">vBeta</span>
				</div>
				<div id="nav-right-container">
					<div id="nav-search-container">
						<input type="search" id="nav-search-input" placeholder="Search.."  style={{display:"none"}} onFocus={()=>{
							document.getElementById('nav-search-input')
							.addEventListener('keypress',((e)=>{
								if(e.keyCode===13){document.getElementById('nav-search-icon').style.display="block";
										document.getElementById('nav-search-input').style.display="none";}}))}}/>
						<img src={search} alt="search" id="nav-search-icon" onClick={()=>{
							document.getElementById('nav-search-icon').style.display="none";
							document.getElementById('nav-search-input').style.display="block";}}/>
					</div>
					<div id="nav-notif-container">
						<img src={notif} alt="notification" id="nav-notif-icon"/>
						<span id="nav-notif-count">0</span>
					</div>
					<div id="nav-profile-wrapper">
						<div id="nav-profile-container" style={{backgroundImage:`url(${profile})`}} onClick={()=>props.changeRoute("profile")}>
						</div>
					</div>
				</div>
			</div>
			{offExit()}
		</div>
		)
}

export default Nav;