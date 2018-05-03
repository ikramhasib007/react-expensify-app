import database from '../firebase/firebase';

// Add expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { 
      description = '', 
      amount = 0, 
      note = '', 
      createdAt = 0 
    } = expenseData;
    const expense = { description, amount, note, createdAt };
    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }));
    });

  };
};

// Remove expense
export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE', id
});

export const startRemoveExpense = ({id}) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}));
    }).catch((error) => {
      console.log('Remove failed: ', error.message);
    });
  };
}

// Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', id, updates
});

export const startEditExpense = (id, expense) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).update(expense).then(() => {
      dispatch(editExpense(id, expense));
    }).catch((error) => {
      console.log('Update failed: ', error.message);
    });
  };
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
  
      snapshot.forEach((childSnapshot) => {
        const expense = {
          id: childSnapshot.key,
          ...childSnapshot.val()
        };
        expenses.push(expense);
      });
      dispatch(setExpenses(expenses));
    });
  }
};