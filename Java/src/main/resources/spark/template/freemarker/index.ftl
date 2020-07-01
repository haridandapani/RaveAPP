<html>
    <meta charset="UTF-8">
    <title>RaveAPP by Hari</title>
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
    </style>
    <div id = "former">
        <form id = "thisForm" method = "POST" onsubmit= "submitToJava(event)">
            <label for = "frequency">Color changes per minute</label>
            <input type="number" id = "frequency" name = "frequency" value = "100" step = "any" max = "1000" required>
            <br>
            <label for = "color1">Color 1</label>
            <input type="color" id = "color1" name = "color1">
            <br>
            <label for = "color2">Color 2</label>
            <input type="color" id = "color2" name = "color2">
            <div id = "addmore">
            </div>
            <br>
            <button type = "button" onclick="addColor()">Add color</button>
            <button type = "button" onclick="removeColor()">Remove color</button>
            <br>
            <input type = "submit" value="Rave">
        </form>
    </div>
    <div id = "end" class="hider">
        <span id = "roomNumber"></span>
        <br>
        <button type = "button" onclick="end()">End</button>
    </div>
    <script src="js/selector.js"></script>
    <script src = "js/jquery-3.1.1.js"></script>

</html>