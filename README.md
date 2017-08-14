Content Delivery Engine
=======================

This plugin is being developed under [GNU General Public License v3.0.](https://github.com/sheptang/categoryList.js/blob/master/LICENSE)
Please click the license link for further information about contribution.

# contentDeliveryEngine.js

contentDeliveryEngine.js is a [PHP](https://secure.php.net/)-integrated [jQuery](http://jquery.com/) plugin that loads page contents dynamically via [XHR](https://www.w3schools.com/xml/xml_http.asp) into a container, saving data traffic. If the pages are optimized correctly for the plugin, pages will load much faster and data usage will reduce.

Documentation
-------------

`engine.js` is the core javascript file that contains Content Delivery Engine. The file is loaded on the main container page only once. It does not and should not contain dynamic javascript code.

`func.js` is the helper file for the plugin that contains `loadAsXHR` function (XHR Trigger Module). This file can contain regular or dynamic javascript code.

`/index.php` is the main container page that all the pages load into. ".js" files files are loaded in here. It also contains regular `meta` tags.

`main.php` is the homepage file.

To create another page, only a folder and an `index.php` inside it are needed. The following code should be added into the child `index.php` file in order to connect the plugin with PHP.

	<?php
		$pageName="foldername";
		if(!empty($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"])=="xmlhttprequest"){
	?>
	<p>PAGE CONTENT</p>
	<?php
		}else{
			header("Location:/#".$pageName);
		}
	?>

Demo
----

[Demo view](http://sheptang.com/software/contentDeliveryEngine/) is still under construction.

Installation
------------

- `engine.js` and `func.js` files should be included
- jQuery should be included
- PHP integration must be done (see: Documentation)
