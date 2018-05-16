import moment from 'moment';
import filterReducer from '../../reducers/filters';

test("should setup default filter values", () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sortBy amount", () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test("should set sortBy date", () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test("should set startDate", () => {
    const action = {type: 'SET_START_DATE', date: 12000};
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(12000);
});

test("should set endDate", () => {
    const action = {type: 'SET_END_DATE', date: 12000};
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(12000);
});

test("should set text filter", () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'mytext' };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('mytext');
});