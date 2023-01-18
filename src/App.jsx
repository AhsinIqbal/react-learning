import React from "react";
import Expenses from "./components/Expenses.jsx";
import NewExpense from "./components/NewExpense.jsx";

function App() {
  const expenseHeading = "EXPENSE MANAGEMENT";
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New Table (Wooden)",
      amount: 898,
      date: new Date(2021, 9, 12),
    },
  ];
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", { className: "expense_heading" }, expenseHeading),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  const expenseDataHandler = (expenseData) => {
    console.log("from app.js");
    console.log(expenseData);
  };
  return (
    <div>
      <h2 className="expense_heading">{expenseHeading}</h2>
      <NewExpense onAddExpense={expenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;
