
//chiedere all'utente email
var email = prompt("inserisci email")
// lista email che possono accedere
var emailUtenti = ["nicco", "gianni", "davide"];

var autorizzato = false;

for (i = 0; i < emailUtenti.length; i++ ){
  if (email == emailUtenti[i]){
   autorizzato = true;
  }
}

if (autorizzato == true) {
  document.getElementById('risultato').innerHTML= "sei autorizzato!"
} else {
  document.getElementById('risultato').innerHTML= " Non sei autorizzato!"
}
