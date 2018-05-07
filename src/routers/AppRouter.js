import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import EditExpensePage from '../components/EditExpensePage';
import AboutPage from '../components/AboutPage';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import Aux from '../hoc/Auxiliary';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
                <Aux>
                    <Switch>
                        <PublicRoute path="/" component={LoginPage} exact={true} />
                        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                        <PrivateRoute path="/create" component={ExpenseCreatePage} />
                        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Aux>
            </div>
    </Router>
); 

export default AppRouter;