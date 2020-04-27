<template>
	<div class="result">
		<div class="search">
			<img class="return" src="../assets/img/return.png" @click="onreturn">
			<input type="text" placeholder="搜索商品" v-model="val" @keyup.enter="onsearch">
			<img class="img" src="../assets/img/search.png">
			<img class="more" src="../assets/img/more.png" @click="show">
		</div>
		<van-tabs v-model="active" line-height="0" title-active-color="#FF464E" sticky>
		  <van-tab title="推荐">
			  <homepage :datas="datas"></homepage>
		  </van-tab>
		  <van-tab title="价格">
			  <homepage :datas="price"></homepage>
		  </van-tab>
		  <van-tab title="销售">
			  <homepage :datas="sell"></homepage>
		  </van-tab>
		  <van-tab title="上新">
			  <homepage :datas="change"></homepage>
		  </van-tab>
		</van-tabs>
		<div class="float" v-if="sel">
			<div class="angle"></div>
		</div>
	</div>
</template>

<script>
	import homepage from "../components/HomePage2"
	export default{
		components:{
			homepage
		},
		data(){
			return{
				val:"",
				active:0,
				sel:false,
				datas:[],
				sell:[],
				price:[],
				change:[]
			}
		},
		created(){
			this.val=this.$route.query.key;
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				console.log(res);
				this.datas=res.data;
			}).catch(err=>{
				this.$toast("搜索异常，请重试");
			}),
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				console.log(res);
				this.price=res.data;
			}).catch(err=>{
				this.$toast("搜索异常，请重试");
			}),
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				console.log(res);
				this.change=res.data;
			}).catch(err=>{
				this.$toast("搜索异常，请重试");
			}),
			this.$api.searchAPI({
				key:this.$route.query.key
			}).then(res=>{
				console.log(res);
				this.sell=res.data;
			}).catch(err=>{
				this.$toast("搜索异常，请重试");
			})
		},
		methods:{
			onsearch(){
				if(this.val.length>0){
					this.$router.push({
						name:"SearchResult",
						query:{
							key:this.val
						}
					})
				}else{
					this.$toast("输入不能为空");
				}
			},
			onreturn(){
				this.$router.go("-1");
			},
			show(sel){
				if(this.sel){
					this.sel=false;
				}else{
					this.sel=true;
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.result{
		.search{
			position: relative;
			height: .55rem;
			padding: .2rem .24rem;
			border-bottom: 1px solid #ECECED;
			input{
				background-color: #fff;
				height: .48rem;
				width: 78%;
				border: 2px solid #EEEEEE;
				border-radius: 5px;
				color:#999;
				font-size: .26rem;
				text-indent: .7rem;
			}
			.img{
				position: absolute;
				left:1.12rem;
				top:.25rem;
				height: .48rem;
			}
			.return{
				height: .4rem;
				float: left;
				margin-top: .1rem;
			}
			.more{
				height: .5rem;
				float: right;
			}
		}
		.float{
			position:fixed;
			right:0;
			top:1rem;
			width:2.4rem;
			height:2.7rem;
			border-radius: 3px;
			background-color: rgba(0,0,0,.7);
			.angle{
				width: 0;
				height: 0;
				border-left: .25rem solid transparent;
				border-right: .25rem solid transparent;
				border-bottom: .25rem solid rgba(0,0,0,.7);
				position: absolute;
				top: -.22rem;
				right:.2rem;
			}
		}
	}
</style>
