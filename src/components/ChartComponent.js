import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ expenses }) => {
  const data = {
    labels: expenses.map((expense) => expense.date),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((expense) => expense.amount),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3>Expense Graph</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
