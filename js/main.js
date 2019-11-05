// When the HTML Body element will load it will display a message in a modal box
// $(window).on('load',function(){
//     $('#introductionModal').modal('show');
// });

// Get Hostname and location

// insert script here
// https://www.w3schools.com/js/js_window_location.asp

//QR-code/Ruutkoodi genereerimine
//Siin saab saab 

let hostname = window.location.hostname;

//test muutujad
let reino_lp_url = "www.ristissaar.ee/hpp/rollid/linnaplaneerija/";

//let lp_url = hostname + ":5500/rollid/linnaplaneerija/";
let i_url = hostname + ":5500/rollid/investor/";
let sn_url = hostname + ":5500/rollid/sotsiaalnounik/";
let lkb_url = hostname + ":5500/rollid/looduskaitsebioloog/";
let kva_url = hostname + ":5500/rollid/kinnisvaraarendaja/";
let kd_url = hostname + ":5500/rollid/koolidirektor/";
let ake_url = hostname + ":5500/rollid/aktiivne_linnaelanik/";

let urls = [i_url, sn_url, lkb_url, kva_url, kd_url, ake_url];

//Peab olema on load muidu ei tööta.
$(window).on('load',function(){

  urls.forEach(makeQRCode);

  function makeQRCode(item, index) {
    let qrcode = new QRCode(document.getElementById("qrcode_"+index), {
      text: item,
      width: 200,
      height: 200
    });
  }
});