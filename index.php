<!DOCTYPE html>
<html>
<head>
<title>contentDeliveryEngine.js</title>
<link rel="stylesheet" type="text/css" href="design.css"/>
<?php

//your meta can go here

?>
</head>
<body>
	<div id="navContainer">
		<div id="homelink">homepage</div>
		<div class="nav" href="/page1/">page1</div>
		<div class="nav" href="/page2/">page2</div>
	</div>
	<!--
		pages will be loaded inside #jContainer unless changed in engine.js and func.js
	-->
	<div id="jContainer"></div>
</body>
<?php

include("javasrc.php");

?>
</html>