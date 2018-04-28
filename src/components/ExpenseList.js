import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense Stack</h1>
    <div className='row'>
      {
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      }
    </div>
  </div>
);
// console.log(connect);
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);