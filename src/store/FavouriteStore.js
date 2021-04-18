import { Store } from "pullstate";

const FavouriteStore = new Store({
    
    total: 0,
    coffee_ids: []
});

export default FavouriteStore;

export const addToFavourites = (coffeeID) => {
    
    FavouriteStore.update(s => {

        if (s.coffee_ids.find(id => id === parseInt(coffeeID))) {
            s.coffee_ids = s.coffee_ids.filter(id => id !== parseInt(coffeeID));
        } else {
            s.coffee_ids = [ ...s.coffee_ids, parseInt(coffeeID) ];
        }
    });
}