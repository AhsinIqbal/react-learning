import "./Stylesheets/ExpenseList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((ele) => (
        <ExpenseItem
          key={ele.id}
          amount={ele.amount}
          date={ele.date}
          title={ele.title}
        />
      ))}
    </ul>
  );
}
export default ExpenseList;
