// plik scripts.js
function rysujChoinke(row){
  for (i=0 ; i < row ; i++){
      var star = "";
      for (n =0; n < i*2-1; n++) {
          star += "*";
      }
  console.log(star);
  }
};
rysujChoinke(15);