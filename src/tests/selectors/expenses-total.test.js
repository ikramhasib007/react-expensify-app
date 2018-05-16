import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("should return 0 if no expenses", () => {
    const totalExpenses = getExpensesTotal([]);
    expect(totalExpenses).toBe(0);
});

test("should return single expense", () => {
    const res = getExpensesTotal([expenses[1]]);
    expect(res).toBe(15000);
});

test("should return multiple expenses", () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(17000);
});