import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        </div>
        <div className="col-md-2 offset-md-2 mt-4">
        <button
          className="btn btn-outline-danger btn-lg btn-block"
          onClick={() => {
              this.props.startRemoveExpense({id:this.props.expense.id});
              this.props.history.push('/dashboard');
          }}
        >Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);