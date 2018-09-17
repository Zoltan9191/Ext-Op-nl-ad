var i=0;
elementExist();
function elementExist() {
  if (document.getElementById('embedbtn') != null) {
    findUrl(); 
  }
  else if(i<20) {  
    // console.log('loading...');
	 i++;
	 setTimeout(elementExist, 2000);
  }
}	

var url, urlShort;
var message = "your url below";
function findUrl() {
	console.log("extension loaded");
	document.getElementById('videooverlay').click();
	url = document.getElementById('olvideo_html5_api').src;
	//console.log(url);
	urlShort = url.split("?")[0];
}


chrome.runtime.sendMessage({
  from:    'showUrl',
  subject: 'showPageAction'
});


chrome.runtime.onMessage.addListener(function (msg, sender, response) {

  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo') && url != null) {
   
    var domInfo = {
	  message:  message,
	  url:      url,
	  urlShort: urlShort
    };
	
    response(domInfo);
  }
});