// plik scripts.js

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    list.innerHTML += '<li>item</li>'
});
