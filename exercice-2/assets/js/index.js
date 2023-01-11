import { Warrior } from './classes/warrior.js';
import { Mage } from './classes/mage.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let warrior1 = new Warrior("Mad Martigan", 60, 10);
    let mage1 = new Mage("Profion", 50, 50);
    
    console.log(warrior1, mage1);
})
