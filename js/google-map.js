function loadMap(){
	var mapOption = {
		center:new google.maps.LatLng(48.956281, 2.342564),
		zoom:15,
		mapTypeControl:false,
		streetViewControl:true,
		zoomControl:false
	};

	var map = new google.maps.Map(document.getElementById("map"),mapOption);

	var marker = new google.maps.Marker({
		position:new google.maps.LatLng(48.956281, 2.342564),
		map:map
	});
};

google.maps.event.addDomListener(window,'load',loadMap);