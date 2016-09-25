<section class="findTheRightFilter">
	<!--  2015-06-12 data-link-json 속성 추가 -->
	<form action="/ajaxData/returnCount.html" method="post" class="filter" data-event="change" data-sc-item="filter-search" data-search-category="tvs">
		<!-- 2015-05-22 data-url 속성 제거 -->
		<!-- 2015-06-03 수정// -->
		<input type="hidden" name="sizeMin" value="0"/>
		<input type="hidden" name="sizeMax" value="0"/>
		<input type="hidden" name="priceMin" value="0"/>
		<input type="hidden" name="priceMax" value="0"/>
		<!-- 2015-05-22 filterField 클래스 추가 -->
		<div class="m-my-search-box filterField">
			<div class="m-my-search">
				<p class="m-search-title">START MY SEARCH</p>
				<div class="m-search-select">
					<div class="m-screen">
						<p class="m-search-sub-title">How far from the TV will you be sitting?</p><!-- 2015-05-22 -->
						<div class="m-slide-box">
							<div class="m-img">
								<!-- 2015-05-22 마크업변경 -->
								<i class="icon icon-monitor"></i>
								<!-- //2015-05-22 마크업변경 -->
								<span class="m-img-text">32"-55"</span><!-- 2015-06-09 텍스트 변경 -->
							</div>
							<div class="m-slide-bar">
								<span class="m-text"></span>
								<!-- <span class="m-bubble">
									<span>7’-10’</span>
								</span> 2015-06-04 삭제 -->
							</div>
						</div>
					</div>
					<div class="m-viewing" style="display:none;">
						<p class="m-search-sub-title">What types of TV are you considering?</p><!-- 2015-08-07 edit txt -->
						<ul class="m-check-list">
							<!-- 2015-06-06 개발에서 name 값 적용해주실부분 -->
							<!-- 2015-06-08 Ultra HD 텍스트 변경 LED TV 항목 추가 -->
							<!-- 2015-06-12 name, value값 startMysearch.json 으로 추출 -->
							<li>
								<label><input type="checkbox" class="chk" name="FT05033879" value="FV11300934" />OLED TV</label>
							</li>
							<li>
								<label><input type="checkbox" class="chk" name="FT05033879" value="FV11300933" />Ultra HD 4K TV</label>
							</li>
							<li>
								<label><input type="checkbox" class="chk" name="FT05033879" value="FV11300930" />Smart TV</label>
							</li>
							<li>
								<label><input type="checkbox" class="chk" name="FT05033879" value="FV11300931" />3D TV</label>
							</li>
							<li>
								<label><input type="checkbox" class="chk" name="FT05033879" value="FV11300929" />LED TV</label>
							</li>
						</ul>
					</div>
					<div class="m-budget" style="display:none;">
						<p class="m-search-sub-title">Do you have a budget in mind?</p><!-- 2015-05-22 -->
						<div class="m-slide-box">
							<div class="m-slide-bar">
								<p class="m-first-unit">$0</p>
								<p class="m-last-unit">$2200</p>
							</div>
						</div>
					</div>
				</div>
				<div class="m-search-view-control">
					<a href="#" class="m-prev" style="display:none;">&lt; BACK</a>
					<p class="m-view-index">
						<span class="m-selected">1</span>
						<span>2</span>
						<span>3</span>
					</p>
					<a href="#" class="m-next">NEXT &gt;</a>
				</div>
				<div class="m-matching">
					<p class="m-search-sub-title">Matching Products</p>
					<!-- 2015-06-11 카운트 기본0 see result 버튼 숨김 -->
					<p class="m-matching-count">0</p>
					<p class="matching-btn"><a href="/category_sub_d.html" class="m-red-btn hide">See Results</a></p>
				</div>
			</div>
		</div>
	</form>
</section>
<script type="text/javascript">
//2015-06-08 all 항목 추가
var dragbarVal = {
	/* =============== static start ==============  */
	distance : ["5'","5'-7'","7'-10'","10'", "10'+"],//2015-06-17 수정
	imgs : ["32\"","32\"-55\"","55\"-65\"","65\"","65\"+"],//2015-06-17 수정
	size : ['400', '500', '600', '700', '700'], //start my search - image size
	left : ['80', '90', '100', '120', '120'], //text left
	/* ================ static end =============== */
	/* 화면 사이즈 슬라이더 옵션값 */
	selectOption : [{
		//text  : value
		'32"':'RG00001051'},{
		'55"':'RG00001060'},{
		'65"':'RG00001062'
	}],
	/* 2015-06-11 가격 슬라이더 옵션값 */
	priceOption : [{'Min':'0'},{'$169':'RG00001076'},{'$179':'RG00001077'},{'$219':'RG00001079'},{'$279':'RG00001083'},{'$299':'RG00001084'},{'$349':'RG00001086'},{'$379':'RG00001087'},{'$399':'RG00001088'},{'$479':'RG00001669'},{'$499':'RG00001670'},{'$549':'RG00001093'},{'$599':'RG00001092'},{'$649':'RG00001095'},{'$699':'RG00001096'},{'$799':'RG00001099'},{'$849':'RG00001100'},{'$899':'RG00001101'},{'$999':'RG00001104'},{'$1049':'RG00001105'},{'$1099':'RG00001106'},{'$1199':'RG00001109'},{'$1299':'RG00001111'},{'$1399':'RG00001112'},{'$1499':'RG00001114'},{'$1599':'RG00001115'},{'$1699':'RG00001117'},{'$1899':'RG00001121'},{'$1999':'RG00001123'},{'$2099':'RG00001124'},{'$2199':'RG00001125'},{'$2299':'RG00001126'},{'$2499':'RG00001128'},{'$2599':'RG00001130'},{'$2899':'RG00001132'},{'$2999':'RG00001133'},{'$3099':'RG00001134'},{'$3199':'RG00001135'},{'$3299':'RG00001136'},{'$3499':'RG00001137'},{'$3799':'RG00001139'},{'$3899':'RG00001140'},{'$4299':'RG00001141'},{'$4499':'RG00001142'},{'$5499':'RG00001144'},{'$5999':'RG00001145'},{'$6499':'RG00001146'},{'$8999':'RG00001149'},{'$9999':'RG00001150'},{'$11999':'RG00001151'},{'$12999':'RG00001152'},{'$24999':'RG00001154'},{'$39999':'RG00001155'},{'$99999':'RG00001156'},{'Max':'0'}]
}
</script>