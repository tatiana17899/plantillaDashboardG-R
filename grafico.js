const ctx1 = document.getElementById("pieChart").getContext("2d");
new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Tipo 1", "Tipo 2", "Tipo 3"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: [
          "rgba(9, 102, 35, 0.8)",
          "rgba(9, 102, 35, 0.6)",
          "rgba(9, 102, 35, 0.3)",
        ],
      },
    ],
  },
});

const ctx2 = document.getElementById("barChart").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Ventas", "Stock"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["rgba(9, 102, 35, 0.2)", "rgba(9, 102, 35, 0.8)"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
var loadFile = function (event) {
  var image = document.getElementById("profileImage");
  image.src = URL.createObjectURL(event.target.files[0]);
};

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const sidebarFooter = document.getElementById("sidebar-1");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    content.classList.toggle("expanded");

    // En móvil, solo alternamos el sidebar principal
    if (window.innerWidth > 768) {
      sidebarFooter.classList.toggle("active");
    }
  });

  // Cerrar menú al hacer clic fuera de él en móvil
  document.addEventListener("click", function (event) {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(event.target) &&
      !toggleBtn.contains(event.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active");
      content.classList.remove("expanded");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const barChartBtn = document.getElementById("bar-chart-btn");
  const lineChartBtn = document.getElementById("line-chart-btn");
  const pieChartBtn = document.getElementById("pie-chart-btn");
  const chartContainer = document.querySelector(".flex-grow-1.p-3 .bg-white");

  // Datos de ejemplo
  const chartData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ventas",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(9, 102, 35, 0.8)",
          "rgba(9, 102, 35, 0.6)",
          "rgba(9, 102, 35, 0.4)",
          "rgba(9, 102, 35, 0.3)",
          "rgba(9, 102, 35, 0.2)",
          "rgba(9, 102, 35, 0.1)",
        ],
        borderColor: ["rgba(9, 102, 35, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Configuración común
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Análisis de Ventas",
      },
    },
  };

  // Función para cambiar el gráfico
  function changeChart(type) {
    // Limpiar contenedor
    chartContainer.innerHTML = '<canvas id="dynamicChart"></canvas>';

    // Actualizar estilos de botones
    [barChartBtn, lineChartBtn, pieChartBtn].forEach((btn) => {
      btn.classList.remove("bg-dark-green");
      btn.classList.add("bg-custom-gray");
    });

    const activeBtn = document.getElementById(`${type}-chart-btn`);
    activeBtn.classList.remove("bg-custom-gray");
    activeBtn.classList.add("bg-dark-green");

    // Crear nuevo gráfico
    const ctx = document.getElementById("dynamicChart").getContext("2d");

    switch (type) {
      case "bar":
        new Chart(ctx, {
          type: "bar",
          data: chartData,
          options: chartOptions,
        });
        break;
      case "line":
        new Chart(ctx, {
          type: "line",
          data: chartData,
          options: chartOptions,
        });
        break;
      case "pie":
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.datasets[0].data,
                backgroundColor: chartData.datasets[0].backgroundColor,
                borderColor: chartData.datasets[0].borderColor,
                borderWidth: chartData.datasets[0].borderWidth,
              },
            ],
          },
          options: chartOptions,
        });
        break;
    }
  }

  // Event listeners
  barChartBtn.addEventListener("click", () => changeChart("bar"));
  lineChartBtn.addEventListener("click", () => changeChart("line"));
  pieChartBtn.addEventListener("click", () => changeChart("pie"));

  // Inicializar con gráfico de barras
  changeChart("bar");
});
// Función para ajustar los botones según el tamaño de pantalla
function adjustChartButtons() {
  const buttonsContainer = document.querySelector(".chart-buttons-container");
  const buttons = document.querySelectorAll(".chart-button");

  if (window.innerWidth <= 768) {
    // Pantallas pequeñas - disposición horizontal
    buttonsContainer.style.flexDirection = "row";
    buttonsContainer.style.justifyContent = "space-around";
    buttonsContainer.style.width = "100%";
    buttonsContainer.style.margin = "0.5rem 0";

    buttons.forEach((btn) => {
      btn.style.margin = "0 0.2rem";
    });
  } else {
    // Pantallas grandes - disposición vertical
    buttonsContainer.style.flexDirection = "column";
    buttonsContainer.style.width = "auto";
    buttonsContainer.style.margin = "0 0.5rem";

    buttons.forEach((btn) => {
      btn.style.margin = "0.3rem 0";
    });
  }

  // Ajustar tamaño de iconos en pantallas muy pequeñas
  if (window.innerWidth <= 400 || window.innerHeight <= 300) {
    buttons.forEach((btn) => {
      btn.style.width = "25px";
      btn.style.height = "25px";
      btn.querySelector("i").style.fontSize = "0.6rem";
    });
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener("load", adjustChartButtons);
window.addEventListener("resize", adjustChartButtons);
