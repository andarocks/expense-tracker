import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import expenseData from './Data/expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpense] = useState(expenseData);
  const newExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onGetNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
