import { Pizza } from './classes/pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let pizza1 = new Pizza("Veggie", "Tomate", "Fromage", "Légumes");
    let pizza2 = new Pizza("Meatie", "Tomate", "Fromage", "Viande");
    let pizza3 = new Pizza("Fishie", "Tomate", "Fromage", "Poisson");
    
    console.log(pizza1, pizza2, pizza3);
    
})