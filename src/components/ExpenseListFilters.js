import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() =>({calendarFocused}));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate(e.target.value);
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount(e.target.value);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <input
            type="text"
            className="form-control mb-1"
            placeholder="Search..."
            value={this.props.filters.text}
            onChange={this.onTextChange}/>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="input-group mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">Sort By</span>
            </div>
            <select
              className="custom-select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
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
        />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {filters: state.filters};
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);