import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const ExpenseCreatePage = (props) => (
  <div className="row">
    <div className="col-md-6">
      <ExpenseForm
        onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}/>
    </div>
  </div>
);

export default connect()(ExpenseCreatePage);