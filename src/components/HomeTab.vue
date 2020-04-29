<template>
	<div>
		<div class="hometab">
			<div class="goods" v-for="(item,index) in datas" :key="index">
				<router-link :to="{name:'Detail',params:{id:item.goods_id}}"><img class="pic" :src="item.pic_url"></router-link>
				<span class="tips">{{item.coupon_tips}}</span>
				<br>
				<div class="bottom">
					<span class="title">{{item .title}}</span>
				<span class="time">{{item.time_left}}</span>
				</div>
				<div class="logo" v-show="item.logo_url">
					<img :src="item.logo_url">
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import {goodpage1 as page1} from "../data/index.js"
	export default{
		data(){
			return{
				datas:[],
			}
		},
		created() {
			this.datas = page1.data.goods;
			console.log(page1);
		}
	}
</script>

<style lang="less" scoped="scoped">
	.hometab{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods{
			position: relative;
			width: 49.4%;
			height: 4.85rem;
			border:1px solid #FAFAFC;
			border-left:none;
			.pic{
				width: 100%;
				height: 3.73rem;
			}
			.tips{
				float: left;
				margin-top: .1rem;
				margin-left:.1rem;
				font-size: .28rem;
				color: #ff464e;
			}
			.bottom{
				width: 100%;
				float: left;
				.title{
					width: 2.5rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					float: left;
					margin-left:.1rem;
					text-align:left;
					font-size: .16rem;
				}
				.time{
					font-size: .12rem;
					color:#bbb;
					float: right;
					margin-right: 5px;
				}
			}
			.logo{
				position: absolute;
				top:3.48rem;
				right: .12rem;
				background-color: #fff;
				img{
					width: 1rem;
					height: .5rem;
					border:1px solid #C1BDBB;
				}
			}
		}
	}
</style>
