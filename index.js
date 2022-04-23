const sidebarLinks = document.querySelectorAll("#sidebar a");
const navCheckBox = document.querySelector("#check");

function handleCloseNav() {
  navCheckBox.checked = '';
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", handleCloseNav);
});
