import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';

const expenses = [
  {
    description: 'Gas Bill',
    amount: 1200,
    note: '',
    createdAt: 0
  },
  {
    description: 'House Rent',
    amount: 15000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    description: 'Rent',
    amount: 800,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

test('should setup filter by text value', () => {
    const selectors = getVisibleExpenses(expenses, {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    });
    expect(selectors).toEqual([expenses[2], expenses[1]]);
});

test('should setup filter by startDate', () => {
    const selectors = getVisibleExpenses(expenses, {
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    });
    expect(selectors).toEqual([expenses[2], expenses[0]]);
});

test('should setup filter by endDate', () => {
    const selectors = getVisibleExpenses(expenses, {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    });
    expect(selectors).toEqual([expenses[0], expenses[1]]);
});

test('should setup filter by date', () => {
    const selectors = getVisibleExpenses(expenses, {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    });
    expect(selectors).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should setup filter by amount', () => {
    const selectors = getVisibleExpenses(expenses, {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    });
    expect(selectors).toEqual([expenses[1], expenses[0], expenses[2]]);
});