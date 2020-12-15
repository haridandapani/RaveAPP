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
    labeler.innerHTML = "<mark>Color " + colors +"</mark> ";
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
        document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a>";
        document.getElementById("end").style.display = "block";
    });
    
    timer =  setInterval(loopJava, 40);
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
            document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a>";
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
            document.getElementById("roomNumber").innerHTML = "Room Number: " + roomNumber+ " | <a href ="+ref+ ">"+ref+"</a>";
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