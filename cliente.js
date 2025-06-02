$(document).ready(function () {
  // Inicialización de DataTable
  $("#clientTable").DataTable({
    pageLength: 4,
    lengthChange: false,
    language: {
      paginate: {
        previous: "Previous",
        next: "Next",
      },
    },
  });

  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"];
  const barData = [65, 59, 80, 81, 56, 55, 40];
  const lineData = [28, 48, 40, 19, 86, 27, 90];

  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Tendencia de clientes",
          data: lineData,
          fill: false,
          borderColor: "rgba(9, 102, 35, 1)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

function confirmarEliminacion() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#096623",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "¡Eliminado!",
        "El registro ha sido eliminado.",
        "success"
      ).then(() => {
        console.log("Registro eliminado");
      });
    }
  });
}
