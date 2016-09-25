<section class="find-a-store dark-grey-background">
	<div class="container">
		<div class="content-area">
			<h3>FIND A STORE NEAR YOU</h3>
			<!--
			<form class="mobile" action="/where-to-buy_m.html" method="get"><!-- 2015-05-15 Form, input 추가 및 변경 -->
				<!--
				<div>
					<input type="hidden" name="location" value="current" />
					<button class="btn" type="submit">Use Current Location</button>
				</div>
				<div class="find-a-store-or">OR</div>
				<div>
					<label for="input-find-a-store-mobile"><input type="hidden" name="modelId" value="65EG9600"><input type="text" name="location" id="input-find-a-store-mobile" maxlength="" class="" placeholder="Enter City/State or Zip Code"></label>
				</div>
				<div class="authorized-retailer">
					Visit an <a href="/where-to-buy_m.html?modelId=65EG9600">Authorized Online Retailer</a>
				</div>
			</form>
			-->
			<form class="mobile" action="/where-to-buy_m.html" method="get"><!-- 2015-05-15 Form, input 추가 및 변경 -->
				<!-- 2015-06-24 주석처리
				<div>
					<label>Enter City/State or Zip Code:</label>
					<label for="input-find-a-store-desktop"><input type="hidden" name="modelId" value="65EG9600"><input type="text" name="location" id="input-find-a-store-desktop" maxlength="" class="" placeholder=""></label>
					<button class="btn" type="submit">Search</button>
				</div>
				-->
				<div>
					<label>Visit an Authorized Retailer</label><!-- delete Online  -->
					<a class="btn" href="/where-to-buy_d.html?modelId=65EG9600">View Retailers</a>
				</div>
			</form>
		</div>
	</div>
</section>
