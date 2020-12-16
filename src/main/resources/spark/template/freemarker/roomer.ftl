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
    </style>

    <div id = "former">
        <form method = "POST" onsubmit= "joinRoomURL(event)">
            <p>Join room ${roomNumber?long?c}?</p>
            <p>Please be warned that this app can have rapidly changing colors.</p>
            <p>Please do not use if you are epileptic or have any sensitivity to changing colors.<p>
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