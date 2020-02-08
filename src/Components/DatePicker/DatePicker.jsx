import React from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function DatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker value={props.date} onChange={props.onDateChanged} />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;