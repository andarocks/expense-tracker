import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const formDisplay = () => {
    if (displayForm) {
      return (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      );
    } else {
      return <button onClick={showForm}>Add new Expense</button>;
    }
  };

  const showForm = () => {
    setDisplayForm(true);
  };

  const hideForm = () => {
    setDisplayForm(false);
  };

  const saveExpenseDataHandler = (expenseData) => {
    const data = { id: Math.random().toString(), ...expenseData };
    props.onGetNewExpense(data);
    hideForm();
  };

  return <div className="new-expense">{formDisplay()}</div>;
};

export default NewExpense;
