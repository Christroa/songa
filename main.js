const sidebar = document.querySelector(".sidebar");
const sidemenuToggle = document.querySelector(".sidemenutoggle");
const sidemenuText = document.querySelectorAll(".sidemenuText");
sidemenuToggle.addEventListener("click", () => {
  sidemenuText.forEach((text) => {
    if (text.style.display == "none") {
      text.style.display = "inline";
      text.parentElement.style = "justify-content: start";

      sidebar.style = "flex: 1; min-width: 240; max-width: 250";
    } else {
      text.style.display = "none";
      text.parentElement.style = "justify-content: center";
      sidebar.style = "flex: ''; min-width: 0; max-width: 80px";
    }
  });
});
