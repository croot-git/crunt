<!-- M02A -->
<!--
	Requred Class : .module .m02
	Options : 
	- Light/Dark text : .text-light / .text-dark
	- Narrow / Standard / Wide text Column : .text-narrow / .text-standard / .text-wide
	- Top/Bottom Anchored Image : .image-top / .image-bottom
	- Left Anchored Image : [.image-left] (toggle 이 아니고 option임)

	추가 결정사항 
	* Mobile 화면에서는 Inset image를 사용하지 않습니다.
-->
<!-- 텍스트 넓이가 좁은 경우  -->
<section class="module m02 text-dark text-narrow image-top">
	<!-- 6. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_03_m.jpg" alt="LG G Flex" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_03.jpg" alt="LG G Flex" />
	</div>
	<div class="text-block">
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 1. Eyebrow --><h4>OLED TVS</h4>
				<!-- 2. Headline --><h3>Let in More Light</h3>
				<!-- 3. Body Copy -->
				<p>
					The precision Laser Auto Focus on the G Flex2 enables the 13 MP OIS+ lens to capture vibrant images even when lighting isn’t ideal, for a photographic experience that’s undeniably brilliant.
				</p>
				<!-- 4. CTA  
				<div class="cta cta-button">
					<a href="#" class="btn">Learn More</a>
				</div>
				-->
				<div class="cta cta-text">
					<a href="#">Shop Prime 4K UHD TVs <i class="icon icon-arrow-link"></i></a>
					<a href="#">See the 65UF9500 <i class="icon icon-arrow-link"></i></a>
				</div>
			</div>
		</div>
	</div>
	<!-- 5. Inset Image -->
	<!-- 2015-06-22 lazy load 적용 -->
	<div class="inset-image">
		<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_03_p.png" alt="inset image description (for Accessibility)" />
	</div>
</section>
<!-- 텍스트 넓이가 보통인 경우  -->
<section class="module m02 text-dark text-standard">
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_05_m.jpg" alt="LG Magic remote" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_05.jpg" alt="LG Magic remote" />
	</div>
	<div class="text-block">
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 1. Eyebrow --><h4>OLED TVS</h4>
				<!-- 2. Headline --><h3>Believe in Magic</h3>
				<!-- 3. Body Copy -->
				<p>
					Your LG Magic Remote can control not only your cinema-like, curved TV, but also your Blu-Ray, HTiB, set top box, and sound bar.
				</p>
				<!-- 4. CTA  -->
				<div class="cta cta-text">
					<a href="#">Learn More <i class="icon icon-arrow-link"></i></a>
					<a href="#">Shop OLED TVs <i class="icon icon-arrow-link"></i></a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- 텍스트 넓이가 넓은 경우  -->
<section class="module m02 text-light text-wide image-bottom image-left">
	<!-- 6. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_02_m.jpg" alt="LG Magic remote" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_02.jpg" alt="LG Magic remote" />
	</div>
	<div class="text-block">
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 1. Eyebrow --><h4>OLED TVS</h4>
				<!-- 2. Headline --><h3>Believe in Magic</h3>
				<!-- 3. Body Copy -->
				<p>
					Your LG Magic Remote can control not only your cinema-like, curved TV, but also your Blu-Ray, HTiB, set top box, and sound bar.
				</p>
			</div>
		</div>
	</div>
	<!-- 5. Inset Image -->
	<!-- 2015-06-22 lazy load 적용 -->
	<div class="inset-image">
		<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_02_p.png" alt="inset image description (for Accessibility)" />
	</div>
</section>