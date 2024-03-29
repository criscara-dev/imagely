import React from 'react';

class SearchBar extends React.Component {
state = {term: ''};

onFormSubmit = e => {
  e.preventDefault();
  //console.log(this.state.term)
  this.props.runSubmit(this.state.term)
}

  render(){
    return(<div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className='field'>
          <label>Pexels API picture search</label>
          <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value}) } />
          </div>
        </form>
    </div>)  }

}

export default SearchBar;
