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
arrtSingle = [];
var queryIndexListIn='select * from html where url="'+url+'" and xpath="//*[@class=\'newsStoryTxt\']"';
Titanium.Yahoo.yql(queryIndexListIn, function(ez){
//	alert(ez.data.div.p.content);
if(ez.data){
  if(ez.data.div){
    if(ez.data.div.p){
    	if(ez.data.div.p.content){
    	  varst.da=ez.data.div.p.content;
    	  Ti.API.info(varst.da);
    	  arrtSingle.push({
		content:ez.data.div.p.content
	});
    	}else{
    	  varst.da='';	
    	}
    }else{
    varst.da='';	
    }	
  }else{
  varst.da='';	
  }	
}else{
varst.da='';	
}
	
//varst.da=ez.data;
//varst.daDiv=ez.data.div;
Ti.API.info(ez.data);
//varst.daF=ez.data.div.p.content;
/*arrtSingle.push({
		content:ez.data.div.p.content
	});*/
//Ti.API.info(varst.da.div.p.content);
});	
}
