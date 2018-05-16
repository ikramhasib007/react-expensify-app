import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    wrapper;

beforeEach(() => {
    setTextFilter = jest.fn(),
    sortByDate = jest.fn(),
    sortByAmount = jest.fn(),
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),

    wrapper = shallow(<ExpenseListFilters 
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filters}
        />)
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should handle text changes",() => {
    const value = 'some text';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date",() => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenLastCalledWith(value);
});

test("should sort by amount",() => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith(value);
});

// test("should handle date changes",() => {
//     const startDate = moment(0).add(2, 'years');
//     const endDate = moment(0).add(6, 'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });

// test("should handle date focus changes",() => {
//     const focused = 'endDate';
//     wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
//     expect(wrapper.state("calendarFocused")).toBe(focused);
// });