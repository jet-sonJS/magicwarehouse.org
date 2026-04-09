const productCard = `
            <div class="product-card">
                <img src="product.jpg" alt="Product Image">
                <h3>Product Name</h3>
                <small>Product description.</small><br><br>
                <a href="product_info.html"><button>See more</button></a>
            </div>`;

const section = document.querySelector('section');

for (let i = 0; i < 12; i++) {
    section.innerHTML += productCard;
}