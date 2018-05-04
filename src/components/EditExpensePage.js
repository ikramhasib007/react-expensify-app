import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(startEditExpense(props.match.params.id, expense));
            props.history.push('/dashboard');
        }}
      />
      </div>
      <div className="col-md-2 offset-md-2 mt-4">
      <button
        className="btn btn-outline-danger btn-lg btn-block"
        onClick={() => {
            props.dispatch(startRemoveExpense({id:props.match.params.id}));
            props.history.push('/dashboard');
        }}
      >Remove</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state
      .expenses
      .find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);