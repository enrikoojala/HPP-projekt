// Get Cityname and Population
// var cityName = document.getElementById("cityName").value;
// var population = document.getElementById("population").value;


//QR-code/Ruutkoodi genereerimine
//Siin saab saab 

// Get Hostname and port

let hostname = window.location.hostname;
let port = window.location.port;

if (port = 5500) {
  port = ':' + port;
}

//test muutujad
let reino_lp_url = "www.ristissaar.ee/hpp/rollid/linnaplaneerija/";

//let lp_url = hostname + ":5500/rollid/linnaplaneerija/";
let i_url = hostname + port + "/rollid/investor/";
let sn_url = hostname + port + "/rollid/sotsiaalnounik/";
let lkb_url = hostname + port + "/rollid/looduskaitsebioloog/";
let kva_url = hostname + port + "/rollid/kinnisvaraarendaja/";
let kd_url = hostname + port + ":/rollid/koolidirektor/";
let ake_url = hostname + port + "/rollid/aktiivne_linnaelanik/";

let urls = [i_url, sn_url, lkb_url, kva_url, kd_url, ake_url];

//Peab olema on load muidu ei tööta.
$(window).on('load',function(){

  // When the HTML Body element will load it will display a message in a modal box
  //$('#introductionModal').modal('show');

  urls.forEach(makeQRCode);

  function makeQRCode(item, index) {
    let qrcode = new QRCode(document.getElementById("qrcode_"+index), {
      text: item,
      width: 175,
      height: 175
    });
  }
});