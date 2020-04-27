import mock from 'mockjs'

mock.mock("http://brealize.com/search.php",function(){
	let result=[];
	for(let i = 0;i<(Math.floor(Math.random()*10)+15);i++){
		let obj = {
			pic_url:mock.Random.image('250x250'),
			oprice:mock.Random.float(200,400,0,2),
			cprice:mock.Random.float(5,220,0,2),
			title:mock.Random.ctitle(7,25),
		};
		result.push(obj);
	}
	return result;
})





export {mock}