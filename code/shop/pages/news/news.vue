<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		components:{"newsItem":newsItem},
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				// console.log(res)
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>
