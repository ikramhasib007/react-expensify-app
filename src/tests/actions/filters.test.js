import {setTextFilter,sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test("should setup set text action object", () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'text'
    })
});

test("should setup set text action object with default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
});

test("should setup sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("should setup sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should setup set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test("should setup set start date action object with default date", () => {
    const action = setStartDate();
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: undefined
    });
});

test("should setup set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test("should setup set end date action object with default value", () => {
    const action = setEndDate();
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: undefined
    });
});