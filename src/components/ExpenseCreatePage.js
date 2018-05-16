import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

export class ExpenseCreatePage extends React.Component {
  onSubmit = (expense) => {
    //props.dispatch(startAddExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <ExpenseForm
            onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(ExpenseCreatePage);