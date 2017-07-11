function searchRegistry(){
	var searchValue=document.getElementById("searchBar").value;
	console.log(searchValue);
	if(searchValue!="Search Part Name or Part #"){
		var resultsTable=document.createElement("table");
		for(var i=0;i<registryData.length;i++){
			var partObject=registryData[i];
			console.log("name",partObject.name);
			Loop1:
			for(partProperty in partObject){
				console.log("partProperty",partProperty);
				if(partObject[partProperty]==searchValue){
					var partRow=document.getElementById(partObject.name);
					console.log(partObject);
					resultsTable.appendChild(partRow);
					break Loop1;
				}
				for(var j=0;j<partObject.tags.length;j++){
					if(partObject.tags[j]==searchValue){
						var partRow=document.getElementById(partObject.name);
						console.log(partObject);
						resultsTable.appendChild(partRow);
						break Loop1;
					}
				}
			}
		}
		resultsTable.id="resultsTable";
		document.body.insertBefore(resultsTable,document.getElementById("inventoryText"));
		document.getElementById("resultsTable").style.visibility="visible";
	}
}
function displayRegistry(){
	for(var i=0;i<registryData.length;i++){
		registryData[i].addToTable();
	}
	document.getElementById("registryDisplay").style.visibility="visible";
}
