<section class="find-the-right">
<!-- form의 action attr와 data-inputList에 데이터를 로드할 베이스 주소를 입력 -->
<form action="/ajaxData/category/findTheRight/compare-tvs/result.html" data-inputList="/ajaxData/category/findTheRight/compare-tvs/input-list.html" method="post">
	<!-- find the right category 정보 input lg 3.0과 동일한 방식으로 적용됨 참고 -->
	<input type="hidden" name="viewAll" value="tvs/compare-tvs">
	<input type="hidden" name="mstId" value="CT10000018">
	<input type="hidden" name="subId" value="CT10000018">
	<input type="hidden" name="page" value="3"><!-- 현재 페이지 -->
	<input type="hidden" name="pagePosition" value="1"><!-- 2015-07-28 추가됨 -->
	<div class="flow">
		<div class="step-wrap">
			<div class="step-flow">
				<div class="flow-chart">
					<ul>
						<li class="on">
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Get Started</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Screen Size</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Display Type</span>
							</a>
						</li>
						<!-- 2015-08-25 Remove Feature -->
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Price Range</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Results</span>
							</a>
						</li>
					</ul>
					<span class="bg-pillar"></span>
				</div>
			</div>
			<div class="step-flow-contents">
				<div class="step-box start">
					<div class="title-block">
						<h1>Find the Right TV </h1>
					</div>
					<div class="step-contents first-step">
						<!-- 2015-06-22 lazy load 적용 -->
						<div class="product-image" itemscope itemtype="http://schema.org/ImageObject"><img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/ftr-image.jpg" itemprop="contentUrl" alt="" /></div>
						<div class="step-text-block">
							<h2>Answer a few simple questions and you’ll be on your way.</h2>
							<p>
								Whether you are in the market for a new or upgrading an existing TV in your home or business, LG is here to help guide you through the process of finding compatible LG products for you.	
							</p>
							<p>
								Our innovative LG find the right TV tool, takes you through a step-by-step process from selecting premium features based on your lifestyle, to color choice, all the way to what fits within your budget.  Let us help you narrow down your choices of the right LG products for you based upon responses to the following questions. 
							</p>
							<div class="next-button start">
								<button class="btn skip-nav">Get Started</button>
							</div>
						</div>
						
					</div>
				</div>
				<div class="step-box">
					<div class="title-block">
						<h2>Which screen size is best for you?</h2>
						<p>
							Screen size can make a big difference, and considering your seating arrangements is one of the best ways to decide. Use the slider set the distance. Then select the sizes that best fit your needs. 
						</p>
					</div>
					<div class="step-contents">
						<div class="slider-wrap">
							<div class="slide-box screen">
								<div class="img">
									<i class="icon icon-monitor"></i>
									<span class="img-text"></span>
								</div>
								<div class="slide-bar">
								</div>
								<input type="hidden" name="screenSize" id="screenValue" />
							</div>
						</div>
						<div class="next-button">
							<!-- 2015-06-15 Reset Button 추가, submit & skip-nav 버튼 마크업 변경 -->
							<!-- <button class="btn reset">Reset</button> -->
							<button class="btn submit">Submit</button>
							<button class="skip-nav btn">No Preference</button>
						</div>
					</div>
				</div>
				<div class="step-box">
					<div class="title-block">
						<h2>Which display type is right for you?</h2>
						<p>
							There are two major display technologies, each with its own benefits. Please review the summaries below and make a selection:
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap tile-button">
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000071" />
									<span class="option-text" data-disclaimer="LED backlighting delivers extremely vivid colors and deep blacks, with a contrast ratio comparable to Plasma TV. LED TVs offer superior picture quality vs. LCD TVs, and are LG’s slimmest, most energy-efficient TVs.">LED TVs</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000072" />
									<span class="option-text" data-disclaimer="LG Smart TV brings the best of the internet right to your television. Stream video from Netflix, Hulu Plus, YouTube, and more. Browse the web, and enjoy the exclusive apps designed for Smart TV.">Smart TVs</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000073" />
									<span class="option-text" data-disclaimer="A new standard in picture quality, 4K resolution is four times that of Full HD 1080p. With a whopping 8.3 million pixels, it flawlessly displays breathtakingly lifelike images, even when viewed up close.">4K Ultra HD TVs</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000074" />
									<span class="option-text" data-disclaimer="Our organic light-emitting diode (OLED) TV can switch off individual pixels, rendering the blacks truly black and creating an "infinite" contrast ratio. And its exquisite, nuanced colors exceed industry standards.">OLED TVs</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000082" />
									<span class="option-text">3D TVs </span>
								</label>							
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectDisplay" value="CT10000083" />
									<span class="option-text">Curved TVs </span>
								</label>							
							</div>
						</div>
						<div class="next-button">
							<!-- 2015-06-15 Reset Button 추가, submit & skip-nav 버튼 마크업 변경 -->
							<!-- <button class="btn reset">Reset</button> -->
							<button class="btn submit">Submit</button>
							<button class="skip-nav btn">No Preference</button>
						</div>
					</div>
				</div>
				<div class="step-box">
					<div class="title-block">
						<h2>How much are you planning to spend?</h2>
						<div class="price-range">
							Based on your selections, your price range falls between: <div class="range-box"><span class="min-range"></span> - <span class="max-range"></span></div>
						</div>
					</div>
					<div>
						<div class="price-box">
							<div class="price-slider"></div>
							<div class="min-price"></div>
							<div class="max-price"></div>
							<input type="hidden" name="rangeMin" value='0' />
							<input type="hidden" name="rangeMax" value='0' />
						</div>
						<div class="next-button">
							<!-- 2015-06-15 Reset Button 추가, submit & skip-nav 버튼 마크업 변경 -->
							<button class="btn reset">Reset</button>
							<button class="btn submit">Submit</button>
							<button class="skip-nav btn">No Preference</button>
						</div>
					</div>
				</div>

				<div class="result">
					<div class="title-block">
						<h2>Your recommended models</h2><!-- 2015-08-03 edit text --><!-- Based on what you've told us here is what we think is just right for you -->
						<p>
							Below you'll find the TVs that best match your selections.
						</p>
					</div>
					<div class="step-contents">
						<!-- 추천 아이템 영역 -->
						<div class="recommand-item">
						</div>
						<div class="other-matches-item">
							<h3>OTHER TOP MATCHES</h3>
							<!-- 그 외 매치 아이템 리스트 영역 -->
							<ul class="other-matches-item-list">
							</ul>
							<div class="page-controls bottom">
								<!-- 데이터 정렬 select -->
								<span class="sort">
									<label>Sort by:</label>
									<select id="sortBy" name="sort" class="sort-select chosen-select">
										<option value="0">Newest Products</option>
										<option value="1">Most Popular</option>
										<option value="2">Price: Lowest to Highest</option>
										<option value="3">Price: Highest to Lowest</option>
										<option value="4">LG Picks</option>
										<option value="5">Consumer Rating</option>
									</select>
								</span>
								<!-- pagination 영역 -->
								<span class="pages">
									<!-- 2015-08-24 Page 표기 방식 통일 -->
									<a href="#" data-page="1" data-pageposition="1" class="prev double"><<</a><!-- 1 -->
									<a href="#" data-page="2" data-pageposition="1" class="prev"><</a><!-- prev page (sample) -->
									<a href="#" data-page="1" data-pageposition="1">1</a> |
									<a href="#" data-page="2" data-pageposition="1">2</a> |
									<a href="#" data-page="3" data-pageposition="1" class="active">3</a> |
									<a href="#" data-page="4" data-pageposition="2">4</a> |
									<a href="#" data-page="5" data-pageposition="3">5</a> |
									<a href="#" data-page="6" data-pageposition="4">6</a>
									<a href="#" data-page="4" data-pageposition="2" class="next">></a><!-- next page  (sample) -->
									<a href="#" data-page="12" data-pageposition="10"  class="next double">>></a><!-- last page (sample) -->
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</form>
</section>

<script>
var dragbarVal = {
	/* 가격 슬라이더 옵션값 */
	priceOption : [{'Min':'0'},{'$169':'RG00001076'},{'$179':'RG00001077'},{'$219':'RG00001079'},{'$279':'RG00001083'},{'$299':'RG00001084'},{'$349':'RG00001086'},{'$379':'RG00001087'},{'$399':'RG00001088'},{'$479':'RG00001669'},{'$499':'RG00001670'},{'$549':'RG00001093'},{'$599':'RG00001092'},{'$649':'RG00001095'},{'$699':'RG00001096'},{'$799':'RG00001099'},{'$849':'RG00001100'},{'$899':'RG00001101'},{'$999':'RG00001104'},{'$1049':'RG00001105'},{'$1099':'RG00001106'},{'$1199':'RG00001109'},{'$1299':'RG00001111'},{'$1399':'RG00001112'},{'$1499':'RG00001114'},{'$1599':'RG00001115'},{'$1699':'RG00001117'},{'$1899':'RG00001121'},{'$1999':'RG00001123'},{'$2099':'RG00001124'},{'$2199':'RG00001125'},{'$2299':'RG00001126'},{'$2499':'RG00001128'},{'$2599':'RG00001130'},{'$2899':'RG00001132'},{'$2999':'RG00001133'},{'$3099':'RG00001134'},{'$3199':'RG00001135'},{'$3299':'RG00001136'},{'$3499':'RG00001137'},{'$3799':'RG00001139'},{'$3899':'RG00001140'},{'$4299':'RG00001141'},{'$4499':'RG00001142'},{'$5499':'RG00001144'},{'$5999':'RG00001145'},{'$6499':'RG00001146'},{'$8999':'RG00001149'},{'$9999':'RG00001150'},{'$11999':'RG00001151'},{'$12999':'RG00001152'},{'$24999':'RG00001154'},{'$39999':'RG00001155'},{'$99999':'RG00001156'},{'Max':'0'}],
	selectOption : [{
		'All' : '0'},{
		'32"':'FV05000004'},{
		'32" - 55"':'FV05000011'},{
		'55" - 65"':'FV05000012'},{
		'65"+':'FV05000013'
	}],
};

var filters = [{
    "filterId": "FT05033879",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "CT10000081",
        "modelCount": 83,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000082",
        "modelCount": 48,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }]
},{
    "filterId": "FT05033879",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "CT10000071",
        "modelCount": 24,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000072",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000073",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }]
}];
</script>