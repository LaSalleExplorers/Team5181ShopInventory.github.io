function part(partName,partNumber,partLocation,partQuantity,partLink,partCategory,metaTags){
	this.name=partName;
	this.num=partNumber;
	this.location=partLocation;
	this.quantity=partQuantity;
	this.ref=partLink;
	this.category=partCategory;
	this.tags=metaTags;
	this.showOnMap=function(){
		
	}
	this.addToTable=function(){
		var newPartRow=document.createElement("tr");
		var newNameNode=document.createElement("td");
		var newNumberNode=document.createElement("td");
		var newLocationNode=document.createElement("td");
		var newQuantityNode=document.createElement("td");
		var newLinkNode=document.createElement("td");
		var newPartName=document.createTextNode(this.name);
		var newPartNumber=document.createTextNode(this.num);
		var newPartLocation=document.createTextNode(this.location);
		var newPartQuantity=document.createTextNode(this.quantity);
		var newPartLinkText=document.createTextNode(String(this.ref));
		var newPartLink=document.createElement("a");
		newPartRow.id=this.name;
		newPartLink.href=this.ref;
		newPartLink.target="_blank";
		newLocationNode.addEventListener("click",this.showOnMap());
		newNameNode.appendChild(newPartName);
		newNumberNode.appendChild(newPartNumber);
		newLocationNode.appendChild(newPartLocation);
		newQuantityNode.appendChild(newPartQuantity);
		newPartLink.appendChild(newPartLinkText);
		newPartRow.appendChild(newNameNode);
		newPartRow.appendChild(newNumberNode);
		newPartRow.appendChild(newLocationNode);
		newPartRow.appendChild(newQuantityNode);
		newPartRow.appendChild(newPartLink);
		document.getElementById("registryDisplay").appendChild(newPartRow);
	}
}
