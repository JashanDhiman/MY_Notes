var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var save = document.getElementById("save");
var share = document.getElementById("share");
var trash = document.getElementById("trash");
var create = document.getElementById("create");
var index = 0;
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];

create.addEventListener("click",function(){
	createNote();
})
save.addEventListener("click",function(){
	saveNote()
})
share.addEventListener("click",function(){
	createNote()
})
trash.addEventListener("click",function(){
	trashNote()
})

function createNote() {
	if(container3.style.display = "none"){
		container3.style.display = "block";
	}
	else{
		container3.style.display = "none";
	}
}

function saveNote() {
	var topic = document.getElementById("topic").value;
	var text = document.getElementById("note-text").value;
	var notes = document.getElementById("notes");
	var node0 = document.createElement("div");
	var node1 = document.createElement("h2");
	var node2 = document.createElement("textarea");
	if(topic && text){
 	node1.innerHTML = topic;
	node2.innerHTML = text;
	node2.className = "content";
	node2.readOnly = true;

	node0.appendChild(node1);
	node0.appendChild(node2);
	notes.appendChild(node0);
	node0.setAttribute("style", `height:200px;width:200px;margin-top:10px;border-radius: 5px;padding: 20px;
		overflow: hidden;cursor: pointer;margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; 
		background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

	container3.style.display = "none";
	}
	else{
		alert("something is missing in note");
	}
}
function shareNote() {
	
}
function trashNote() {
	
}

// function myFunction(div){
// 	var a = document.getElementById("open-note");
// 	var top = document.getElementById("top");
// 	var notes = document.getElementById("notes");
// 	var create = document.getElementById("create");
// 	top.style.display = "none";
// 	notes.style.display = "none";
// 	create.style.display = "none";
// 	div.onclick = "#";
// 	// a.appendChild(div);
// 	div.parentNode.style.display = "block";
// 	// a.childNodes[0].childNodes[1].style.display = "block";
// }
// function cross(div){
// 	location.reload();
// }
function openNav() {
	document.getElementById("menu").style.width = "100%";
}
function closeNav() {
  	document.getElementById("menu").style.width = "0%";
}