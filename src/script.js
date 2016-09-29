var debugMode = true;
var luresList = ['Hallon', 'Lakrits', 'Pizza', 'Blod']


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
    demo.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
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