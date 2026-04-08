const productCard = `
            <div class="product-card">
                <img src="product.jpg" alt="Product Image">
                <h3>Product Name</h3>
                <small>Product description.</small><br><br>
                <button>See more</button>
            </div>`;

const section = document.querySelector('section');

for (let i = 0; i < 12; i++) {
    section.innerHTML += productCard;
}