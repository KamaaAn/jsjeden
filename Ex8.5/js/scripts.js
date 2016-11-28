// plik scripts.js

var a = 1;
var b = 20;
var value = (a * a) + (2 * a * b) - (b * b)

console.log('Wynik (a * a) + (2 * a * b) - (b * b) dla a: ' + a + ' i b: ' + b + ' wynosi: ' + value);

var value = prompt('Wynik (a * a) + (2 * a * b) - (b * b) dla a: ' + a + ' i b: ' + b + ' wynosi: ' + value);

if (value < 0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik dodatni');
}

if (value == 0) {
    console.log('Rowny 0');
}
else {
    console.log('Rozny od 0');
}