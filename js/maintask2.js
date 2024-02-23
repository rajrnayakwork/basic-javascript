let names = {};
let count = 0;
let start = "<s>";
let end = "</s>";
function addName() {
	if (document.getElementById("text").value) {
		names[count] = document.getElementById("text").value;
		count++;
		printObject();
		document.getElementById("text").value = "";
	}
}

function printObject() {
	let text = "<ul class='list-group list-group-flush'>";
	for (let data in names) {
		let button = "<button onclick='deleteObjectProperty(" + data + ")' >Delete</button>";
		let checkbox = '<input type="checkbox" id="checkbox">';
		text += "<li class='list-group-item'>" + button + " " + checkbox + " " + names[data] + "</li>";
		size();
	}
	text += "</ul>";
	document.getElementById("listofnames").innerHTML = text;
}

function deleteObjectProperty(data) {
	delete names[data];
	printObject();
}

function size() {
	if (Object.keys(names).length > 1) {
		document.getElementById("total").innerHTML = "total names : " + Object.keys(names).length;
	} else if (names.constructor === Object) {
		document.getElementById("total").innerHTML = "total names : " + 0;
	}
}
