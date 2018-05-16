import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import AppRouter, {history} from './routers/AppRouter';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {firebase} from './firebase/firebase';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
    // if(!hasRendered) {
    // }
};

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        ReactDOM.render(<div className="loader"><img src="/images/loader.gif"/></div>, document.getElementById('app'));
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});