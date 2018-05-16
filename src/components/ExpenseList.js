import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <div className='row mt-4'>
      {
        props.expenses.length === 0 ? (
          <div className="col-sm-6 mb-4"><h4>No expenses</h4></div>
        ) : (
          props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )
      }
    </div>
  </div>
);
// console.log(connect);
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);