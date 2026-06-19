let products = [];
let cart = [];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const stats = document.getElementById("stats");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    products = data;
    displayProducts(products);
    displayStats(products);
})
.catch(error => {
    console.log(error);
});

function displayProducts(data){
    productContainer.innerHTML = "";
    data.forEach(product => {
        productContainer.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <span class="category">${product.category}</span>
                <p class="rating">⭐ ${product.rating.rate} (${product.rating.count} Reviews)</p>
                <button onclick="addToCart(${product.id})">Add To Cart</button>
            </div>
        </div>
        `;
    });
}

searchInput.addEventListener("keyup", () => {
    filterProducts();
});

categorySelect.addEventListener("change", () => {
    filterProducts();
});

function filterProducts(){
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    const filtered = products.filter(product => {
        const matchSearch = product.title.toLowerCase().includes(searchText);
        const matchCategory = category === "all" || product.category === category;
        return matchSearch && matchCategory;
    });
    displayProducts(filtered);
}

function addToCart(id){
    const product = products.find(item => item.id === id);
    cart.push(product);
    updateCart();
}

function updateCart(){
    cartCount.innerHTML = cart.length;
    cartItems.innerHTML = "";
    if(cart.length === 0){
        cartItems.innerHTML = "<p class='empty-cart'>Cart is Empty</p>";
        return;
    }
    cart.forEach((item,index)=>{
        cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <h4>${item.title}</h4>
                <p>$${item.price}</p>
            </div>
            <button onclick="removeCart(${index})">Remove</button>
        </div>
        `;
    });
}

function removeCart(index){
    cart.splice(index,1);
    updateCart();
}

function displayStats(data){
    const totalProducts = data.length;
    const averagePrice = data.reduce((sum,item)=>sum+item.price,0)/totalProducts;
    const highestPrice = data.reduce((a,b)=>a.price>b.price?a:b);
    const lowestPrice = data.reduce((a,b)=>a.price<b.price?a:b);

    stats.innerHTML = `
    <div class="stat-card">
        <h4>Total Products</h4>
        <p>${totalProducts}</p>
    </div>
    <div class="stat-card">
        <h4>Average Price</h4>
        <p>$${averagePrice.toFixed(2)}</p>
    </div>
    <div class="stat-card">
        <h4>Highest Price</h4>
        <p title="${highestPrice.title}">${highestPrice.title}</p>
        <small>$${highestPrice.price}</small>
    </div>
    <div class="stat-card">
        <h4>Lowest Price</h4>
        <p title="${lowestPrice.title}">${lowestPrice.title}</p>
        <small>$${lowestPrice.price}</small>
    </div>
    `;
}