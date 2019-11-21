$(window).on('load', function() {

  // Get Hostname and port
  let host = location.host;
  let protocol = location.protocol;
  

  // Player Role Card path
  let linnaplaneerijaPath = "/rollid/linnaplaneerija"
  let investorPath = "/rollid/investor/";
  let sotsiaalnounikPath = "/rollid/sotsiaalnounik/";
  let looduskaitsebioloogPath = "/rollid/looduskaitsebioloog/";
  let kinnisvaraarendajaPath = "/rollid/kinnisvaraarendaja/";
  let koolidirektorPath = "/rollid/koolidirektor/";
  let aktiivneLinnaelanikPath = "/rollid/aktiivne_linnaelanik/";


  // Create Player Role URL base on
  // protocol, host and Player Role Card path
  let linnaplaneerijaUrl = protocol + "//" + host + linnaplaneerijaPath;
  let investorUrl = protocol + "//" + host + investorPath;
  let sotsiaalnounikUrl = protocol + "//" + host + sotsiaalnounikPath;
  let looduskaitsebioloogUrl = protocol + "//" + host + looduskaitsebioloogPath;
  let kinnisvaraarendajaUrl = protocol + "//" + host + kinnisvaraarendajaPath;
  let koolidirektorUrl = protocol + "//" + host + koolidirektorPath;
  let aktiivneLinnaelanikUrl = protocol + "//" + host + aktiivneLinnaelanikPath;


  // Get the filename of HTML files
  var fileName = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1
  );


  // If in a specific HTML page, then run script
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

        // if (current_minutes < 3) {
        //   //Bootstrap roheline värv
        //   counter.style.color = '#28a745';
        // }
        // if (current_minutes < 2) {
        //   //Bootstrap kollane/oranz värv
        //   counter.style.color = '#ffc107';
        // }
        // if (current_minutes < 1) {
        //   //Bootstrap punane värv
        //   counter.style.color = '#dc3545';
        // }

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
    countdown(20);

    
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


  // If in a specific HTML page, then run script
  if (fileName == 'city_planner.html') {
    document.getElementById('rollidLinnaplaneerijaID').innerHTML = linnaplaneerijaUrl;
  }


  // If in a specific HTML page, then run script
  if (fileName == 'cityname_population_cityplanner.html') {
    document.getElementById('rollidLinnaplaneerijaID').innerHTML = linnaplaneerijaUrl;
    let urls = [linnaplaneerijaUrl];

    urls.forEach(makeQRCode);

    function makeQRCode(item, index) {
      let qrcode = new QRCode(document.getElementById("qrcode_"+index), {
        text: item,
        width: 175,
        height: 175
      });
    }

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

        // if (current_minutes < 3) {
        //   //Bootstrap roheline värv
        //   counter.style.color = '#28a745';
        // }
        // if (current_minutes < 2) {
        //   //Bootstrap kollane/oranz värv
        //   counter.style.color = '#ffc107';
        // }
        // if (current_minutes < 1) {
        //   //Bootstrap punane värv
        //   counter.style.color = '#dc3545';
        // }

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
    countdown(20);

  }

  // If in a specific HTML page, then run script
  if (fileName == 'roles.html') {
    document.getElementById('rollidInvestorID').innerHTML = investorUrl;
    document.getElementById('rollidSotsiaalnounikID').innerHTML = sotsiaalnounikUrl;
    document.getElementById('rollidLooduskaitsebioloogID').innerHTML = looduskaitsebioloogUrl;
    document.getElementById('rollidKinnisvaraarendajaID').innerHTML = kinnisvaraarendajaUrl;
    document.getElementById('rollidKoolidirektorID').innerHTML = koolidirektorUrl;
    document.getElementById('rollidAktiivneLinnaelanikID').innerHTML = aktiivneLinnaelanikUrl;

    let urls = [investorUrl, sotsiaalnounikUrl, looduskaitsebioloogUrl, kinnisvaraarendajaUrl, koolidirektorUrl, aktiivneLinnaelanikUrl];

    urls.forEach(makeQRCode);

    function makeQRCode(item, index) {
      let qrcode = new QRCode(document.getElementById("qrcode_"+index), {
        text: item,
        width: 175,
        height: 175
      });
    }
  }

  // If in a specific HTML page, then run script
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


  // IS THIS CODE NEEDED?

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
