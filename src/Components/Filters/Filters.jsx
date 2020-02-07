import React, { Component } from 'react';
import './Filters.css';
import Search from '../Search/Search';
import BeginDateAndTimePickers from '../DatePicker/BeginDatePicker';
import EndDateAndTimePickers from '../DatePicker/EndDatePicker';
import MultipleSelect from '../Select/Selection'

class Filters extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className='Filters'>
                    <Search />
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