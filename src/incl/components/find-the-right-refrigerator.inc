<section class="find-the-right">
<!-- form의 action attr와 data-inputList에 데이터를 로드할 베이스 주소를 입력 -->
<form action="/ajaxData/category/findTheRight/compare-refrigerators/result.html" data-inputList="/ajaxData/category/findTheRight/compare-refrigerators/input-list.html" method="post">
	<!-- find the right category 정보 input lg 3.0과 동일한 방식으로 적용됨 참고 -->
	<input type="hidden" name="viewAll" value="compare-refrigerators">
	<input type="hidden" name="mstId" value="CT10000021">
	<input type="hidden" name="subId" value="CT10000021">
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
								<span class="flow-step">Size</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Door Style</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Color</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Ice &amp; Water</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="flow-icon"><i class="icon icon-circle"></i></span>
								<span class="flow-step">Smart Cooling</span>
							</a>
						</li>
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
						<div class="checkbox-wrap big-tile-button textbox">
							<div class="checkbox-tile">
								<div class="tile-box">
									<label>
										<input type="checkbox" name="selectDoor" value="FV11300933" />
										<span class="option-icon"><i class="icon icon-french-door-01"></i></span>
										<span class="option-text">Door-In-Door</span>
									</label>
								</div>
								<div class="text-box">
									<h3>Door-In-Door®<sup>1</sup></h3>
									<p>Puts the things that hide in plain sight actually in plain sight. Use it for beverages, snacks, condiments – you name it – for get-in-and-get-out convenience plus reduced cold air loss of up to 47%.*</p>
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
								<div class="text-box">
									<h3>French 4-Door</h3>
									<p>Elevate your kitchen with style and innovation. These fridges keep everyday foods at eye level for greater efficiency, and offer more available space for versatile storage.</p>
								</div>
							</div>
							-->
							<div class="checkbox-tile">
								<div class="tile-box">
									<label><!-- 2015-08-03 edit -->
										<input type="checkbox" name="selectDoor" value="FV11300934" />
										<span class="option-icon"><i class="icon icon-french-door-02"></i></span><!-- 2015-08-05 change icon -->
										<span class="option-text">French Door</span>
									</label>
								</div>
								<div class="text-box">
									<h3>French Door</h3><!-- 2015-08-03 edit -->
									<p>Elevate your kitchen with style and innovation. These fridges keep everyday foods at eye level for greater efficiency, and offer more available space for versatile storage.</p><!--2015-08-05 text - TBD -->
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
								<div class="text-box">
									<h3>Side-by-Side</h3>
									<p>When you need full-length compartments for both fresh and frozen foods, a side-by-side model can be a smart choice. You get a refrigerator on the right side and a tall freezer on the left. </p>
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
								<div class="text-box">
									<h3>Top Freezer</h3>
									<p>The most traditional door style features the freezer section on top, full-length swing-doors, and the LG refined approach to design.</p>
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
								<div class="text-box">
									<h3>Bottom Freezer</h3>
									<p>If your kitchen can accommodate it, there's nothing easier than the full-swing doors you get with these models. The refrigerator goes on top for easy access to everyday foods, and the freezer is below. Plus, you can choose between a pull-drawer or a swing-door freezer section.</p><!-- 2015-06-22 -->
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
					<div class="step-contents">
						<div class="checkbox-wrap tile-button"><!-- 2015-08-03 컬러 순서 변경 -->
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
							Enjoy easy access to cold refreshment with a built-in icemaker. LG refrigerators with an ice & water dispenser offer even more refreshment, and let you fill anything from pint glasses to pitchers. Plus, you don't have to sacrifice door-shelf space with LG's Slim SpacePlus ice system.
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
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_1.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">LGE-16PAR38-30-35: 16W LED PARL38 Light Bulb 3000K (75W Equivalent), 35° Beam Angle</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001294">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LMXS30786S" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<!-- <a href="https://usstore.lg.com/store?Action=buy&Env=BASE&Locale=en_US&SiteID=lgus&productID=306352300&quantity=1" class="btn">Pre Order</a> -->
												<a href="https://usstore.lg.com/store?Action=buy&Env=BASE&Locale=en_US&SiteID=lgus&productID=306352300&quantity=1" class="btn">Add to Cart</a>
												<a href="javascript:void(0)" class="btn buynow" data-sku="3429088" data-partner-id="LG" value="buy now" title="Open New Window">Buy Now</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$1499.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_2.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">60" Class (59.5" Diagonal) 1080p Smart LED TV w/ webOS 2.0</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001291">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LRG3082ST" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<a href="#" class="btn">Where to Buy</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$1499.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_3.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">60" Class (59.5" Diagonal) 1080p Smart LED TV w/ webOS 2.0</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001292">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LFXC24726D" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<a href="#" class="btn">Where to Buy</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$2999.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_3.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">60" Class (59.5" Diagonal) 1080p Smart LED TV w/ webOS 2.0</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001293">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LFXC24726D" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<a href="#" class="btn">Where to Buy</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$2999.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_3.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">60" Class (59.5" Diagonal) 1080p Smart LED TV w/ webOS 2.0</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001296">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LFXC24726D" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<a href="#" class="btn">Where to Buy</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$2999.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
								<li>
									<div class="other-item-image"><a href="#"><img src="/img_sample/saying_dummy_3.jpg" alt="" /></a></div>
									<div class="other-item-info">
										<div class="product-name"><a href="#">60" Class (59.5" Diagonal) 1080p Smart LED TV w/ webOS 2.0</a></div>
										<p class="product-code"><a href="#">40LF6300</a></p>
										<!-- 2015-06-17 size, color 마크업 삭제 -->
										<!-- <div class="product-size">
											<p>AVAILABLE SIZE:</p>
											<ul>
												<li>
													<a href="#" class="on">40”</a>
												</li>
												<li>
													<a href="#">43”</a>
												</li>
												<li>
													<a href="#">49”</a>
												</li>
												<li>
													<a href="#">55”</a>
												</li>
												<li>
													<a href="#">60”</a>
												</li>
												<li>
													<a href="#">65”</a>
												</li>
											</ul>
										</div>
										<div class="product-color">
											<p>AVAILABLE COLORS:</p>
											<ul class="list_colors">
												<li itemprop="color" class="active swatch-real-stainless-steel"><a href="#"><span class="color_chip_cover"></span><span class="swatch large smooth-black"></span>Graphite Steel</a></li>
												<li itemprop="color" class="swatch-smooth-white"><a href="#"><span class="swatch large smooth-white"></span>White</a></li>
											</ul>
										</div> -->
										<div class="product-rating" data-modelid="MD00001297">
											<div class="points_wrap">
												<div class="review_bg" style="width:50%;"><div class="review_point"><i class="icon icon-stars points"></i></div><i class="icon icon-stars"></i></div>
											</div>
											<span><a href="/product_d.html#reviews">(19 Reviews)</a></span>
										</div>
										<div class="product-compare">
											<p class="compare-check">
												<label>
													<input type="checkbox" class="compare" data-product-id="LFXC24726D" name="compare"><span>Add to Compare</span>
												</label>
												<span class="compare_y hide"><a href="/compare_d.html">COMPARE (<em>1</em>)</a></span>
											</p>
										</div>
										<div class="product-purchase">
											<div class="cta cta-button">
												<a href="#" class="btn">Where to Buy</a>
											</div>
										</div>
										<div class="product-price">
											<!-- 2015-06-03 promotional-price 가 있는 경우
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
												<p class="price">$2999.<span>99</span></p>
												<p class="legal">Promotional Price</p>
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
								</li>
							</ul>
							<div class="page-controls bottom">
								<!-- 데이터 정렬 select -->
								<span class="sort">
									<label>Sort by:</label>
									<select id="sortBy" name="sort" class="sort-select chosen-select">
										<option value="0">Newest Products</option>
										<option value="1">Most Popular</option>
										<option value="2" selected>Price: Lowest to Highest</option>
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