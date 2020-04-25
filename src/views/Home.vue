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
			<van-swipe :autoplay="3000" width="7.5rem">
			  <van-swipe-item v-for="(image, index) in images" :key="index">
			    <img v-lazy="image" style="width: 7.5rem;" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		
  </div>
</template>

<style lang="less" scoped="scoped">
	.home{
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
	}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  name: 'Home',
  data(){
	return{
		images:[
			 require('../assets/img/banner1.jpg'),
			 require('../assets/img/banner2.jpg'),
			 require('../assets/img/banner3.jpg')
		]
	}  
  },
  components: {
   
  },
  methods:{
	  gosearch(){
		  
	  },
	  gosort(){
		this.$router.push("/sort")  
	  }
  }
}
</script>
