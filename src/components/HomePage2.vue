<template>
	<div>
		<div class="homepage2">
			<div class="goods" v-for="(item,index) in datas" :key="index">
				<router-link to=""><img class="pic" :src="item.pic_url"></router-link>
				<div class="price">
					<span class="new">￥{{item.cprice}}</span>
					<span class="old">￥{{item.oprice}}</span>
				</div>
				<span class="title">{{item.title}}</span>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:["datas"],
	}
</script>

<style lang="less" scoped="scoped">
	.homepage2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods{
			position: relative;
			width: 3.73rem;
			height: 4.85rem;
			border:1px solid #FAFAFC;
			border-left:none;
			.pic{
				width: 3.73rem;
				height: 3.73rem;
			}
			.price{
				float: left;
				width: 100%;
				line-height: .44rem;
				.new{
					float:left;
					font-size: .33rem;
					color: #ff464e;
					margin-left: .1rem;
				}
				.old{
					float:left;
					color: #bbb;
					font-size: .25rem;
					text-decoration: line-through;
				}
			}
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
			
		}
	}
</style>
