import React from "react";
import axios from 'axios';
import Gallery from 'react-grid-gallery';
import LazyImage from './LazyImage';

class ImagesGrid extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      filters: this.props.filters,
      images: []
    };
  }

  componentDidMount() {
    console.log('mounting');
    axios.post(`http://localhost:3000/`, this.state.filters)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      });
  }

  render () {
    return (
      <Gallery images={this.state.images} enableImageSelection={false} thumbnailImageComponent={LazyImage} />
    );
  }
}

export default ImagesGrid;
