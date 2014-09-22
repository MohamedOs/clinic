var arrt = [];
var varst={};
var arrtSingle = [];
function list(){
var queryIndexList='select * from html where url="http://www.youm7.com/%D8%B5%D8%AD%D8%A9%20%D9%88%D8%B7%D8%A8-245" and xpath="//*[@class=\'newsBriefBlock\']"';
Titanium.Yahoo.yql(queryIndexList, function(ex){	
varst.data=ex.data;

for(var i=0;i<ex.data.div.length;i++){
	arrt.push({
		title:ex.data.div[i].div[1].h3.a.content,
		url:ex.data.div[i].div[0].a.href,
		image:ex.data.div[i].div[0].a.img.src,
	});
}

});
}

function post(url){
varst.da="";
varst.daF="";
var queryIndexListIn='select * from html where url="'+url+'" and xpath="//*[@class=\'newsStoryTxt\']"';
Titanium.Yahoo.yql(queryIndexListIn, function(ez){	
varst.da=ez.data;
varst.daF=varst.da.div.p.content;
arrtSingle.push({
		content:varst.da.div.p.content
	});
//Ti.API.info(varst.da.div.p.content);
});	
}
