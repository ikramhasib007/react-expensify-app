import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import './firebase/firebase';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<div className="loader"><img src="/images/loader.gif"/></div>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

