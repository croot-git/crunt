<!-- 2015-06-03 product-rebate 코드 적용 -->
<section class="filter refind-your-search dark-grey-background">
<!-- 2015-06-01 data-search-category 속성삭제 -->
	<form action="/ajaxData/filter.lg.html" method="post" class="filter"><!-- delete  data-event="change" data-sc-item="filter-search" -->
		<div class="alt-text">Selecting a checkbox will update the products displayed on screen.</div><!-- 2015-08-26 add text -->
		<!-- 2015-06-01
			input type="hidden" name="viewAll" value="All TVs"/>
			<input type="hidden" name="mstId" value="CT10000018"/>
			<input type="hidden" name="subId" value="CT10000018"/>
			<input type="hidden" name="page" value="1"/>
		 제거 -->
		<!-- 2015-06-03 수정// -->
		<input type="hidden" name="sizeMin" value="0"/>
		<input type="hidden" name="sizeMax" value="0"/>
		<input type="hidden" name="priceMin" value="0"/>
		<input type="hidden" name="priceMax" value="0"/>
		<!-- //2015-06-03 수정 -->
		<input type="hidden" name="bvApiUrl" value="http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js"/>

		<div class="column1">
			<h4>Refine Your Search</h4>
			<!-- 2015-08-24 마크업 일부 수정 -->
			<span class="result"><span class="total"></span> <span class="check-singular" data-singular="Total Result" data-plural="Total Results">Total Results</span></span>
			<!-- 2015-05-22 filterField 클래스 추가 -->
			<fieldset class="form filtered filterField">
				<!-- 1 -->
				<!-- 2015-06-08 display type 항목 변경됨 -->
				<legend>Display Type:</legend>
				<label><input type="checkbox" name="FT05033879" value="FV11300934"> <span>OLED TVs</span></label>
				<label><input type="checkbox" name="FT05033879" value="FV11300929"> <span>LED TVs</span></label>
				<!-- 2015-06-08 plasma TVs 검색 불가할경우 삭제될 예정
					label><input type="checkbox" name="FV06942343" value="FV06942343"> <span>Plasma TVs</span></label
				-->
				<label><input type="checkbox" name="FT05033879" value="FV11300930"> <span>Smart TV</span></label>
				<label><input type="checkbox" name="FT05033879" value="FV11300933"> <span>Ultra HD</span></label>
				<label><input type="checkbox" name="FT05033879" value="FV11300931"> <span>3D TV</span></label>
				<!-- 3 -->
				<div class="screen">
					<div class="slide-box">
						<div class="img">
							<!-- 2015-05-22 마크업 변경 -->
							<i class="icon icon-size-refine"></i>
						</div>
						<!-- 2015-06-26 data-sliderName 추가 -->
						<div class="slide-bar" data-sliderName="Size">
							<p class="first-unit">min</p>
							<p class="last-unit">max</p>
						</div>
					</div>
				</div>
				<!-- 4 -->
				<legend>Features:</legend>
				<label><input type="checkbox" name="FV06942332" value="FV06942332"> <span>Wi-Fi</span></label>
				<label><input type="checkbox" name="FV06942322" value="FV06942322"> <span>Energy Star Rated</span></label>
				<!-- 2015-06-08 Curved Display, Magic Remote 항목 삭제
				<label><input type="checkbox" name="FV06942348" value="FV06942348"> <span>Curved Display</span></label>
				<label><input type="checkbox" name="FV06942340" value="FV06942340"> <span>Magic Remote</span></label>
				-->
				<!-- 2015-06-08 Smart Tv삭제
				<legend>Smart TV:</legend>
				<label><input type="checkbox" name="FV06942300" value="FV06942300"> <span>WebOS 2.0</span></label>
				<label><input type="checkbox" name="FV06942232" value="FV06942232"> <span>WebOS</span></label>
				<label><input type="checkbox" name="FV06942222" value="FV06942222"> <span>Other</span></label>
				-->
				<!-- 6 -->
				<!-- 2015-06-01 price 영역 수정 -->
				<div class="budget">
					<legend>Price:</legend>
					<div class="slide-box">
						<div class="img">
							<!-- 2015-05-22 마크업 변경 -->
							<i class="icon icon-price-refine"></i>
						</div>
						<!-- 2015-06-26 data-sliderName 추가 -->
						<div class="slide-bar" data-sliderName="Price">
							<p class="first-unit">min</p>
							<p class="last-unit">max</p>
						</div>
					</div>
					<!-- 2015-05-17 just 대소문자 수정 -->
					<!-- 2015-06-02 <label><input type="checkbox" name="FV06942122" value="Show Just Promotions"> <span>Show Just Promotions</span></label> -->
				</div>
				<!-- 7 -->
				<!-- 2015-06-26 : 체크박스 각각에 data-colorName 속성이 추가되었으며 노출될 색상 이름이 입력되어야 합니다 -->
				<!-- 2015-06-26 : 체크박스 title의 기본 값이 "Select {color}"로 변경되었으며 script에서 자동으로 data-colorName 값을 받아와 뿌려주도록 작업되었습니다.  -->
				<legend id="desc6">Color/Finish </legend>
				<label class="swatch black-stainless-steel"><input name="SEARCH_FT00001080_40" data-colorName="Black Stainless Steel" data-toggleTitle="Select" title="Select {color}" type="checkbox" value="FV12069632"/><span></span></label>
				<label class="swatch shine-brushed-steel"><input name="SEARCH_FT00001080_41" data-colorName="Shine Brushed Steel" title="Select {color}" type="checkbox" value="FV05007681"/><span></span></label>
				<label class="swatch silver"><input name="SEARCH_FT00001080_42" data-colorName="Silver" title="Select {color}" type="checkbox" value="FV10281296"/><span></span></label>
				<label class="swatch smooth-black"><input name="SEARCH_FT00001080_43" data-colorName="Smooth Black" title="Select {color}" type="checkbox" value="FV00001081"/><span></span></label>
				<label class="swatch smooth-white"><input name="SEARCH_FT00001080_44" data-colorName="Smooth White" title="Select {color}" type="checkbox" value="FV00001082"/><span></span></label>
				<label class="swatch stainless-steel"><input name="SEARCH_FT00001080_45" data-colorName="Stainless Steel" title="Select {color}" type="checkbox" value="FV00001083"/><span></span></label>
				<!-- 8 -->
				<div class="for-owners">
					<!-- 2015-05-17 tag 수정 -->
					<h4>For Owners:</h4>
					<ul>
						<li><a href="#">Register Your TV</a></li>
						<li><a href="#">Product Support</a></li>
						<li><a href="#">Find Owner's Manuals</a></li>
						<li><a href="#">TV Accessories</a></li>
					</ul>
				</div>
				<!-- 9 -->
				<div class="etcSection">
					<a href="#">Discontinued Models</a>
				</div>
			</fieldset>

		</div>
		<div class="column2">
			<h1>OLED TVs</h1>
			<div class="content-head-desc">
				With deeper, richer colors and stunning contrast, LG OLED is unlike any technology you've ever seen, and it delivers a picture that exceeds your wildest imagination.
			</div>
			<section class="grid">
				<div class="response">
					<div class="page-controls">
						<span class="sort">
							<label for="sortBy">Sort by:</label>
							<!-- 2015-05-21 sort-select 클래스 추가 name 속성 추가 // -->
							<select id="sortBy" name="sort" class="sort-select">
							<!-- //2015-05-21 id값 변경 및 클래스 추가-->
								<option value="0">Newest Products</option>
								<option value="1">Most Popular</option>
								<option value="2">Price: Lowest to Highest</option>
								<option value="3">Price: Highest to Lowest</option>
								<option value="4">LG Picks</option>
								<option value="5">Consumer Rating</option>
							</select>
						</span>
						<span class="pages">
							<a href="#" class="prev"><i class="icon icon-arrow-prev"></i></a>
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max="  class="active">1</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >2</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >3</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >4</a>
							<a href="#" class="next"><i class="icon icon-arrow-next"></i></a>
							<a href="/us/tvs/all-tvs/view-all"  data-uri="/ajaxData/filter.lg.html?viewAll=tvs/all-tvs&mstId=CT10000018&subId=CT10000018&page=0&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT00000003_min=&SEARCH_FT00000001_03=FV06942348&SEARCH_FT00000001_01=FV06942350&SEARCH_FT00000003_max=&SEARCH_FT00000001_02=FV06942347&SEARCH_FT00000005_max=&SEARCH_FT00000005_min=" class="view-all ">View All</a>
						</span>
					</div>
					<div class="apply-filters" data-title-close="Remove"><!-- 2015-08-26 -->
						<!-- 2015-06-02 더미데이터 삭제
						<span>OLED TVS <a href="#"><i class="icon icon-close"></i></a></span>
						<span>Size:22"-65" <a href="#"><i class="icon icon-close"></i></a></span>
						<span>WebOS <a href="#"><i class="icon icon-close"></i></a></span>
						 -->
					</div>
					<div class="product-grid-header">
						<span class="total"><span class="count"></span> <span class="check-singular" data-singular="Total Result" data-plural="Total Results">Total Results</span></span>
						<!-- 2015-06-10 마크업 변경 및 clear all 추가 -->
						<span class="compare-util">
							<a href="/compare_d.html" class="compare-state">Compare <span>(0)</span></a>
							<a href="#" class="compare-clear hide">Clear All</a>
						</span>
					</div>

					<div class="product-grid">
						<div class="product-list-wrap">
							<ul class="product-lists">
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">LGE-16PAR38-30-35: 16W LED PARL38 Light Bulb 3000K (75W Equivalent), 35° Beam Angle</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- 2015-06-11 사이즈 두개 이상일때 추가 -->
										<!-- 2015-06-19 사이즈 컬러 주석처리
										<!-- <p class="model-size"><a href="#">Sizes:65"</a> | <a href="#">55"</a> |<a href="#" class="etcSize">105"</a></p>
										<p class="model-color">
											<a href="#" class="active" data-disclaimer="stainless-steel">
												<span class="color_chip_cover"></span>
												<span class="swatch large stainless-steel"></span>
												
											</a>
											<a href="#" data-disclaimer="smooth-black"><span class="swatch large smooth-black"></span></a>
											<a href="#" data-disclaimer="smooth-white"><span class="swatch large smooth-white"></span></a>
										</p>
										-->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" data-modelid="MD00001294"><!-- 2015-08-11 -->
												<!--
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span>
												-->
												<!-- review 없을 시 -->
												<a href="/product_d.html#reviews"><span class="no-review">Be the first to review</span></a>
												<!-- 모바일에서는 review 앖을 시 텍스트를 (Write a review) 로 사용해 주세요. -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3181ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<!-- 2015-06-09 Add to Cart, Buy Now 버튼 추가 -->
											<div class="cta cta-button">
												<!-- <a href="https://usstore.lg.com/store?Action=buy&Env=BASE&Locale=en_US&SiteID=lgus&productID=306352300&quantity=1" class="btn">Pre Order</a><br /> -->
												<a href="https://usstore.lg.com/store?Action=buy&Env=BASE&Locale=en_US&SiteID=lgus&productID=306352300&quantity=1 " class="btn" data-sc-item="add-to-cart" data-sc-value="{모델코드}">Add to Cart</a><br /><!-- 2015-06-04 br 추가 -->
												<!-- 2015-06-04 best buy 추가 -->
												<a href="javascript:void(0)" class="btn buynow" data-sku="3429088" data-partner-id="LG" value="buy now" title="Open New Window" data-sc-item="buy-now" data-sc-value="{모델코드}">Buy Now</a><br />
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a> | <a href="#">55"</a> |<a href="#" class="etcSize">105"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3088ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3082ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3083ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3084ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3085ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3086ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3087ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3088ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3082ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3083ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3084ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3085ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3086ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li itemscope itemtype="http://schema.org/Product">
									<a href="#" class="img-link">
										<!-- 2015-06-22 lazy load 적용 -->
										<img alt="54.6” Diagonal 1080p Smart 3D Curved OLED TV" class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/img/product/tvs/55-curved-oled-tv-man-of-steel.jpg" style="opacity: 1;">
									</a>
									<div class="copy-area">
										<p class="model-name" itemprop="name"><a href="#">54.6” Diagonal 1080p Smart 3D Curved OLED TV</a></p>
										<p class="model-num"><a href="#">55EA9800</a></p>
										<!-- <p class="model-size"><a href="#">Sizes:65"</a></p> -->
										<div class="details">
											<div class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
												<meta itemprop="name" content="55”Class (54.6” Diagonal) 1080p Smart 3D Curved OLED TV" />
												<meta itemprop="bestRating" content="5" />
												<meta itemprop="worstRating" content="1" />
												<div class="points_wrap">
													<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
													<meta itemprop="ratingValue" content="2.5" />
												</div>
												<span itemprop="reviewCount" content="9"><a href="#">(9 Reviews)</a></span><!-- 2015-06-02 link -->
											</div>
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3087ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
											<div class="cta cta-button">
												<a href="#" class="btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to buy</a>
											</div>
											<div class="product-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
												<!-- 2015-06-01 promotional-price 가 있는 경우
												<div class="suggested-price">
													<p class="price">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
												</div>
												<div class="promotional-price">
													<p class="price">$1499.<span>99</span></p>
													<p class="legal">Promotional Price</p>
												</div>
												-->
												<div class="purchase-price"  itemprop="priceCurrency" content="USD">
													<p class="price" itemprop="price" content="3499.99">$3499.<span>99</span></p>
													<p class="legal">Suggested Price</p>
													<link itemprop="availability" href="http://schema.org/InStock" content="In stock" />
												</div>
												<div class="product-rebate">
													<!-- 2015-05-27 Ecorebates
														data-modelId : 제품 ID
														class : ecorebates-div 필수
													-->
													<div class="ecorebates-div" data-modelId="WM3170CW"></div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- 2015-05-17 bottom 클래스 추가 -->
					<div class="page-controls bottom">
						<span class="sort">
							<!-- 2015-05-21 id변경, sort-select 클래스 추가 name 속성 추가 // -->
							<label for="sortBy2">Sort by:</label>
							<!-- 2015-06-11 name 속성 제거 -->
							<select id="sortBy2" class="sort-select">
								<option value="0">Newest Products</option>
								<option value="1">Most Popular</option>
								<option value="2">Price: Lowest to Highest</option>
								<option value="3">Price: Highest to Lowest</option>
								<option value="4">LG Picks</option>
								<option value="5">Consumer Rating</option>
							</select>
						</span>
						<span class="pages">
							<a href="#" class="prev"><i class="icon icon-arrow-prev"></i></a>
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max="  class="active">1</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >2</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >3</a> |
							<a href="#" data-uri="/ajaxData/filter.lg.html?viewAll=all-tvs&mstId=CT10000021&subId=CT10000062&page=1&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT05006506_31=FV05006507&SEARCH_FT00001085_min=&SEARCH_FT00001085_max=" >4</a>
							<a href="#" class="next"><i class="icon icon-arrow-next"></i></a>
							<a href="/us/tvs/all-tvs/view-all"  data-uri="/ajaxData/filter.lg.html?viewAll=tvs/all-tvs&mstId=CT10000018&subId=CT10000018&page=0&sort=0&bvApiUrl=http://lg.ugc.bazaarvoice.com/static/7676-en_us/bvapi.js&&SEARCH_FT00000003_min=&SEARCH_FT00000001_03=FV06942348&SEARCH_FT00000001_01=FV06942350&SEARCH_FT00000003_max=&SEARCH_FT00000001_02=FV06942347&SEARCH_FT00000005_max=&SEARCH_FT00000005_min=" class="view-all ">View All</a>
						</span>
					</div>
				</div>
			</section>
		</div>
	</form>
</section>
<script type="text/javascript">
//2015-06-03
var dragbarVal = {
	/* 2015-06-11 화면 사이즈 슬라이더 옵션값 */
	selectOption : [{'Min':'0'},{'21.5':'RG00000800'},{'23':'RG00001024'},{'23.6':'RG00001025'},{'23.8':'RG00001026'},{'24':'RG00001027'},{'25':'RG00001028'},{'27':'RG00001029'},{'29':'RG00001030'},{'31':'RG00001031'},{'34':'RG00001032'},{'Max':'0'}],
	/* 2015-06-11 가격 슬라이더 옵션값 */
	priceOption : [{
		'Min' : '0'},{
		'$169.99':"FV11488067"},{
		'$179.99':"FV06300594"},{
		'$219.99':"FV11488070"},{
		'$279.99':"FV05035546"},{
		'$299.99':"FV05019907"},{
		'$349.99':"FV05019911"},{
		'$379.99':"FV05019913"},{
		'$479.99':"FV05019921"},{
		'$499.99':"FV05019923"},{
		'$549.99':"FV05019928"},{
		'$599.99':"FV05019930"},{
		'$649.99':"FV05019933"},{
		'$699.99':"FV05019935"},{
		'$799.99':"FV05019940"},{
		'$849.99':"FV05019942"},{
		'$899.99':"FV05019944"},{
		'$999.99':"FV05019947"},{
		'$1049.99':"FV11215588"},{
		'$1099.99':"FV05019948"},{
		'$1199.99':"FV05019952"},{
		'$1299.99':"FV05019954"},{
		'$1399.99':"FV05019956"},{
		'$1499.99':"FV05019958"},{
		'$1599.99':"FV05019960"},{
		'$1699.99':"FV05019963"},{
		'$1899.99':"FV05019969"},{
		'$1999.99':"FV05019972"},{
		'$2099.99':"FV05019973"},{
		'$2199.99':"FV05019975"},{
		'$2299.99':"FV05019977"},{
		'$2499.99':"FV05019981"},{
		'$2599.99':"FV05019984"},{
		'$2899.99':"FV05019987"},{
		'$2999.99':"FV05019989"},{
		'$3099.99':"FV07671570"},{
		'$3199.99':"FV05019990"},{
		'$3299.99':"FV07671572"},{
		'$3799.99':"FV05019992"},{
		'$3899.99':"FV08044217"},{
		'$3999.99':"FV05960955"},{
		'$4299.99':"FV07671577"},{
		'$4499.99':"FV05019995"},{
		'$5499.99':"FV05960625"},{
		'$5999.99':"FV07671179"},{
		'$6499.99':"FV05019997"},{
		'$8999.99':"FV05035644"},{
		'$9999.99':"FV05035645"},{
		'$11999.99':"FV08767052"},{
		'$12999.99':"FV11215655"},{
		'$24999.99':"FV09632426"},{
		'$39999.99':"FV09800975"},{
		'$99999.99':"FV09800575"},{
		'Max' : '0'
	}]
}
</script>