// const products = [
//     { id: 1, name: "Product 1", price: 10.00 },
//     { id: 2, name: "Product 2", price: 15.00 },
//     { id: 3, name: "Product 3", price: 20.00 }
// ];

// let cart = [];

// function updateCartDisplay() {
//     const cartList = document.getElementById("cart-list");
//     const totalPrice = document.getElementById("total-price");

//     cartList.innerHTML = "";
//     let total = 0;

//     cart.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartList.appendChild(li);
//         total += item.price;
//     });

//     totalPrice.textContent = `Total: $${total.toFixed(2)}`;
// }

// function addProductToCart(product) {
//     cart.push(product);
//     updateCartDisplay();
// }

// function createProductElements() {
//     const productContainer = document.getElementById("product-container");

//     products.forEach(product => {
//         const productDiv = document.createElement("div");
//         productDiv.className = "product";

//         const productName = document.createElement("h3");
//         productName.textContent = product.name;

//         const productPrice = document.createElement("p");
//         productPrice.textContent = `$${product.price.toFixed(2)}`;

//         const addButton = document.createElement("button");
//         addButton.textContent = "Add to Cart";
//         addButton.onclick = () => addProductToCart(product);

//         productDiv.appendChild(productName);
//         productDiv.appendChild(productPrice);
//         productDiv.appendChild(addButton);
//         productContainer.appendChild(productDiv);
//     });
// }

// // Initialize the product elements
// createProductElements();
const products = [
    { id: 1, name: "Shirt", price: 10.00, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTvzmKHfhEqFqHNUR8qhm-xS7EiCp6By6SzY9lQ9RoqAnz7KKdrb7pCg7sJVqTS7r6-e_bUk9J-Pv3bCSjO3G5pDi-S39J9fZZlMZIHlPX" },
    { id: 2, name: "Pants", price: 15.00, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlGsZxfDwdzETdcEPWfCLvaoO4_1PdCfz8Fgwj4UOjwu3b65PKmiUFJ4Rzm8zUsKG9Sy55xEEVdreTBZZ7_-CoqKjxvIvGrYrINpNI3TUnbz3ngcvbjbDjqA" },
    { id: 3, name: "Jeans", price: 20.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bhYVvFDJG8vR9F2VMvsVS5YBQ4es8gEz3A&s" }
];

let cart = [];

function updateCartDisplay() {
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function addProductToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function createProductElements() {
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.style.width = '100%'; // Responsive image

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.onclick = () => addProductToCart(product);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addButton);
        productContainer.appendChild(productDiv);
    });
}

// Initialize the product elements
createProductElements();