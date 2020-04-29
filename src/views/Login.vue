<template>
	<div class="login">
		<div class="fixtop">
			<img src="../assets/img/returnwhite.png" @click="returnup">
			<span class="cen">
				登录
			</span>
			<span class="edit" @click="goregist">
				注册
			</span>
		</div>
		<div class="waplogin">
			<van-tabs v-model="active" title-inactive-color="#999999" title-active-color="#FF464E" line-height="2">
			  <van-tab title="卷皮账号登录">
				  <input type="text" v-model="username" placeholder="手机号/邮箱/用户名">
				  <input type="text" v-model="pwd" placeholder="密码">
			  </van-tab>
			  <van-tab title="手机快捷登录">
				  <input type="text" v-model="tel" placeholder="请输入手机号码">
				  <div class="sms">
					  <input type="text" placeholder="请输入验证码" v-model="sms">
					  <span class="get" @click="getsms">获取验证码</span>
				  </div>
				  
				</van-tab>
			</van-tabs>
			<div class="button" v-if="this.active==0&&(this.username.length<=0||this.pwd.length<=0)">
				登录
			</div>
			<div class="button" v-else-if="this.active==1&&(this.tel.length<=0||this.sms.length<=0)">
				登录
			</div>
			<div class="button loginbutton" @click="login" v-else>
				登录
			</div>
			<div class="more">
				<label><input type="checkbox">
				两周内免登陆</label>
				<span>忘记密码？</span>
			</div>
			<div class="wapapp">
				<h3 class="txt">第三方账号快速登录</h3>
				<div class="app_i">
					<img src="../assets/img/tencent.png" @click="thirdlogin">
					<img src="../assets/img/taobao.png" @click="thirdlogin">
					<img src="../assets/img/sina.png" @click="thirdlogin">
				</div>
				<van-divider />
				<ul class="prot">
					<li>
						<img src="../assets/img/unexpress.png">
						<span>全场包邮</span>
					</li>
					<li>
						<img src="../assets/img/searchicon.png">
						<span>100%人工质检</span>
					</li>
					<li>
						<img src="../assets/img/seven.png">
						<span>7天放心退</span>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				active:0,
				username:"",
				pwd:"",
				tel:"",
				sms:""
			}
		},
		methods:{
			getsms(){
				if(this.tel.length<11){
					this.$toast("请输入正确的手机号")
				}else{	
					this.$api.sendsmsAPI({
						tel:this.tel,
						type:"login"
					}).then(res=>{
						if(res.data.code==0){
							this.$toast("验证码已发送")
						}
					}).catch(err=>{
						this.$toast("验证码请求出错")
					})
				}
			},
			login(){
				if(this.active==0){
					this.$api.loginAPI({
						fmdo:"nomal",
						dopost:"login",
						userid:this.username,
						pwd:this.pwd
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set("token",res.data.token,{expires:14});
							this.$jsCookie.set("name",this.username,{expires:14});
							let next= this.$route.query.next;
							if(next){
															this.$router.push(next)
														}
														else{
															this.$router.push('/')
														}
						}
						console.log("登录成功")
					}).catch(err=>{
						console.log("登录失败",err);
					})
						
					}else if(this.active==1){
						this.$api.loginAPI({
							fmdo:"telphone",
							dopost:"login",
							tel:this.tel,
							sms:this.sms
						}).then(res=>{
							if(res.data.code==0){
								this.$jsCookie.set("token",res.data.token,{expires:14});
								this.$jsCookie.set("name",this.tel,{expires:14});
								let next = this.$route.query.next;
								if(next){
									this.$router.push(next)
								}else{
									this.$router.push("/")
								}
							}
						}).catch(err=>{
							console.log("登录失败",err);
						})
					}
				},
				returnup(){
					this.$router.go("-1");
				},
				goregist(){
					this.$router.push("/regist");
				},
				thirdlogin(){
					this.$api.loginAPI({
						fmdo:"third",
						dopost:"login",
						token:""
					}).then(res=>{
						if(res.data.code==0){
													this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
													this.$jsCookie.set('username', this.username, { expires: 7 }) 
													let next= this.$route.query.next;
													if(next){
														this.$router.push(next)
													}
													else{
														this.$router.push('/')
													}
												}
					}).catch(err=>{
						console.log("登录失败",err);
					})
				}
			},
			

		}
</script>

<style lang="less" scoped="scoped">
	.login{
		.button.loginbutton{
			background-color:#FF464E ;
		}
		.get{
			position: relative;
			bottom:.75rem;
			float:right;
			font-size: .28rem;
			color: #A59999;
		}
		.fixtop{
			width:100%;
			height: .88rem;
			color:white;
			background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
			img{
				height: .4rem;
				float: left;
				margin-top: .22rem;
				margin-left: .25rem;
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
		.waplogin{
			padding: 0 .24rem;
			input{
				width: 100%;
				height: .96rem;
				border:none;
				font-size: .28rem;
				border-bottom: 1px solid #FAFAFA;
			}
		}
		.button{
			width: 100%;
			margin-top: .48rem;
			height: .96rem;
			background: #dbdbdb;
			font-size: .36rem;
			line-height: .96rem;
			color: #fff;
		}
		.more{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: .74rem;
			width: 100%;
			label{
				font-size: .26rem;
				color:#999;
				line-height: .34rem;
				input{
					width: .34rem;
					height: .34rem;
					background-color: #FF464E;
				}
			}
			span{
				font-size: .26rem;
				color:#999;
				line-height: .34rem;
			}
			
		}
		.wapapp{
			.txt{
				margin-top: 1rem;
				font-size: 12px;
				margin-bottom:30px;
				color:#999;
				margin-bottom: .6rem;
			}
			.app_i{
				margin-bottom: .46rem;
				height: .96rem;
				width:5.1rem;
				padding: 0 0.96rem;
				display: flex;
				justify-content: space-between;
				img{
					height: 100%;
				}
			}
			.prot{
				margin-top: .24rem;
				height: .44rem;
				display: flex;
				align-items:center ;
				justify-content: space-between;
				li{
					height: 100%;
					display: flex;
					align-items:center ;
					img{
						height: 100%;
						margin-right: .1rem;
					}
					span{
						color:#c2c2c2;
						font-size: .22rem;
					}
				}
				
			}
		}
	}
</style>
