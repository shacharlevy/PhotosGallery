import React, { Component } from 'react';
import './Filters.css';
import SearchBar from '../Search/Search';
import BeginDateAndTimePickers from '../DatePicker/BeginDatePicker';
import EndDateAndTimePickers from '../DatePicker/EndDatePicker';
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

    render() { 
        return ( 
            <React.Fragment>
                <div className='Filters'>
                    <SearchBar onSearchClicked={this.onSearchClick}/>
                    <BeginDateAndTimePickers className='BeginDateAndTimePickers' />
                    <label className='Label'>:זמן התחלה</label>
                    <EndDateAndTimePickers />
                    <label>:זמן סיום</label>
                    <MultipleSelect />
                </div>
            </React.Fragment>
         );
    }
}
 
export default Filters;