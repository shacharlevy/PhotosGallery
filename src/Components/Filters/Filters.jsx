import React, { Component } from 'react';
import './Filters.css';
import SearchBar from '../Search/Search';
import DatePicker from '../DatePicker/DatePicker';
import MultipleSelect from '../Select/Selection'

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: Date(),
            endDate: Date(),
            sourceIds: [],
            query: ""
        };
    }

    onSearchClick = (queryText) => {
        this.setState({ query: queryText });
        this.props.onFiltersChanged(this.state);
    }

    onStartDateChanged = (newDate) => {
        this.setState({startDate: newDate});
    }

    onEndDateChanged = (newDate) => {
        this.setState({ endDate: newDate});
    }

    onSourcesChanged = (newSources) => {
        this.setState({sourceIds: newSources});
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className='Filters'>
                    <SearchBar onSearchClicked={this.onSearchClick}/>
                    <DatePicker date={this.state.startDate} onDateChanged={this.onStartDateChanged} />
                    <label className='Label'>:זמן התחלה</label>
                    <DatePicker date={this.state.endDate} onDateChanged={this.onEndDateChanged} />
                    <label>:זמן סיום</label>
                    <MultipleSelect sources={this.state.sourceIds} onSourcesChange={this.onSourcesChanged} />
                </div>
            </React.Fragment>
         );
    }
}
 
export default Filters;