// FTV Site Player Support from PTZtv

// Check for desktop/laptop Windows or Mac
function isWindowsNTorMac(ua) {
    return Boolean( ua.match(/Windows NT/i) || ua.match(/Macintosh/i) );
}

// Check for Edge browser
function isEdgeBrowser(ua) {
    return Boolean( ua.match(/Edge/) );
}

// ===== Check for SmartTV =====					 
function isSmartTV(ua) {
    return Boolean(ua.match(/TV/));
}

// ===== Check for GoogleTV =====					 
function isGoogleTV(ua) {
    return Boolean(ua.match(/GoogleTV/i));
}

// ===== Check for Apple iDevice =====					 
function isAppleiDevice(ua) {
    return Boolean( ua.match(/iPhone/i) || ua.match(/iPod/i) || ua.match(/iPad/i) );
}

// ===== Check for Android Device =====					 
function isAndroidDevice(ua) {
    return Boolean( ua.match(/Android/i) );		
}

// ===== Check for Android Version =====					 
function isAndroidVersion(ua, ver) {
    if( ua.indexOf("Android") >= 0 ) {
	      var androidVersion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 

			  return Boolean( androidVersion >= ver ); // test for this ver or greater

    } else return false;
}

// ===== Check for Flash =====
function flashSupported(ua) {

    var urlArg  = window.location.toString();
    var support = false;
							 
    if( urlArg.match(/noflash/i) != null ) return false;

    if( (ua.match(/Windows NT/i) != null) && (! isEdgeBrowser(userAgent)) ) {
	 
	 		  support = true; // force flowplayer test for Flash
			 
    } else if("ActiveXObject" in window) { // IE only
     
        try {
            support = !!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"));
        } catch(e) {
            support = false;
        }
      
    // other browsers
    } else {
 
        support = !!navigator.mimeTypes['application/x-shockwave-flash'];
 
    }
      
    return support;
      
}	

 
function wopen(url, name, w, h, scroll)
{
		var win = window.open(url,
													name, 
													'width=' + w + ', height=' + h + ', ' +
													'location=no, menubar=no, ' +
													'scrollbars=' + scroll + ', ' +
													'status=no, toolbar=no, resizable=yes');
		// win.resizeTo(w, h);
		win.focus();
}

// AJAX
var xmlhttp;
function loadAJAX( url, callback )
{
 		if( window.XMLHttpRequest )	{
				xmlhttp = new XMLHttpRequest();
		}
		else {
			  xmlhttp = new ActiveXObject( "Microsoft.XMLHTTP" );
		}
		xmlhttp.onreadystatechange = callback;				
		xmlhttp.open( "GET", url, true );
		xmlhttp.send();
}

function reset_webcam_list() {
    // document.getElementById('first_option').selected = true;
    return true;
}
					 
function siteSelectLaunch(sel) {
    var value = sel.value;
								
		if( value == "Preview" ) {
		    wopen('http://whatson.ptztv.com/', 'whatson', 800, 450, 'no');
				document.getElementById('first_option').selected = true;
		} else location=value;					 
} 
					 
		        

// ad control
var sovrnClock = null;

function loadSovrn( tag, w, h, target ) {

		if( (document.getElementById( target+"div" ).style.display != "none") && (!IE9orLower) ) {
		 
				 document.getElementById( target+"div" ).innerHTML = '<iframe id="' + target + '" src="ads/s' + tag + '.html" width="' + w + '" height="' + h + '" scrolling="no" frameborder="0" allowTransparency="true" style="border:none; width:' + w + 'px; height:' + h + 'px;"></iframe>';
    }
}

function startSovrn() {
		var sovrnUpdateInterval = 60 * 1000;
		
		if( sovrnClock == null ) {
		    sovrnClock = setInterval('refreshSovrn()', sovrnUpdateInterval);
		}				 
}

function stopSovrn() {
    if( sovrnClock != null ) {
	     clearInterval( sovrnClock );
			 sovrnClock = null;
	  }
}
					 
function refreshSovrn() {
		var addiv1  = document.getElementById('adskyright2div');
		var addiv2  = document.getElementById('adbanner2div');
		var iframe1 = document.getElementById('adskyright2');
		var iframe2 = document.getElementById('adbanner2');
		var refresh1 = 1;
		var refresh2 = 1;
		
		if( addiv1 && addiv1.dataset.reload ) refresh1 = parseInt(addiv1.dataset.reload);
		if( addiv2 && addiv2.dataset.reload ) refresh2 = parseInt(addiv2.dataset.reload);
					
		if( ! IE9orLower ) {
		    if( iframe1 && (refresh1 > 0) ) iframe1.src = iframe1.src;
		    if( iframe2 && (refresh2 > 0) ) iframe2.src = iframe2.src;

				// switch header on this clock
			  if( num_banner_images > 1 ) rotateHeader(num_banner_images);
		}				 
}

// header control
headerBuffer = new Image();
headerBuffer.onload = headerSwapImageBuffer;
					 
function rotateHeader(maxHeadImgNum) {
		var header = document.getElementById("headimg");
		// var n = parseInt( (Math.random() * 100000) % maxHeadImgNum) + 1;
		var n = 1;

		if( header.dataset ) n = header.dataset.imgNum;
			
		if( ++n > maxHeadImgNum ) n = 1;
		
		headerBuffer.src = "http://cdn." + site_domain + "/images/site_banner_" + n +".jpg";
		header.dataset.imgNum = n;					 
}

function headerSwapImageBuffer() {
			 document.getElementById('headimg').src = headerBuffer.src;
}
									
// viewer count function
function viewerCountUpdate() {
	  var theDate = new Date();
	
	  loadAJAX( seeViewerCount + "?" + parseInt(theDate.getTime() / viewerCountUpdateInterval),
		          function() {
    					    if( (xmlhttp.readyState == 4) && (xmlhttp.status == 200) ) document.getElementById('visitorcounter').innerHTML = xmlhttp.responseText;
    					}							
	  );
	
}

// players...
function loadPlayers() {

	  // Audio Player 1
		if( audio_stream_1 ) {
		
		    var audio_1_container = document.getElementById("audioplayer_1");
				
				document.getElementById("audioname_1").innerHTML = a1_type;
				
				if( a1_provider == 'ptztv' ) { // live stream

						audio_1_api = flowplayer(audio_1_container, {
					
							key: fp_key,
							audio: true,
							ratio: false,
																												
							clip: {
										live: true,
										audioOnly: true,
        						sources: [
              							 { type: "application/x-mpegurl",
                						 	 src:  "http://" + serverName + "/" + hlsApp + "/" + audio_stream_1 + "/playlist.m3u8" + audio_stream_1_suffix }
        						]
    					}
							
						});
																									 
				
		    } else { // MP3

			      audio_1_api = flowplayer(audio_1_container, {
					
							key: fp_key,
							audio: true,
							ratio: false,
							
							clip: {
										live: a1_live,
										audioOnly: true,
										loop: true,
        						sources: [
              							 { type: "audio/mp3",
                						 	 src:  audio_stream_1 }
        						]
    					}																															 

						});
				

        }

				audio_1_api.on('error', function(e, api, error) {
						var error_msg = audio_1_container.getElementsByClassName("fp-message");

		        if (error.code === 2 || error.code === 4) {
							 error_msg[0].innerHTML = "OFFLINE";
						} else {
						   error_msg[0].innerHTML = "ERROR";
						}
				});	

    }
	 
	  // Audio Player 2
		if( audio_stream_2) {

		    var audio_2_container = document.getElementById("audioplayer_2");

				document.getElementById("audioname_2").innerHTML = a2_type;
								
				if( a2_provider == 'ptztv' ) { // Live stream

			      audio_2_api = flowplayer(audio_2_container, {
					
							key: fp_key,
							audio: true,
							ratio: false,
																																			
							clip: {
										live: true,
										audioOnly: true,
        						sources: [
              							 { type: "application/x-mpegurl",
                						 	 src:  "http://" + serverName + "/" + hlsApp + "/" + audio_stream_2 + "/playlist.m3u8" + audio_stream_2_suffix }
        						]
    					}
							
						});
				
				} else { // MP3
				
			      audio_2_api = flowplayer(audio_2_container, {
					
							key: fp_key,
							audio: true,
							ratio: false,
																														
							clip: {
										live: a2_live,
										audioOnly: true,
										loop: true,
        						sources: [
              							 { type: "audio/mp3",
                						 	 src:  audio_stream_2 }
        						]
    					}																															 

						});	

        }

				audio_2_api.on('error', function(e, api, error) {
						var error_msg = audio_2_container.getElementsByClassName("fp-message");

		        if (error.code === 2 || error.code === 4) {
							 error_msg[0].innerHTML = "OFFLINE";
						} else {
						   error_msg[0].innerHTML = "ERROR";
						}
				});	

    }
	 				 
	  // video player
		if( webcam_stream ) {
		
		    var video_1_container = document.getElementById("videoplayer_1");

	      video_1_api = flowplayer(video_1_container, {
			
					key: fp_key,
					fullscreen: false,
					embed: false,
					chromecast: false,
					facebook: site_domain,
					twitter: "http://" + site_domain,
																												
					clip: {
								live: true,
    						sources: [
          							 { type: "application/x-mpegurl",
            						 	 src:  "http://" + serverName + "/" + hlsApp + "/" + stream_prefix + webcam_stream + "/playlist.m3u8" + webcam_stream_suffix }
    						]
  					}																															 

				});				
				

  			video_1_api.on('load resume', function() {
				    initTimeout();
				});	
								
  			video_1_api.on('pause', function() {
				    cancelTimeout();
				});	

				video_1_api.on('error', function(e, api, error) {
						var error_msg = video_1_container.getElementsByClassName("fp-message");

		        if (error.code === 2 || error.code === 4) {
							 error_msg[0].innerHTML = "Very sorry, this live video stream is currently unavailable.";
						} else {
						   error_msg[0].innerHTML = "Oops, we seem to have experienced error #" + error.code;
						}
				});	

		}
		
}

// Change cam stream
function playCam(n) {
    webcam_num = n;
		webcam_stream = webcam_streams[ webcam_num ];
		webcam_stream_suffix = webcam_suffixs[ webcam_num ];
		seeViewerCount = viewer_counts[ webcam_num ];

		if( okayToPlay ) {
			
				document.getElementById('videoplayer_1').style.backgroundImage = "none";

		    video_1_api.one("pause", function(e, api) {
				
    				api.load( {
                  						live: true,
                      				sources: [
                            					 { type: "application/x-mpegurl",
                              				 	 src:  "http://" + serverName + "/" + hlsApp + "/" + stream_prefix + webcam_stream + "/playlist.m3u8" + webcam_stream_suffix }
                      				]
															
    				}).on("ready", function(e, api) { api.resume() });
				});

				video_1_api.pause();
		}
		
		viewerCountUpdate();
}	
		
														 
function stopPlayer() {

		if( video_1_api ) video_1_api.unload();
		if( audio_1_api ) audio_1_api.unload();
		if( audio_2_api ) audio_2_api.unload();
		
	  stopSovrn();
}

function initTimeout() {
	
	  if( ! timeoutPending ) {
			  timeoutPending = true;
			  timeoutID = setTimeout( 'handleTimeout()', webcamTimeout );

	      startSovrn();
		}

}

function cancelTimeout() {

		 if( timeoutPending ) {
		 		 clearTimeout( timeoutID );
				 timeoutID = null;
				 timeoutPending = false;

				 stopSovrn();
		 }
}


function handleTimeout() {

	  timeoutPending = false;
		
    document.getElementById("root").style.opacity = 0.25;
    document.getElementById("mbox").style.display = "block";
    
    timeoutID = setTimeout('weTimedOut()', 30000 );
    
    document.getElementById("message_1").innerHTML = '<img src="http://cdn.' + site_domain + '/images/iewidetile.png" alt="">';

    document.getElementById("message_2").innerHTML = '<br>If you are still watching...'
                                                   + '<br><br>'
    																				 		   + '<button class="message-box-button" type="button" onclick="resetTimeout()" >CLICK HERE</button>';


}

function resetTimeout() {

    if( timeoutID !== false ) clearTimeout( timeoutID );
    document.getElementById("mbox").style.display = "none";
    document.getElementById("root").style.opacity = 1.0;				 				 
    
    initTimeout();
}

function weTimedOut() {

    if( viewerCountID !== false ) clearInterval( viewerCountID );
    if( weatherUpdateID !== false ) clearInterval( weatherUpdateID );
				
		document.getElementById("root").style.opacity = 0.1;
    document.getElementById("mbox").style.display = "block";
				
		if( document.getElementById("trafficmapdiv") ) document.getElementById("trafficmapdiv").innerHTML = "";
		if( document.getElementById("twitterblock")  ) document.getElementById("twitterblock").innerHTML = "";
										
    stopPlayer();
    
    document.getElementById("message_1").innerHTML = '<img src="http://cdn.' + site_domain + '/images/iewidetile.png" alt="">';
		
    document.getElementById("message_2").innerHTML = 'Your session has timed out...'
                                                   + '<br>'
    																				       + '<button class="message-box-button" type="button" onclick="location.reload()" >RESTART</button>'
    																					     + '<br><br>'
    																					     + 'Like to avoid these timeouts...'
    																					     + '<br>'
    																				       + '<button class="message-box-button" type="button" onclick="tryPremium()">Try PTZtv PREMIUM</button>';
}

function tryPremium() {
    location.href = "http://PTZtvPremium.com/";
}

// onload start here
var viewerCountID = false;
				 
function loadCheck() {
		var htmlLeftLen    = document.getElementById('adskyleftdiv').innerHTML.length;
		var htmlRightLen   = document.getElementById('adskyrightdiv').innerHTML.length;
		var htmlBottomLen  = document.getElementById('adbannerdiv').innerHTML.length;

		// alert( "Left = " + htmlLeftLen ); alert( "Right = " + htmlRightLen ); alert( "Bottom = " + htmlBottomLen );																								
		if(     ( ((htmlLeftLen <= adLeftLen) && (htmlRightLen <= adRightLen) && (htmlBottomLen <= adBottomLen)) || (typeof PTZtv === "undefined") )
				&&  ( userAgent.match(/bot|crawler|spider|crawling/i) == null )
			) {

				var video_1_container = document.getElementById("videoplayer_1");
				var play_button = video_1_container.getElementsByClassName("fp-play");

     		play_button[0].className = "hide";
        
				if( video_1_api ) video_1_api.shutdown();
				if( audio_1_api ) audio_1_api.shutdown();
				if( audio_2_api ) audio_2_api.shutdown();
								
				okayToPlay = false;

				document.getElementById('videoplayer_1').style.backgroundImage = "url('http://cdn." + site_domain + "/slideshow/welcome_faq.jpg')";
				
				setTimeout( function(){ location = 'http://PTZtv.com/premium/redirect/' }, 10000 );				
						
				return false;
						
		} else {
		
		    okayToPlay = true;
				
    		viewerCountUpdate();
				viewerCountID = setInterval('viewerCountUpdate()', viewerCountUpdateInterval);
				
				if( typeof sessionTimeout !== 'undefined' ) setTimeout('weTimedOut()', sessionTimeout );
				
				return true;
		}
}

// handle orientation

var initialOrientation = Math.abs(window.orientation);

function onOrientationChange() {

    switch(window.orientation) {
      case  90 :
	    case -90 :
	      // landscape 
        if( initialOrientation != 90 )location.reload();
        break;
			default:
			  break; 
    }
}
  
window.addEventListener('orientationchange', onOrientationChange);
		

