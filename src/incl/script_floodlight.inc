<!-- 
	Floodlight Script는 다음 카테고리에 해당하는 Product Page와 WTB 페이지에만 들어갑니다. 
	해당 카테고리 : MOBILD / TV/AUDIO/VIDEO 
-->
<script type="text/javascript" id="DoubleClickFloodlightTag">
//<![CDATA[
function FLOOD1(type, cat, u1) {
        var axel = Math.random()+"";
        var a = axel * 10000000000000000;
        var flDiv=document.body.appendChild(document.createElement("div"));
        flDiv.setAttribute("id","DCLK_FLDiv1");
        flDiv.style.position="absolute";
        flDiv.style.top="0";
        flDiv.style.left="0";
        flDiv.style.width="1px";
        flDiv.style.height="1px";
        flDiv.style.display="none";
        flDiv.innerHTML='<iframe id="DCLK_FLIframe1" src="http://4587320.fls.doubleclick.net/activityi;src=4587320;type=' + type + ';cat=' + cat + ';u1=' + u1 + ';ord=' + a + '?" width="1" height="1" frameborder="0"><\/iframe>';
}
//]]>
</script>
<!-- 
	Floodlight Script는 다음 카테고리에 해당하는 Product Page와 WTB 페이지에만 들어갑니다. 
	해당 카테고리 : MOBILE / TV/AUDIO/VIDEO 
-->
	<script type="text/javascript">
		// MOBILE category의 Product 페이지의 경우, 아래 스크립트 실행
		FLOOD1('mugf40', 'unive0', '1?'); // Universal Mobile Product Page Landing

		// TV/AUDIO/VIDEO category의 Product 페이지의 경우, 아래 스크립트 실행.
		// FLOOD1('hebxl0', 'unive0', '1?'); // Universal TV Product Page Landing

		// MOBILE category의 WTB 페이지의 경우, 아래 스크립트 실행
		// FLOOD1('mugf40', 'unive002', '1?'); // Universal Mobile Product Page Where to Buy

		// TV/AUDIO/VIDEO category의 WTB 페이지의 경우, 아래 스크립트 실행
		// FLOOD1('hebxl0', 'unive001', '1?');

		// unive0 과 같은 값은 단순 구분자이며, 위와 같이만 입력해 주시면 됩니다.

	</script>

	<!-- 아래는 단순 메모용. 
	Mobile PDP
	FLOOD1('mugf40', 'unive0', '1?'); // Universal Mobile Product Page Landing
	FLOOD1('mugf40', 'unive00', '1?'); // Universal Mobile Product Page Review - OK
	FLOOD1('mugf40', 'unive000', '1?'); // Universal Mobile Product Page Spec-Download  - 링크가 없는 듯.
	FLOOD1('mugf40', 'unive001', '1?'); // Universal Mobile Product Page Tech-Spec - OK
	FLOOD1('mugf40', 'unive002', '1?'); // Universal Mobile Product Page Where to Buy - 3.0에서는 WTB 페이지에 추가되어 있음.

	TVs PDP
	FLOOD1('hebxl0', 'unive0', '1?'); // Universal TV Product Page Landing
	FLOOD1('hebxl0', 'unive002', '1?'); // Universal TV Product Page Review
	FLOOD1('hebxl0', 'unive000', '1?'); // Universal TV Product Page Spec-Download
	FLOOD1('hebxl0', 'unive00', '1?'); // Universal TV Product Page Tech-Spec
	FLOOD1('hebxl0', 'unive001', '1?'); // Universal TV Product Page Where to Buy
	-->