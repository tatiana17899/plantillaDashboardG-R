document.addEventListener("DOMContentLoaded", function () {
  // First calendar
  const calendarIcon1 = document.querySelectorAll(".fa-calendar-alt")[0];
  const calendarPopup1 = document.querySelectorAll(".calendar-popup")[0];
  const fechaSeleccionada1 = document.querySelectorAll(
    ".fecha-seleccionada"
  )[0];
  const prevMonthBtn1 = document.getElementById("prev-month");
  const nextMonthBtn1 = document.getElementById("next-month");
  const monthYearDisplay1 = document.getElementById("month-year");
  const calendarDays1 = document.getElementById("calendar-days");

  // Second calendar
  const calendarIcon2 = document.querySelectorAll(".fa-calendar-alt")[1];
  const calendarPopup2 = document.querySelectorAll(".calendar-popup")[1];
  const fechaSeleccionada2 = document.querySelectorAll(
    ".fecha-seleccionada"
  )[1];
  const prevMonthBtn2 = document.getElementById("prev-month1");
  const nextMonthBtn2 = document.getElementById("next-month1");
  const monthYearDisplay2 = document.getElementById("month-year1");
  const calendarDays2 = document.getElementById("calendar-days1");

  let currentDate = new Date();
  let currentMonth1 = currentDate.getMonth();
  let currentYear1 = currentDate.getFullYear();
  let currentMonth2 = currentDate.getMonth();
  let currentYear2 = currentDate.getFullYear();

  // Nombres de los días de la semana
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Función para generar el primer calendario
  function generateCalendar1(month, year) {
    // Limpiar el contenido actual
    calendarDays1.innerHTML = "";

    // Actualizar el encabezado del mes y año
    monthYearDisplay1.textContent = `${monthNames[month]} ${year}`;

    // Agregar los nombres de los días
    dayNames.forEach((day) => {
      const dayNameElement = document.createElement("div");
      dayNameElement.className = "day-name";
      dayNameElement.textContent = day;
      calendarDays1.appendChild(dayNameElement);
    });

    // Obtener el primer día del mes
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();

    // Obtener el último día del mes
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    // Obtener el último día del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Días del mes anterior
    for (let i = startingDay - 1; i >= 0; i--) {
      const dayElement = document.createElement("div");
      dayElement.className = "day other-month";
      dayElement.textContent = prevMonthLastDay - i;
      calendarDays1.appendChild(dayElement);
    }

    // Días del mes actual
    for (let i = 1; i <= totalDays; i++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = i;

      // Marcar el día actual
      if (
        year === new Date().getFullYear() &&
        month === new Date().getMonth() &&
        i === new Date().getDate()
      ) {
        dayElement.classList.add("active");
      }

      // Evento al hacer clic en un día
      dayElement.addEventListener("click", function () {
        // Formatear la fecha como dd/mm/aa
        const selectedDay = i;
        const selectedMonth = month + 1;
        const selectedYear = year.toString().substr(-2);

        // Asegurarse de que el día y el mes tengan dos dígitos
        const formattedDay = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
        const formattedMonth =
          selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;

        // Mostrar la fecha formateada
        fechaSeleccionada1.textContent = `${formattedDay}/${formattedMonth}/${selectedYear}`;

        // Cerrar el calendario
        calendarPopup1.style.display = "none";
      });

      calendarDays1.appendChild(dayElement);
    }

    // Rellenar con días del mes siguiente si es necesario
    const totalCells = 42; // 6 filas x 7 columnas
    const remainingCells = totalCells - (startingDay + totalDays);

    for (let i = 1; i <= remainingCells; i++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day other-month";
      dayElement.textContent = i;
      calendarDays1.appendChild(dayElement);
    }
  }

  // Función para generar el segundo calendario
  function generateCalendar2(month, year) {
    // Limpiar el contenido actual
    calendarDays2.innerHTML = "";

    // Actualizar el encabezado del mes y año
    monthYearDisplay2.textContent = `${monthNames[month]} ${year}`;

    // Agregar los nombres de los días
    dayNames.forEach((day) => {
      const dayNameElement = document.createElement("div");
      dayNameElement.className = "day-name";
      dayNameElement.textContent = day;
      calendarDays2.appendChild(dayNameElement);
    });

    // Obtener el primer día del mes
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();

    // Obtener el último día del mes
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    // Obtener el último día del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    // Días del mes anterior
    for (let i = startingDay - 1; i >= 0; i--) {
      const dayElement = document.createElement("div");
      dayElement.className = "day other-month";
      dayElement.textContent = prevMonthLastDay - i;
      calendarDays2.appendChild(dayElement);
    }

    // Días del mes actual
    for (let i = 1; i <= totalDays; i++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = i;

      // Marcar el día actual
      if (
        year === new Date().getFullYear() &&
        month === new Date().getMonth() &&
        i === new Date().getDate()
      ) {
        dayElement.classList.add("active");
      }

      // Evento al hacer clic en un día
      dayElement.addEventListener("click", function () {
        // Formatear la fecha como dd/mm/aa
        const selectedDay = i;
        const selectedMonth = month + 1;
        const selectedYear = year.toString().substr(-2);

        // Asegurarse de que el día y el mes tengan dos dígitos
        const formattedDay = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
        const formattedMonth =
          selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;

        // Mostrar la fecha formateada
        fechaSeleccionada2.textContent = `${formattedDay}/${formattedMonth}/${selectedYear}`;

        // Cerrar el calendario
        calendarPopup2.style.display = "none";
      });

      calendarDays2.appendChild(dayElement);
    }

    // Rellenar con días del mes siguiente si es necesario
    const totalCells = 42; // 6 filas x 7 columnas
    const remainingCells = totalCells - (startingDay + totalDays);

    for (let i = 1; i <= remainingCells; i++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day other-month";
      dayElement.textContent = i;
      calendarDays2.appendChild(dayElement);
    }
  }

  // Eventos para el primer calendario
  if (calendarIcon1 && calendarIcon1.parentElement) {
    calendarIcon1.parentElement.addEventListener("click", function (e) {
      e.stopPropagation();
      if (calendarPopup1.style.display === "block") {
        calendarPopup1.style.display = "none";
      } else {
        calendarPopup1.style.display = "block";
        generateCalendar1(currentMonth1, currentYear1);
      }
    });
  }

  if (prevMonthBtn1) {
    prevMonthBtn1.addEventListener("click", function (e) {
      e.stopPropagation();
      currentMonth1--;
      if (currentMonth1 < 0) {
        currentMonth1 = 11;
        currentYear1--;
      }
      generateCalendar1(currentMonth1, currentYear1);
    });
  }

  if (nextMonthBtn1) {
    nextMonthBtn1.addEventListener("click", function (e) {
      e.stopPropagation();
      currentMonth1++;
      if (currentMonth1 > 11) {
        currentMonth1 = 0;
        currentYear1++;
      }
      generateCalendar1(currentMonth1, currentYear1);
    });
  }

  // Eventos para el segundo calendario
  if (calendarIcon2 && calendarIcon2.parentElement) {
    calendarIcon2.parentElement.addEventListener("click", function (e) {
      e.stopPropagation();
      if (calendarPopup2.style.display === "block") {
        calendarPopup2.style.display = "none";
      } else {
        calendarPopup2.style.display = "block";
        generateCalendar2(currentMonth2, currentYear2);
      }
    });
  }

  if (prevMonthBtn2) {
    prevMonthBtn2.addEventListener("click", function (e) {
      e.stopPropagation();
      currentMonth2--;
      if (currentMonth2 < 0) {
        currentMonth2 = 11;
        currentYear2--;
      }
      generateCalendar2(currentMonth2, currentYear2);
    });
  }

  if (nextMonthBtn2) {
    nextMonthBtn2.addEventListener("click", function (e) {
      e.stopPropagation();
      currentMonth2++;
      if (currentMonth2 > 11) {
        currentMonth2 = 0;
        currentYear2++;
      }
      generateCalendar2(currentMonth2, currentYear2);
    });
  }

  // Cerrar los calendarios al hacer clic fuera de ellos
  document.addEventListener("click", function (event) {
    const target = event.target;

    // Check if click is outside first calendar
    if (!target.closest(".date-picker-container:first-of-type")) {
      if (calendarPopup1) calendarPopup1.style.display = "none";
    }

    // Check if click is outside second calendar
    if (!target.closest(".date-picker-container:last-of-type")) {
      if (calendarPopup2) calendarPopup2.style.display = "none";
    }
  });

  // Generar los calendarios inicialmente
  generateCalendar1(currentMonth1, currentYear1);
  generateCalendar2(currentMonth2, currentYear2);
});
