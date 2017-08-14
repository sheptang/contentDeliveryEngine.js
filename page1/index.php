<?php

$pageName="page1";

if(!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])=="xmlhttprequest"){

?>
<p>THIS IS PAGE 1</p>
<div class="link" onclick="loadAsXHR('page2')">page2</div>
<?php

}else{
	header("Location:/#".$pageName);
}

?>