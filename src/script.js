var debugMode = true;
var luresList = ['Hallon', 'Lakrits', 'Pizza', 'Blod'];
var targetLat = 55.6040152;
var targetLong = 12.9987585;


DomReady.ready(function () {
    setUpNewGame();
});


function setUpNewGame(){
    debugOut("Up and running");
    generateInput(4);
}

function debugOut(str){
    if(debugMode){
        console.log(str);
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        debugOut("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    distance( position.coords.latitude, position.coords.longitude, targetLat, targetLong, "K")
   
}

function showDist(la1,lo2,la3,lo4){
    var theDist = distance


}

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
     demo.innerHTML =(dist * 1000) + ' meters';
	return dist
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