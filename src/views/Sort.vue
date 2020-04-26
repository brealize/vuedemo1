<template>
	<div class="sort">
		<div class="search">
			<input type="text" placeholder="搜索商品" disabled="disabled">
			<img src="../assets/img/search.png">
		</div>
		<div class="main">
			<div class="leftBar">
				<van-sidebar  v-model="activeKey" >
				  <van-sidebar-item v-for="(goods,index) in datas" :key="index" :title="goods.name" />
				</van-sidebar>
			</div>
			<div class="right">
				
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import {category as sort} from "../data/index.js"
	export default{
		data(){
			return{
				datas:[],
				activeKey:0,
			}
		},
		created(){
			this.datas = sort.data.data;
			console.log(this.datas);
		}
	}
</script>

<style lang="less" scoped="scoped">
	.sort{
		.search{
			position: relative;
			input{
				background-color: #fff;
				height: .48rem;
				width: 90%;
				border: 2px solid #EEEEEE;
				border-radius: 5px;
				margin-top: .24rem;
				margin-bottom: .24rem;
				color:#999;
				font-size: .26rem;
				text-indent: .7rem;
			}
			img{
				position: absolute;
				left:.5rem;
				top:.31rem;
				height: .48rem;
			}
		}
		.main{
			display: flex;
			.right{
				margin-left: .2rem;
				background-color: #ccc;
				width: 70%;
				height: 800px;
			}
		}
		
	}
</style>
