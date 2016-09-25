<div class="add-to-compare">
	<section class="refind-your-search dark-grey-background hide">
<!-- 2015-06-02 lock 버튼에  data-product-id 속성 추가 -->
<!-- 2015-05-22 폰트 아이콘으로 일부 이미지 변경, 별포인트 마크업 변경 -->
<!-- 2015-06-01 data-search-category 속성삭제 -->
		<form action="/ajaxData/compare.lg.html" method="post" class="filter"><!-- delete  data-event="change" data-sc-item="filter-search" -->
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
				<fieldset class="form filtered filterField">
					<!-- 1 -->
					<!-- 2015-06-08 display type 항목 변경됨 -->
					<legend>Display Type:</legend>
					<label><input type="checkbox" name="FV06942345" value="FV06942345"> <span>OLED TVs</span></label>
					<label><input type="checkbox" name="FV06942348" value="FV06942348"> <span>LED TVs</span></label>
					<!-- 2015-06-08 plasma TVs 검색 불가할경우 삭제될 예정
						label><input type="checkbox" name="FV06942343" value="FV06942343"> <span>Plasma TVs</span></label
					-->
					<label><input type="checkbox" name="FV06942353" value="FV06942353"> <span>Smart TV</span></label>
					<label><input type="checkbox" name="FV06942342" value="FV06942342"> <span>Ultra HD</span></label>
					<label><input type="checkbox" name="FV06942312" value="FV06942312"> <span>3D TV</span></label>

					<!-- 3 -->
					<div class="screen">
						<div class="slide-box">
							<div class="img">
								<!-- 2015-05-22 마크업 변경 -->
								<i class="icon icon-size-refine"></i>
							</div>
							<div class="slide-bar">
								<p class="first-unit">22"</p>
								<p class="last-unit">105"</p>
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
							<div class="slide-bar">
								<p class="first-unit">$0</p>
								<p class="last-unit">$10,000+</p>
							</div>
						</div>
						<!-- 2015-05-17 just 대소문자 수정 -->
						<!-- 2015-06-02 <label><input type="checkbox" name="FV06942122" value="Show Just Promotions"> <span>Show Just Promotions</span></label> -->
					</div>
				</fieldset>

			</div>
			<div class="column2">
				<h1>Change/Add to Comparision</h1>
				<!-- 2015-08-24 마크업 일부 수정 -->
				<p class="compare-count"><strong>&quot;<span class="count">0</span>&quot;</strong> <span class="check-singular" data-singular="Product in Comparison" data-plural="Products in Comparison">Products in Comparison</span></p><!-- 2015-06-02 -->
				<section class="grid">
					<div class="response">
						<div class="product-grid">
							<div class="product-list-wrap">
								<!-- 2015-06-02 change 버튼 클릭시 동적 생성으로 변경 -->
							</div>
						</div>
						<!-- 2015-06-02 -->
						<div class="btn-center">
							<a href="#" class="btn">Prev</a>
							<a href="#" class="btn">Next</a>
							<a href="#" class="btn">Submit</a><!-- 2015-06-04 -->
						</div>
						<!-- //2015-06-02 -->
					</div>
				</section>
			</div>
			<a href="#" class="close-btn"><i class="icon icon-close"></i></a>
		</form>
	</section>
	<div class="compare-view-item-holder"><div class="showdow"></div></div>
	<section class="compare-view-item">
		<div class="compare-view-left">
			<div><a href="#" class="back-btn">&lt; Back</a></div>
			<div><a href="#" class="change-btn"><i class="icon icon-menu-plus"></i> Change / Add Products</a></div>
			<div><a data-url="/compare_print.html" href="#" onClick="printOpen(this); return false;" class="print-btn"><i class="icon icon-btn-print"></i><span>Print Comparison</span></a></div><!-- 2015-05-17 -->
		</div>

		<div class="compare-item">
			<p class="compare-title">Compare TVs</p>
			<!-- 2015-05-20 초기 카운트값 0으로 변경 -->
			<!-- 2015-08-24 마크업 일부 수정 -->
			<p class="compare-count"><strong><span class="count">0</span></strong> <span class="check-singular" data-singular="Product in Comparison" data-plural="Products in Comparison">Products in Comparison</span></p><!-- 2015-08-07 delete &quot; -->

			<div class="item-view">
				<div class="view-cont">
					<!-- 2015-06-05 data-change-text 속성추가-->
					<ul class="product-lists item-list" style="width:2070px;" data-change-text="LOCK|UNLOCK">
						<!-- 2015-05-28 list 갯수 6개로 변경 -->
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3181ST">LOCK</a></li><!-- 2015-05-22  data-product-id="LRG3083ST" 속성 추가 -->
									<li><a href="#" data-product-id="LRG3181ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_1.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">55&quot; Class 1080p Smart 3D Curved OLED TV</a></p>
									<p class="model-num"><a href="#">65EG9700 </a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001394">
										<div class="points_wrap">
											<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
										</div>
										<span><a href="#">(9)</a></span><!-- 2015-06-01 link -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3182ST">LOCK</a></li>
									<li><a href="#" data-product-id="LRG3182ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_2.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">LGE-16PAR38-30-35: 16W LED PARL38 Light Bulb 3000K (75W Equivalent), 35° Beam Angle</a></p>
									<p class="model-num"><a href="#">55EG9700</a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001200"><!--  2015-08-11 -->
										<a href="#" class="no-rating">Be the first to review</a><!-- 2015-06-01 별점 없을때 -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3183ST">LOCK</a></li>
									<li><a href="#" data-product-id="LRG3183ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_2.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">65&quot; Class UHD 4K Smart 3D Curved OLED</a></p>
									<p class="model-num"><a href="#">55EG9700</a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001395">
										<div class="points_wrap">
											<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
										</div>
										<span><a href="#">(9)</a></span><!-- 2015-06-01 link -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3184ST">LOCK</a></li>
									<li><a href="#" data-product-id="LRG3184ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_2.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">65&quot; Class UHD 4K Smart 3D Curved OLED</a></p>
									<p class="model-num"><a href="#">55EG9700</a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001396">
										<div class="points_wrap">
											<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
										</div>
										<span><a href="#">(9)</a></span><!-- 2015-06-01 link -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3185ST">LOCK</a></li>
									<li><a href="#" data-product-id="LRG3185ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_2.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">65&quot; Class UHD 4K Smart 3D Curved OLED</a></p>
									<p class="model-num"><a href="#">55EG9700</a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001397">
										<div class="points_wrap">
											<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
										</div>
										<span><a href="#">(9)</a></span><!-- 2015-06-01 link -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="item">
							<div class="item-area">
								<ul class="item-uitls">
									<li><a href="#" data-product-id="LRG3186ST">LOCK</a></li>
									<li><a href="#" data-product-id="LRG3186ST">REMOVE</a></li>
								</ul>
								<!-- 2015-06-22 lazy load 적용 -->
								<p class="item-img"><a href="#"><img src="/img_sample/cate_refrig_2.jpg" alt="" /></a></p>
								<div class="item-list-info">
									<p class="model-name"><a href="#">65&quot; Class UHD 4K Smart 3D Curved OLED</a></p>
									<!-- 2015-06-11 model os 삭제 p class="model-os">TV w/webOSTM</p -->
									<p class="model-num"><a href="#">55EG9700</a></p><!-- 2015-06-01 link -->
								</div>
								<div class="item-details">
									<div class="rating" data-modelid="MD00001398">
										<div class="points_wrap">
											<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
										</div>
										<span><a href="#">(9)</a></span><!-- 2015-06-01 link -->
									</div>
									<a href="#" class="item-buy-btn" data-sc-item="where-to-buy" data-sc-value="{모델코드}">Where to Buy</a>
									<!-- 2015-06-01 마크업 수정 -->
									<div class="product-price">
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
										<div class="purchase-price">
											<p class="price">$3499.<span>99</span></p>
											<p class="legal">Suggested Price</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div class="view-control">
					<a href="#" class="btn-prev" style="display:none;"><i class="icon icon-arrow-prev"><span class="alt-text">Previous</span></i></a><!-- 2015-08-27 -->
					<a href="#" class="btn-next" style="display:none;"><i class="icon icon-arrow-next"><span class="alt-text">Next</span></i></a><!-- 2015-08-27 -->
				</div>
			</div>

		</div>
	</section>
	<section class="compare-item-info">
		<div class="info-summary">
			<p class="summary-title">Summary</p>
		</div>
		<p class="compare-sub-title">Technical Specifications</p>
		<!-- 2015-05-22 마크업변경-->
		<div class="accordion-control-holder"><div class="showdow"></div></div>
		<div class="accordion-control">
			<div>
				<dl class="choice-control">
					<dt>Show:</dt>
					<dd class="all clicked"><a href="#">All</a></dd><!-- 선택시 clicked 추가 -->
					<dd><a href="#">Differences</a></dd>
					<dd>
						<a href="#">Selection</a>
						<a href="#" class="icon"><i class="icon icon-point"></i></a>
						<div class="tooltop"><i class="icon icon-point"></i> Show only specifications you have selected.</div><!-- 2015-06-10 -->
					</dd>
				</dl>
				<a href="#" class="all-view"><i class="icon icon-tab-plus"></i> EXPAND ALL</a><!-- 2015-05-22 / 2015-06-04 -->
				<a href="#" class="all-close" style="display:none;"><i class="icon icon-tab-minus"></i> COLLAPSE ALL</a><!-- 2015-05-22 -->
			</div>
		</div>
		<!-- //2015-05-22 마크업변경-->
		<!-- 2015-05-22 -->
		<div class="info-technical">
			<p class="info-list-title"><a href="#" class="hidden-title"><i class="icon icon-tab-minus"></i> PICTURE QUALITY</a></p><!-- 접기아이콘은 view-title 대신 hidden-title로 -->
			<div class="info-list">
				<ul class="info-title">
					<li><label><input type="checkbox" class="chk" /> ULTRA HD (3840x2160)ULTRA HD (3840x2160)ULTRA HD (3840x2160)</label></li>
					<li><label><input type="checkbox" class="chk" /> REFRESH RATE</label></li>
					<li><label><input type="checkbox" class="chk" /> LED PLUS  (local dimming)</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K ENGINE</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K UPSCALER</label></li>
					<li><label><input type="checkbox" class="chk" /> TRIPLE XD ENGINE</label></li>
				</ul>
				<div class="info-cont">
					<div class="info-view">
						<div class="info-cont-view" style="width:2070px;">
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li><!-- 2015-08-27 alt-text 추가 -->
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li><!-- 2015-08-27 alt None을 N/A로 변경 -->
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="info-technical techmical-hidden">
			<p class="info-list-title"><a href="#" class="view-title"><i class="icon icon-tab-minus"></i> AUDIO</a></p><!-- - 아이콘은 view-title 대신 hidden-title로 -->
			<div class="info-list">
				<ul class="info-title">
					<li><label><input type="checkbox" class="chk" /> ULTRA HD (3840x2160)</label></li>
					<li><label><input type="checkbox" class="chk" /> REFRESH RATE</label></li>
					<li><label><input type="checkbox" class="chk" /> LED PLUS  (local dimming)</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K ENGINE</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K UPSCALER</label></li>
					<li><label><input type="checkbox" class="chk" /> TRIPLE XD ENGINE</label></li>
				</ul>
				<div class="info-cont">
					<div class="info-view">
						<div class="info-cont-view" style="width:2070px;">
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="info-technical techmical-hidden">
			<p class="info-list-title"><a href="#" class="view-title"><i class="icon icon-tab-minus"></i> CONNECTIVITY</a></p><!-- - 아이콘은 view-title 대신 hidden-title로 -->
			<div class="info-list">
				<ul class="info-title">
					<li><label><input type="checkbox" class="chk" /> ULTRA HD (3840x2160)</label></li>
					<li><label><input type="checkbox" class="chk" /> REFRESH RATE</label></li>
					<li><label><input type="checkbox" class="chk" /> LED PLUS  (local dimming)</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K ENGINE</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K UPSCALER</label></li>
					<li><label><input type="checkbox" class="chk" /> TRIPLE XD ENGINE</label></li>
				</ul>
				<div class="info-cont">
					<div class="info-view">
						<div class="info-cont-view" style="width:2070px;">
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>7 Modes (Vivid/Standard/Cinema/Sport/Game/Expert1/Expert2)</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>7 Modes (Vivid/Standard/Cinema/Sport/Game/Expert1/Expert2)</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>7 Modes (Vivid/Standard/Cinema/Sport/Game/Expert1/Expert2)</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>7 Modes (Vivid/Standard/Cinema/Sport/Game/Expert1/Expert2)</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="info-technical techmical-hidden">
			<p class="info-list-title"><a href="#" class="view-title"><i class="icon icon-tab-minus"></i> SMART TV</a></p><!-- - 아이콘은 view-title 대신 hidden-title로 -->
			<div class="info-list">
				<ul class="info-title">
					<li><label><input type="checkbox" class="chk" /> ULTRA HD (3840x2160)</label></li>
					<li><label><input type="checkbox" class="chk" /> REFRESH RATE</label></li>
					<li><label><input type="checkbox" class="chk" /> LED PLUS  (local dimming)</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K ENGINE</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K UPSCALER</label></li>
					<li><label><input type="checkbox" class="chk" /> TRIPLE XD ENGINE</label></li>
				</ul>
				<div class="info-cont">
					<div class="info-view">
						<div class="info-cont-view" style="width:2070px;">
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="info-technical techmical-hidden">
			<p class="info-list-title"><a href="#" class="view-title"><i class="icon icon-tab-minus"></i> SMART SHARE</a></p><!-- - 아이콘은 view-title 대신 hidden-title로 -->
			<div class="info-list">
				<ul class="info-title">
					<li><label><input type="checkbox" class="chk" /> ULTRA HD (3840x2160)</label></li>
					<li><label><input type="checkbox" class="chk" /> REFRESH RATE</label></li>
					<li><label><input type="checkbox" class="chk" /> LED PLUS  (local dimming)</label></li>
					<li><label><input type="checkbox" class="chk" /> TRU-4K ENGINE</label></li>
					<li><label><input type="checkbox" class="chk" /> Tru-4k upscaler</label></li>
					<li><label><input type="checkbox" class="chk" /> TRIPLE XD ENGINE</label></li>
				</ul>
				<div class="info-cont">
					<div class="info-view">
						<div class="info-cont-view" style="width:2070px;">
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
							<ul class="info-cont-list">
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li>12Hz</li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
							</ul>
							<ul class="info-cont-list">
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li>240Hz</li>
								<li><img src="/lg4-common/img/mysearch/img_compare_info_none.png" alt="N/A" /></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
								<li><i class="icon icon-check"></i><span class="alt-text">available</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //2015-05-22 -->
	</section>
</div>
<!-- 2015-06-01 -->
<section class="alert-popup">
	<p class="alert-text">Compare is only available up to 10</p>
	<div class="alert-btn"><a href="#">OK</a></div>
	<a href="#" class="alert-close"><i class="icon icon-close"></i></a>
</section>

<!-- //2015-06-01 -->
<script type="text/javascript">
function printOpen(thisE){
	var _this = $(thisE),
	url = _this.attr('data-url'),
	left = Math.round(screen.width/2 - 600),
	top = 0;

	window.open(url,'_blank','left=' + left + ',top=' + top + ',width=1220,height=' + Math.round(screen.height - 100) + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
	return false;
}
//2015-06-03
var dragbarVal = {
	/* 2015-06-11 화면 사이즈 슬라이더 옵션값 */
	selectOption : [{
		//text  : value
		'min' : '0'},{
		'22"':'FV05000000'},{
		'24"':'FV05000001'},{
		'28"':'FV05000002'},{
		'29"':'FV05000003'},{
		'32"':'FV05000004'},{
		'39"':'FV05000005'},{
		'40"':'FV05000006'},{
		'42"':'FV05000007'},{
		'47"':'FV05000008'},{
		'49"':'FV05000009'},{
		'50"':'FV05000010'},{
		'55"':'FV05000011'},{
		'60"':'FV05000012'},{
		'65"':'FV05000013'},{
		'70"':'FV05000014'},{
		'77"':'FV05000015'},{
		'79"':'FV05000016'},{
		'84"':'FV05000017'},{
		'98"':'FV05000018'},{
		'105"':'FV05000019'},{
		'max' : '0'
	}],
	/* 2015-06-11 가격 슬라이더 옵션값 */
	priceOption : [{
		'min' : '0'},{
		'169.99':"FV11488067"},{
		'179.99':"FV06300594"},{
		'219.99':"FV11488070"},{
		'279.99':"FV05035546"},{
		'299.99':"FV05019907"},{
		'349.99':"FV05019911"},{
		'379.99':"FV05019913"},{
		'479.99':"FV05019921"},{
		'499.99':"FV05019923"},{
		'549.99':"FV05019928"},{
		'599.99':"FV05019930"},{
		'649.99':"FV05019933"},{
		'699.99':"FV05019935"},{
		'799.99':"FV05019940"},{
		'849.99':"FV05019942"},{
		'899.99':"FV05019944"},{
		'999.99':"FV05019947"},{
		'1049.99':"FV11215588"},{
		'1099.99':"FV05019948"},{
		'1199.99':"FV05019952"},{
		'1299.99':"FV05019954"},{
		'1399.99':"FV05019956"},{
		'1499.99':"FV05019958"},{
		'1599.99':"FV05019960"},{
		'1699.99':"FV05019963"},{
		'1899.99':"FV05019969"},{
		'1999.99':"FV05019972"},{
		'2099.99':"FV05019973"},{
		'2199.99':"FV05019975"},{
		'2299.99':"FV05019977"},{
		'2499.99':"FV05019981"},{
		'2599.99':"FV05019984"},{
		'2899.99':"FV05019987"},{
		'2999.99':"FV05019989"},{
		'3099.99':"FV07671570"},{
		'3199.99':"FV05019990"},{
		'3299.99':"FV07671572"},{
		'3799.99':"FV05019992"},{
		'3899.99':"FV08044217"},{
		'3999.99':"FV05960955"},{
		'4299.99':"FV07671577"},{
		'4499.99':"FV05019995"},{
		'5499.99':"FV05960625"},{
		'5999.99':"FV07671179"},{
		'6499.99':"FV05019997"},{
		'8999.99':"FV05035644"},{
		'9999.99':"FV05035645"},{
		'11999.99':"FV08767052"},{
		'12999.99':"FV11215655"},{
		'24999.99':"FV09632426"},{
		'39999.99':"FV09800975"},{
		'99999.99':"FV09800575"},{
		'max' : '0'
	}]
}
</script>
