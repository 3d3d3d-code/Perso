//var readline =require ("readline-sync");

function afficherTaille(mot){
if(mot.length < 8){

console.log("Le mot contient " + mot.length + " caractères "); 



}else {

    console.log("le mot fait plus de 8 caracteres");
}

}

var mot1 = "jack";
var mot2 = "tomatoketchup";

afficherTaille(mot1);
afficherTaille(mot2);