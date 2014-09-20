var arrt = [];
var varst={};

function list(){
var queryIndexList='select * from html where url="http://www.youm7.com/%D8%B5%D8%AD%D8%A9%20%D9%88%D8%B7%D8%A8-245" and xpath="//*[@class=\'newsBriefBlock\']"';
Titanium.Yahoo.yql(queryIndexList, function(e){	
varst.data=e.data;
for(var i=0;i<e.data.div.length;i++){
	arrt.push({
		title:e.data.div[i].div[1].h3.a.content,
		url:e.data.div[i].div[0].a.href,
		image:e.data.div[i].div[0].a.img.src,
	});
}

});
}

function post(url){
var queryIndexListIn='select * from html where url="'+url+'" and xpath="//*[@class=\'newsStoryTxt\']"';
Titanium.Yahoo.yql(queryIndexListIn, function(e){	
varst.da=e.data;
varst.daF=varst.da.div.p.content;
//Ti.API.info(varst.da.div.p.content);
});	
}
