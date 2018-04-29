import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Aux from '../hoc/Auxiliary';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Aux>
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={ExpenseCreatePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Aux>
        </div>
    </BrowserRouter>
); 

export default AppRouter;