import React from 'react';
import Repo from './Repo.jsx'
import style from '../style.css'

function RepoList(props) {
  const repos = props.repos;
  return (
    <div>
      There are {props.repos.length} repos.
      <div>
        {repos.map(repo => 
          <Repo repo={repo} />
        )}
      </div>
    </div>
  )
}

export default RepoList;