<!-- M11 HOMEPAGE CONTENT MODULE -->
<!--
	Requred Class : .module .m11 .homepage-content 
	Options : 
	- wide-image or wide-video : .wide-right (오른쪽의 경우) / .wide-left (왼쪽의경우)
	- 플레이 버튼엔 youtube, brightcove 사용하는 VOD에 따라 다른 옵션을 제공함 data-video-type은 수정불가

	Case 1 : youtube ( data-video-type, data-embed-code, data-iframe-title)
	ex)

	data-video-type="youtube" (수정불가)
	
	data-embed-code="l-1wldsq8_8" 
	data-iframe-title="video description (Accessibility)"

	Case 2 : Brightcove ( data-video-type, data-video-id, data-account, data-player, data-iframe-title)
	ex)
	
	data-video-type="bc" (수정불가)
	
	data-video-id="3811035969001" 
	data-account="1432358930001" 
	data-player="default" 
	data-iframe-title="video description (Accessibility)"

-->
<!-- M11A static image left -->

<section class="module m11 homepage-content wide-left">
	<div class="hc-wrap">
		<div class="section-image wide">
			<a href="#">
				<div class="cont-box">
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1.jpg" class="web lazy" alt="" />
						<!-- Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Wide Tile Label --><h2 class="caption">The Future of TV</h2>
				</div>
			</a>
		</div>
		<div class="section-image image-box image-1">
			<a href="#">
				<div class="cont-box">
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #1 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2.jpg" class="web lazy" alt="" />
						<!-- Square Tile #1 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #1 Label --><h2 class="caption">Laundry Luxury</h2>
				</div>
			</a>
		</div>
		<div class="section-image image-box image-2">
			<a href="#">
				<div class="cont-box">
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #2 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3.jpg" class="web lazy" alt="" />
						<!-- Square Tile #2 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #2 Label --><h2 class="caption">The Curve Has Arrived</h2>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- M11A static image right -->

<section class="module m11 homepage-content wide-right">
	<div class="hc-wrap">
		<div class="section-image image-box image-1">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #1 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2.jpg" class="web lazy" alt="" />
						<!-- Square Tile #1 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #1 Label --><h2 class="caption">Laundry Luxury</h2>
				</div>
			</a>
		</div>
		<div class="section-image image-box image-2">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #2 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3.jpg" class="web lazy" alt="" />
						<!-- Square Tile #2 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #2 Label --><h2 class="caption">The Curve Has Arrived</h2>
				</div>
			</a>
		</div>
		<div class="section-image wide">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1.jpg" class="web lazy" alt="" />
						<!-- Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Wide Tile Label --><h2 class="caption">The Future of TV</h2>
						
				</div>
			</a>
		</div>
	</div>
</section>

<!-- M11B video left (case:youtube) -->

<section class="module m11 homepage-content wide-left">
	<div class="hc-wrap">
		<div class="section-image wide video">
			<div class="vod-box"></div>
			<div class="cont-box">
				
				<div class="b-image">
					<!-- 2015-06-22 lazy load 적용 -->
					<!-- Video Thumbnail Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1.jpg" class="web lazy" alt="" />
					<!-- Video Thumbnail Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1_m.jpg" class="mobile lazy" alt="" />
				</div>
				<!-- Wide Tile Label --><h2 class="caption">The Future of TV</h2>
				<!-- Video Asset --><a href="#" class="play-vod" data-video-type="youtube" data-embed-code="l-1wldsq8_8" data-iframe-title="video description (Accessibility)"><i class="icon icon-video-play red"></i></a>
			</div>
		</div>
		<div class="section-image image-box image-1">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #1 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2.jpg" class="web lazy" alt="" />
						<!-- Square Tile #1 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #1 Label --><h2 class="caption">Laundry Luxury</h2>
				</div>
			</a>
		</div>
		<div class="section-image image-box image-2">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #2 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3.jpg" class="web lazy" alt="" />
						<!-- Square Tile #2 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #2 Label --><h2 class="caption">The Curve Has Arrived</h2>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- M11B video right (case:brightcove) -->


<section class="module m11 homepage-content wide-right">
	<div class="hc-wrap">
		<div class="section-image image-box image-1">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #1 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2.jpg" class="web lazy" alt="" />
						<!-- Square Tile #1 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_2_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #1 Label --><h2 class="caption">Laundry Luxury</h2>
				</div>
			</a>
		</div>
		<div class="section-image image-box image-2">
			<a href="#">
				<div class="cont-box">
					
					<div class="b-image">
						<!-- 2015-06-22 lazy load 적용 -->
						<!-- Square Tile #2 Full Bleed Background Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3.jpg" class="web lazy" alt="" />
						<!-- Square Tile #2 Full Bleed Background Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_3_m.jpg" class="mobile lazy" alt="" />
					</div>
					<!-- Square Tile #2 Label --><h2 class="caption">The Curve Has Arrived</h2>
				</div>
			</a>
		</div>
		<div class="section-image wide video">
			<div class="vod-box"></div>
			<div class="cont-box">
				
				<div class="b-image">
					<!-- 2015-06-22 lazy load 적용 -->
					<!-- Video Thumbnail Desktop --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1.jpg" class="web lazy" alt="" />
					<!-- Video Thumbnail Mobile --><img src="/lg4-common/img/placeholder.gif" data-original="/img_sample/m11_1_m.jpg" class="mobile lazy" alt="" />
				</div>
				<!-- Wide Tile Label --><h2 class="caption">The Future of TV</h2>
				<!-- Video Asset --><a href="#" class="play-vod" data-video-type="bc" data-video-id="1774058731001" data-account="1665893145001" data-player="default" data-iframe-title="video description (Accessibility)"><i class="icon icon-video-play red"></i></a>
			</div>
		</div>
	</div>
</section>
