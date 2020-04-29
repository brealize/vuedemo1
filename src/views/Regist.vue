<template>
	<div class="regist">
		<div class="fixtop">
			<img src="../assets/img/return.png" @click="returnup">
			<span class="cen">
				注册
			</span>
			<!-- <span class="edit">
				编辑
			</span> -->
		</div>
		<div class="waplog">
			<p class="mess">请确保您的手机通畅,用于接收验证码短信</p>
			<input type="text" v-model="tel" placeholder="请输入手机号码">
			<div class="sms">
				<input type="text" v-model="sms" placeholder="请输入验证码">
				<span class="get" @click="getsms">获取验证码</span>
			</div>
			<div class="button" v-if="this.tel.length<=0||this.sms.length<=0">
				注册
			</div>
			<div class="button registbutton" @click="regist" v-else>
				注册
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:'',
				sms:''
			}
		},
		methods:{
			returnup(){
				this.$router.go("-1");
			},
			regist(){
				this.$api.registAPI({
					tel:this.tel,
					sms:this.sms
				}).then(res=>{
					if(res.data.code==0){
						this.$router.push("/login")
					}
				}).catch(err=>{
					console.log("请求错误",err);
				})
			},
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
		}
	}
</script>

<style lang="less" scoped="scoped">
	.regist{
		.fixtop{
			width:100%;
			height: .88rem;
			border-bottom: 1px solid #DEDEDE;
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
		.waplog{
			padding: 0 .24rem;
			input{
				width: 100%;
				height: .96rem;
				border:none;
				font-size: .28rem;
				border-bottom: 1px solid #FAFAFA;
			}
			.mess{
				font-size: 12px;
				margin-top: 28px;
				margin-bottom: 20px;
				line-height: 15px;
				color: #999;
			}
			.get{
				position: relative;
				bottom:.75rem;
				float:right;
				font-size: .28rem;
				color: #A59999;
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
			.button.registbutton{
				background-color:#FF464E ;
			}
		}
	}
</style>
