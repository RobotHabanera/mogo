/* Google maps API czyli zainicjowanie mapy google na stronie */

	function initMap() {
        var uluru = {lat:-7.973660, lng: 112.663896};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


		window.onload = initMap;   
     