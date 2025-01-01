import React, { useState } from "react";

const IncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (income.trim() !== "") {
      onAddIncome(parseFloat(income));
      setIncome(""); // Clear input field
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Income</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter your income"
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
