const cartBtn = document.querySelectorAll(".add-to-cart")
cartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const { id } = btn.dataset;

        addToCart(id);
    })
});

function addToCart(id){
    const cart = localStorage.getItem('schon-cart');

    if(cart == null || cart.length === 0){
        let newCart = id;
        localStorage.setItem('schon-cart', newCart);
    }else{
        let presentCart = cart.split(',');
        let inCart = presentCart.some((x => x === id));

        if(inCart) alert("Item already in cart!");
        else {
            presentCart.push(id);
            localStorage.setItem('schon-cart', presentCart);
            alert("Item added to cart");
        }
    }
}


// function addToCart(trigger) {
//     var cartIsEmpty = cartWrapper.hasClass('empty');
//     //get localstorage cart product list
//     getProductsFromLocalStorage();
//     //update cart product list
//     addProduct();
//     //update number of items
//     updateCartCount(cartIsEmpty);
//     //update total price
//     updateCartTotal(trigger.data('price'), true);
//     //show cart
//     cartWrapper.removeClass('empty');
//   }


//   function addProduct(){
//     let products = [];
//     if(localStorage.getItem('products')){
//         products = JSON.parse(localStorage.getItem('products'));
//     }
//     products.push({'productId' : productId + 1, image : '<imageLink>'});
//     localStorage.setItem('products', JSON.stringify(products));
// }


// function removeProduct(productId){

    // Your logic for your app.

    // strore products in local storage

//     let storageProducts = JSON.parse(localStorage.getItem('products'));
//     let products = storageProducts.filter(product => product.productId !== productId );
//     localStorage.setItem('products', JSON.stringify(products));
// }