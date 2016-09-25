<!-- M01D -->
<!--
	Requred Class : .module .m01
	Options : 
	- Light/Dark text : .text-light / .text-dark
	- Top/Bottom text placement : .text-top / .text-bottom

	추가 결정사항 
	* Mobile 화면에서는 Inset image를 사용하지 않습니다.
	* Mobile 화면에서는 Video Thumbnail을 사용하지 않습니다. See Video 버튼으로 출력시켜 주세요. 
-->
<section class="module m01 text-dark text-top">
	<div class="text-block">
		<!-- 1. Eyebrow --><h4>Eyebrow Area</h4>
		<!-- 2. Headline --><h3>Clear Design. Powerful Sound.</h3>
		<!-- 3. Body Copy -->
		<p>
			Unleash the true potential of your TV with the enhanced performance of digital surround sound. Using the most advanced digital sound and video technology available.
		</p>
		<!-- 4. CTA -->
		<div class="cta cta-button">
			<a href="#" class="btn">Learn More</a>
		</div>
		<!-- 5. Tech Nugget -->
		<ul class="specs">
			<li>
				<!-- 5.1 --><div>SOUND</div>
				<!-- 5 --><div>Sed ut perspiciatis unde omnis iste</div>
			</li>
			<li>
				<!-- 5.3 --><div>SPEAKER SYSTEM</div>
				<!-- 5.2 --><div>The European languages are members</div>
			</li>
			<li>
				<!-- 5.5 --><div>SPEAKER SYSTEM</div>
				<!-- 5.4 --><div>Lorem ipsum dolor sit amet, consect</div>
			</li>
		</ul>
		<!-- 6. Inset Image -->
		<!-- 2015-06-22 lazy load 적용 -->
		<div class="inset-image">
			<img class="lazy" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/inset-image.jpg" alt="inset image description (for Accessibility)" />
		</div>
	</div>
	<!-- 7. Full Bleed Background -->
	<div class="background-image">
		<!-- 개발시에는, 이미지에 only-mobile, only-desktop 클래스를 삭제 해 주시고(lazy는 유지), Desktop/Mobile 여부에 따라, 이미지는 1개만 출력 시켜주세요. -->
		<img class="lazy only-mobile" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_04_m.jpg" alt="Clear Design. Powerful Sound." />
		<img class="lazy only-desktop" src="/lg4-common/img/placeholder.gif" data-original="/img_sample/M01_04.jpg" alt="Clear Design. Powerful Sound." />
	</div>
</section>