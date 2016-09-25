<section class="search-wrap">
	<div class="container">
		<div class="search-top-area">
			<h1 class="search-keyword">Search Results for “OLED TV”</h1><!-- 2015-08-03 change teg name -->
			<form action="http://www.lg.com/us/search.lg" method="post">
				<div class="search-box auto-complete">
					<div class="search-box-heading">
						<input type="search" name="search" class="psearch" data-url="/ajaxData/response/psearch" title="Enter Search Keyword">
						<button type="submit"><i class="icon icon-search"><span>Search</span></i></button>
					</div>
				</div>
				<p class="checkbox">
					<label for="search-within">
						<input name="search-within" id="search-within" type="checkbox">
						<span>Search Within These Results</span>
					</label>
				</p>
			</form>
		</div>
		<div class="search-result-area">
			<!-- 잘못된 검색어 변환 알림 메시지 -->
			<div class="search-spell-replaced">
				<p>Your search keyword is automatically replaced by <strong>“mobile”</strong></p>
			</div>
			<!-- 모바일에서는 tab 방식이 아닌 accordian 방식으로 리스트를 처리함 -->
			<!-- 결과타입별로 검색결과가 없는 경우 해당 accordian 삭제 -->
			<!-- 검색 결과가 전혀 없는 경우 search-no-result-m.inc 참고 -->
			<!-- 모든 accordian-wrap마다 중복되지 않는 id값을 지정해주고 acoordian-tab의 a요소 href에 해당 아이디를 해쉬태그로 지정해주어야 합니다. (스크롤 자동 이동을 위한 사전 작업) -->
			<div class="accordian-wrap active" id="products">
				<div class="accordian-tab">
					<a href="#products" data-toggle="accordion-tab"><span itemprop="name">Products (7)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
				</div>
				<div class="accordian-body search-result-list-wrap">
					<div class="list-group popular-keywords">
						<ul class="result-list">
							<li class="result-item">
								<div class="type-keyword">
									<div class="item-image">
										<a href="#" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->
											<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/search_result_01.jpg" alt="">
										</a>
									</div>
									<div class="item-text">
										<a href="#" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->
											<p class="title">OLED: Simply Indescribable</p>
											<p>With deeper, richer colors and stunning contrast, LG OLED TV is unlike any technology you've ever seen, and it delivers a picture that exceeds your wildest imagination. Plus OLED TV itself is remarkably slim and around half the weight of previous-generation displays. Learn more about OLED and experience the difference. </p>
										</a>
										<div class="cta cta-button">
											<a href="#" class="btn" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->Start Exploring LG OLED TVs</a>
										</div>
									</div>
								</div>
							</li>
							<li class="result-item">
								<div class="type-keyword">
									<div class="item-image">
										<a href="#" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->
											<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/search_result_01.jpg" alt="">
										</a>
									</div>
									<div class="item-text">
										<a href="#" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->
											<p class="title">OLED: Simply Indescribable</p>
											<p class="model-num">LG H950</p>
										</a>
										<ul class="model-spec-list">
											<li>LG Smart TV</li>
											<li>LG Cinema 3D</li>
											<li>Cinema Screen</li>
											<li>2.1 Speaker</li>
											<li>Energy Star® Qualified</li>
										</ul>
										<p>Learn more about LG TVs. So Smart, It's Simple</p>
										<div class="cta cta-button">
											<a href="#" class="btn" data-sc-item="search-results-products" data-sc-value="{anticle-name}"><!-- 2015-07-07 DTM -->Learn More</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<!-- Products Category 분류는 데스크탑과 다르게 accordian 요소를 중첩하여 사용함 (아래 참고) -->
					<!-- 검색 결과가 없는 경우 해당 Products Category 탭은 삭제함 -->
					<div class="accordian-wrap inner-accordian active" id="tvs">
						<div class="accordian-tab">
							<a href="#tvs" data-toggle="accordion-tab"><span itemprop="name">
							TVs (7)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<!-- Load More 기능이 들어가는 소스 아래 참고 (3.0과 동일) -->
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchProductsLoadMore?type=pmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8110+4294967282&Ntt=tv" data-init="3" data-get="3" data-total="7" data-btnText="Load More Results">
								</ul>
							</div>
							
						</div>
					</div>
					<div class="accordian-wrap inner-accordian" id="accessories">
						<div class="accordian-tab">
							<a href="#accessories" data-toggle="accordion-tab"><span itemprop="name">
							TV Accessories (41)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<!-- Load More 기능이 들어가는 소스 아래 참고 (3.0과 동일) -->
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchProductsLoadMore?type=pmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8110+4294965300&Ntt=tv" data-init="3" data-get="3" data-total="41" data-btnText="Load More Results">
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div class="accordian-wrap" id="commercial-products">
				<div class="accordian-tab">
					<a href="#commercial-products" data-toggle="accordion-tab"><span itemprop="name">Commercial Products (7)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
				</div>
				<div class="accordian-body search-result-list-wrap">
					<div class="accordian-wrap inner-accordian active" id="led">
						<div class="accordian-tab">
							<a href="#led" data-toggle="accordion-tab"><span itemprop="name">
							LED TVs (44)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchProductsLoadMore?type=pmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8110+4294965300&Ntt=oled" data-init="3" data-get="3" data-total="44" data-btnText="Load More Results">
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div class="accordian-wrap" id="support">
				<div class="accordian-tab">
					<a href="#support" data-toggle="accordion-tab"><span itemprop="name">Support (8)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
				</div>
				<div class="accordian-body search-result-list-wrap">
					<div class="accordian-wrap inner-accordian active" id="manual">
						<div class="accordian-tab">
							<a href="#manual" data-toggle="accordion-tab"><span itemprop="name">
							Manual Downloads (892)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchSupportLoadMore?type=cmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8111&Ntt=tvs" data-init="3" data-get="3" data-total="892" data-btnText="Load More Results">
								</ul>
							</div>
							
						</div>
					</div>
					<!-- video tutorials 추가 -->
					<div class="accordian-wrap inner-accordian" id="tutorial">
						<div class="accordian-tab">
							<a href="#tutorial" data-toggle="accordion-tab"><span itemprop="name">
							Videos & Tutorials (31)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group support-list">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchSupportLoadMore/tutorial?type=cmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8111&Ntt=tvs" data-init="3" data-get="3" data-total="892" data-btnText="Load More Results">
								</ul>
							</div>
						</div>
					</div>
					<!-- how-to & tips 추가 -->
					<div class="accordian-wrap inner-accordian" id="tutorial">
						<div class="accordian-tab">
							<!-- 2015-07-31 text 수정 -->
							<a href="#tutorial" data-toggle="accordion-tab"><span itemprop="name">
							Help Library (31)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group support-list">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchSupportLoadMore/tips?type=cmodel&lc=us&Nty=1&Ntx=mode%252bmatchallpartial&Ntk=All&N=8111&Ntt=tvs" data-init="3" data-get="3" data-total="892" data-btnText="Load More Results">
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="accordian-wrap" id="news-articles">
				<div class="accordian-tab">
					<a href="#news-articles" data-toggle="accordion-tab"><span itemprop="name">News &amp; Articles (19)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
				</div>
				<div class="accordian-body search-result-list-wrap">
					<div class="accordian-wrap inner-accordian active" id="insideLG">
						<div class="accordian-tab">
							<a href="#insideLG" data-toggle="accordion-tab"><span itemprop="name">
							Inside LG (4)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchNewsLoadMore?type=blist&amp;lc=us&amp;Nty=1&amp;Ntx=mode%252bmatchallpartial&amp;Ntk=All&amp;N=8118&amp;Ntt=tvs" data-init="3" data-get="3" data-total="4" data-btnText="Load More Results">
									
								</ul>
							</div>
						</div>
					</div>
					<div class="accordian-wrap inner-accordian" id="press">
						<div class="accordian-tab">
							<a href="#press" data-toggle="accordion-tab"><span itemprop="name">
							Press Releases (14)</span><span class="icon-wrap"><i class="icon icon-menu-plus"></i><i class="icon icon-menu-minus"></i></span></a>
						</div>
						<div class="accordian-body">
							<div class="list-group">
								<ul class="result-list loadmore" data-url="/ajaxData/search/srchArticlesLoadMore?type=nalist&amp;lc=us&amp;Nty=1&amp;Ntx=mode%252bmatchallpartial&amp;Ntk=All&amp;N=8117&amp;Ntt=tvs" data-init="3" data-get="3" data-total="119" data-btnText="Load More Results">
									
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<!-- 2015-08-12 삭제 <div class="back-to-top"><a href="#top">BACK TO TOP</a></div> -->
		</div>
	</div>
</section>
