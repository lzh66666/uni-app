<template>
	<view>
		<button @click="get">发送get请求</button>
		<button @click="setStorage" type="primary">存储数据</button>
		<button @click="getStorage" type="warn">获取数据</button>
		<button @click="removeId" type="primary">移除id</button>
		<view>这是列表页</view>
		<view class="box-item" v-for="item in list">
			{{item}}
		</view>
		<!-- <button @click="pullDownRefresh">下拉刷新</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return{
				list: ['前端','JAVA','UI','测试','大数据','JAVA','UI','测试']
			}
		},
		onPullDownRefresh() {
			console.log('触发了下拉刷新')
			setTimeout(() => {
				this.list = ['前端1','JAVA1','UI1','测试1','大数据1']
				uni.stopPullDownRefresh();
			},2000)
		},
		onReachBottom() {
			console.log('页面触底了')
			this.list = [...this.list,...['前端1','JAVA1','UI1','测试1','大数据1']]
		},
		methods: {
			pullDownRefresh() {
				uni.startPullDownRefresh()
			},
			get() {
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success(res) {
						console.log(res)
					}
				})
			},
			setStorage() {
				// 异步
				// uni.setStorage({
				// 	key:'id',
				// 	data:80,
				// 	success() {
				// 		console.log('存储成功')
				// 	}
				// })
				// 同步
				uni.setStorageSync('id',100)
			},
			getStorage() {
				// 异步
				// uni.getStorage({
				// 	key:"id",
				// 	success(res) {
				// 		console.log('获取成功',res)
				// 	}
				// })
				
				// 同步
				const res = uni.getStorageSync('id')
				console.log(res)
			},
			removeId() {
				// 异步
				// uni.removeStorage({
				// 	key:'id',
				// 	success() {
				// 		console.log('删除成功')
				// 	}
				// })
				// 同步
				uni.removeStorageSync('id')
			}
		}	
	}
</script>

<style>
	.box-item {
		height: 100px;
		line-height: 100px;
	}
</style>
