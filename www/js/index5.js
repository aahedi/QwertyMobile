/*document.onkeydown = function (e) {
        if(e.which == 32){
                return false;
        }
}*/

function jmla(){
var a1 = document.getElementById('kode').value
document.getElementById('pesan').value = a1
}

		function onLoad() {
            if(( /(ipad|iphone|ipod|android)/i.test(navigator.userAgent) )) {
                document.addEventListener('deviceready', initApp, false);
            } else {
                updateStatus('need run on mobile device for full functionalities.');
            }
        }

        // we will restore the intercepted SMS here, for later restore
        var smsList = [];
        var interceptEnabled = false;

        function initApp() {
        	if (!SMS ) { alert( 'SMS plugin not ready' ); return; }
        	
            document.addEventListener('onSMSArrive', function(e){
            	var data = e.data;
            	smsList.push( data );
            	
            	updateStatus('SMS arrived, count: ' + smsList.length );
            	
            	var divdata = $('div#data');
            	divdata.html( divdata.html() + JSON.stringify( data ) );
            	
            });
        }
        
        function sendSMS(sendto,pesanku) {
			
var a1 = document.getElementById('kode').value
    if (a1 == null || a1 == "") {
        alert("Semua harus diisi");
        return false;
    }
	else{
			var textmsg = pesanku;
			
        	if(sendto.indexOf(";") >=0) {
        		sendto = sendto.split(";");
        		for(i in sendto) {
        			sendto[i] = sendto[i].trim();
        		}
        	}
		if (confirm('Anda akan kirim "'+textmsg+'" melalui SMS ke Center:'+document.getElementById('sc').value+'?') == true) {
        	
			if(SMS) SMS.sendSMS(sendto, textmsg, function(){}, function(str){alert(str);});
			
			alert('Perintah "'+textmsg+'" telah dikirim');
        }
	}
}				
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function removeSpaces(string) {
	return string.split(' ').join('');
	return string.replace(/^\s+|\s+$/gm,'');
}

function buka(url){
	//window.open(url, '_blank', 'location=no,toolbar=no','closebuttoncaption=Return');
	window.location.href= url;
}