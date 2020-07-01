let colors = 2;
let colorsList = [];
let iterator = 0;
let timer;
document.getElementById('color1').value = generateRandomColor();
document.getElementById('color2').value = generateRandomColor();

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

    timer =  setInterval(looper, 60000 / document.getElementById("frequency").value );
}

function looper(){
    document.body.style.backgroundColor = colorsList[iterator];
    iterator = (iterator + 1) % colors;
}

function end(){
    clearTimeout(timer);
    document.getElementById("thisForm").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.body.style.backgroundColor = "lightcoral";
}

function generateRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}