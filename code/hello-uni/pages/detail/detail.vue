<template>
	<view>
		<view><text>唱歌跳舞打篮球</text></view>
		<view>
			<text selectable>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable space="ensp">唱歌  跳舞   打篮球</text>
		</view>
		<view>
			<text selectable space="emsp">唱歌  跳舞   打篮球</text>
		</view>
		<view>
			<text selectable space="nbsp" style="font-size: 50rpx;">唱歌  跳舞   打篮球</text>
		</view>
		<view>
			<text>&amp;</text>
		</view>
		
		<view class="box2" hover-class="box2-active">
			<view class="box" :hover-start-time="2000" :hover-stay-time="2000" hover-class="box-active" hover-stop-propagation>
				我是一个大盒子
			</view>
		</view>
		
		<button>普通按钮</button>
		<button size="mini">小按钮</button>
		<button type="primary">基础按钮</button>
		<button type="primary" plain>镂空按钮</button>
		<button type="primary" disabled>禁用按钮</button>
		<button type="primary" loading>加载按钮</button>
		<!-- 默认宽高，宽320px;高240px; -->
		<image src="http://destiny001.gitee.io/image/cxk.gif"></image>
		<!-- 长边显示，正常显示出来 -->
		<image src="http://destiny001.gitee.io/image/cxk.gif" mode="aspectFit"></image>
		<!-- 短边显示，长边截取一部分 -->
		<image src="http://destiny001.gitee.io/image/cxk.gif" mode="aspectFill"></image>
		
		
	</view>
	
	
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options)
		}
	}
</script>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: red;
	}
	
	.box-active {
		background-color: #4CD964;
	}
	
	.box2 {
		width: 200px;
		height: 200px;
		background-color: blue;
	}
	
	.box2-active {
		background-color: pink;
	}
</style>
