import React from 'react';
import moment from "moment";
import ExpenseForm from '../../components/ExpenseForm';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test("should render ExpenseForm correctly.", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid ExpenseForm submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorDescription').length).toBeGreaterThan(0);
    expect(wrapper.state('errorAmount').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on change", () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test("should set amount on change", () => {
    const value = '12.55';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test("should not set amount for invalid amount", () => {
    const value = '12.555';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test("should set note on change", () => {
    const value = 'some note here';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value},
        persist: () => {}
    });
    expect(wrapper.state('note')).toBe(value);
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorDescription')).toBe('');
    expect(wrapper.state('errorAmount')).toBe('');
    expect(wrapper.state('description').length).toBeGreaterThan(0);
    expect(wrapper.state('amount').length).toBeGreaterThan(0);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
});

// test("should set new date on date change", () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test("should set date focus on date change", () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')({focused});
//     expect(wrapper.state('calendarFocused')).toBe(focused);
// });