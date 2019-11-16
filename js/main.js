$(window).on('load', function() {
  // console.log("Protocol: " + location.protocol);
  // console.log("Host: " + location.hostname);
  // console.log("Port: " + location.port);
  // console.log("URL: " + location.href);

  var fileName = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  );

  if (fileName == 'cityname_and_population.html') {
    function countdown(seconds) {
      seconds = parseInt(sessionStorage.getItem('seconds')) || seconds;
      //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab.
      //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
      //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.

      function tick() {
        seconds--;
        //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi.
        //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
        sessionStorage.setItem('seconds', seconds);
        let counter = document.getElementById('timer_1');
        let current_minutes = parseInt(seconds / 60);
        let current_seconds = seconds % 60;

        if (current_minutes < 3) {
          //Bootstrap roheline värv
          counter.style.color = '#28a745';
        }
        if (current_minutes < 2) {
          //Bootstrap kollane/oranz värv
          counter.style.color = '#ffc107';
        }
        if (current_minutes < 1) {
          //Bootstrap punane värv
          counter.style.color = '#dc3545';
        }

        //Andmete välja näitamine html kujul
        counter.innerHTML =
          current_minutes +
          ':' +
          (current_seconds < 10 ? '0' : '') +
          current_seconds;
        if (seconds > 0) {
          setTimeout(tick, 1000);
        }
        if (seconds <= 0) {
          $('#andmedTimerModal').modal('show');
        }
      }
      tick();
    }
    countdown(180);

    
    //Linnanime ja rahvaarvu salvestamine
    document.getElementById("submit").addEventListener("click", saveData);
    function saveData() {
      let cityName = document.getElementById('cityName').value;
      let population = document.getElementById('population').value;

      sessionStorage.setItem('cityName', cityName);
      sessionStorage.setItem('population', population);

      return true;
    }
  }

  if (fileName == 'city_planner.html') {
    document.getElementById('rollidLinnaplaneerijaID').innerHTML =
      'www.' + location.hostname + '/rollid/linnaplaneerija/';
  }

  if (fileName == 'gameboard.html') {
    // When the HTML Body element will load gameboard.html, introductionModal will be displayed
    $('#introductionModal').modal('show');

    //Linnanime ja rahvaarvu kättesaamine.
    let cityNameShow = sessionStorage.getItem('cityName');
    let populationShow = sessionStorage.getItem('population');

    document.getElementById('cityName').innerHTML = cityNameShow;
    document.getElementById('population').innerHTML = populationShow;

    document.getElementsByTagName('Title')[0].text =
      cityNameShow + ' Elukeskkonna planeerimine';

      function countdown(seconds) {
        seconds = parseInt(sessionStorage.getItem('Timer 2')) || seconds;
        //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab.
        //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
        //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.
  
        function tick() {
          seconds--;
          //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi.
          //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
          sessionStorage.setItem('Timer 2', seconds);
          let timer_2 = document.getElementById('timer_2');
          let current_minutes = parseInt(seconds / 60);
          let current_seconds = seconds % 60;
  
          // if (current_minutes < 3) {
          //   //Bootstrap roheline värv
          //   timer_2.style.color = '#28a745';
          // }
          // if (current_minutes < 2) {
          //   //Bootstrap kollane/oranz värv
          //   timer_2.style.color = '#ffc107';
          // }
          // if (current_minutes < 1) {
          //   //Bootstrap punane värv
          //   timer_2.style.color = '#dc3545';
          // }
  
          //Andmete välja näitamine html kujul
          timer_2.innerHTML =
            current_minutes +
            ':' +
            (current_seconds < 10 ? '0' : '') +
            current_seconds;
          if (seconds > 0) {
            setTimeout(tick, 1000);
          }
          if (seconds == 10) {
            $('#halfTimeModal').modal('show');
          }
          if (seconds <= 0) {
            $('#gameOverModal').modal('show');
          }
        }
        tick();
      }
      countdown(20);
  }

  // //Hetke asukoht URL'is.
  // let x = location.href;

  // let cname_popUrl = location.protocol + location.hostname + location.port + "/cityname_and_population.html";
  // let gameboardURL = location.protocol + location.hostname + location.port + "/gameboard.html";

  //   //Hetkel andmete timer. Tuleb teha funktsioonides muudatusi kui tahame teha dünaamilisemaks teiste lehtede jaoks ka VB.
  //   //kui urlid kattuvad, siis läheb kood tööle, cityname_and_population.html lehel.
  //   if(cname_popUrl == x) {

  //     function countdown(seconds) {
  //       seconds = parseInt(sessionStorage.getItem("seconds")) || seconds;
  //       //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab.
  //       //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
  //       //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.

  //       function tick() {
  //         seconds--;
  //         //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi.
  //         //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
  //         sessionStorage.setItem("seconds", seconds)
  //         let counter = document.getElementById("timer_1");
  //         let current_minutes = parseInt(seconds/60);
  //         let current_seconds = seconds % 60;

  //         if(current_minutes < 3){
  //           //Bootstrap roheline värv
  //           counter.style.color = "#28a745";
  //         }
  //         if(current_minutes < 2){
  //           //Bootstrap kollane/oranz värv
  //           counter.style.color = "#ffc107";
  //         }
  //         if(current_minutes < 1){
  //           //Bootstrap punane värv
  //           counter.style.color = "#dc3545";
  //         }

  //         //Andmete välja näitamine html kujul
  //         counter.innerHTML = current_minutes + ":" + (current_seconds < 10 ? "0" : "") + current_seconds;
  //         if( seconds > 0 ) {
  //           setTimeout(tick, 1000);
  //         }
  //         if(seconds <= 0){
  //           $("#andmedTimerModal").modal("show");
  //         }
  //       }
  //       tick();
  //     }
  //     countdown(180);

  //     document.getElementById("submit").addEventListener("click", saveData);

  //     //Linnanime ja rahvaarvu salvestamine
  //     function saveData(){
  //       let cityName = document.getElementById("cityName").value;
  //       let population = document.getElementById("population").value;

  //       sessionStorage.setItem("cityName", cityName);
  //       sessionStorage.setItem("population", population);

  //       return true;
  //     }

  //   }

  //   //Kood läheb tööle gameboard.html lehel.
  //   if(gameboardURL == x){

  //     //Linnanime ja rahvaarvu kättesaamine.
  //     let cityNameShow = sessionStorage.getItem("cityName");
  //     let populationShow = sessionStorage.getItem("population");

  //     document.getElementById("cityName").innerHTML = cityNameShow;
  //     document.getElementById("population").innerHTML = populationShow;

  //     document.getElementsByTagName("Title")[0].text = cityNameShow + " Elukeskkonna planeerimine";
  //   }
});
