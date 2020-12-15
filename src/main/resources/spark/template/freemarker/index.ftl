<html>
    <meta charset="UTF-8">
    <title>Rave by Hari</title>
    <style>
        body{
            background-color: lightcoral;
        }
        .hider {
            display : none;
        }
        div {
            text-align: center;
        }
        mark {
            background-color: #DED4CE;
            color: black;
        }
    </style>
    <body onload ="indexOnload()">
        <div id = header>
            <p><mark>RavebyHari is a fun webapp that allows your screen to change colors like a disco.</mark></p>
            <p><mark>Please do not use if you have epilepsy or a sensitivity to changing colors.</mark></p>
        </div>
        <div id = "former">
            <form id = "thisForm" method = "POST" onsubmit= "submitToJava(event)">
                <label for = "frequency"><mark>Color changes per minute</mark></label>
                <input type="number" id = "frequency" name = "frequency" value = "100" step = "any" min = "0" max = "1000" required>
                <br>
                <label for = "color1"><mark>Color 1</mark></label>
                <input type="color" id = "color1" name = "color1">
                <br>
                <label for = "color2"><mark>Color 2</mark></label>
                <input type="color" id = "color2" name = "color2">
                <div id = "addmore">
                </div>
                <br>
                <button type = "button" onclick="addColor()">Add color</button>
                <button type = "button" onclick="removeColor()">Remove color</button>
                <br>
                <input type = "submit" value="Rave!">

            </form>
            <hr>
            <form id = "thisForm" method = "POST" onsubmit= "joinRoom(event)">
                <label for = "roomNo"><mark>Room Number to Join</mark></label>
                <input type="number" id = "roomNo" name = "roomNo" min = "0" step = "1" required>
                <input type = "submit" value="Join!"><br>
                <span id = "errorMessage"></span>
            </form>
        </div>
        <div id = "end" class="hider">
            <mark><span id = "roomNumber"></span></mark>
            <br>
            <button type = "button" onclick="end()">End</button>
        </div>
    </body>

    <script type="text/javascript" src="static/js/selector.js"></script>
    <script type="text/javascript" src = "static/js/jquery-3.1.1.js"></script>

</html>