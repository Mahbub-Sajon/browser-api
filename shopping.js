const displayLoacalStorageCart = () => {
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}



const addItem = () => {
    const nameField = document.getElementById("Product-name");
    const name = nameField.value;
    if(!name){
        return;
    }
    displayProduct(name);

        addProductsToCart(name);

    nameField.value = '';

}

const displayProduct = name => {
    const ul = document.getElementById("products");
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);

}

const getCart = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
const addProductsToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart [name] = cart[name]+1; 
    }
    else{
        cart [name] = 1
    }
    const cartStirngiFied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStirngiFied);
}
const placeOrder = () => {
    document.getElementById("products").textContent = '';
    localStorage.removeItem('cart');
}

displayLoacalStorageCart();