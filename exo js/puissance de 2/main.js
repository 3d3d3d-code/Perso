var readline =require ("readline-sync");
//var p = 2; 2 etant une constante vaut mieux la declarer comme telle
const PUISSANCE = 2;
var saisie=parseInt(readline.question("Puissance voulue ? "));
console.log(PUISSANCE  + "  À LA PUISSANCE  " +  saisie  + " = " + Math.pow(PUISSANCE,saisie));
  