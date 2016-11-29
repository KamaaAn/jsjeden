// plik scripts.js
function getTriangleArea(a, h) {
var a = 0;
var h = 0;
var triangleArea = a * h / 2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
var triangleArea = prompt('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
if ( (a > 0) && (a != 0) ) {
    console.log('OK');
} else {
    console.log('Nieprawidłowe dane');
}
if ( (h > 0) && (h != 0) ) {
    console.log('OK');
} else {
    console.log('Nieprawidłowe dane');
}
}

getTriangleArea();