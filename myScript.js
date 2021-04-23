function randomNumber() {
    return Math.floor(Math.random()*100)+1;
}

var numeriGenerati = [];

for( i=0; i < 5; i++)
{
    numeriGenerati.push(randomNumber());
}

alert(numeriGenerati)

var numeriMessi = [];

setTimeout(function() {
    var num1 = parseInt(prompt("Inserisci il primo numero"))
    var num2 = parseInt(prompt("Inserisci il secondo numero"))
    var num3 = parseInt(prompt("Il terzo"))
    var num4 = parseInt(prompt("Il quarto"))
    var num5 = parseInt(prompt("E il quinto"))
    numeriMessi.push(num1, num2, num3, num4, num5);

    var numeriIndovinati = []
    for( i=0; i < 5; i++) {
        for( j=0; j < 5; j++) {
        if(numeriMessi[i] === numeriGenerati[j]) {
            numeriIndovinati.push(numeriMessi[i]);
        }
        }
    }
    console.log(numeriIndovinati.length);

}, 3000);