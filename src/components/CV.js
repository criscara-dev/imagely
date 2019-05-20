import React from 'react';

class Cv extends React.Component{
  state = { name: 'Cris'}
  render(){
    return(
      <div style={{ color:'blue',lineHeight: 1.6}}>
        That's the CV from LinkedIn ->  {this.state.name}
      </div>
    )
  }
}




export default Cv;
