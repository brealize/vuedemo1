import mock from 'mockjs'

mock.mock("http://brealize.com/search.php",function(){
	let result=[];
	for(let i = 0;i<(Math.floor(Math.random()*10)+15);i++){
		let obj = {
			pic_url:mock.Random.image('250x250'),
			oprice:mock.Random.float(200,400,0,2),
			cprice:mock.Random.float(5,220,0,2),
			title:mock.Random.ctitle(7,25),
			goods_id:mock.Random.integer(111111111,999999999),
		};
		result.push(obj);
	}
	return result;
})

mock.mock("http://brealize.com/detail.php",function(){
	let result = {
		"code":0,
		"data":[
			{
				banner:[
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250')
				],
				oprice:mock.Random.float(200,400,0,2),
				cprice:mock.Random.float(5,220,0,2),
				mailing:mock.Random.boolean(1, 4, false),
				title:mock.Random.ctitle(18,35),
				buyed:mock.Random.integer(1,5000),
				name:mock.Random.ctitle(2,6),
				store_logo:mock.Random.image('250x250'),
				store_name:mock.Random.ctitle(6,12),
				store_img:[
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250'),
					mock.Random.image('250x250')
				],
				// brand_img:[
				// 	mock.Random.image('336x280'),
				// 	mock.Random.image('336x280'),
				// 	mock.Random.image('336x280'),
				// 	mock.Random.image('336x280'),
				// 	mock.Random.image('336x280'),
				// ]
				
			}
		],
		"result":"ok",
	}
	return result;
})

mock.mock("http://brealize.com/login.php",function(){
	let result={
		"code":0,
		"token":"sjginrgmaz;jvonrgoaegjbn;goma jfg5aga,gosinbamelgaogem",
		"result":"ok"
	}
	return result
})

mock.mock("http://brealize.com/sms.php",function(){
	let result={
		"code":0,
		"result":"ok"
	}
	return result
})

mock.mock("http://brealize.com/regist.php",function(){
	let result={
		"code":0,
		"result":"ok"
	}
	return result
})

mock.mock("http://brealize.com/userinfo.php",function(req){
	if(req.type=="GET"){
		let result = {
			"code":0,
			"data":{
				username:"brealize",
				telephone:"18338701961"
			},
			"result":"ok"
		}
		return result
	}
	else if(req.type=="PUT"){
		console.log(req);
		let obj = JSON.parse(req.body);
		let result = {
			"code":0,
			"data":{
				username:obj.username,
				telephone:obj.telephone
			},
			"result":"ok"
		}
		return result
	}
})


export {mock}