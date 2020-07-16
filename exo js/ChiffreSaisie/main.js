var readline = require("readline-sync");
var chiffreSaisi = parseInt(readline.question("quel nombre voulez- vous saisir ? "));

var fin = false;

while(!fin){

    if (isNaN(chiffreSaisi)) {

        console.log("Veuillez recommencer la saisie ,vous devez saisir un nombre ");
        var chiffreSaisi = parseInt(readline.question("quel nombre voulez-vous saisir ? "));
     } else {


        console.log("c est un chiffre");
        fin =true;
    }



}







