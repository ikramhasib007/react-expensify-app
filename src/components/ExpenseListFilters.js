import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() =>({calendarFocused}));
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={this.props.filters.text}
            onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}/>
        </div>
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Sort By</span>
            </div>
            <select
              className="custom-select"
              value={this.props.filters.sortBy}
              onChange={(e) => {
              if (e.target.value === 'date') {
                this.props.dispatch(sortByDate(e.target.value));
              } else if (e.target.value === 'amount') {
                this.props.dispatch(sortByAmount(e.target.value));
              }
            }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
        <div className="col">
        <DateRangePicker
          startDate={this.props.filters.startDate} 
          startDateId={'fsdfdsdfsfs'}
          endDate={this.props.filters.endDate} 
          endDateId={'fdsfsf'}
          onDatesChange={this.onDatesChange} 
          focusedInput={this.state.calendarFocused} 
          onFocusChange={this.onFocusChange} 
          numberOfMonths={1}
          isOutsideRange={()=>false}
          showClearDates={true}
          block={true}
          readOnly={true}
          small={true}
        />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {filters: state.filters};
};

export default connect(mapStateToProps)(ExpenseListFilters);