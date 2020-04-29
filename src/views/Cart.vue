<template>
	<div class="cart">
		<div class="empty" style="background-color:#fff;height: 50px;width: 100%;"> </div>
		<div class="fixtop">
			<img src="../assets/img/return.png" @click="returnup">
			<span class="cen">
				购物车
			</span>
			<!-- <span class="edit">
				编辑
			</span> -->
		</div>
		<van-card
		v-for="(good,index) in $store.getters.getGoodList" :key="index"
		  :num="good.num"
		  :price="good.price"
		  :desc="good.desc"
		  :title="good.name"
		  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
		>
			<template #footer>
				<van-button size="mini" @click="changeNum(good.goodid,good.num+1)">+</van-button>
				<van-button size="mini" @click="changeNum(good.goodid,good.num-1)">-</van-button>
				<van-button size="mini" @click="remove(good.goodid)">移除</van-button>
			</template>
		</van-card>
		<van-empty 
		v-if="$store.getters.getGoodList.length==0" 
		description="看到喜欢的就带回家吧" style="height: 12rem;"/>
		<div class="empty" style="background-color:#fff;height: 50px;width: 100%;"> </div>
	</div>
	
</template>

<script>
	 export default{
		methods:{
			returnup(){
				this.$router.go("-1")
			},
			changeNum(goodid,num){
				this.$store.dispatch("changeNumAsync",{
					id:goodid,
					num:num
				}).then(()=>{
					console.log(num);
					this.$toast("修改数量成功");
				})
			},
			remove(goodid){
				this.$store.dispatch("removeAsync",{
					id:goodid
				}).then(()=>{
					this.$toast("移除成功")
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.cart{
		background-color: #F4F4F8;
		width: 100%;
		height:100%;
		.fixtop{
			width:100%;
			height: .88rem;
			position: fixed;
			top:0;
			z-index: 9;
			background-color: #fff;
			img{
				height: .4rem;
				float: left;
				margin-top: .22rem;
				margin-left: .2rem;
			}
			.cen{
				margin-right: .5 rem;
				font-size: .36rem;
				line-height: .88rem;
			}
			.edit{
				float: right;
				margin-top: .2rem;
				margin-right: .28rem;
			}
		}
	}

	
</style>
