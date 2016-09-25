<section class="findTheRightFilter">
	<!--  2015-06-12 data-link-json 속성 추가 -->
	<form action="/ajaxData/returnCount.html" method="post" class="filter" data-event="change" data-sc-item="filter-search" data-search-category="washers">
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
				<div class="m-search-select m-washers-search-area">
					<div class="m-washers-choice">
						<p class="m-search-sub-title">What type of washer are you looking for?</p>
						<ul class="m-washers-list">
							<!-- 2015-05-22 on 클래스 제거, checked제거, data-url 제거 -->
							<!-- 2015-06-12 name, value값 startMysearch.json 으로 추출 -->
							<li>
								<label>
									<input type="checkbox" class="chk" name="FT05033912" value="FV11301154" />
									<span class="img"><i class="icon icon-front-loader"></i></span>
									Front Loader
								</label>
							</li>
							<li>
								<label>
									<input type="checkbox" class="chk" name="FT05033912" value="FV11301155" />
									<span class="img"><i class="icon icon-top-loader"></i></span>
									Top Loader
								</label>
							</li>
						</ul>
					</div>
					<!-- 2015-06-08 확정안된 영역 -->
					<div class="m-screen" style="display:none;">
						<p class="m-search-sub-title">The washer capacity you’re looking for?</p>
						<div class="m-slide-box">
							<div class="m-img"><i class="icon icon-washers"></i></div><!-- 2015-05-22 -->
							<div class="m-slide-bar">
								<span class="m-text">3.1cu.ft. - 4.0cu.ft.</span>
								<!-- <span class="m-bubble">
									<span>16cu.ft.-20cu.ft.</span>
								</span> 2015-06-04 삭제 -->
							</div>
						</div>
					</div>
					<!-- //2015-06-08 확정안된 영역 -->
					<div class="m-budget" style="display:none;">
						<p class="m-search-sub-title">My budget:</p>
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
//2015-06-04
var dragbarVal = {
	/* =============== static start ==============  */
	cuFt : ["Less than 3.1cu.ft.","3.1cu.ft. - 4.0cu.ft.","4.0cu.ft. - 4.5cu.ft.","More than 4.5cu.ft."],
	/* ================ static end =============== */
	/* 슬라이더 옵션값 */
	selectOption : {
		"Less than 3.1cu.ft." : {
			".94 cu. Ft.":'FV05000000',
			"1.0 cu. ft.":'FV05000000',
			"1.1 cu. ft.":'FV05000000',
			"1.19 (cu.ft.)":'FV05000000',
			"1.2 cu. ft.":'FV05000000',
			"1.4 cu. ft.":'FV05000000',
			"1.5 cu. ft.":'FV05000000',
			"1.6 cu. ft.":'FV05000000',
			"1.6 cu.ft.":'FV05000000',
			"1.7 cu. ft.":'FV05000000',
			"1.8 cu. ft.":'FV05000000',
			"16GB":'FV05000000',
			"2.0 cu. ft.":'FV05000000',
			"2.3 cu. ft.":'FV05000000',
			"2.3 cubit ft. (upper); 4.4 cubit ft. (lower)":'FV05000000',
			"2.44 cu.ft. (IEC)":'FV05000000',
			"2.7 cu.ft. (IEC)":'FV05000000',
			"2460 mAh":'FV05000000'
		},
		"3.1cu.ft. - 4.0cu.ft." : {
			"3.4 cu. ft.":'FV05000000',
			"3.6 cu. ft.":'FV05000000',
			"3.7 cu.ft. (DOE)":'FV05000000'
		},
		"4.0cu.ft. - 4.5cu.ft." : {
			"4.0 cu. ft.":'FV05000000',
			"4.1 cu. ft.":'FV05000000',
			"4.2 cu.ft. Capacity":'FV05000000',
			"4.2 cu.ft. XL Capacity (IEC)":'FV05000000',
			"4.3 cu. ft.":'FV05000000'
		},
		"More than 4.5cu.ft." : {
			"4.5 cu. ft.":'FV05000000',
			"4.7 cu. ft.":'FV05000000',
			"4.7 cu.ft. Upper / 4.7 cu.ft. Lower":'FV05000000',
			"4.7 cubic ft.":'FV05000000',
			"4.7 cubic ft. per oven":'FV05000000',
			"4.9 cu. ft.":'FV05000000',
			"5.0 cu. ft.":'FV05000000',
			"5.2 cu. ft.":'FV05000000',
			"5.4 cu. ft.":'FV05000000',
			"5.6 cu. ft.":'FV05000000',
			"5.7 cu. ft.":'FV05000000',
			"6 Months / 200 Gallons":'FV05000000',
			"6 Months / 300 Gallons":'FV05000000',
			"6 Months / 500 Gallons":'FV05000000',
			"6.1 cu.ft.":'FV05000000',
			"6.7 cu. ft.":'FV05000000',
			"7.0 cu.ft.":'FV05000000',
			"7.0 cu.ft.  Capacity":'FV05000000',
			"7.1 cu. ft.":'FV05000000',
			"7.3 cu. ft.":'FV05000000',
			"7.3 cu.ft. XL Capacity":'FV05000000',
			"7.4 cu. ft.":'FV05000000',
			"7.4 cu.ft. Ultra Large Capacity":'FV05000000',
			"9.0 cu. ft.":'FV05000000'
		}
	},
	/* 2015-06-11 가격 슬라이더 옵션값 */
	priceOption : {
		'min' : '0',
		'169.99':"FV11488067",
		'179.99':"FV06300594",
		'219.99':"FV11488070",
		'279.99':"FV05035546",
		'299.99':"FV05019907",
		'349.99':"FV05019911",
		'379.99':"FV05019913",
		'479.99':"FV05019921",
		'499.99':"FV05019923",
		'549.99':"FV05019928",
		'599.99':"FV05019930",
		'649.99':"FV05019933",
		'699.99':"FV05019935",
		'799.99':"FV05019940",
		'849.99':"FV05019942",
		'899.99':"FV05019944",
		'999.99':"FV05019947",
		'1049.99':"FV11215588",
		'1099.99':"FV05019948",
		'1199.99':"FV05019952",
		'1299.99':"FV05019954",
		'1399.99':"FV05019956",
		'1499.99':"FV05019958",
		'1599.99':"FV05019960",
		'1699.99':"FV05019963",
		'1899.99':"FV05019969",
		'1999.99':"FV05019972",
		'2099.99':"FV05019973",
		'2199.99':"FV05019975",
		'2299.99':"FV05019977",
		'2499.99':"FV05019981",
		'2599.99':"FV05019984",
		'2899.99':"FV05019987",
		'2999.99':"FV05019989",
		'3099.99':"FV07671570",
		'3199.99':"FV05019990",
		'3299.99':"FV07671572",
		'3799.99':"FV05019992",
		'3899.99':"FV08044217",
		'3999.99':"FV05960955",
		'4299.99':"FV07671577",
		'4499.99':"FV05019995",
		'5499.99':"FV05960625",
		'5999.99':"FV07671179",
		'6499.99':"FV05019997",
		'8999.99':"FV05035644",
		'9999.99':"FV05035645",
		'11999.99':"FV08767052",
		'12999.99':"FV11215655",
		'24999.99':"FV09632426",
		'39999.99':"FV09800975",
		'99999.99':"FV09800575",
		'max' : '0'
	}
}
</script>