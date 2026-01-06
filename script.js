document.addEventListener("DOMContentLoaded", () => {
  console.log("Le site Git Decode est chargé !");

  const btn = document.getElementById("alertBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Bravo ! Git Flow maitrisé !");
    });
  }
});
