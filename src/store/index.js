import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodList:[
		  
	  ]
  },
  getters:{
	  getGoodList(state){
	  		  return state.goodList;
	  }
  },
  mutations: {
	  addGood(state,good){
	  		  let canAdd = true;
	  		  state.goodList.forEach(item=>{
	  			  if(item.goodid == good.goodid){
	  					  canAdd = false;
	  					  item.num+=good.num;
	  			  }
	  		  })
	  		  if(canAdd){
	  			  state.goodList.push(good);
	  		  } 
	  },
	  changeNum(state,good){
		  state.goodList.forEach(item=>{
			  if(item.goodid==good.id){
				  item.num = good.num
			  }
		  })
	  },
	  remove(state,good){
		  let index = -1;
		  state.goodList.forEach((item,i)=>{
			  if(item.goodid == good.id){
				index = i;  
			  }
		  })
		  if(index>=0){
			  state.goodList.splice(index,1)
		  }
	  }
  },
  actions: {
	  addGoodAsync(context,good){
		  context.commit("addGood",good)
	  },
	  changeNumAsync(context,good){
		  context.commit("changeNum",good)
	  },
	  removeAsync(context,good){
	  	  context.commit("remove",good)
	  },
	
  },
  modules: {
  }
})
