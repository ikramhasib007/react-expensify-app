import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import EditExpensePage from '../components/EditExpensePage';
import AboutPage from '../components/AboutPage';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Aux from '../hoc/Auxiliary';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
                <Aux>
                    <Switch>
                        <Route path="/" component={LoginPage} exact={true} />
                        <Route path="/dashboard" component={ExpenseDashboardPage} />
                        <Route path="/create" component={ExpenseCreatePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Aux>
            </div>
    </Router>
); 

export default AppRouter;