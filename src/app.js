import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'Water Bill', amount: 500, createdAt:1524463200000, note:'Paid through Agrani Bank'}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 800, createdAt:1524549600000, note:'Paid through Agrani Bank'}));
store.dispatch(addExpense({description: 'House Rent', amount: 10000, createdAt:1524549600000, note:'Cash send by bKash'}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(
    jsx, document.getElementById('app'));