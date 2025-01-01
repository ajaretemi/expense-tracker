import React from "react";

const ExpenseList = ({ expenses }) => {
    const deleteExpenseHandler = (id) => {
        const updatedExpenses = expenses.filter((expense) => expense.id !== id);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    };

    const editExpenseHandler = (id) => {
        const expenseToEdit = expenses.find((expense) => expense.id === id);
        // You can implement a modal or form for editing
        // For now, just log the expense to edit
        console.log(expenseToEdit);
    };

    return (
        <div>
            <h2>Expense List</h2>
            <ul>
            {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.category}</span>
            <span>{expense.amount}</span>
            <span>{expense.date}</span>
            <button onClick={() => editExpenseHandler(expense.id)}>Edit</button>
            <button onClick={() => deleteExpenseHandler(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
