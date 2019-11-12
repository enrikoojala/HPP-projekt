// Get Hostname and port
let hostname = window.location.hostname;
let port = window.location.port;

//lokaal testimise jaoks.
if (port = 5500) {
  port = ':' + port;
}

let i_url = hostname + port + "/rollid/investor/";
let sn_url = hostname + port + "/rollid/sotsiaalnounik/";
let lkb_url = hostname + port + "/rollid/looduskaitsebioloog/";
let kva_url = hostname + port + "/rollid/kinnisvaraarendaja/";
let kd_url = hostname + port + ":/rollid/koolidirektor/";
let ake_url = hostname + port + "/rollid/aktiivne_linnaelanik/";

let urls = [i_url, sn_url, lkb_url, kva_url, kd_url, ake_url];

//Peab olema on load muidu ei tööta.
$(window).on('load',function(){

  urls.forEach(makeQRCode);

  function makeQRCode(item, index) {
    let qrcode = new QRCode(document.getElementById("qrcode_"+index), {
      text: item,
      width: 175,
      height: 175
    });
  }
});