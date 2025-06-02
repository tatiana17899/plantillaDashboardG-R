$(document).ready(function () {
  var table = $("#ordersTable").DataTable({
    pagingType: "simple",
    pageLength: 5,
    language: {
      paginate: {
        previous: "Anterior",
        next: "Siguiente",
      },
      info: "",
      lengthMenu: "",
    },
  });
});
