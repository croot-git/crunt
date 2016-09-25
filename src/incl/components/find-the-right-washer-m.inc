<section class="find-the-right"> 
<!-- form의 action attr와 data-inputList에 데이터를 로드할 베이스 주소를 입력 -->
<form action="/ajaxData/category/findTheRight/compare-washers/result.html" data-inputList="/ajaxData/category/findTheRight/compare-washers/input-list.html" method="post">
<!-- find the right category 정보 input lg 3.0과 동일한 방식으로 적용됨 참고 -->
	<input type="hidden" name="viewAll" value="washers/compare-washers">
	<input type="hidden" name="mstId" value="CT10000010">
	<input type="hidden" name="subId" value="CT10000010">
	<input type="hidden" name="page" value="3">
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
					</ul>
					<span class="bg-pillar"></span>
				</div>
			</div>
			<div class="step-flow-contents">

				<div class="step-box">
					<div class="title-block">
						<h1>Find the Right Washer</h1>
					</div>
					<div class="step-contents first-step">
						<!-- 2015-06-22 lazy load 적용 -->
						<div class="product-image" itemscope itemtype="http://schema.org/ImageObject"><img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/ftr-image.jpg" itemprop="contentUrl" alt="" /></div>
						<div class="step-text-block">
							<h2>Answer a few simple questions and you'll be on your way.</h2>
							<p>
								Whether you are in the market for a new or upgrading an existing washing machine in your home or business, LG is here to help guide you through the process of finding a compatible LG washing machine for you.
							</p>
							<p>
							Our innovative LG find the right washing machine tool, takes you through a step-by-step process from selecting premium features based on your lifestyle, to color choice, all the way to what fits within your budget.  Let us help you narrow down your choices of the right LG products for you based upon responses to the following questions. 
							</p>
							<div class="next-button start">
								<button class="btn skip-nav">Get Started</button>
							</div>
						</div>
						
					</div>
				</div>
				<div class="step-box">
					<div class="title-block">
						<h2>Choose Your Loading Style</h2>
						<p>
							Whether front- or top-loading, all LG washers deliver high efficiency to reduce energy costs and water consumption (versus conventional washers), plus, no matter which option you choose, you can count on the reliability of an LG Direct Drive motor.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap big-tile-button in-icon">
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectLoadType" value="CT10000067" />
										<span class="option-icon"><i class="icon icon-front-loader"></i></span>
										<span class="option-text">FRONT LOAD</span>
									</label>
								</div>
							</div>
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectLoadType" value="CT10000068" />
										<span class="option-icon"><i class="icon icon-top-loader"></i></span>
										<span class="option-text">TOP LOAD</span>
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
						<h2>Choose Your Color</h2><!-- 2015-08-03 edit text -->
						<p>We offer three options, so you're bound to find one that fits into your décor.</p><!-- 2015-08-03 add text -->
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap tile-button">
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="CT10000071" />
									<span class="option-text">Wild Cherry Red</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="CT10000072" />
									<span class="option-text">Graphite Steel</span>
								</label>							
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectColor" value="CT10000073" />
									<span class="option-text">White</span>
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
						<h2>Which premium features do you want?</h2>
						<p>
							It's pretty simple with us. We just want to make your life a little better, so we've created a host of practical innovations that actually make laundry less of a chore so that you can focus on more important things.
						</p>
					</div>
					<div class="step-contents">
						<div class="checkbox-wrap tile-button"><!-- 2015-08-03 edit -->
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectType" value="FV11300940" />
									<span class="option-text" data-disclaimer="Allows you to save 20 mins on larger loads, with outstanding cleaning performance.* *Based on AHAM-HLW-1-2010 test protocol. Cotton/Normal or comparable cycle at default settings, 8-lb loads, front load washers only. Excludes other LG manufactured products. Excludes quick wash or comparable cycles intended for small, lightly soiled loads only.">Turbo Wash™</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectType" value="FV11300941" />
									<span class="option-text" data-disclaimer="Our steam technology deeply penetrates fabrics for gentle cleaning power.">Steam Washer™</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectType" value="FV11300942" />
									<span class="option-text" data-disclaimer="Uses cold water and enhanced washing motions to penetrate deep into fabrics, giving you cold water savings with warm water performance.">Cold Wash™</span>
								</label>
							</div>
							<div class="checkbox-tile">
								<label>
									<input type="checkbox" name="selectType" value="FV11300943" />
									<span class="option-text" data-disclaimer="Rapid drum movement and powerful water jets provide a revolutionary washing and rinsing experience.">Wave Force™</span>
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
					<div class="step-contents">
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
							Below you'll find the Washers that best match your selections.<!-- 2015-08-03 edit text -->
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
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300943",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "Y"
    },{
        "filterId": "FT05033944",
        "facetValueId": "FV11300944",
        "modelCount": 60,
        "gubun": "O",
        "drank": 2,
        "enable": "Y"
    }]
}];
</script>