import React from 'react';
import unsplash from '../api/unsplash'

import Cv  from './CV';
import SearchBar from './SearchBar';


export class App extends React.Component {
onSearchSubmit(term){
  console.log(term)
}


  render(){
    const myName = { fullName: 'Cristian Caratti'};
    return(
      <div className="ui container" style={{textAlign:'center'}}>
        <div className="ui segment">
        <h1 className="ui header">{myName.fullName}</h1>
        <SearchBar runSubmit={this.onSearchSubmit}/>
        <Cv />
        </div>
      </div>
    )
  }
}


export default App;
