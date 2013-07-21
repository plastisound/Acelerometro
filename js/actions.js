//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
    var watchID=null;
    //Acelerometro
    $('#acelerometro .individual li').tap(function(){
        if($(this).index()==0){//Boton iniciar
            function onSuccess(acceleration) {
                $('#acelerometro h2').html('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 500 };  // Update every 3 seconds

 watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }else{//Boton Detener
            if (watchID){
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
                $('#acelerometro h2').html('Detenido');
            }
        }
    });
});