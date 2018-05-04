import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const ExpenseCreatePage = (props) => (
  <div className="row">
    <div className="col-md-6">
      <ExpenseForm
        onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/dashboard');
      }}/>
    </div>
  </div>
);

export default connect()(ExpenseCreatePage);