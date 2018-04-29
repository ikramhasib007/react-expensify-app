import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(props.match.params.id, expense));
            console.log('updated', expense);
            props.history.push('/');
        }}
      />
      </div>
      <div className="col-md-2 offset-md-2 mt-4">
      <button
        className="btn btn-outline-danger btn-lg btn-block"
        onClick={() => {
            props.dispatch(removeExpense({id:props.match.params.id}));
            props.history.push('/');
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