<template>
	<div class="detail">
		<div class="swipe">
			<van-swipe :autoplay="3000" width="100%">
			  <van-swipe-item v-for="(image, index) in datas.banner" :key="index">
			    <img v-lazy="image" style="width: 7.5rem;" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="title">
			<div class="left">
				￥<span class="price">{{datas.cprice}}</span>
				<span class="oprice">￥399</span>
				<div class="mail" v-if="datas.mailing">
					<span>包邮</span>
				</div>
			</div>
			<span class="right">{{datas.buyed}}人已购</span>
			<div class="bottom">
				<span class="left">
					{{datas.title}}
				</span>
				<img src="../assets/img/addlike.png">
			</div>
		</div>
		<div class="sheet">
			<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
		</div>
		<div class="sel">
			
		</div>
		<div class="store">
			
		</div>
		<div class="cart">
			
		</div>
		<div class="storeimg" v-for="img in datas.brand_img" :key="img">
			<img :src="img">
		</div>
		<div class="more" @click="more">
			<img src="../assets/img/more.png">
		</div>
		<div class="float" v-if="sel">
			<ul>
				<li>
					<router-link to="/">
						<img src="../assets/img/returnhome.png">
						<span>首页</span>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<img src="../assets/img/like.png">
						<span>我的收藏</span>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<img src="../assets/img/list.png">
						<span>我的订单</span>
					</router-link>
				</li>
			</ul>
			<div class="angle"></div>
		</div>
		
		//商品导航
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart" />
		  <van-goods-action-button
		    type="warning"
		    text="加入购物车"
		    @click="onClickButton"
		  />
		  <van-goods-action-button
		    type="danger"
		    text="立即购买"
		    @click="onClickButton"
		  />
		</van-goods-action>
		
		//sku
		<van-sku
		  v-model="start"
		  :sku="sku"
		  :goods="goods"
		  :price="datas.cprice"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				datas:[],
				sel:false,
				show: false,
				start:false,
				goodid:"",
				actions: [
				  { name: '选项' },
				  { name: '选项' },
				  { name: '选项', subname: '描述信息' },
				],
				sku: {
				  tree: [
					  {
						k:"颜色",
						v:[
							{
								id:"1167",
								name:"白色"
							},
							{
								id:"1168",
								name:"黑色"
							},
						],
						k_s:'s381',
					  },
					{
						k:"尺码",
						v:[
							{
								id:"1123",
								name:"45"
							},
							{
								id:"1124",
								name:"40"
							},
							{
								id:"1125",
								name:"43"
							},
							{
								id:"1126",
								name:"39"
							},
						],
						k_s:'s382',
					},  
				    
				  ],
				  list: [
					{
						id:2133,
						price:54*100,
						s381:"1167",
						s382:"1123",
						stock_num:100
					},
					{
						id:2134,
						price:54*100,
						s381:"1167",
						s382:"1124",
						stock_num:100
					},
					{
						id:2135,
						price:54*100,
						s381:"1167",
						s382:"1125",
						stock_num:100
					},
					{
						id:2136,
						price:54*100,
						s381:"1167",
						s382:"1126",
						stock_num:100
					},
					{
						id:2137,
						price:54*100,
						s381:"1168",
						s382:"1123",
						stock_num:100
					},
					{
						id:2138,
						price:54*100,
						s381:"1168",
						s382:"1124",
						stock_num:100
					},
					{
						id:2139,
						price:54*100,
						s381:"1168",
						s382:"1125",
						stock_num:100
					},
					{
						id:2133,
						price:54*100,
						s381:"1169",
						s382:"1126",
						stock_num:100
					},
				  ],
				  hide_stock: false // 是否隐藏剩余库存
				},
				goods: {
				 
				},
			}
		},
		methods: {
		    onSelect(item) {
		      // 默认情况下点击选项时不会自动收起
		      // 可以通过 close-on-click-action 属性开启自动收起
		      this.show = false;
		      Toast(item.name);
		    },
			onClickIcon() {
				Toast('点击图标');
				this.show = true;
			},
			onClickCart() {
				this.$router.push("/cart");
			},
			onClickButton() {
				Toast('点击按钮');
				this.start=true;
			},
			onBuyClicked(datas){
				
			},
			onAddCartClicked(){
				this.$store.dispatch("addGoodAsync",{
				goodid:this.goodid,
				name:this.datas.name,
				price:this.datas.cprice,
				desc:this.datas.title,
				num:1,
				}).then(()=>{
					this.$toast("已加入购物车")
					this.start = false;
				})
			},
			more(sel){
				if(this.sel){
					this.sel=false
				}else{
					this.sel=true;
				}
			}
		  },
		created(){
			this.goodid = this.$route.params.id
			console.log(this.goodid)
			this.$api.detailAPI({
				id:this.$route.params.id
			}).then(res=>{
				this.datas = res.data.data[0];
				console.log(this.datas);
			}).catch(err=>{
				console.log("请求错误",err);
			})
			console.log(this.sku);
		}
	}
</script>

<style lang="less" scoped="scoped">
	.detail{
		background-color: #F4F4F8;
		.title{
			width: 100%;
			height: 2.28rem;
			background-color: #fff;
			.left{
				float: left;
				margin-left: .2rem;
				margin-top: .24rem;
				color: #FF464E;
				.price{
					font-size: .54rem;
					margin-left: -.05rem;
				}
				.oprice{
					margin-left: .1rem;
					font-size: .28rem;
					color:#bbb;
					text-decoration: line-through;
				}
				.mail{
					display: inline-block;
					width: .56rem;
					height: .28rem;
					background-color: #FF464E ;
					color:#fff;
					font-size: .12rem;
					position: relative;
					bottom: .06rem;
					margin-left: .2rem;
					span{
						line-height: .12rem;
					}
				}
			}
			.right{
				float:right;
				margin-right: .2rem;
				margin-top:.57rem;
				font-size: .16rem;
				color: #bbb;
			}
			.bottom{
				.left{
					width: 80%;
					text-align: left;
					color:black;
				}
				img{
					float: right;
					width: .48rem;
					margin-right: .2rem;
					margin-top: .3rem,;
				}
			}
		}
		.sheet{
			width: 100%;
			height: 1.92rem;
			margin-top: .2rem;
			background-color: #fff;
		}
		.sel{
			width: 100%;
			height: .96rem;
			margin-top: .2rem;
			background-color: #fff;
		}
		.store{
			width: 100%;
			height: 4.72rem;
			margin-top: .2rem;
			background-color: #fff;
		}
		.cart{
			width: 100%;
			height: .64rem;
			margin-top: .2rem;
			background-color: #fff;
		}
		.storeimg{
			width: 100%;
			background-color: #fff;
			font-size: 0;
			img{
				width:100%;

			}
		}
		.more{
			display: flex;
			align-items: center;
			justify-content: center;
			width: .8rem;
			height: .8rem;
			border-radius: .4rem;
			position: fixed;
			right: .3rem;
			top:.3rem;
			background-color: rgba(255,255,255,.7);
			img{
				width: .6rem;
				height: .6rem;
			}
		}
		.float{
			position:fixed;
			right:0.24rem;
			top:1.4rem;
			width:2rem;
			height:2.7rem;
			border-radius: 3px;
			padding: 0 .2rem;
			background-color: rgba(0,0,0,.7);
			ul{
				li{
					height:0.9rem ;
					border-bottom: 0.1px solid #fff;
					a{
						width:2rem;
						height:0.9rem;
						display: flex;
						align-items: center;
						img{
							width: .48rem;
						}
						span{
							margin-left: .2rem;
							font-size: .31rem;
							color:#fff;
						}
					}
				}
			}
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
