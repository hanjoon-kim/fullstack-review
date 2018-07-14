import React from 'react';
import Repo from './Repo.jsx'

function RepoList(props) {
  const repos = props.repos;
  console.log(repos);
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <ul>
        {repos.map(repo => 
          <Repo repo={repo} />
        )}
      </ul>
    </div>
  )
}

export default RepoList;