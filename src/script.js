var debugMode = true;
var luresList = ['Fånga', 'Mata', 'Klappa'];
var targetLat = 55.704053;
var targetLong = 13.238263;
var trackingInterval;


DomReady.ready(function () {
    setUpNewGame();
     
});


function setUpNewGame(){
    debugOut("Up and running");
    generateInput(3);
    trackingInterval = setInterval(findDistanceToMonster, 500);
}

function debugOut(str){
    if(debugMode){
        console.log(str);
    }
}

function findDistanceToMonster(){
    getLocation();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        debugOut("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
  var theDist =  getDistanceFromLatLonInKm( position.coords.latitude, position.coords.longitude, targetLat, targetLong);
   demo.innerHTML =(theDist * 1000) + ' meters';
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km

  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function capture(item){
    getLocation();
    debugOut(item['id']);
}



function generateInput(howMany){
    var i=0;
    var codeSnippet = "";
    for(i; i<howMany; i++){
        codeSnippet += "<button id='lureButton" + i + "' class='inputBtn' onclick='capture(this)'>" + luresList[i] + "</div> \n";
    }
    document.getElementById("captureBtns").innerHTML = codeSnippet;
}

function testRandomInt(howMany, theMax){
    for(var i = 0; i < howMany; i++){
         document.getElementById("demo").innerHTML += getRandomInt(theMax) + " ";
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
