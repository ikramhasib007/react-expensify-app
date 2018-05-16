import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import {shallow} from 'enzyme';

test("should render ExpenseSummary correctly with 1 expense", () => {
    const wrapper = shallow(<ExpenseSummary expensesTotal={123} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummary expensesTotal={34234} expenseCount={25} />);
    expect(wrapper).toMatchSnapshot();
});
