import React from 'react';

const Repo = (props) => (
  <div>
    <h4> 
      <a href={props.repo.url}> {props.repo.name} </a>
    </h4>
    Number of Stars: {props.repo.stars}  
  </div>
)

export default Repo;