function parseElm(elm){
	var industry = '';
	var type = '';
	var founded = '';
	var status = '';
	var size = '';
	var website = '';
	var geoArr = [];	

	var geos = elm.getElementsByClassName('geo-region');
	var keyStats = elm.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

	for(i=0; i<keyStats.length; i++){
		let th = keyStats[i].getElementsByTagName("th")[0];
		let td = keyStats[i].getElementsByTagName("td")[0];
		if(/industry/i.test(th.innerText) === true) {var industry = td.innerText;}
		if(/type/i.test(th.innerText) === true) {var type = td.innerText;}
		if(/founded/i.test(th.innerText) === true) {var founded = td.innerText;}
		if(/size/i.test(th.innerText) === true) {var size = td.innerText;}
		if(/status/i.test(th.innerText) === true) {var status = td.innerText;}
		if(/website/i.test(th.innerText) === true) {var website = td.innerText;}
    }
	for(a=0; a<geos.length; a++){
		let g = geos[a].getElementsByTagName('a')[0].innerText.replace(/\s+\(.+/, '');
		let c = parseInt(geos[a].getElementsByTagName('span')[0].innerText.replace(/\D+/g, ''));
		geoArr.push([g,c]);
	}
	
return {"industry": industry, "type": type, "founded": founded, "status": status, "size": size, "website": website, "goes": geoArr};
	
}
//open Recruiter/Company Pages
var res = ['3254533','3127449'];
var jdatArr = [];
function opener(elm,n) {
	setTimeout(()=>{		
		let wnd = window.open('https://www.linkedin.com/recruiter/company/'+elm);

		setTimeout(()=>{
			var str = wnd.document.body.innerText;
			var stats = wnd.document.getElementById('company-key-statistics');
			jdatArr.push(parseElm(stats));
		}, 1700);	

		setTimeout(()=>{
			wnd.close();
       	}, 2500);
	}, ((n+1)*2000));
}

for(i=0; i<res.length; i++){
	opener(res[i], i);
}

