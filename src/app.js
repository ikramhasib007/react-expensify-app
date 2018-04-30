import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'Water Bill', amount: 500, createdAt:moment().subtract(15,'d'), note:'Paid through Agrani Bank. Rampura Branch, Dhaka, Bangladeh.'}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 800, createdAt:moment().subtract(10,'d'), note:'Paid through Agrani Bank. Badda Branch, Dhaka, Bangladeh.'}));
store.dispatch(addExpense({description: 'House Rent', amount: 10000, createdAt:moment().subtract(2,'d'), note:'Cash send by bKash. Nearest bKash agent. Dhaka, Bangladesh'}));
store.dispatch(addExpense({description: 'Utility Rent', amount: 1200, createdAt:moment(), note:'Cash send by bKash. Nearest bKash agent. Dhaka, Bangladesh'}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(
    jsx, document.getElementById('app'));