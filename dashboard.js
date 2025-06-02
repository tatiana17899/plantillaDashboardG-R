document.getElementById("toggle-btn").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebar1 = document.getElementById("sidebar-1");
  const content = document.getElementById("content");

  sidebar.classList.toggle("collapsed");
  sidebar1.classList.toggle("collapsed");
  content.classList.toggle("expanded");
});

function checkWidth() {
  const sidebar = document.getElementById("sidebar");
  const sidebar1 = document.getElementById("sidebar-1");
  const content = document.getElementById("content");

  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
    sidebar1.classList.add("collapsed");
    content.classList.add("expanded");
  } else {
    sidebar.classList.remove("collapsed");
    sidebar1.classList.remove("collapsed");
    content.classList.remove("expanded");
  }
}

window.addEventListener("load", checkWidth);
window.addEventListener("resize", checkWidth);
