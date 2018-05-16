import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseCreatePage} from '../../components/ExpenseCreatePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<ExpenseCreatePage startAddExpense={startAddExpense} history={history} />);
});

test('Should render ExpenseCreatePage correctly.', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle submit.', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});