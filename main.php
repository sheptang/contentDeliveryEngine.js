<?php

if(!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])=="xmlhttprequest"){

?>
<p>THIS IS HOMEPAGE.</p>
<div class="link" onclick="loadAsXHR('page1')">page1</div>
<div class="link" onclick="loadAsXHR('page2')">page2</div>
<?php

}else{
	header("Location:/");
}

?>