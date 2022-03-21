const mobileMenuButton = document.getElementById("mobile-menu-button");
const menuOverlay = document.querySelector(".MenuOverlay");
const catalogButton = document.getElementById("catalog-mobile-nav");
const catalogMobileTile = document.getElementById("catalog-nav-tile");
const catalogMobileTitle = document.getElementById("catalog-mobile-title");
const catalogNavTiles = document.querySelectorAll(".mainCatalog-sideNav--tile");
const catalogProducts = document.querySelectorAll(".mainCatalog-products");

mobileMenuButton.addEventListener("click", () => {
	mobileMenuButton.classList.toggle("open");
	menuOverlay.classList.toggle("open");
});
catalogButton.addEventListener("click", (e) => {
	e.preventDefault();
	catalogMobileTile.classList.toggle("is-active");
	catalogNavTiles.forEach((tile) => {
		tile.classList.toggle("show");
	});
});
let activeTile = "";
catalogNavTiles.forEach((tile) => {
	/* Je daný block aktivní? */
	if (tile.classList.contains("is-active")) {
		/* Nastav správný title */
		activeTile = tile.innerText;
		catalogMobileTitle.innerHTML = activeTile;

		catalogProducts.forEach((product) => {
			/* když produkt sedí k aktivnímu blocku tak ho zobraz */
			if (product.classList.contains(tile.id)) {
				product.classList.add("is-active");
			}
		});
	}
	tile.addEventListener("click", (e) => {
		e.preventDefault();
		/* Odstraň všem blockům aktivní status */
		catalogNavTiles.forEach((tile) => {
			tile.classList.remove("is-active");
		});
		/* Skryj všechny blocky */
		catalogNavTiles.forEach((tile) => {
			tile.classList.remove("show");
		});
		/* zobraz produkty pro aktuální block */
		catalogProducts.forEach((product) => {
			product.classList.remove("is-active");
			if (product.classList.contains(tile.id)) {
				product.classList.add("is-active");
			}
		});
		/* Správná ikonka v navigaci katalogu */
		catalogMobileTile.classList.remove("is-active");
		/* Tenhle block učiň aktivním */
		tile.classList.add("is-active");
		activeTile = tile.innerText;
		/* Nastav správný title */
		catalogMobileTitle.innerHTML = activeTile;
	});
});
