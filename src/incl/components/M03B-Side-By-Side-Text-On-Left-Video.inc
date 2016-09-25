<!-- M02B -->
<!--
	Requred Class : .module .m02
	Options : 
	- Light/Dark text : .text-light / .text-dark
	- Narrow / Standard / Wide text Column : .text-narrow / .text-standard / .text-wide
	- Top/Bottom Anchored Image : .image-top / .image-bottom
	- Left Anchored Image : [.image-right] (toggle 이 아니고 option임)
	- Video Button/Thumb : 4.CTA / 4.1 Video Thumbnail

	추가 결정사항 
	* Mobile 화면에서는 Inset image를 사용하지 않습니다.
	* Mobile 화면에서는 Video Thumbnail을 사용하지 않습니다. See Video 버튼으로 출력시켜 주세요. 
-->
<!--
M03B (Video) 타입의 Inset Image 와 Video Thumbnail 관계 
- 비디오 모듈이기 때문에, 비디오를 플레이 하는 버튼이 어딘가에 반드시 들어가게 되는데, 4.CTA 버튼 아니면 4.1 Video Thumbnail(+Play 버튼) 형태로 들어가게 된다. (토글 마지막 항목 참고)
- 단, CTA로 들어가는 경우에는 텍스트 블럭 하단에 위치하므로, 왼쪽에 비어 있는 영역에 Inset Image를 추가할 수 있다. (옵션임)

Video(B) 타입의 동영상 로딩에 관하여
- 동영상은 기본적으로 페이지에 정보만 갖고 있다가, 페이지 스크롤시 로딩 한다. 
- 반드시 버튼을 눌러야 플레이 된다. 

Bright Cove 메모
- video id 와 account가 맞아야 정상적으로 출력 된다. 
- account - 국가별로 account가 다르며, LG의 경우 많은 account 를 사용하고 있기 때문에, account를 변경할 수 있도록 제공한다. 
- account 마다 player 번호가 다름. 
-->
<section class="module m03 text-dark text-narrow image-top image-right">
	<!-- 6. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M03_03_m.jpg" alt="LG G Flex" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M03_03.jpg" alt="LG G Flex" />
	</div>
	<div class="text-block">
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 1. Eyebrow --><h4>OLED TVS</h4>
				<!-- 2. Headline --><h3>Best Picture Quality</h3>
				<!-- 3. Body Copy --><p>With the ease of a television and the functionality of a computer, access your favorite show, surf the web, check out the latest YouTube video or shop online.</p>
				<!-- 4. CTA -->
				<div class="cta cta-button">
					<a href="#" class="btn see-video">See Video</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 5. Inset Image -->
	<div class="inset-image">
		<!-- 2015-06-22 lazy load 적용 -->
		<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M03_03_p.png" alt="inset image description (for Accessibility)" />
	</div>
	<!-- 6.1 Video Asset -->
	<div class="video-asset" data-video-type="bc" data-video-id="1774058731001" data-account="1665893145001" data-player="default" data-iframe-title="video description (Accessibility)">
		<!--
		brightcove-video
		<div class="brightcove-content">
			<video data-video-id="1774058731001" data-account="1665893145001" data-player="default" data-embed="default" class="video-js" controls></video>
			<script src="//players.brightcove.net/1432358930001/default_default/index.min.js"></script>
		</div>
		-->
	</div>
</section>
<section class="module m03 text-dark text-standard">
	<!-- 6. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M03_03_m.jpg" alt="LG G Flex" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M03_03.jpg" alt="LG G Flex" />
	</div>
	<div class="text-block">
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 1. Eyebrow --><h4>OLED TVS</h4>
				<!-- 2. Headline --><h3>Best Picture Quality</h3>
				<!-- 3. Body Copy --><p>With the ease of a television and the functionality of a computer, access your favorite show, surf the web, check out the latest YouTube video or shop online.</p>
				<!-- 4. CTA -->
				<div class="cta cta-button hide-desktop">
					<a href="#" class="btn see-video">See Video</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 4.1 Video Thumbnail -->
	<div class="video-thumb hide-mobile">
		<!-- 2015-05-18 img vertical align -->
		<div class="vertical-align-wrap">
			<div class="inner-wrap">
				<!-- 2015-06-22 lazy load 적용 -->
				<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/video_thumb.jpg" alt="" />
				<a href="#" class="see-video" title="See Video"><i class="icon icon-video-play red"></i></a>
			</div>
		</div>
	</div>
	<!-- 6.1 Video Asset -->
	<div class="video-asset" data-video-type="youtube" data-embed-code="l-1wldsq8_8" data-iframe-title="video description (Accessibility)">
		<!--
			Youtube video 
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BivPPWI0q7Q" frameborder="0" allowfullscreen></iframe>
		-->
	</div>
</section>