function filtrerProdukter() {

    // Lokal variabel som er en kopi af produktlisten.
    let filteredProducts = [...products];

    // --------------------------- Håndtering af søgefelt ------------------------- //
    const searchText = document.getElementById("search-input").value.toLowerCase().trim();
    if (searchText) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );
    }

    // ---------------------- Håndtering af filtreringspanel ---------------------- //

    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const colors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
    const minSpillere = parseFloat(document.getElementById('min-spillere').value);
    const maxSpillere = parseFloat(document.getElementById('max-spillere').value);
    const rating = document.querySelector('input[name="rating"]:checked')?.value || null;

    if (categories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            categories.includes(product.category)
        );
    }

    if (colors.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            colors.includes(product.color)
        );
    }

    if (!isNaN(minSpillere)) {
        filteredProducts = filteredProducts.filter(product =>
            product.spillereMax >= minSpillere
        );
    }

    if (!isNaN(maxSpillere)) {
        filteredProducts = filteredProducts.filter(product =>
            product.spillereMin <= maxSpillere
        );
    }

    if (rating !== null) {
        filteredProducts = filteredProducts.filter(product =>
            product.rating >= rating
        );
    }

    // -------------------- Håndtering af predefineret sortering ----------------- //
    const sorterEfter = document.getElementById("predefined-search").value;

    if (sorterEfter && sorterEfter === "populaere") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sorterEfter && sorterEfter === "pris-stigende") {
        filteredProducts.sort((a, b) => a.spillereMin - b.spillereMin);
    }

    if (sorterEfter && sorterEfter === "pris-faldende") {
        filteredProducts.sort((a, b) => b.spillereMin - a.spillereMin);
    }

    displayProducts(filteredProducts);
};

document.getElementById("search-input").addEventListener("input", filtrerProdukter);

document.getElementById("predefined-search").addEventListener("change", filtrerProdukter);

document.getElementById('apply-filters').addEventListener('click', function () {
    filtrerProdukter();
    closeFilterPanel();
});

