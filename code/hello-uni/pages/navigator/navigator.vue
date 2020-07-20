<template>
	<view class="box">
		<view class="title">导航跳转的学习</view>
		<navigator url="/pages/detail/detail?id=80&age=19">跳转至详情页</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">redirect跳转至详情页</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">跳转至信息页</navigator>
		<navigator url="/pages/list/list">存储数据</navigator>
		<navigator url="/pages/home/home">数据绑定</navigator>
		<navigator url="/pages/uni-style/uni-style">样式的学习</navigator>
		<view class="title">编程式跳转的学习</view>
		<button @click="goDetail" type="primary">跳转至详情页</button>
		<button @click="redirectDetail" type="warn">跳转至详情页并关闭当前页面</button>
		<button @click="goMessage" type="primary">跳转至信息页</button>
	</view>
</template>

<script>
	export default {
		onUnload() {
			console.log('导航页面被卸载了')
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			},
			redirectDetail() {
				uni.redirectTo({
					url:'/pages/detail/detail'
				})
			},
			goMessage() {
				uni.switchTab({
					url:'/pages/message/message'
				})
			}
		}
	}
</script>

<style>
	.box {
		text-align: center;
	}
	.title {
		color: red;
		text-align: center;
		font-size: 30px;
	}
	
</style>
