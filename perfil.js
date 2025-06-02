document.addEventListener("DOMContentLoaded", function () {
  const profileImageBtn = document.getElementById("profileImageBtn");
  const profilePanel = document.getElementById("profilePanel");
  const closeProfile = document.getElementById("closeProfile");
  const overlay = document.getElementById("overlay");
  const fileUpload = document.getElementById("fileUpload");
  const profileDisplayImage = document.getElementById("profileDisplayImage");

  profileImageBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    profilePanel.classList.add("active");
    overlay.style.display = "block";
  });

  closeProfile.addEventListener("click", function (event) {
    event.stopPropagation();
    closeProfilePanel();
  });

  overlay.addEventListener("click", function () {
    closeProfilePanel();
  });

  function closeProfilePanel() {
    profilePanel.classList.remove("active");
    overlay.style.display = "none";
  }

  function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileDisplayImage.src = e.target.result;
        profileImageBtn.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  document.addEventListener("click", function (event) {
    if (
      !profilePanel.contains(event.target) &&
      !profileImageBtn.contains(event.target)
    ) {
      closeProfilePanel();
    }
  });
});
