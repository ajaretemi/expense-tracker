import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (category.trim() !== "" && amount.trim() !== "" && date.trim() !== "") {
      const expense = {
        id: new Date().toISOString(),
        category,
        amount,
        date,
      };
      onAddExpense(expense);
      setCategory("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Category</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <label>Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
