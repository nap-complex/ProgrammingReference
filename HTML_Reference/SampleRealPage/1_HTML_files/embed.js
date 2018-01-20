(function() {

	if ("https:" == document.location.protocol) {
		/* secure */
		var src = 'https://www.marinetraffic.com/';
	} else {
		/* unsecure */
		var src = 'http://www.marinetraffic.com/';
	}

	if ((window.latitude === undefined) && (window.longitude === undefined) && ( (window.fleet !== undefined && window.fleet != "") || (window.fleet_id !== undefined && window.fleet_id != ""))) {
		window.latitude = 0;
		window.longitude = 0;
	}

	if (typeof window.mtembedcode != "undefined") {
		var overridenLatLon = '';
		if(window.latitude !== undefined && window.latitude != ''  && window.longitude !== undefined && window.longitude != ''){
			if(window.zoom === undefined){
				window.zoom = 3;
			}
			overridenLatLon = '/zoom:' + ((window.zoom === undefined) ? '' : zoom) + '/centery:' + ((window.latitude === undefined) ? '' : latitude) + '/centerx:' + ((window.longitude === undefined) ? '' : longitude);
		}
		document.write(
			'<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/customembed' + overridenLatLon + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + ((window.trackimo !== undefined) ? '/trackimo:' + window.trackimo : '') + '/mtembedcode:'  + window.mtembedcode + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n'
		);
	} else {
		document.write(
			'<iframe name="marinetraffic" id="marinetraffic"' + ' width="' + ((window.width === undefined) ? '550' : width) + '"' + ' height="' + ((window.height === undefined) ? '300' : height) + '"' + ' scrolling="no" frameborder="' + ((window.border === undefined) ? '0' : border) + '"' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/embed' + '/zoom:' + ((window.zoom === undefined) ? '3' : zoom) + '/centery:' + ((window.latitude === undefined) ? '36' : latitude) + '/centerx:' + ((window.longitude === undefined) ? '23' : longitude) + '/maptype:' + ((window.maptype === undefined) ? '4' : maptype) + '/shownames:' + ((window.shownames === undefined) ? 'false' : shownames) + '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) + '/shipid:' + ((window.trackshipid === undefined) ? '0' : trackshipid) + '/fleet:' + ((window.fleet === undefined) ? '' : fleet) + '/fleet_id:' + ((window.fleet_id === undefined) ? '' : fleet_id) + '/vtypes:' + ((window.vtypes === undefined) ? '' : vtypes) + '/showmenu:' + ((window.showmenu === undefined) ? '' : showmenu) + '/remember:' + ((window.remember === undefined) ? 'false' : remember) + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n'
		);
	}



})()
