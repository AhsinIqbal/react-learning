import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import "./Stylesheets/Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((ele) => {
          return (
            <ExpenseItem
              key={`${ele.id}`}
              amount={ele.amount}
              date={ele.date}
              title={ele.title}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
