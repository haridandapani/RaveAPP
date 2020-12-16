let colors = 2;
let colorsList = [];
let iterator = 0;
let timer;
let roomNumber = -1;

function addColor(){
    colors = colors + 1;
    let wheel = document.createElement("input");
    wheel.type = "color";
    wheel.name = "color" + colors;
    wheel.id = "color" + colors;
    wheel.value = generateRandomColor();
    let labeler = document.createElement("label");
    labeler.for = wheel.id;
    labeler.id = "label" + colors;
    labeler.innerHTML = "Color " + colors +" ";
    let brk = document.createElement("br");
    brk.id = "break"+colors;
    
    document.getElementById("addmore").appendChild(labeler);
    document.getElementById("addmore").appendChild(wheel);
    document.getElementById("addmore").appendChild(brk);  
}

function removeColor(){
    if (colors > 2){
        document.getElementById("color" + colors).remove();
        document.getElementById("label" + colors).remove();
        document.getElementById("break" + colors).remove();
        colors = colors - 1;
    }
}

function formSubmit(event){
    event.preventDefault();
    colorsList = [];
    for (let i = 1; i <= colors; i ++){
        colorsList.push(document.getElementById("color" + i).value);
    }
    //loop(document.getElementById("frequency").value * 1000 / 60);
    document.getElementById("thisForm").style.display = "none";
    document.getElementById("end").style.display = "block";

    timer =  setInterval(looper, 60000 / document.getElementById("frequency").value);
}

function submitToJava(event){
    event.preventDefault();
    colorsList = [];
    for (let i = 1; i <= colors; i ++){
        colorsList.push(document.getElementById("color" + i).value);
    }
    const postParameters = {
        colors: colorsList.toString(),
        frequency: 60000 / document.getElementById("frequency").value,
      };
      $.post("/setup", postParameters, response => {
        const jsonRes = JSON.parse(response)
        roomNumber = jsonRes.roomNumber;
        document.getElementById("former").style.display = "none";
        let ref = window.location.href+""+roomNumber;
        document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a> | Spacebar to toggle this block";
        document.getElementById("end").style.display = "block";
        history.pushState({}, null, window.location.href+""+roomNumber);
    });
    
    timer =  setInterval(loopJava, 40);
}
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (document.getElementById("end").style.display == "block"){
            document.getElementById("end").style.display = "none";
        }
        else if (document.getElementById("end").style.display == "none"){
            document.getElementById("end").style.display = "block";
        }
    }
    if(e.keyCode == 88){
        end();
    }
}

function joinRoom(event){
    event.preventDefault();
    const postParameters = {
        roomNumber: document.getElementById("roomNo").value
      };
      $.post("/setupWithRoom", postParameters, response => {
        const jsonRes = JSON.parse(response);
        console.log(jsonRes.roomNumber);
        if (jsonRes.success){
            roomNumber = jsonRes.roomNumber;
            document.getElementById("former").style.display = "none";
            let ref = window.location.href+""+roomNumber;
            document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a> | Spacebar to toggle this block";
            document.getElementById("end").style.display = "block";
            timer =  setInterval(loopJava, 40);
        } else{
            document.getElementById("errorMessage").innerHTML = "<mark>No room found with: " + document.getElementById("roomNo").value+"</mark>";
        }
    });    
}

function joinRoomURL(event){
    event.preventDefault();
    const postParameters = {
        roomNumber: document.getElementById("roomNo").value
      };
      $.post("/setupWithRoom", postParameters, response => {
        const jsonRes = JSON.parse(response);
        console.log(jsonRes.roomNumber);
        if (jsonRes.success){
            roomNumber = jsonRes.roomNumber;
            document.getElementById("former").style.display = "none";
            let ref = window.location.href;
            document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a> | Spacebar to toggle this block";
            document.getElementById("end").style.display = "block";
            timer =  setInterval(loopJava, 40);
        } else{
            document.getElementById("errorMessage").innerHTML = "<mark>No room found with: " + document.getElementById("roomNo").value+"</mark>";
        }
    });    
}

function looper(){
    document.body.style.backgroundColor = colorsList[iterator];
    iterator = (iterator + 1) % colors;
}

function loopJava(){
    const postParameters = {
        roomNumber : roomNumber
    };
    $.post("/rave", postParameters, response => {
        const jsonRes = JSON.parse(response);
        document.body.style.backgroundColor = jsonRes.color;
    });

}

function end(){
    clearInterval(timer);
    roomNumber = -1;
    timer = null;
    location.href = "/"
}

function generateRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function indexOnload(){
    document.getElementById('color1').value = generateRandomColor();
    document.getElementById('color2').value = generateRandomColor();
}

function colorsLoop(theseColors, freq){
    const postParameters = {
        colors: theseColors.toString(),
        frequency: 60000 / freq,
      };
      $.post("/setup", postParameters, response => {
        const jsonRes = JSON.parse(response)
        roomNumber = jsonRes.roomNumber;
        document.getElementById("former").style.display = "none";
        let ref = window.location.href+""+roomNumber;
        document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a> | Spacebar to toggle this block";
        document.getElementById("end").style.display = "block";
    });
    
    timer =  setInterval(loopJava, 40);
}

function springtime(){
    theseColors = ["#ff7cdf", "#7cfff9", "#ff838b", "#52ff07",  "#f803b5", "#ffb777", "#c2c7de"];
    colorsLoop(theseColors, 120);
}

function gloom(){
    theseColors = ["#130854", "#9a52e2", "#083c7d", "#ce1139", "#c2b177", "#71417c"];
    colorsLoop(theseColors, 60);
}

function winterHoliday(){
    theseColors = ["#82e0aa", "#ec7063", "#58d68d", "#cb4335", "#28b463", "#f5b7b1"];
    colorsLoop(theseColors, 90);
}

function rainbow(){
    theseColors = ["#ec7063", "#dc7633", "#f9e79f", "#82e0aa", "#85c1e9", "#a569bd"];
    colorsLoop(theseColors, 150);
}

function grays(){
    theseColors = ["#fdfefe", "#eaeded", "#2c3e50", "#839192", "#abb2b9", "#17202a", "##b2babb"];
    colorsLoop(theseColors, 90);
}

function usa(){
    theseColors = ["#BF0A30", "#FFFFFF", "#002868"];
    colorsLoop(theseColors, 100);
}
function turkey(){
   theseColors =  ["#e67e22", "#f39c12", "#f9e79f", "#edbb99", "#f0b27a", "#fad7a0"];
   colorsLoop(theseColors, 100);
}