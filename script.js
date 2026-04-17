const productCard = `<div class="product-card">
                <img src="product_img.jpg" alt="Product Image">
                <h3>Product Name</h3>
                <small>Product description.</small><br><br>
                <a href="product_info.html"><button>Details</button></a>
            </div>`;

const section = document.querySelector('.product-grid');

let numProducts = 15;

for (let i = 0; i < numProducts; i++) {
    section.innerHTML += productCard;
}

function loadMoreProducts() {
    const newProducts = 15;

    for (let i = 0; i < newProducts; i++) {
        section.innerHTML += productCard;
    }

    numProducts += newProducts;
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}