const mobileMenuButton = document.getElementById("mobile-menu-button");
const menuOverlay = document.querySelector(".MenuOverlay");

mobileMenuButton.addEventListener("click", () => {
	mobileMenuButton.classList.toggle("open");
	menuOverlay.classList.toggle("open");
});
