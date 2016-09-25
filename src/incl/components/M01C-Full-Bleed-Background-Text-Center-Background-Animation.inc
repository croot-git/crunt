<!-- M01C -->
<!--
	Requred Class : .module .m01, .background-animation
	Options : 
	- Light/Dark text : .text-light / .text-dark 
	- Top/Bottom text placement : .text-top / .text-bottom
-->
<!-- 한번만 실행되는 영상의 경우 -->
<section class="module m01 text-dark text-top background-animation">
	<!-- 5. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_05.jpg" alt="Best Picture Quality" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_05.jpg" alt="Best Picture Quality" />
	</div>
	<div class="text-block">
		<!-- 1. Eyebrow --><h4>Eyebrow Area</h4>
		<!-- 2. Headline --><h3>Best Picture Quality</h3>
		<!-- 3. Body Copy -->
		<p class="hide-mobile">
			With lightweight glasses, cool 3D effects and a great picture, LG&rsquo;s Cinema 3D TV can bring all this right into your home.
		</p>
		<!-- 4. CTA (링크가 1개일때) -->
		<div class="cta cta-button">
			<a href="#" class="btn">Learn More</a>
		</div>
	</div>
	<!-- 5.1 Video Asset -->
	<div class="video-asset" data-video-loop="0" data-video-id="BackgroundAnimation1" data-video-file-mp4="/img_sample/movie_bg/FSR_B4F1_1280.mp4" data-video-file-webm="/img_sample/movie_bg/FSR_B4F1_1280.webm" data-video-alt-text="video description (Accessibility)"></div>
	<!--
		 data-video-id 는 현재 페이지 내에서 유일한 값이어야 합니다.
	-->
	<!-- video sample url
		/img_sample/movie_bg/FSR_B4F1_1280.mp4
		/img_sample/movie_bg/FSR_B4F1_1280.webm
	------------------------------------------------------
		video size
		- mobile : 가로 640px
		- desktop : 가로 1280px
	-->
	<div class="controller">
		<a href="#" title="play" class="play no-underline hide-mobile"><i class="icon icon-video-play red"></i></a>
		<a href="#" title="stop" class="stop no-underline hide-mobile"><i class="icon icon-video-stop red"></i></a>
	</div>
</section>
<!-- 무한반복 영상의 경우 -->
<section class="module m01 text-dark text-top background-animation">
	<!-- 5. Full Bleed Background  -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_05.jpg" alt="Best Picture Quality" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_05.jpg" alt="Best Picture Quality" />
	</div>
	<div class="text-block">
		<!-- 1. Eyebrow --><h4>Eyebrow Area</h4>
		<!-- 2. Headline --><h3>Best Picture Quality</h3>
		<!-- 3. Body Copy -->
		<p class="hide-mobile">
			With lightweight glasses, cool 3D effects and a great picture, LG&rsquo;s Cinema 3D TV can bring all this right into your home.
		</p>
		<!-- 4. CTA (링크가 2개 이상 일때) -->
		<div class="cta cta-text">
			<a href="#">Learn More <i class="icon icon-arrow-link"></i></a>
			<a href="#">Shop OLED TVs <i class="icon icon-arrow-link"></i></a>
		</div>
	</div>
	<!-- 5.1 Video Asset -->
	<div class="video-asset" data-video-loop="1" data-video-id="BackgroundAnimation2" data-video-file-mp4="/img_sample/movie_bg/FSR_B4F1_1280.mp4" data-video-file-webm="/img_sample/movie_bg/FSR_B4F1_1280.webm" data-video-alt-text="video description (Accessibility)"></div>
	<div class="controller">
		<a href="#" title="play" class="play no-underline hide-mobile"><i class="icon icon-video-play red"></i></a>
		<a href="#" title="stop" class="stop no-underline hide-mobile"><i class="icon icon-video-stop red"></i></a>
	</div>
</section>