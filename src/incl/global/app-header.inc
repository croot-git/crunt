<header id="appHeader" class="appHeader">
	<div class="container">
		<div class="branding">
			<a href="/"><img class="logo web" alt="LG" src="/lg4-common/img/global/header-logo.png"/><img class="logo mobile" alt="LG" src="/lg4-common/img/global/mobile/header-logo.png"/></a>
		</div>
		<div class="nav-wrapper">
			<!-- 2015-09-21 GNB Accessibility 보완 작업 시작 -->
			<div class="primary-nav">
				<ul class="primary-nav-list">
					<li class="primary-nav-part"><!-- Product Category -->
						<a href="#nav-mobile" class="outer-category primary-nav-link" data-index="0">Products</a>
						<div class="inner-category">
							<ul class="primary-nav-list">
								<li class="primary-nav-part">
									<a href="#nav-mobile" class="primary-nav-link" data-index="0">Mobile</a>
									<div class="tablet-sub-nav-wrap">
										<!--#include virtual="/incl/global/meganav-menus/app-meganav-mobile.inc" -->
									</div>
								</li>
								<li class="primary-nav-part">
									<a href="#nav-tv" class="primary-nav-link" data-index="1">TV/Audio/Video</a>
									<div class="tablet-sub-nav-wrap">
										<!--#include virtual="/incl/global/meganav-menus/app-meganav-tv.inc" -->
									</div>
								</li>
								<li class="primary-nav-part">
									<a href="#nav-appliances" class="primary-nav-link" data-index="2">Appliances</a>
									<div class="tablet-sub-nav-wrap">
										<!--#include virtual="/incl/global/meganav-menus/app-meganav-appliance.inc" -->
									</div>
								</li>
								<li class="primary-nav-part">
									<a href="#nav-computer" class="primary-nav-link" data-index="3">Computer</a>
									<div class="tablet-sub-nav-wrap">
										<!--#include virtual="/incl/global/meganav-menus/app-meganav-computer.inc" -->
									</div>
								</li>
								<li class="primary-nav-part">
									<a href="#nav-appliances" class="primary-nav-link" data-index="4">Test</a>
									<div class="tablet-sub-nav-wrap">
										<!--#include virtual="/incl/global/meganav-menus/app-meganav-appliance.inc" -->
									</div>
								</li>
							</ul>
							<div class="tablet-sub-control">
								<div class="prev"><a href="#"><i class="icon icon-arrow-prev"></i><span class="alt-text">Previous</span></a></div>
								<div class="next"><a href="#"><i class="icon icon-arrow-next"></i><span class="alt-text">Next</span></a></div>
							</div>
						</div>
					</li>
					<li class="primary-nav-part">
						<a href="#nav-support" class="primary-nav-link" data-index="1">Innovation</a>
						<div class="tablet-sub-nav-wrap">
							<!--#include virtual="/incl/global/meganav-menus/app-meganav-innovation.inc" -->
						</div>
					</li>
					<li class="primary-nav-part">
						<a href="#nav-support" class="primary-nav-link" data-index="2">Support</a>
						<div class="tablet-sub-nav-wrap">
							<!--#include virtual="/incl/global/meganav-menus/app-meganav-support.inc" -->
						</div>
					</li>
				</ul>
			</div>
			<!-- 2015-09-21 GNB Accessibility 보완 작업 끝 -->
			<div class="right-side-nav">
				<ul>
					<li class="search-item"><a href="#" class="primary-nav-search" data-index="0"><i class="icon icon-search"><span>Search</span></i></a></li>
					<li><a href="#" class="primary-nav-biz" data-index="0"><span>Business</span></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="search-takeover search-menu">
		<form action="http://www.lg.com/us/search.lg" method="post">
		<div class="search-box"><!-- 2015-05-15 Search Area 마크업 변경 -->
			<div class="search-box-heading">
				<label for="search_header">Search</label>
				<input class="psearch" data-alignment="right" data-url="/ajaxData/response/psearch-enhanced" id="search_header" placeholder="Search LG" maxlength="128" name="search" size="15" title="SEARCH LG.COM" type="search" autocomplete="off" placeholder="SEARCH LG.COM">
				<button type="submit"><i class="icon icon-search"><span>Search</span></i></button>
				<a href="#" class="primary-nav-search-close" data-index="0"><i class="icon icon-close"></i></a>
			</div>
			<div class="search-box-body psearch-results" id="psearch-resultssearch">
			</div>
		</div>
		</form>
	</div>
</header>