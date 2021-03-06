import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note:'some note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'some note'
        }
    });
});

test("should setup add expense action object", () => {
    const action = addExpense({title:"some title data."});
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            title: "some title data."
        }
    });
});