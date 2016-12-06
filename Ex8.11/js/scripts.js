// plik scripts.js

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var elements = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item ' + elements + '</li>';
});
