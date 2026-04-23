const productCard = `<div class="product-card">
                <img src="product_img.jpg" alt="Product Image">
                <h3>Product Name</h3>
                <small>Product description.</small><br><br>
                <a href="product_info.html"><button>Details</button></a>
            </div>`;

const section = document.querySelector('.product-grid');

let numProducts = 16;

function loadMoreProducts() {
    const newProducts = 16;

    for (let i = 0; i < newProducts; i++) {
        section.innerHTML += productCard;
    }

    numProducts += newProducts;
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < numProducts; i++) {
        section.innerHTML += productCard;
    }

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    const loadMoreButton = document.getElementById('load-more');

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

loadMoreButton.addEventListener('click', loadMoreProducts);
});