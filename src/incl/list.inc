<div class="guide_select" style="padding:30px 0;">
	<a href="./list_m.html?M=all">Mobile</a> | <a href="./list_d.html?M=all">Desktop</a> <br />
	<a href="?M=all">ALL</a> | <a href="?M=m01">M01</a> | <a href="?M=m02">M02</a> | <a href="?M=m03">M03</a> | <a href="?M=m04">M04</a> | <a href="?M=m05">M05</a> | <a href="?M=m06">M06</a> | <a href="?M=m07">M07</a> | <a href="?M=m08">M08</a> | <a href="?M=m09">M09</a> | <a href="?M=m10">M10</a> | <a href="?M=m11">M11</a> | <a href="?M=m12">M12</a>
</div>
<style type="text/css">
	body {text-align:center;}
	div.guide_text {background:#a50034;color:#fff;margin:0;padding:1em 0;text-align:center;}
	div.tbd {padding:100px 0;font-size:50px;text-align:center;display:block;background:#aaa;}
	div.guide_select a.on {text-decoration:underline;}
	.hide {display:none}
</style>
<div id="Guide01">
	<div class="guide_text">M01A</div>
	<!--#include virtual="/incl/components/M01A-Full-Bleed-Background-Text-Center-Static-Image.inc" -->
	<div class="guide_text">M01B</div>
	<!--#include virtual="/incl/components/M01B-Full-Bleed-Background-Text-Center-VIdeo.inc" -->
	<div class="guide_text">M01C</div>
	<!--#include virtual="/incl/components/M01C-Full-Bleed-Background-Text-Center-Background-Animation.inc" -->
	<div class="guide_text">M01D</div>
	<!--#include virtual="/incl/components/M01D-Full-Bleed-Background-Text-Center-Tech-Nugget.inc" -->
</div>
<div id="Guide02">
	<div class="guide_text">M02A</div>
	<!--#include virtual="/incl/components/M02A-Side-By-Side-Text-On-Right-Static-Image.inc" -->
	<div class="guide_text">M02B</div>
	<!--#include virtual="/incl/components/M02B-Side-By-Side-Text-On-Right-Video.inc" -->
	<div class="guide_text">M02C</div>
	<!--#include virtual="/incl/components/M02C-Side-By-Side-Text-On-Right-Background-Animation.inc" -->
	<div class="guide_text">M02D</div>
	<!--#include virtual="/incl/components/M02D-Side-By-Side-Text-On-Right-Tech-Nuggets.inc" -->
</div>
<div id="Guide03">
	<div class="guide_text">M03A</div>
	<!--#include virtual="/incl/components/M03A-Side-By-Side-Text-On-Left-Static-Image.inc" -->
	<div class="guide_text">M03B</div>
	<!--#include virtual="/incl/components/M03B-Side-By-Side-Text-On-Left-Video.inc" -->
	<div class="guide_text">M03C</div>
	<!--#include virtual="/incl/components/M03C-Side-By-Side-Text-On-Left-Background-Animation.inc" -->
	<div class="guide_text">M03D</div>
	<!--#include virtual="/incl/components/M03D-Side-By-Side-Text-On-Left-Tech-Nuggets.inc" -->
</div>
<div id="Guide04">
	<div class="guide_text">M04A</div>
	<!--#include virtual="/incl/components/M04A-Feature-Blocks-One-Block.inc" -->
	<div class="guide_text">M04B</div>
	<!--#include virtual="/incl/components/M04B-Feature-Blocks-Two-Block.inc" -->
	<div class="guide_text">M04C</div>
	<!--#include virtual="/incl/components/M04C-Feature-Blocks-Three-Block.inc" -->
</div>
<div id="Guide05">
	<div class="guide_text">M05</div>
	<!--#include virtual="/incl/components/M05-Horizontal-Block-Centered-Text.inc" -->
</div>
<div id="Guide06">
	<div class="guide_text">M06</div>
	<!--#include virtual="/incl/components/M06-Three-Block.inc" -->
</div>
<div id="Guide07">
	<div class="guide_text">M07</div>
	<!--#include virtual="/incl/components/M07-Centered-Image-Blocks.inc" -->
</div>
<div id="Guide08">
	<div class="guide_text">M08</div>
	<!--#include virtual="/incl/components/M08-Sub-Category-Primary-Navigation.inc" -->
</div>
<div id="Guide09">
	<div class="guide_text">M09</div>
	<!--#include virtual="/incl/components/M09-Step-Up-Chart.inc" -->
</div>
<div id="Guide10">
	<div class="guide_text">M10</div>
	<!--#include virtual="/incl/components/M10-Technical-Featurres-Blocks.inc" -->
</div>
<div id="Guide11">
	<div class="guide_text">M11</div>
	<!--#include virtual="/incl/components/M11-Three-Static-Tile.inc" -->
</div>
<div id="Guide12">
	<div class="guide_text">M12</div>
	<!--#include virtual="/incl/components/M12-Category-Appliance.inc" -->
</div>

<script type="text/javascript">
	// for test script
	var c = "ALL";
	var u = location.href.split('?M=')[1];
	if(u) {
		if(u=="all") {
			for(var i=1;i<=12;i++) {
				var j = i;if(i<10) j = "0" + i;
				removeClass(document.getElementById("Guide"+j), "hide");
			}
		} else {
			u = u.split('m')[1].replace('#', '');
			for(var i=1;i<=12;i++) {
				var j = i;if(i<10) j = "0" + i;
				addClass(document.getElementById("Guide"+j), "hide");
			}
			removeClass(document.getElementById("Guide"+u), "hide");
		}
	}
	function hasClass(ele,cls) {
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}
	function addClass(ele,cls) {
		if (!this.hasClass(ele,cls)) ele.className += " "+cls;
	}
	function removeClass(ele,cls) {
		if (hasClass(ele,cls)) {
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			ele.className=ele.className.replace(reg,' ');
		}
	}
</script>

<style type="text/css">
	/* for test */
	/*
	.module .text-block h4,
	.module .text-block h3,
	.module .text-block p {background:#fdd;}
	.module.text-light .text-block h4,
	.module.text-light .text-block h3,
	.module.text-light .text-block p {background:#333;}
	*/
	.is-mobile .module .video-thumb {width:100% !important;}
</style>
<style type="text/css">

</style>