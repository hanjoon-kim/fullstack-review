import React from 'react';
import style from '../style.css'

const Repo = (props) => (
  <div id="repoContainer">
    <h4> 
      <div className="nameContainer"><a href={props.repo.url}> {props.repo.name} </a></div>
    </h4>
    <div className="starContainer">Number of Stars: {props.repo.stars}</div>  
  </div>
)

export default Repo;