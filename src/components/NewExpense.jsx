import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./Stylesheets/NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const cancelBtnHandler = () => {
    setAddExpenseContent(addExpenseBtn);
  };
  const addExpenseForm = (
    <ExpenseForm
      cancelBtnHandler={cancelBtnHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  );
  const addExpenseBtnHandler = () => {
    setAddExpenseContent(addExpenseForm);
  };
  const addExpenseBtn = (
    <button onClick={addExpenseBtnHandler}>Add New Expense</button>
  );
  let [addExpenseContent, setAddExpenseContent] = useState(addExpenseBtn);
  return <div className="new-expense">{addExpenseContent}</div>;
};
export default NewExpense;
