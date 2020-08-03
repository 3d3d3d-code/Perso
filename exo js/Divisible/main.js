
var c1 = 123;
var c2 = 20;
var resultat =
    afficherResulltatDivisionPar3(c1);//creation de la methode
    afficherResulltatDivisionPar3(c2);

function afficherResulltatDivisionPar3(chiffre) {

    if (chiffre % 3 === 0) {
        console.log("Le resultat de " + "/ 3 =" + (chiffre / 3));

    } else {
        console.log("le chiffre " + chiffre + " n est pas divisible par 3")
    }
}

 // OU BIEN 
 var c1 = 123;
var c2 = 20;
var resultat =
    afficherResulltatDivisionPar3(c1);//creation de la methode
    afficherResulltatDivisionPar3(c2);

function afficherResulltatDivisionPar3(chiffre) {

    if ( verificationDivisiblePar3(chiffre)) {
        console.log("Le resultat de " + "/ 3 =" + (chiffre / 3));

    } else {
        console.log("le chiffre " + chiffre + " n est pas divisible par 3")
    }

    function verificationDivisiblePar3(chiffre){

        return chiffre % 3 === 0;
    }
}

// le faire avec n importe quel chiffre tapé
 