import React from "react"
const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="

class LazyImage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    if (this.state.loaded) return;
    if (IntersectionObserver) {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0 || entry.isIntersecting) {
              this.setState({loaded: true});
              console.log('finished observing');
              this.observer = this.observer.disconnect();
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "75%",
        }
      )
      console.log('starting observation');
      this.observer.observe(this.element)
    } else {
      // Old browsers fallback
      this.setState({loaded: true})
    }
  }

    render () {
        if (this.state.loaded) {
            return <img {...this.props.imageProps} ref={el => this.element = el} alt=''/>;
        } else {
            return <img {...this.props.imageProps} src={placeHolder} ref={el => this.element = el} alt='' />;
        }
    }
}
export default LazyImage;