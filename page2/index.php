<?php

$pageName="page2";

if(!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])=="xmlhttprequest"){

?>
<p>THIS IS PAGE 2</p>
<div class="link" onclick="loadAsXHR('page1')">page1</div>
<?php

}else{
	header("Location:/#".$pageName);
}

?>