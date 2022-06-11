import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const getFilteredExpenses = (expenses, selectedYear) => {
  return expenses.filter((e) => e.date.getFullYear() === selectedYear);
};

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState(2020);
  let filteredExpenses = getFilteredExpenses(expenses, year);
  const getYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onGetYear={getYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
