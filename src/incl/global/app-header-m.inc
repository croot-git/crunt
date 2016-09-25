<header id="appHeaderMobile" class="appHeader">
	<div class="container">
		<div class="branding">
			<a href="/"><img class="logo" alt="LG" src="/lg4-common/img/global/mobile/header-logo.png"/></a>
		</div>
		<div class="primary-nav">
			<ul>
				<li><a href="#" class="primary-nav-link"><i class="icon icon-support-mobile"></i></a></li>
				<!-- <li><a href="#" class="primary-nav-link"><i class="icon icon-retail-locator"></i></a></li> -->
				<li><a href="#" class="primary-nav-link search-menu-btn"><span class="alt-text">Search</span><i class="icon icon-search"></i><i class="icon icon-close hide"></i></a></li><!-- 2015-08-26 add .alt-text -->
				<li><a href="#" class="primary-nav-link mobile-nav-hamburger"><span class="alt-text">Main Menu</span><i class="icon icon-hamburger"></i></a></li><!-- 2015-08-26 add .alt-text -->
			</ul>
		</div>
	</div>
	<div class="search-takeover search-menu">
		<form action="/search_result_products_m.html" method="post">
		<div class="search-box"><!-- 2015-05-18 Search Area 마크업 변경 -->
			<div class="search-box-heading">
				<label for="search_header">Search</label>
				<input class="psearch" data-alignment="right" data-url="/ajaxData/response/psearch-enhanced" id="search_header" placeholder="Search LG" maxlength="128" name="search" size="15" title="SEARCH LG.COM" type="search" autocomplete="off" placeholder="Search LG">
				<button type="submit"><i class="icon icon-search"><span>Search</span></i></button>
				<a href="#" class="primary-nav-search-close" data-index="0"><i class="icon icon-close"></i></a>
			</div>
			<div class="search-box-body psearch-results" id="psearch-resultssearch"></div>
		</div>
		</form>
	</div>
</header>
<!--#include virtual="/incl/global/app-mobilenav.inc" -->
