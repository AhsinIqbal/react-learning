import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseList from "./ExpensesList.jsx";
import "./Stylesheets/Expenses.css";
import ExpensesChart from "./ExpenseChart.jsx";
import { element } from "prop-types";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  // updateExpensesByFilter(props.expenses);
  const filterChangeHandler = (FilterYear) => {
    setFilteredYear(FilterYear);
  };
  const filteredExpenses = props.expenses.filter(
    (element) => element.date.getFullYear().toString() === filteredYear
  );

  // useEffect(() => {
  //   expenses.map((ele) => (
  //     <ExpenseItem
  //       key={ele.id}
  //       amount={ele.amount}
  //       date={ele.date}
  //       title={ele.title}
  //     />
  //   ));
  // }, [expenses]);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
