// add data to local storage:

export const addToDb = (id) => {
    // localStorage.setItem('shopping-cart',id)
    let shoppingCart = {};

    //get previous data from local storage.
    const sotredCart = localStorage.getItem('shopping-cart');
    if (sotredCart) {
        shoppingCart = JSON.parse(sotredCart);
    }
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export const getStoredCart = () => {
    let shoppingCart = [];

    const sotredCart = localStorage.getItem('shopping-cart');
    if (sotredCart) {
        shoppingCart = JSON.parse(sotredCart);
    }
 return shoppingCart;
}

//remove specific element from local storage.
export const  removeFromDb =(id) => {
    const sotredCart = localStorage.getItem('shopping-cart');

    if(sotredCart){
        const shoppingCart = JSON.parse(sotredCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }

}

//clear all data from local storage.

export const delteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}