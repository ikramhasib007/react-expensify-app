import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div className="row">
    <div className="col">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={props.filters.text}
        onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}/>
    </div>
    <div className="col">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Sort By</span>
        </div>
        <select
          className="custom-select"
          value={props.filters.sortBy}
          onChange={(e) => {
          if (e.target.value === 'date') {
            props.dispatch(sortByDate(e.target.value));
          } else if (e.target.value === 'amount') {
            props.dispatch(sortByAmount(e.target.value));
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    </div>
  </div>
);
const mapStateToProps = (state) => {
  return {filters: state.filters};
};

export default connect(mapStateToProps)(ExpenseListFilters);