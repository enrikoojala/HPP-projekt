$(window).on('load',function(){
    // When the HTML Body element will load it will display introductionModal
    // $('#introductionModal').modal('show');

  //Hetkel andmete timer. Tuleb teha funktsioonides muudatusi kui tahame teha dünaamilisemaks teiste lehtede jaoks ka VB.
  function countdown(seconds) {
    seconds = parseInt(sessionStorage.getItem("seconds")) || seconds;
    //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab. 
    //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
    //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.

    function tick() {
      seconds--;
      //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi. 
      //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
      sessionStorage.setItem("seconds", seconds)
      var counter = document.getElementById("timer_1");
      var current_minutes = parseInt(seconds/60);
      var current_seconds = seconds % 60;
      
      if(current_minutes < 3){
        //Bootstrap roheline värv
        counter.style.color = "#28a745";
      }
      if(current_minutes < 2){
        //Bootstrap kollane/oranz värv
        counter.style.color = "#ffc107";
      }
      if(current_minutes < 1){
        //Bootstrap punane värv
        counter.style.color = "#dc3545";
      }
      //Andmete välja näitamine html kujul
      counter.innerHTML = current_minutes + ":" + (current_seconds < 10 ? "0" : "") + current_seconds;
      if( seconds > 0 ) {
        setTimeout(tick, 1000);
      }
      if(seconds <= 0){
        $("#andmedTimerModal").modal("show");
      }
    }
    tick();
  }
  countdown(180);

// Get Cityname and Population
// var cityName = document.getElementById("cityName").value;
// var population = document.getElementById("population").value;


//QR-code/Ruutkoodi genereerimine

// Get Hostname and port
// let hostname = window.location.hostname;
// let port = window.location.port;

// if (port = 5500) {
//   port = ':' + port;
// }
});