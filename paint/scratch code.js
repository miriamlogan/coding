

<a download id="dl" href="http://upload.wikimedia.org/wikipedia/commons/b/bb/Wikipedia_wordmark.svg">Download</a>




var rawImageData = canvas.toDataURL("image/png;base64");
var element = getElementById("dl");
element.href = rawImageData;


<!DOCTYPE html>
<html>
<body>
<input id="penSize" type="range" name="points" min="0" max="10" value="2" onchange="Change(this.value)">

<p id="display">0</p>
<script>
function Change(value)
{
var display = document.getElementById("display");

display.innerHTML=value;
}
</script>
</body>
</html>
