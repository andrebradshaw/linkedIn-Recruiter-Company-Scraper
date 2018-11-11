function vld(elm,n){ if(elm != null){return elm[n];}else{return '';}}

//open Recruiter/Company Pages
var res = [['lever','lever.io'],['aquent', 'aquent.com']]
var jdatArr = [];
function opener(elm,n) {
	setTimeout(()=>{		
		let wnd = window.open('https://www.linkedin.com/recruiter/api/smartsearch/typeahead/company?query='+elm[0]);

		setTimeout(()=>{
			var str = wnd.document.body.innerText;
			var res = JSON.parse(str).resultList;
			var regX = new RegExp('\\b'+elm[0]+'\\b', 'i');
			
			for(j=0; j< res.length; j++){
				if(regX.test(res[j].displayName) === true){
					jdatArr.push(res[j]);
				}
			}
			
		}, 1700);	

		setTimeout(()=>{
			wnd.close();
       	}, 2500);
	}, ((n+1)*2000));
}

for(i=0; i<res.length; i++){
	opener(res[i], i);
}

