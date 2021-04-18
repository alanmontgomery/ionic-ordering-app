import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getCoffees = createSelector(getState, state => state.coffees);
export const getOffers = createSelector(getState, state => state.offers);
export const getCoffeeSizes = createSelector(getState, state => state.sizes);
export const getCartCoffees = createSelector(getState, state => state.coffee_ids);
export const getFavouriteCoffees = createSelector(getState, state => state.coffee_ids);

//  More specific getters
export const getCoffee = id => createSelector(getState, state => state.coffees.filter(c => parseInt(c.id) === parseInt(id))[0]);