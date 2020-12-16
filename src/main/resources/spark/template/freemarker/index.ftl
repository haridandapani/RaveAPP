<html>
    <meta charset="UTF-8">
    <title>Rave by Hari</title>
    <style>
        body{
            background-color: #f4f6f6;
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
        .buttoner{
            padding: 10px 15px;
            margin: 10px 0;
            position: relative;
            align-self: center;

            background: #49C59F;
            border: 1px solid transparent;
            border-radius: 10px;
            box-sizing: border-box;

            color: #fff;
            text-transform: uppercase;
            font-family: 'Lato', sans-serif;
        }
        h5{
            font-family: Tahoma, sans-serif;
        }
    </style>
    <body onload ="indexOnload()">
        <div id = "former">
            <form id = "thisForm" method = "POST" onsubmit= "submitToJava(event)">
                <h5>
                <label for = "frequency">Color changes per minute</label>
                <input type="number" id = "frequency" name = "frequency" value = "100" step = "any" min = "0" max = "1000" required>
                <br>
                <p></p>
                <button type = "button" onclick="addColor()">Add color</button>
                <button type = "button" onclick="removeColor()">Remove color</button><br>
                <p></p>
                <label for = "color1">Color 1</label>
                <input type="color" id = "color1" name = "color1">
                <br>
                <label for = "color2">Color 2</label>
                <input type="color" id = "color2" name = "color2">
                <div id = "addmore">
                </div>
                <br>
                Please be warned that this app can have rapidly changing colors.<br>
                Please do not use if you are epileptic or have any sensitivity to changing colors.<br>
                <input type = "submit" class = "buttoner" value="Rave!">
            </h5>
            </form>
            <hr>
            <form id = "thisForm" method = "POST" onsubmit= "joinRoom(event)">
                <label for = "roomNo">Room Number to Join</label>
                <input type="number" id = "roomNo" name = "roomNo" min = "0" step = "1" required>
                <input type = "submit" class = "buttoner" value="Join!"><br>
                <span id = "errorMessage"></span>
            </form>
            <hr>
            <label>Presets<label><br>
            <button type = "button" class = "buttoner" onclick="springtime()">Springtime</button>
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