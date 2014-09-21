var arr2 = [];
var vars2={};

function searchDocMore(loc,spe,num){
var queryIndexF1='select * from html where url="http://www.evapharma.com/ar/doctors/?search=type&location='+loc+'&specialist='+spe+'&gender=0&PageNo='+num+'" and xpath="//*[@id=\'Serach_Results\']"';
Titanium.Yahoo.yql(queryIndexF1, function(e){
vars2.data=e.data;
function getObjects(obj, key, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getObjects(obj[i], key, val));
} else
//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
if (i == key && obj[i] == val || i == key && val == '') { //
objects.push(obj);
} else if (obj[i] == val && key == ''){
//only add if the object is not already in the array
if (objects.lastIndexOf(obj) == -1){
objects.push(obj);
}
}
}
return objects;
}
//return an array of values that match on a certain key
function getValues(obj, key) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getValues(obj[i], key));
} else if (i == key) {
objects.push(obj[i]);
}
}
return objects;
}
//return an array of keys that match on a certain value
function getKeys(obj, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getKeys(obj[i], val));
} else if (obj[i] == val) {
objects.push(i);
}
}
return objects;
}
for (var i=1;i<e.data.div.table.tr.length-1;i++) {
	arr2.push({
		name:e.data.div.table.tr[i].td[0].p,
		speciality:e.data.div.table.tr[i].td[1].p,
		location:e.data.div.table.tr[i].td[2].p,
		city:e.data.div.table.tr[i].td[3].p,
		url:e.data.div.table.tr[i].td[4].a.href
	});
}

});

}
