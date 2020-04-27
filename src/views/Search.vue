<template>
	<div class="search">
		<form action="/">
		  <van-search
		    v-model="value"
		    show-action
		    placeholder="请输入搜索关键词"
		    @search="onSearch"
		    @cancel="onCancel"
		  />
		</form>
		<van-divider style="position: relative;bottom:.3rem;"/>
		<div class="wrap">
			<div class="hot">
				<div class="box">
				<p class="title">热搜</p>
					<div class="tag" v-for="item in hot">
						{{item}}
					</div>
				</div>
			</div>
			<br>
			<div class="history">
				<p class="title">搜索历史</p>
				<div class="box">
					<div class="tag" v-for="item in history">
					{{item}}
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
	  data() {
	    return {
	      value: '',
		  hot:['清爽防晒乳','百草味','蓝月亮','蓝牙耳机'],
		  history:["充电宝","数据线","键盘鼠标","帆布鞋","水杯",]
	    };
	  },
	  methods: {
	    onSearch(val) {
			if(val.length>0){
				console.log(this.history);
				this.history.push(val);
				this.$router.push({
					name:"SearchResult",
					query:{
						key:val
					}
				})
			}else{
				Toast("输入不能为空");
			}   
	    },
	    onCancel() {
	      this.$router.go("-1");
	    },
	  },
	};
</script>

<style lang="less" scoped="scoped">
	.search{
		.wrap{
			padding:0 .3rem;
			.hot{
				width: 100%;
				.box{
					display: block;
					width: 100%;
					.title{
						font-size: .28rem;
						color: #999;
						text-align: left;
					}
						.tag{
							background-color: orangered;
							padding: .1rem .2rem;
							color:#f4f4f4;
							font-size:.24rem;
							float: left;
							border-radius: 5px;
							margin:.16rem .2rem .06rem 0;
						}
				}
			}
			.history{
				.title{
					font-size: .28rem;
					color: #999;
					text-align: left;
					margin-top: 1rem;
				}
				.box{
					display: block;
					width: 100%;
					.tag{
						background-color: #f4f4f4;
						padding: .1rem .2rem;
						color:#666;
						font-size:.24rem;
						float: left;
						border-radius: 5px;
						margin:.16rem .2rem .06rem 0;
					}
				}
			}
		}
		
	}
</style>
