import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import ChartComponent from "./components/ChartComponent";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0);
  const [filters, setFilters] = useState({
    category: "",
    minAmount: 0,
    maxAmount: 10000,
    date: "",
  });

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    const storedIncome = JSON.parse(localStorage.getItem("income"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
    if (storedIncome) {
      setIncome(storedIncome);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  const addIncomeHandler = (incomeAmount) => {
    setIncome(incomeAmount);
    localStorage.setItem("income", JSON.stringify(incomeAmount));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (filters.category ? expense.category === filters.category : true) &&
      (expense.amount >= filters.minAmount && expense.amount <= filters.maxAmount) &&
      (filters.date ? expense.date === filters.date : true)
    );
  });

  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0).toFixed(2);
  const balance = (income - totalAmount).toFixed(2);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div>Total Income: ${income}</div>
      <div>Total Expenses: ${totalAmount}</div>
      <div>Balance: ${balance}</div>

      <IncomeForm onAddIncome={addIncomeHandler} />
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ChartComponent expenses={filteredExpenses} />

      {/* Filter Section */}
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <label>Min Amount:</label>
        <input
          type="number"
          name="minAmount"
          value={filters.minAmount}
          onChange={handleFilterChange}
        />
        <label>Max Amount:</label>
        <input
          type="number"
          name="maxAmount"
          value={filters.maxAmount}
          onChange={handleFilterChange}
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>

      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default App;