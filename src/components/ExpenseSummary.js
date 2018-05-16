import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    return <h1>Viewing {props.expenseCount.length} expense{props.expenseCount.length>1 && 's'} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
}

const mapStateToProps = (state) => ({
    expenseCount: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});
 
export default connect(mapStateToProps)(ExpenseSummary);