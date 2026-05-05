document.addEventListener("DOMContentLoaded", () => {

  // 🌙 DARK MODE
  const toggle = document.getElementById("toggle");
  if (toggle) {
    toggle.onclick = () => {
      document.body.classList.toggle("dark");
    };
  }

  // 🧠 SKILLS MODAL
  const openSkills = document.getElementById("openSkills");
  const skillsModal = document.getElementById("skillsModal");
  const closeSkills = document.getElementById("closeSkills");

  if (openSkills && skillsModal && closeSkills) {
    openSkills.onclick = () => skillsModal.classList.add("show");
    closeSkills.onclick = () => skillsModal.classList.remove("show");

    window.addEventListener("click", (e) => {
      if (e.target === skillsModal) {
        skillsModal.classList.remove("show");
      }
    });
  }

  // 📜 CERTIFICATE MODAL (UPDATED)
  const openCertBtns = document.querySelectorAll(".openCert");
  const certModal = document.getElementById("certModal");
  const closeCert = document.getElementById("closeCert");
  const certImage = document.getElementById("certImage");
  const certMessage = document.getElementById("certMessage");

  if (openCertBtns.length > 0 && certModal && closeCert) {

    openCertBtns.forEach(btn => {
      btn.addEventListener("click", () => {

        const img = btn.getAttribute("data-img");
        const status = btn.getAttribute("data-status");

        // RESET
        if (certImage) certImage.style.display = "none";
        if (certMessage) certMessage.style.display = "none";

        // LOGIC
        if (status === "ongoing") {
          certMessage.style.display = "block";
        } else if (img) {
          certImage.src = img;
          certImage.style.display = "block";
        }

        certModal.classList.add("show");
      });
    });

    closeCert.onclick = () => {
      certModal.classList.remove("show");
    };

    window.addEventListener("click", (e) => {
      if (e.target === certModal) {
        certModal.classList.remove("show");
      }
    });
  }

});