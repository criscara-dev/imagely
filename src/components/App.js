import React from 'react';
import pexels from '../api/pexels';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

export class App extends React.Component {
   state = { images:[] };

 onSearchSubmit = async term => {
  const response = await pexels.get('/v1/search',{
    params: {query: term }
  });
    this.setState({images: response.data.photos });
}

  render(){
    const myName = { name: 'Imagely'};
    return(
      <div className="ui container" style={{textAlign:'center'}}>
        <div className="ui segment">
        <h1 className="ui header">{myName.name}</h1>
        <SearchBar runSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}

export default App;
