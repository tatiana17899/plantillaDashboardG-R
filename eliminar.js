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
