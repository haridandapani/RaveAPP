<html>
    <meta charset="UTF-8">
    <title>💿 Rave by Hari</title>
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
            font-family: 'Cooper Black', sans-serif;
        }
        h5{
            font-family: Tahoma, sans-serif;
        }
        h2{
            font-family: Cooper Black;
        }
    </style>
    <body onload ="indexOnload()">
        <div id = "former">
            <h2>Start a custom rave</h2>
            <form id = "thisForm" method = "POST" onsubmit= "submitToJava(event)">
                <h5>
                <label for = "frequency">Color Changes per Minute</label>
                <input type="number" id = "frequency" name = "frequency" value = "100" step = "any" min = "0" max = "1000" required>
                <br>
                <p></p>
                <button type = "button" onclick="addColor()">Add Color</button>
                <button type = "button" onclick="removeColor()">Remove Color</button><br>
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
            <h2>Join an existing rave</h2>
            <form id = "thisForm" method = "POST" onsubmit= "joinRoom(event)">
                <label for = "roomNo">Room Number to Join</label>
                <input type="number" id = "roomNo" name = "roomNo" min = "0" step = "1" required>
                <input type = "submit" class = "buttoner" value="Join!"><br>
                <span id = "errorMessage"></span>
            </form>
            <hr>
            <h2>Enjoy one of our rave presets</h2>
            <button type = "button" class = "buttoner" onclick="springtime()">Springtime</button>
            <button type = "button" class = "buttoner" onclick="gloom()">Gloom</button>
            <button type = "button" class = "buttoner" onclick="winterHoliday()">Winter Holiday</button><br>
            <button type = "button" class = "buttoner" onclick="rainbow()">Fast Rainbow</button>
            <button type = "button" class = "buttoner" onclick="grays()">Black, White, and Gray</button>
            <button type = "button" class = "buttoner" onclick="usa()">USA</button><br>
            <button type = "button" class = "buttoner" onclick="turkey()">November</button><br>
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