import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      Enter a github username: <input value={this.state.terms} onChange={(e) => this.onChange(e)}/>       
      <button onClick={ (e) => {
       this.props.getRepos(e);
       this.search(e);
      }}> Add Repos </button>
    </div>) 
  }
}

export default Search;
