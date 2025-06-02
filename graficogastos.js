document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("incomeExpenseChart").getContext("2d");

  const income = 7500;
  const expenses = 3200;

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Ingresos", "Gastos"],
      datasets: [
        {
          data: [income, expenses],
          backgroundColor: ["rgba(9, 102, 35, 0.3)", "rgba(9, 102, 35, 1)"],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: S/${value.toLocaleString()} (${percentage}%)`;
            },
          },
        },
      },
      cutout: "70%",
    },
  });
});
