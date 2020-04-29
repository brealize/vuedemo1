<template>
  <div id="app">
    
    <router-view/>
	<van-tabbar v-show="$route.meta.showtabbar" route active-color="#FF464E" inactive-color="#BBBBBB" v-model="active">
	  <van-tabbar-item to="/">
	      <span >首页</span>
	      <template #icon="props">
	        <img :src="props.active ? require('./assets/img/homesel.png') : require('./assets/img/home.png')" />
	      </template>
	    </van-tabbar-item>
	  <van-tabbar-item to="/sort">
	      <span >分类</span>
	      <template #icon="props">
	        <img :src="props.active ? require('./assets/img/sortsel.png') : require('./assets/img/sort.png')" />
	      </template>
	    </van-tabbar-item>
		<van-tabbar-item to="/cart">
		    <span >购物车</span>
		    <template #icon="props">
		      <img :src="props.active ? require('./assets/img/cartsel.png') : require('./assets/img/cart.png')" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item to="/mine">
		      <span >我的卷皮</span>
		      <template #icon="props">
		        <img :src="props.active ? require('./assets/img/minesel.png') : require('./assets/img/mine.png')" />
		      </template>
		    </van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				active:0,
			}
		}
	}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
