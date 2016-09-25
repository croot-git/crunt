<section class="find-the-right">
<!-- form의 action attr와 data-inputList에 데이터를 로드할 베이스 주소를 입력 -->
<form action="/ajaxData/category/findTheRight/compare-refrigerators/result.html" data-inputList="/ajaxData/category/findTheRight/compare-refrigerators/input-list.html" method="post">
	<!-- find the right category 정보 input lg 3.0과 동일한 방식으로 적용됨 참고 -->
	<input type="hidden" name="viewAll" value="compare-refrigerators">
	<input type="hidden" name="mstId" value="CT10000021">
	<input type="hidden" name="subId" value="CT10000021">
	<input type="hidden" name="page" value="3"><!-- 현재 페이지 -->
	<div class="flow">
		<div class="step-wrap">
			<div class="step-flow">
				<div class="flow-chart">
					<ul>
						<li class="on">
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
							</a>
						</li>
					</ul>
					<span class="bg-pillar"></span>
				</div>
			</div>
			<div class="step-flow-contents">
			

				<div class="step-box">
					<div class="title-block">
						<h1>Find the Right Refrigerator</h1>
					</div>
					<div class="step-contents first-step">
						<!-- 2015-06-22 lazy load 적용 -->
						<div class="product-image" itemscope itemtype="http://schema.org/ImageObject"><img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/ftr-image.jpg" itemprop="contentUrl" alt="" /></div>
						<div class="step-text-block">
							<h2>Answer a few simple questions and you’ll be on your way.</h2>
							<p>
								Whether you are in the market for a new or upgrading an existing refrigerator in your home or business, LG is here to help guide you through the process of finding a compatible LG refrigerator for you.
							</p>
							<p>
								Our innovative LG find the right refrigerator tool, takes you through a step-by-step process from selecting premium features based on your lifestyle, to color choice, all the way to what fits within your budget.  Let us help you narrow down your choices of the right LG products for you based upon responses to the following questions.
							</p>
							<div class="next-button start">
								<button class="btn skip-nav">Get Started</button>
							</div>
						</div>
						
					</div>
				</div>
				<div class="step-box">
					<div class="title-block">
						<h2>Choose Your Size...</h2>
						<p>
							When choosing a refrigerator, size is important.  Width and depth directly affect capacity, so measure the space where it will go.  Make your selection below.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap big-tile-button">
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="chooseSize" value="CT10000067" />
										<span class="option-text">30” <br/>Wide</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="chooseSize" value="CT10000068" />
										<span class="option-text">33” <br/>Wide</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="chooseSize" value="CT10000069" />
										<span class="option-text">36” <br/>Wide</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="chooseSize" value="CT10000061" />
										<span class="option-text">42” <br/>Wide</span>
									</label>
								</div>
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
						<h2>Be Open to All Your Door Options</h2>
						<p>
							The perfect door style – and the correct swing for your space – makes your time in the kitchen more efficient. Please review the options below and make your selections.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap big-tile-button in-icon">
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectDoor" value="FV11300933" />
										<span class="option-icon"><i class="icon icon-french-door-01"></i></span>
										<span class="option-text">Door-In-Door<sup>1</sup></span>
									</label>
								</div>
							</div>
							<!-- delete 2015-08-03
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="FIND_FD00000082_SPEC_SP00084651_French 4-Door_12_21_FD05007981_OR" value="French 4-Door" />
										<span class="option-icon"><i class="icon icon-french-door-02"></i></span>
										<span class="option-text">French 4-Door</span>
									</label>
								</div>
							</div>
							-->
							<div class="checkbox-tile">
								<div class="tile-box">
									<label><!-- 2015-08-03 edit -->
										<input type="checkbox" name="selectDoor" value="FV11300934" />
										<span class="option-icon"><i class="icon icon-french-door-02"></i></span><!--2015-08-05 change icon -->
										<span class="option-text">French Door</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectDoor" value="FV11300935" />
										<span class="option-icon"><i class="icon icon-side-by-side"></i></span>
										<span class="option-text">Side-by-Side</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectDoor" value="FV11300937" />
										<span class="option-icon"><i class="icon icon-top-freezer"></i></span>
										<span class="option-text">Top Freezer</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectDoor" value="FV11300936" />
										<span class="option-icon"><i class="icon icon-bottom-freezer"></i></span>
										<span class="option-text">Bottom Freezer</span>
									</label>
								</div>
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
						<h2>Choose Your Color...</h2>
					</div>
					<div class="step-contents"><!-- 2015-08-03 컬러 순서 변경 -->
						<div class="checkbox-wrap tile-button">
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="FV11300941" />
									<span class="option-text">Stainless Steel</span>
								</label>							
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="FV11300940" />
									<span class="option-text">Smooth White</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="FV11300942" />
									<span class="option-text">Smooth Black</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="FV11300948" />
									<span class="option-text">Black Stainless Steel</span>
								</label>
							</div>
							<!-- 2015-06-18 플래티넘 옵션 삭제 
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="FIND_FD00000083_COLR__shine-brushed-steel_12_21_FD05007982_OR" value="shine-brushed-steel" />
									<span class="option-text">Platinum</span>
								</label>
							</div>
							-->
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
						<h2>Would you like an ice and water dispenser?</h2>
						<p>
							Enjoy easy access to cold refreshment with a built-in icemaker. LG refrigerators with an ice & water dispenser offer even more refreshment, and let you fill anything from pint glasses to pitchers. Plus, you don’t have to sacrifice door-shelf space with LG’s Slim SpacePlus ice system.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap tile-button">
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectOption" value="FV11300911" />
									<span class="option-text">With Ice & Water Dispensers</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectOption" value="FV11300912" />
									<span class="option-text">Without Ice & Water Dispensers</span>
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
						<h2>Select the freshness features that interest you</h2>
						<p>
							LG's SmartFresh technology keeps temperature and humidity inside the refrigerator at the right levels to keep food fresher, longer. LG refrigerators with the Fresh Air Filter continually pump fresh, deodorize air inside, while the Multi-Air Flow design surrounds food with air no matter where you place it.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap tile-button">
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectFeature" value="FV11300921" />
									<span class="option-text">Refrigerators With Smart Cooling</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectFeature" value="FV11300922" />
									<span class="option-text">Refrigerators With Smart Cooling Plus</span>
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
							Based on your selections, your price range falls between: <div class="range-box"><span class="min-range"></span> - <span class="max-range"></span></div><!-- add 2015-07-09 냉장고에만 빠져 있어서 추가함  -->
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
							Below you'll find the Refrigerators that best match your selections. <!-- 2015-08-03 edit text -->
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
							<!-- load more 버튼 영역 -->
							<div class="view-more">
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
	priceOption : [{'Min':'0'},{'$169':'RG00001076'},{'$179':'RG00001077'},{'$219':'RG00001079'},{'$279':'RG00001083'},{'$299':'RG00001084'},{'$349':'RG00001086'},{'$379':'RG00001087'},{'$399':'RG00001088'},{'$479':'RG00001669'},{'$499':'RG00001670'},{'$549':'RG00001093'},{'$599':'RG00001092'},{'$649':'RG00001095'},{'$699':'RG00001096'},{'$799':'RG00001099'},{'$849':'RG00001100'},{'$899':'RG00001101'},{'$999':'RG00001104'},{'$1049':'RG00001105'},{'$1099':'RG00001106'},{'$1199':'RG00001109'},{'$1299':'RG00001111'},{'$1399':'RG00001112'},{'$1499':'RG00001114'},{'$1599':'RG00001115'},{'$1699':'RG00001117'},{'$1899':'RG00001121'},{'$1999':'RG00001123'},{'$2099':'RG00001124'},{'$2199':'RG00001125'},{'$2299':'RG00001126'},{'$2499':'RG00001128'},{'$2599':'RG00001130'},{'$2899':'RG00001132'},{'$2999':'RG00001133'},{'$3099':'RG00001134'},{'$3199':'RG00001135'},{'$3299':'RG00001136'},{'$3499':'RG00001137'},{'$3799':'RG00001139'},{'$3899':'RG00001140'},{'$4299':'RG00001141'},{'$4499':'RG00001142'},{'$5499':'RG00001144'},{'$5999':'RG00001145'},{'$6499':'RG00001146'},{'$8999':'RG00001149'},{'$9999':'RG00001150'},{'$11999':'RG00001151'},{'$12999':'RG00001152'},{'$24999':'RG00001154'},{'$39999':'RG00001155'},{'$99999':'RG00001156'},{'Max':'0'}]
};

var filters = [{
    "filterId": "FT05033879",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "CT10000067",
        "modelCount": 83,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000068",
        "modelCount": 48,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000069",
        "modelCount": 48,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "CT10000061",
        "modelCount": 48,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }]
},{
    "filterId": "FT05033879",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "FV11300933",
        "modelCount": 24,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "FV11300934",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "FV11300935",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "FV11300936",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }, {
        "filterId": "FT05033879",
        "facetValueId": "FV11300937",
        "modelCount": 0,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    }]
},{
    "filterId": "FT05033944",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "FV11300940",
        "modelCount": 7,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300941",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "N"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300942",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "N"
    }]
},{
    "filterId": "FT05033944",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "FV11300911",
        "modelCount": 7,
        "gubun": "A",
        "drank": 1,
        "enable": "N"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300912",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "Y"
    }]
},{
    "filterId": "FT05033944",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "FV11300921",
        "modelCount": 7,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300922",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "Y"
    }]
},{
    "filterId": "FT05033966",
    "facetValues": [{
        "filterId": "FT05033879",
        "facetValueId": "FV11300951",
        "modelCount": 7,
        "gubun": "A",
        "drank": 1,
        "enable": "Y"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11379752",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "Y"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11379753",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "N"
    }]
}];
</script>