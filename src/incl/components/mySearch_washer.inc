<section class="findTheRightFilter">
	<!--  2015-06-22 data-link-json 속성 삭제 -->
	<form action="/ajaxData/returnCount.html" method="post" class="filter" data-event="change" data-sc-item="filter-search" data-search-category="washers">
		<!-- 2015-05-22 data-url 속성 제거 -->
		<!-- 2015-06-03 수정// -->
		<input type="hidden" name="priceMin" value="0"/>
		<input type="hidden" name="priceMax" value="0"/>
		<!-- 2015-05-22 filterField 클래스 추가 -->
		<div class="my-search-box filterField">
			<div class="my-search">
				<p class="search-title">START MY SEARCH</p>
				<div class="washers-search-area">
					<div class="washers-choice">
						<p class="search-sub-title">What type of washer are you looking for?</p>
						<ul class="washers-list">
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
					<div class="screen">
						<p class="search-sub-title">The washer capacity you’re looking for?</p>
						<div class="slide-box">
							<div class="img"><i class="icon icon-washers"></i></div>
							<div class="slide-bar">
								<span class="text">3.1cu.ft. - 4.0cu.ft.</span>
							</div>
						</div>
					</div>
					<!-- //2015-06-08 확정안된 영역 -->
					<div class="budget">
						<p class="search-sub-title">My budget:</p>
						<div class="slide-box">
							<div class="slide-bar">
								<p class="first-unit">$0</p>
								<p class="last-unit">$2200</p>
							</div>
						</div>
					</div>
					<div class="matching">
						<p class="search-sub-title">Matching Products</p>
						<!-- 2015-06-11 카운트 기본0 see result 버튼 숨김 -->
						<p class="matching-count">0</p>
						<p class="matching-btn"><a href="/category_sub_d.html" class="red-btn hide">See Results</a></p>
					</div>
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
	priceOption : [{'Min':'0'},{'$169':'RG00001076'},{'$179':'RG00001077'},{'$219':'RG00001079'},{'$279':'RG00001083'},{'$299':'RG00001084'},{'$349':'RG00001086'},{'$379':'RG00001087'},{'$399':'RG00001088'},{'$479':'RG00001669'},{'$499':'RG00001670'},{'$549':'RG00001093'},{'$599':'RG00001092'},{'$649':'RG00001095'},{'$699':'RG00001096'},{'$799':'RG00001099'},{'$849':'RG00001100'},{'$899':'RG00001101'},{'$999':'RG00001104'},{'$1049':'RG00001105'},{'$1099':'RG00001106'},{'$1199':'RG00001109'},{'$1299':'RG00001111'},{'$1399':'RG00001112'},{'$1499':'RG00001114'},{'$1599':'RG00001115'},{'$1699':'RG00001117'},{'$1899':'RG00001121'},{'$1999':'RG00001123'},{'$2099':'RG00001124'},{'$2199':'RG00001125'},{'$2299':'RG00001126'},{'$2499':'RG00001128'},{'$2599':'RG00001130'},{'$2899':'RG00001132'},{'$2999':'RG00001133'},{'$3099':'RG00001134'},{'$3199':'RG00001135'},{'$3299':'RG00001136'},{'$3499':'RG00001137'},{'$3799':'RG00001139'},{'$3899':'RG00001140'},{'$4299':'RG00001141'},{'$4499':'RG00001142'},{'$5499':'RG00001144'},{'$5999':'RG00001145'},{'$6499':'RG00001146'},{'$8999':'RG00001149'},{'$9999':'RG00001150'},{'$11999':'RG00001151'},{'$12999':'RG00001152'},{'$24999':'RG00001154'},{'$39999':'RG00001155'},{'$99999':'RG00001156'},{'Max':'0'}]
}
</script>