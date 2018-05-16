import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test("should setup default expenses", () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test("should setup set ecpenses", () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should reomve expense by id", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not reomve expense if id not found", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit expense by id", () => {
  const description = 'Electric Bill';
  const amount = 1000;
  const updates = {
    description,
    amount
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
  const description = 'Electric Bill';
  const amount = 1000;
  const updates = {
    description,
    amount
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: 109,
    description: 'Electric Bill',
    amount: 12300,
    note: '',
    createdAt: 2000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expense, ...expenses]);
});
