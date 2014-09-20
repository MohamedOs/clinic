var arrInfo = [];
var varsInfo ={};

function docInfoFun(url){
var queryIndexDoc='select * from html where url="http://www.evapharma.com'+url+'" and xpath="//*[@class=\'info\']|/html/head/script"';
Titanium.Yahoo.yql(queryIndexDoc, function(e){
varsInfo.data=e.data;
if(e.data.script[8].content){
	var ddd=e.data.script[8].content;
}else{
    var ddd='';
}

var n = ddd.split("google.maps.LatLng(",[2]);
var nx=n[1];
nx=nx.split(");",[2]);
var attRow=nx[0];
attRow=attRow.split(", ",[2]);
	arrInfo.push({
		att:attRow[0],att2:attRow[1]
		},{
		spec:e.data.div.div[1].p,spec2:e.data.div.div[0].p,
		qual:e.data.div.div[3].p,qual2:e.data.div.div[2].p,
		address:e.data.div.div[5].p,address2:e.data.div.div[4].p,
		phone:e.data.div.div[7].p,phone2:e.data.div.div[6].p,
		calender:e.data.div.div[9].p,calender2:e.data.div.div[8].p,
		other:e.data.div.div[11].p,other2:e.data.div.div[10].p,
		});
		Ti.API.info(arrInfo);

});

	
}
/*
arrInfo.push({
		spec:e.data.div.div[1].p,
				spec1:e.data.div.div[0].p,

		qual:e.data.div.div[3].p,
				qual1:e.data.div.div[2].p,

		address:e.data.div.div[5].p,
				address1:e.data.div.div[4].p,

		phone:e.data.div.div[7].p,
				phone1:e.data.div.div[6].p,

		calender:e.data.div.div[9].p,
				calender1:e.data.div.div[8].p,

		other:e.data.div.div[11].p,
				other1:e.data.div.div[10].p,

		att1:attRow[0],
		att2:attRow[1]
	});
	*/
