import React, { Component } from 'react';
import './Filters.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
                <div>
                    <SearchBar onSearchClicked={this.onSearchClick}/>
                    <Grid container direction="row-reverse" justify="center" alignItems="flex-end">
                        <Grid spacing={1} item>
                            <Typography>:זמן התחלה</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker date={this.state.startDate} onDateChanged={this.onStartDateChanged} />
                        </Grid>
                        <Grid xs={1} item>
                        <Typography>:זמן סיום</Typography>
                        </Grid>
                        <Grid item>
                            <DatePicker date={this.state.endDate} onDateChanged={this.onEndDateChanged} />
                        </Grid>
                        <Grid xs={1} item>
                        <Typography>:מקורות</Typography>
                        </Grid>
                        <Grid item>
                            <MultipleSelect sources={this.state.sourceIds} onSourcesChange={this.onSourcesChanged} />
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Filters;