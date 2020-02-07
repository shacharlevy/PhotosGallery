import React from 'react';
import './App.css';
import ImagesGrid from './Components/ImagesGrid/ImagesGrid'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        filters: {}
    };
  }

  onFiltersChanged = (newFilters) => {
    this.setState({filters: newFilters})
  }

  render() {
    return (
      <div className="App">
        <ImagesGrid filters={this.state.filters}/>
      </div>
    );
  }
}

export default App;
