/*const createFavoriteButton = () => {
    const button = document.createElement('button')
    button.textContent = "like"
    button.classList.add('button_class')
    return button;
}*/

import travelPlaces from "../../assets/data.js";


console.log(travelPlaces);

var button = document.getElementById("voteNaplesBtn");
    var count = 0;
    var item = localStorage.getItem("italy");
    if(item != undefined) {
        count = parseInt(item);
        button.innerHTML = "Click to vote: " + count;
    }
    button.onclick = function() {
        count += 1;
        localStorage.setItem("italy", count);
        button.innerHTML = "Click to vote: " + count;
    };

    
/*var button = document.getElementById("voteCreteBtn");
    var count = 0;
    var item = localStorage.getItem("greece");
    if(item != undefined) {
        count = parseInt(item);
        button.innerHTML = "Click to vote: " + count;
}
button.onclick = function() {
    count += 1;
    localStorage.setItem("greece", count);
    button.innerHTML = "Click to vote: " + count;
};


var button = document.getElementById("voteReykjavikBtn");
    var count = 0;
    var item = localStorage.getItem("iceland");
    if(item != undefined) {
        count = parseInt(item);
        button.innerHTML = "Click to vote: " + count;
    }
    button.onclick = function() {
        count += 1;
        localStorage.setItem("iceland", count);
        button.innerHTML = "Click to vote: " + count;
    };

    
var button = document.getElementById("voteOttawaBtn");
    var count = 0;
    var item = localStorage.getItem("canada");
    if(item != undefined) {
        count = parseInt(item);
        button.innerHTML = "Click to vote: " + count;
    }
    button.onclick = function() {
        count += 1;
        localStorage.setItem("canada", count);
        button.innerHTML = "Click to vote: " + count;
    };


var button = document.getElementById("voteLisbonBtn");
    var count = 0;
    var item = localStorage.getItem("portugal");
    if(item != undefined) {
        count = parseInt(item);
        button.innerHTML = "Click to vote: " + count;
    }
    button.onclick = function() {
        count += 1;
        localStorage.setItem("portugal", count);
        button.innerHTML = "Click to vote: " + count;
    };*/