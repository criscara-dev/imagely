import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.imageRref = React.createRef();
    }
    state = {
        spans: 0
    }
    componentDidMount() {
        this.imageRref.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRref.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({ spans:spans });
    }
    render() {
        const { photographer, src } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                    ref={this.imageRref}
                    alt={photographer}
                    src={src.medium} />
            </div>
        );
    }
}

export default ImageCard;