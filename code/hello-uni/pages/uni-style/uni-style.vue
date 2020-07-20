<template>
	<view>
		<view>样式的学习</view>
		<view class="box1">
			测试文字
			<text>132</text>
		</view>
		<view class="iconfont icon-tupian"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import url("./a.css");
	.box1 {
		width: 375rpx;
		height: 375rpx;
		/* background-color: #0000FF; */
		background-color: $global-color;
		font-size: 30rpx;
		color: white;
		text{
			color: red;
		}
	}
</style>
