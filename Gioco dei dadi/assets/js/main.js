//generare numero random da 1 a 6 sia per utente che per pc
var btnGenera = document.getElementById('generatore');

generatore.addEventListener("click", function () {
  var utente = Math.floor(Math.random() * 7);
  console.log (utente);

  var lanciopc = Math.floor(Math.random() * 7);
    console.log (lanciopc);

  if (utente < lanciopc) {
      document.getElementById('risultato').innerHTML = "hai perso! " + "ti è uscito il numero " + utente + " al pc è uscito il numero " + lanciopc;

      document.getElementById('message').innerHTML = "riprova!"
  } else if (utente > lanciopc) {
    document.getElementById('risultato').innerHTML = "hai vinto! " + "ti è uscito il numero " + utente + " al pc è uscito il numero " + lanciopc;
  
    document.getElementById('message').innerHTML = "complimenti!"
  } else if (utente == lanciopc) {
      document.getElementById('risultato').innerHTML = "hai pareggio! " + "ti è uscito il numero " + utente + " al pc è uscito il numero " + lanciopc;

      document.getElementById('message').innerHTML = "riprova!"

  }
})
