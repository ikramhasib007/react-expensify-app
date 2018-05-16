import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpense;
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[1]} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} />);
});

test("should render EditExpensePage correctly.", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});

test("should handle remove expense", () => {
    wrapper.find('button').prop('onClick')(expenses[1].id);
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});