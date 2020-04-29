<template>
	<div class="mine">
		<div class="fixtop">
			<div class="topbar">
				<img src="../assets/img/returnwhite.png" @click="returnup">
				<span class="cen">
					个人中心
				</span>
				<span class="edit" @click="loginout">
					退出
				</span>
			</div>
			<div class="userinfo">
				<router-link to="">
					<div class="head_img">
						<img src="../assets/img/default.jpg">
					</div>
				</router-link>
				<div class="username">
					<router-link to="" class="name">{{username}}</router-link>
					<router-link to="" class="mine">{{telephone}}</router-link>
				</div>
			</div>
		</div>
	
	
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userInfo:null,
				username:"",
				telephone:""
			}
		},
		methods:{
			returnup(){
				this.$router.go("-1")
			},
			loginout(){
					
			}
		},
		created(){
			this.$api.getUserInfoAPI().then(res=>{
				console.log("响应",res);
				this.userInfo = res.data.data;
				this.username = this.userInfo.username;
				this.telephone = this.userInfo.telephone
			}).catch(err=>{
				console.log("获取用户信息失败")
			})
		},
		}
		
</script>

<style lang="less" scoped="scoped">
	.mine{
		.fixtop{
			width: 100%;
			height: 2.88rem;
			background-image: url(../assets/img/user_center_bg.png);
			.topbar{
				width:100%;
				height: .88rem;
				color: white;
				img{
					height: .4rem;
					float: left;
					margin-top: .22rem;
					margin-left: .2rem;
				}
				.cen{
					font-size: .36rem;
					line-height: .88rem;
				}
				.edit{
					font-size: .18rem;
					float: right;
					margin-top: .2rem;
					margin-right: .28rem;
				}
			}
			.userinfo{
				margin-top: .46rem;
				height: 1.12rem;
				a{
					.head_img{
						float: left;
						margin-left: .36rem;
						height:1.12rem;
						width: 1.12rem;
						border-radius: 0.56rem;
						overflow: hidden;
						img{
							width: 100%;
						}
					}
				}
				.username{
					float: left;
					margin-left: .24rem;
					margin-top: .05rem;
					height: 90%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.name{
						font-size: .33rem;
						color: #fff;
					}
					.mine{
						font-size: .25rem;
						color: #fff;
					}
				}
			}
		}
	}
</style>
