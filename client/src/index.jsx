import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import './style.css/'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    var self = this;
    $.ajax({
      method: "GET",
      url: '/repos',
      data: 'data',
      success(data) {
        self.setState({repos: data})
      },
      error(err) {
        console.log(err, 'error');
      }
    });
    console.log(this.state);
  }

  search (term) {
    console.log(`${term} was searched`);
    let obj = {term: term}
    $.ajax({
      method: "POST",
      url: '/repos',
      data: obj,
      success(data) {
        console.log('success!')
      },
      error(err) {
        console.log(err, 'error');
      }
    });
    console.log(this.state);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList className="repoList" repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)} getRepos={this.getRepos.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));