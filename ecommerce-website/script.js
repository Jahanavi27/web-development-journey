const products = [
{
    id:1,
    name:"Laptop",
    price:50000
},
{
    id:2,
    name:"Mobile",
    price:25000
},
{
    id:3,
    name:"Headphones",
    price:2000
},
{
    id:4,
    name:"Smart Watch",
    price:3000
},
{
    id:5,
    name:"Keyboard",
    price:1500
},
{
    id:6,
    name:"Mouse",
    price:700
},
{
    id:7,
    name:"Speaker",
    price:2500
},
{
    id:8,
    name:"Monitor",
    price:12000
}
];

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const productsContainer =
document.getElementById("productsContainer");

const searchInput =
document.getElementById("searchInput");

/* Display Products */

function displayProducts(productList){

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        productsContainer.innerHTML += `
        <div class="product-card">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button
            onclick="addToCart(${product.id})">
            Add To Cart
            </button>

        </div>
        `;
    });
}

/* Add To Cart */

function addToCart(id){

    const product =
    products.find(
        item => item.id === id
    );

    cart.push(product);

    saveCart();

    updateCart();
}

/* Remove Item */

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    updateCart();
}

/* Save Cart */

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

/* Update Cart */

function updateCart(){

    document.getElementById("cartCount")
    .textContent = cart.length;

    const cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">

            <span>
            ${item.name}
            - ₹${item.price}
            </span>

            <button
            onclick="removeItem(${index})">
            Remove
            </button>

        </div>
        `;
    });

    document.getElementById("totalAmount")
    .textContent =
    `Total: ₹${total}`;
}

/* Search */

searchInput.addEventListener(
"input",
()=>{

    const searchValue =
    searchInput.value.toLowerCase();

    const filteredProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(searchValue)
    );

    displayProducts(filteredProducts);
}
);

/* Initial Load */

displayProducts(products);

updateCart();