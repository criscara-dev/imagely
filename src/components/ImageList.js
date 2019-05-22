import React from 'react';

const ImageList = (props) => {

//console.log(props.images)
const images = props.images.map( ({src,id, photographer}) => {
  return <img src={src.medium} key={id} alt={photographer}/>
});
    return(
      <div>
        ImageList {images}
      </div>
    )
  }

export default ImageList;
