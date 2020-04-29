<template>
  <div class="home">
		<div class="search">
			<div class="gosearch" @click="gosearch">
				<van-icon name="search" size="0.4rem"/>
				<b>卷皮</b>
				<span>搜索</span>
			</div>
			<img src="../assets/img/search_home.png" alt="" @click="gosort">
		</div>
		<div class="swipe">
			<van-swipe :autoplay="3000" width="100%">
			  <van-swipe-item v-for="(image, index) in images" :key="index">
			    <img v-lazy="image" style="width: 7.5rem;" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="itembar">
			<router-link to=""><img src="../assets/img/icon1.png" alt=""></router-link>
			<router-link to=""><img src="../assets/img/icon2.png" alt=""></router-link>
			<router-link to=""><img src="../assets/img/icon3.png" alt=""></router-link>
			<router-link to=""><img src="../assets/img/icon4.png" alt=""></router-link>
		</div>
		<div class="pagelink">
			<router-link to=""><img src="../assets/img/type2_1.gif" style="width: 3.75rem;"></router-link>
			<router-link to=""><img src="../assets/img/type2_2.png" style="width: 3.75rem;"></router-link>
			<router-link to=""><img src="../assets/img/type2_3.png" style="width: 3.75rem;" class="three"></router-link>		
		</div>
		<div class="gobanner">
			<router-link to=""><img src="../assets/img/type3-1.gif" style="width: 7.5rem;"></router-link>
			<img src="../assets/img/type4_1.png" style="width: 7.5rem;margin-top: .1rem;margin-bottom: .1rem;">
		</div>
		<div class="fill"></div>
		<van-tabs v-model="active" title-active-color="#FF464E" style="width: 3.36rem;height: .88rem;font-size:.32rem;position: relative;bottom:.88rem;background-color: #F4F4F8;">
		  <van-tab title="精选专场" style="width: 7.5rem;position: relative;bottom:50px;margin-top: 50px;">
		    <hometab></hometab>
		  </van-tab>
		  <van-tab title="精选单品" style="width: 7.5rem;position: relative;bottom:50px;margin-top: 50px;">
			<hometype2 :datas="datas"></hometype2>
		  </van-tab>
		</van-tabs>
		<div class="gotop" @click="gotop">
			<img src="../assets/img/gotop.png">
		</div>
  </div>
  
</template>

<style lang="less" scoped="scoped">
	.home{
		transition: all 3s;
		background-color: #F4F4F8;
		.search{
			display: flex;
			align-items: center;
			width: 100%;
			height: .9rem;
			background-color: #fff;
			font-size: .3rem;
			.gosearch{
				margin-left: .28rem;
				display: inline-block;
				color: rgb(153, 153, 153);
				background-color: #f2f2f2;
				border-radius: .1rem;
				width: 6.34rem;
				height: .56rem;
				.van-icon{
					float: left;
					margin-top: .08rem;
					margin-left: .2rem;
				}
				b{
					float: left;
					margin-top: .08rem;
					margin-left: .2rem;
					color:#FF464E;
				}
				span{
					float: left;
					margin-top: .1rem;
					margin-left: .1rem;
				}
			}
			img{
				width: .9rem;
				height: .9rem;
			}
		}
		.swipe{
			width: 7.5rem;
			height: 2.9rem;
			overflow: hidden;
		}
		.itembar{
			display: flex;
			height: 1.68rem;
			width: 100%;
			border-bottom: 1px solid #FCFCFD;
			img{
				width: 100%;
			}
		}
		.pagelink{
			display: flex;
			width: 100%;
			overflow: hidden;
			border-bottom: 1px solid #FCFCFD;
			.three{
				position: relative;
				right:3.75rem;
				top:2.27rem
			}
		}
		.fill{
			width: 4.14rem;
			height: .88rem;
			background-color: #fff;
			position: relative;
			left:3.36rem
		}
		.gotop{
			position: fixed;
			bottom:.95rem;
			right:.2rem;
			img{
				width: .8rem;
				height: .8rem;
			}
		}

	}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

import {goodpage2 as page2} from "../data/index.js"

import hometab from "@/components/HomeTab"
import hometype2 from "../components/HomePage2"
export default {
  name: 'Home',
  data(){
	return{
		active:0,
		images:[
			 require('../assets/img/banner1.jpg'),
			 require('../assets/img/banner2.jpg'),
			 require('../assets/img/banner3.jpg'),
		],
		datas:[],
		
	}  
  },
  created() {
  	this.datas = page2.data.goods;
  },
  components: {
	hometab,
	hometype2
  },
  methods:{
	  gosearch(){
		this.$router.push("/search")
	  },
	  gosort(){
		this.$router.push("/sort")  
	  },
	  gotop(){
		  var timer = setInterval(function(){
		  let osTop = document.documentElement.scrollTop || document.body.scrollTop;
		  let ispeed = Math.floor(-osTop / 5); 
		  document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
		  this.isTop = true;
		  if(osTop === 0){
		    clearInterval(timer);
		  }
		},30)
		   
	  }
  }
}
</script>
