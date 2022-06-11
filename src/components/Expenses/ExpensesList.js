import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  const expenses = props.items;
  if (!expenses || expenses.length === 0) {
    return <p className="expenses-list__fallback">Found no data!</p>;
  } else {
    return (
      <ul className="expenses-list">
        {expenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
