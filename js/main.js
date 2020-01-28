// Get the filename of HTML files
var fileName = window.location.pathname.substring(
  window.location.pathname.lastIndexOf('/') + 1
);

//Need to this outside of window.load, because global scope
if (fileName == "roles.html"){
  //adds a visited class on each clicked role card
  function addVisitedClass(clickedCardID) {
    document.getElementById(clickedCardID).classList.add('visited');
  }
}

$(window).on('load', function() {
  // Get Hostname and port
  let host = location.host;
  let protocol = location.protocol;

  // Player Role Card path
  let linnaplaneerijaPath = '/rollid/planeerija';
  let investorPath = '/rollid/investor/';
  let sotsiaalnounikPath = '/rollid/nounik/';
  let looduskaitsebioloogPath = '/rollid/bioloog/';
  let kinnisvaraarendajaPath = '/rollid/arendaja/';
  let koolidirektorPath = '/rollid/dire/';
  let aktiivneLinnaelanikPath = '/rollid/elanik/';

  // Create Player Role URL based on
  // protocol, host and Player Role Card path
  let linnaplaneerijaUrl = protocol + '//' + host + linnaplaneerijaPath;
  let investorUrl = protocol + '//' + host + investorPath;
  let sotsiaalnounikUrl = protocol + '//' + host + sotsiaalnounikPath;
  let looduskaitsebioloogUrl = protocol + '//' + host + looduskaitsebioloogPath;
  let kinnisvaraarendajaUrl = protocol + '//' + host + kinnisvaraarendajaPath;
  let koolidirektorUrl = protocol + '//' + host + koolidirektorPath;
  let aktiivneLinnaelanikUrl = protocol + '//' + host + aktiivneLinnaelanikPath;

  /**
  * If in a specific HTML page, then run script
  * cityname_population_cityplanner.html
  */

  if (fileName == 'cityname_population_cityplanner.html') {

    let cityNameStorage = sessionStorage.getItem('cityName');
    let populationStorage = sessionStorage.getItem('population');
    let submitDataBtn = document.getElementById('submitData');

    // if 'cityName' is empty or null then button has "Salvesta" text, if there is 'cityName' then button text changes to "Muuda"
    if (cityNameStorage == '' || cityNameStorage == null) {
      submitDataBtn.innerHTML = "Salvesta";
    } else {
      submitDataBtn.innerHTML = "Muuda";
    }

    document.getElementById(
      'rollidLinnaplaneerijaID'
    ).innerHTML = linnaplaneerijaUrl;
    
    new QRCode(document.getElementById('qrcode_0'), {
        text: linnaplaneerijaUrl,
        width: 175,
        height: 175
    });
    
    function countdown(seconds) {
      seconds = parseInt(sessionStorage.getItem('Timer 1')) || seconds;
      //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab.
      //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
      //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.

      function tick() {
        seconds--;
        //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi.
        //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
        sessionStorage.setItem('Timer 1', seconds);
        let counter = document.getElementById('timer_1');
        let current_minutes = parseInt(seconds / 60);
        let current_seconds = seconds % 60;

        if (current_minutes < 3) {
          //Bootstrap green color
          counter.style.color = '#28a745';
        }
        if (current_minutes < 2) {
          //Bootstrap orange color
          counter.style.color = '#ffc107';
        }
        if (current_minutes < 1) {
          //Bootstrap red color
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
          $('#andmedTimerModal').modal({backdrop: 'static', keyboard: false, show: true});
        }
    
        /**
          * If sessionStorage Item 'cityName' has value AND isn't empty
          * input fields 'cityName' / 'population' will be disabled
          * and 'alertSaved' will be shown.
          * Since button text has changed to "Muuda", which can be clicked again to change cityName and population values
          * Else the input fields 'cityName' / 'population' will be enabled and 'alertSaved' will not be shown.
        */
        
        if (cityNameStorage != null && cityNameStorage != '') {
          document.getElementById('cityName').readOnly = true;
          document.getElementById('cityName').placeholder = cityNameStorage;
          document.getElementById('population').readOnly = true;
          document.getElementById('population').placeholder = populationStorage;
          document.getElementById('alertSaved').style.display = "block";
          document.getElementById('nextPageBtn').classList.remove("disabled");
        } else{
          document.getElementById('cityName').readOnly = false;
          document.getElementById('population').readOnly = false;     
          document.getElementById('alertSaved').style.display = "none";
          document.getElementById('nextPageBtn').classList.add("disabled");
        }
  
      }
      tick();
    }
    countdown(180);

    /**
     * Saving cityName and population to sessionStorage
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
     */

    submitDataBtn.addEventListener('click', saveData);
    
    function saveData() {

      let cityName = document.getElementById('cityName').value;
      let population = document.getElementById('population').value;

      if (cityName != '' && population != ''){
        sessionStorage.setItem('cityName', cityName);
        sessionStorage.setItem('population', population);

        return true;
      } else {
        sessionStorage.setItem('cityName', '');
        sessionStorage.setItem('population', '');
      }
    }
  }


  /**
  * If in a specific HTML page, then run script
  * roles.html
  */
  if (fileName == 'roles.html') {
    document.getElementById('rollidInvestorID').innerHTML = investorUrl;
    document.getElementById('rollidSotsiaalnounikID').innerHTML = sotsiaalnounikUrl;
    document.getElementById('rollidLooduskaitsebioloogID').innerHTML = looduskaitsebioloogUrl;
    document.getElementById('rollidKinnisvaraarendajaID').innerHTML = kinnisvaraarendajaUrl;
    document.getElementById('rollidKoolidirektorID').innerHTML = koolidirektorUrl;
    document.getElementById('rollidAktiivneLinnaelanikID').innerHTML = aktiivneLinnaelanikUrl;

    let urls = [
      investorUrl,
      sotsiaalnounikUrl,
      looduskaitsebioloogUrl,
      kinnisvaraarendajaUrl,
      koolidirektorUrl,
      aktiivneLinnaelanikUrl
    ];

    urls.forEach(makeQRCode);

    function makeQRCode(item, index) {
      new QRCode(document.getElementById('qrcode_' + index), {
        text: item,
        width: 175,
        height: 175
      });
    }
    
    
    

    function countdown(seconds) {
      seconds = parseInt(sessionStorage.getItem('Timer 2')) || seconds;

      function tick() {
        seconds--;
        sessionStorage.setItem('Timer 2', seconds);
        let counter = document.getElementById('timer_2');
        let current_minutes = parseInt(seconds / 60);
        let current_seconds = seconds % 60;

        if (current_minutes < 10) {
          //Bootstrap green color
          counter.style.color = '#28a745';
        }
        if (current_minutes < 5) {
          //Bootstrap orange color
          counter.style.color = '#ffc107';
        }
        if (current_minutes < 1) {
          //Bootstrap red color
          counter.style.color = '#dc3545';
        }

        counter.innerHTML =
          current_minutes +
          ':' +
          (current_seconds < 10 ? '0' : '') +
          current_seconds;
        if (seconds > 0) {
          setTimeout(tick, 1000);
        }
        if (seconds <= 0) {
          $('#kaardiValimiseTimerModal').modal({backdrop: 'static', keyboard: false, show: true});
        }

        //All roles need to clicked at least once for the "Edasi" button to go active
        if (document.querySelectorAll('.visited').length > 5) {
          document.getElementById('rolesPageBtn').classList.remove("disabled");
        }

      }
      tick();
    }
    countdown(600);

  }


  /**
  * If in a specific HTML page, then run script
  * gameboard.html
  */
  if (fileName == 'gameboard.html') {

    // When the HTML Body element will load gameboard.html, introductionModal will be displayed
    $('#introductionModal').modal({backdrop: 'static', keyboard: false, show: true}); // show/hide

    /**
     * Getting cityName and population from sessionStorage
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
     */

    let cityNameShow = sessionStorage.getItem('cityName');
    let populationShow = sessionStorage.getItem('population');

    document.getElementById('cityName').innerHTML = cityNameShow;
    document.getElementById('population').innerHTML = populationShow;

    document.getElementsByTagName('Title')[0].text =
      cityNameShow + ' Elukeskkonna planeerimine';

    function countdown(seconds) {
      seconds = parseInt(sessionStorage.getItem('Timer 3')) || seconds;
      //Kui on sekundeid mälus siis sessionStorage.getItem() need üles leiab.
      //Kui pole, siis hakkab originaal 180 sekundit alla poole tiksuma.
      //Kui timer on jooksnud 0:00, siis refresh alustab uuesti otsast peale.

      function tick() {
        seconds--;
        //sessionStorage salvestab hetke aja mällu (alles olevad sekundid) võib teha refresh, minna edasi teistele lehtedele või tagasi.
        //Veebileht tuleb kinni panna, et kaotada mälus olev seis.
        sessionStorage.setItem('Timer 3', seconds);
        let counter = document.getElementById('timer_3');
        let current_minutes = parseInt(seconds / 60);
        let current_seconds = seconds % 60;

        if (current_minutes < 45) {
          //Bootstrap green color
          counter.style.color = '#28a745';
        }
        if (current_minutes < 23) {
          //Bootstrap orange color
          counter.style.color = '#ffc107';
        }
        if (current_minutes < 5) {
          //Bootstrap red color
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
        if (seconds == 1350) {
          $('#halfTimeModal').modal({backdrop: 'static', keyboard: false, show: true});
        }
        if (seconds <= 0) {
          $('#gameOverModal').modal({backdrop: 'static', keyboard: false, show: true});
        }
      }
      tick();
    }
    countdown(2700);

    /**
     * Activate fullscreen / Deactivate fullscreen
     * Button needs to be a link in the menu and Edgse support
     */

    if (document.fullscreenEnabled) {
      var btn = document.getElementById('toggle');

      btn.addEventListener(
        'click',
        function(event) {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        },
        false
      );

      document.addEventListener('fullscreenchange', function(event) {
        console.log(event);

        if (!document.fullscreenElement) {
          btn.innerText = 'Aktiveeri täisekraan';
          document.getElementById('rightColumn').className = "col-3 px-0";
          console.log("Midagi tehti");

        } else {
          btn.innerText = 'Deaktiveeri täisekraan';
          document.getElementById('rightColumn').className = "col-2 px-0";
        }
      });

      document.addEventListener('fullscreenerror', function(event) {
        console.log(event);
      });
    }
  }
});