<template>
	<div class="sort">
		<div class="search" @click="gosearch">
			<input type="text" placeholder="搜索商品" disabled="disabled">
			<img src="../assets/img/search.png">
		</div>
		<div class="main">
			<div class="leftBar">
				<van-sidebar  v-model="activeKey" style="overflow: scroll;height: 11rem;">
				  <van-sidebar-item v-for="(goods,index) in datas" :key="index" :title="goods.name" />
				</van-sidebar>
			</div>
			<div class="right" v-for="(data,index) in datas" :key="index" v-if="activeKey==index">
				<div class="sort" v-for="(sort,index) in data.floors" :key="index">
					<span class="title">{{sort.name}}</span>
					<div class="goods" v-for="(goods,index) in sort.list" :key="index">
						<img :src="goods.img" alt="" @click="gosort">
						<br>
						<span>{{goods.name}}</span>
					</div>
				</div>
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
		},
		methods:{
			gosort(){
				
			},
			gosearch(){
				this.$router.push("/search");
			}
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
				width: 70%;
				height: 11rem;
				overflow: scroll;
				.sort{
					.title{
						float: left;
						width: 100%;
						text-align: left;
						margin-top: .5rem;
						margin-bottom: .1rem;
					}
					.goods{
						width: 33%;
						float: left;
						img{
							margin-top: .3rem;
							margin-bottom: .2rem;
							width:1.17rem;
						}
						span{
							font-size: .27rem;
						}
					}
				}
			}
		}
		
	}
</style>
