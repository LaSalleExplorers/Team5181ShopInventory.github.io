function part(partName,partNumber,partLocation,partLink,partCategory,metaTags){
	this.name=partName;
	this.num=partNumber;
	this.location=partLocation;
	this.ref=partLink;
	this.category=partCategory;
	this.tags=metaTags;
	this.showOnMap=function(){
		//this method will pull up a picture of the layout of our shop with the area where the part is kept hightlighted but I just haven't gotten around to writing it yet
	}
	this.addToTable=function(){
		var newPartRow=document.createElement("tr");
		var newNameNode=document.createElement("td");
		var newNumberNode=document.createElement("td");
		var newLocationNode=document.createElement("td");
		var newLinkNode=document.createElement("td");
		var newPartName=document.createTextNode(this.name);
		var newPartNumber=document.createTextNode(this.num);
		var newPartLocation=document.createTextNode(this.location);
		var newPartLinkText=document.createTextNode(String(this.ref));
		var newPartLink=document.createElement("a");
		newPartRow.id=this.name;
		newPartLink.href=this.ref;
		newPartLink.target="_blank";
		console.log(this.ref);
		console.log(newPartLink.href);
		newLocationNode.addEventListener("click",this.showOnMap());
		newNameNode.appendChild(newPartName);
		newNumberNode.appendChild(newPartNumber);
		newLocationNode.appendChild(newPartLocation);
		/*
		newLinkNode.appendChild(newPartLink);
		newLinkNode.appendChild(newPartLinkText);
		*/
		newPartLink.appendChild(newPartLinkText);
		newPartRow.appendChild(newNameNode);
		newPartRow.appendChild(newNumberNode);
		newPartRow.appendChild(newLocationNode);
		newPartRow.appendChild(newPartLink);
		document.getElementById("registryDisplay").appendChild(newPartRow);
	}
}
