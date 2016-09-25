<section class="findTheRightFilter">
	<!--  2015-06-12 data-link-json 속성 추가 -->
	<form action="/ajaxData/returnCount.html" method="post" class="filter" data-event="change" data-sc-item="filter-search" data-search-category="refrigerators">
		<!-- 2015-05-22 filterField 클래스 추가 -->
		<div class="m-my-search-box filterField">
			<div class="m-my-search">
				<p class="m-search-title">START MY SEARCH</p>
				<div class="m-search-select m-refrigerators-search-area">
					<div class="m-refrigerators-choice">
						<p class="m-search-sub-title">What type of refrigerator<br>are you looking for?</p>
						<ul class="m-refrigerators-list">
							<!-- 2015-05-22 on 클래스 제거, checked제거, data-url 제거 -->
							<li>
								<label>
									<!-- 2015-06-12 name, value값 startMysearch.json 으로 추출 -->
									<input type="checkbox" class="chk"  name="FT05033894" value="FV11301074" />
									<span class="img"><i class="icon icon-french-door"></i></span>
									<!-- 2015-07-30 BR 추가 -->
									<span class="m-list-text">French <br>Door</span>
								</label>
							</li>
							<li>
								<label>
									<input type="checkbox" class="chk" name="FT05033894" value="FV11301075" />
									<span class="img"><i class="icon icon-side-by-side"></i></span>
									<!-- 2015-07-30 BR 추가 -->
									<span class="m-list-text">Side-by-<br>Side</span>
								</label>
							</li>
							<li>
								<label>
									<input type="checkbox" class="chk" name="FT05033894" value="FV11301077" />
									<span class="img"><i class="icon icon-bottom-freezer"></i></span>
									<!-- 2015-07-30 BR 추가 -->
									<span class="m-list-text">Bottom <br>Freezer</span>
								</label>
							</li>
							<li>
								<label>
									<input type="checkbox" class="chk" name="FT05033894" value="FV11301076" />
									<span class="img"><i class="icon icon-top-freezer"></i></span>
									<!-- 2015-07-30 BR 추가 -->
									<span class="m-list-text">Top <br>Freezer</span>
								</label>
							</li>
						</ul>
					</div>
					<div class="m-viewing" style="display:none;">
						<p class="m-search-sub-title">Size?</p>
						<ul class="m-check-list refrigerators-check-left">
							<li>
								<label><input type="checkbox" name="FT05033687" value="FTV0000188V">Under (19 cu ft)</label>
							</li>
							<li>
								<label><input type="checkbox" name="FT05033687" value="FTV0000182V">Large (20-24 cu ft)</label>
							</li>
							<li>
								<label><input type="checkbox" name="FT05033687" value="FTV0000183V">Ultra-Large (25-29 cu ft)</label>
							</li>
						</ul>
						<ul class="m-check-list refrigerators-check-right">
							<li>
								<label><input type="checkbox" name="FT05033687" value="FTV0000185V">Super (30-31 cu ft)</label>
							</li>
							<li>
								<label><input type="checkbox" name="FT05033687" value="FTV0000203V">Mega (32+ cu ft)</label>
							</li>
						</ul>
					</div>
					<div class="m-viewing m-features-want" style="display:none;">
						<p class="m-search-sub-title">Features I want?</p>
						<ul class="m-check-list">
							<li>
								<!-- 2015-06-08 항목 변경될 부분 확정안됨 -->
								<label><input type="checkbox" class="chk" name="test22" value="value22" />Door-in-Door</label>
							</li>
							<li>
								<label><input type="checkbox" name="FT05033699" value="FV11300619V">Counter Depth</label>
							</li>
							<li>
								<label><input type="checkbox" name="FT05033700" value="FV11300626V">Ice &amp; Water Dispenser</label>
							</li>
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