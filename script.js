const productCard = `<div class="product-card">
                <img src="product_img.jpg" alt="Product Image">
                <h3>Product Name</h3>
                <small>Product description.</small><br><br>
                <a href="product_info.html"><button>See more</button></a>
            </div>`;

const section = document.querySelector('section');

let numProducts = 15;

for (let i = 0; i < numProducts; i++) {
    section.innerHTML += productCard;
}

function loadMoreProducts() {
    numProducts += 15;
    for (let i = 0; i < numProducts; i++) {
        section.innerHTML += productCard;
    }
}