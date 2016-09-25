<!-- DTM(omniture tags) -->
<!-- 
	아래 대괄호 [] 로 감싸진 부분은 변경되는 값입니다.
	개발 입력시 대괄호 제거해 주시기 바랍니다.
	us와 en은 국가마다 다르게 넣어 주셔야 합니다.
	2015-07-15 : 카테고리와 서브 카테고리, Discontinued 페이지의 pageName 영역 값이 변경되었습니다. 
-->
<script type=text/javascript>
var digitalData={};

// 홈페이지의 경우,
//digitalData = {pageInfo:{pageName:'us:home',channel:'us:home',siteSection:'us:home'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// 슈퍼 카테고리 페이지의 경우
//digitalData = {pageInfo:{pageName:'us:[super-category-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// 그룹 카테고리 페이지의 경우
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[group-category-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[group-category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// 카테고리의 페이지의 경우
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// 서브 카테고리 페이지의 경우
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]:[sub-category-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]',subsubSection:'us:[super-category-name]:[category-name]:[sub-category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// Discontinued 페이지의 경우
// digitalData = {pageInfo:{pageName:'us::[super-category-name]:[category-name]:discontinued',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// Product 페이지의 경우
// digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]:[model-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'},productInfo:{productName:'[model-name]'}};

// Search Result 페이지의 경우 - 검색 키워드는 search 라는 변수로 페이지에 들어옵니다. search를 받아서 이 부분에 출력시켜 주세요.
//digitalData = {pageInfo:{pageName:'us:site-search:search-result'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'},siteSearch:{resultCount:'[검색결과수]',searchKeyword:'[검색키워드]'}};

// Where to buy 
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]:[model-name]:where-to-buy',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'},productInfo:{productName:'[model-name]'}};

// Compare
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]:compare',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// Find the Right 
//digitalData = {pageInfo:{pageName:'us:[super-category-name]:[category-name]:compare-[category-name]',channel:'us:[super-category-name]',siteSection:'us:[super-category-name]',subSection:'us:[super-category-name]:[category-name]'},siteInfo:{siteCountryCode:'us'},globalInfo:{languageCode:'en'}};

// Error 
var pathArray = location.pathname.split("/");
digitalData.globalInfo={};
digitalData.siteInfo={};
digitalData.pageInfo={};
digitalData.globalInfo.languageCode="en";
digitalData.siteInfo.siteCountryCode=pathArray[1];
digitalData.pageInfo.pageType="errorPage";
digitalData.pageInfo.pathName=location.pathname;

/*
digitalData = {
    pageInfo: {
        pageName: 'us:Appliances:Refrigerators:LSXS22423B',
        channel: 'us:Appliances',
        siteSection: 'us:Appliances',
        subSection: 'us:Appliances:Refrigerators'
    },
    siteInfo: {
        siteCountryCode: 'us'
    },
    globalInfo: {
        languageCode: 'en'
    },
    productInfo: {
        productName: 'LSXS22423B'
    }
};
*/
</script>


<!-- DTM(omniture tags) add 2015-04-29 
	모든 페이지에 추가해 주세요.
-->
<script type="text/javascript">_satellite.pageBottom();</script>
<!-- End of DTM -->