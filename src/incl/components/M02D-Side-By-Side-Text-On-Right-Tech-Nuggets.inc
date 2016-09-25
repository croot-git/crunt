<!-- M02D -->
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
<!-- 텍스트 넓이가 보통인 경우  -->
<section class="module m02 text-light text-standard image-bottom">
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_04_m.jpg" alt="LG Magic remote" />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_04.jpg" alt="LG Magic remote" />
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
				<div class="cta cta-button">
					<a href="#" class="btn">Learn More</a>
				</div>
				<!-- 5. Tech Nugget -->
				<ul class="specs">
					<li>
						<!-- 5.1 --><div>SOUND</div>
						<!-- 5 --><div>Dolby Digital</div>
					</li>
					<li>
						<!-- 5.3 --><div>SPEAKER SYSTEM</div>
						<!-- 5.2 --><div>6 Speakers</div>
					</li>
					<li>
						<!-- 5.5 --><div>SPEAKER SYSTEM</div>
						<!-- 5.4 --><div>6 Speakers</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 5. Inset Image -->
	<div class="inset-image">
		<!-- 2015-06-22 lazy load 적용 -->
		<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M02_04_p.png" alt="inset image description (for Accessibility)" />
	</div>
</section>