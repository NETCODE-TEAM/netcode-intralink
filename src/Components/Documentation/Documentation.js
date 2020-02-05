import React from 'react'
import docImage from './assets/doc-image.png'
import './documentation.css'
const Documentation =()=>{


	return (
       <div id="doc-wrapper">
       	  <div id="doc-container" style={{backgroundImage:`url(${docImage})`}}>
	       	  	<div id="doc-input-container">
	       	  		<input type="text" placeholder="Search" id="doc-input-item"/>
	       	  	</div>
	       	  	<div id="doc-text-container">
	       	  		<h2 id="doc-text-item">Search what you need...</h2>
	       	  	</div>
       	  </div>
       </div>
		)
}
export default Documentation;