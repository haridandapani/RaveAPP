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

    <div id = "former">
        <form method = "POST" onsubmit= "joinRoomURL(event)">
            <p>Join room ${roomNumber?long?c}?</p>
            <input type = "number" id = "roomNo" class = "hider" value = "${roomNumber?long?c}">
            <input type = "submit" value="Join!">
        </form>
    </div>
    <div id = "end" class="hider">
        <mark><span id = "roomNumber"></span></mark>
        <br>
        <button type = "button" onclick="end()">End</button>
    </div>
    <script type="text/javascript" src="static/js/selector.js"></script>
    <script type="text/javascript" src = "static/js/jquery-3.1.1.js"></script>
</html>