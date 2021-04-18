import { Store } from "pullstate";

const CartStore = new Store({
    
    total: 0,
    coffee_ids: []
});

export default CartStore;

export const addToCart = (coffeeID) => {

    CartStore.update(s => { s.coffee_ids = [ ...s.coffee_ids, `${ parseInt(coffeeID) }` ]; });
}

export const removeFromCart = coffeeIndex => {

    CartStore.update(s => { s.coffee_ids.splice(coffeeIndex, 1) });
}