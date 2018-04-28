import React from 'react';
import ExpenseList from './ExpenseList';
import Container from '../hoc/Auxiliary';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage;