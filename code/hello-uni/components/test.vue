<template>
	<view id="myView">
		<text>这是test组件->{{num}}\n</text>
		<text>这是父组件传过来的数据->{{title}}</text>
		<button @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 3,
				intId: null
			};
		},
		props:['title'],
		methods: {
			sendNum() {
				// console.log('给父亲传值')
				this.$emit('myEven',this.num)
			}
		},
		beforeCreate() {
			console.log('实例已经开始初始化了')
			// 还取不到数据undefined
			console.log('beforeCreate---' + this.num)
		},
		created() {
			// 进行数据的初始化
			console.log('created---' + this.num)
			/* this.intId = setInterval(() => {
				console.log('执行定时器')
			},1000) */
		},
		beforeMount() {
			// 组件还没有渲染到页面上
			// console.log('beforeMount---' + document.getElementById('myView'))
		},
		mounted() {
			// 组件已经渲染到页面上了,进行dom操作
			// console.log('mounted---' + document.getElementById('myView'))
		},
		destroyed() {
			console.log('组件销毁了')
			// clearInterval(this.intId)
		}
	}
</script>

<style>

</style>
