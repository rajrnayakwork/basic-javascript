let names = {};
let row_counter = 0;

function addName() {
	let row = {};
	let is_checked = false;
	let first_name = document.getElementById("FirstName").value;
	if (first_name) {
		names[row_counter] = row = {
			name: first_name,
			flag: is_checked,
		};
		row_counter++;
		console.log(names);
		document.getElementById("FirstName").value = "";
		listRefresh();
	}
}

function deleteObjectProperty(data) {
	delete names[data];
	document.getElementById("confirm").innerHTML = "";
	listRefresh();
}

function warning(data) {
	let text = "are you sure, you really want to delete!";
	let button = '<br><button type="button" class="btn btn-outline-warning" onclick="deleteObjectProperty(' + data + ')">yes</button><button type="button" class="btn btn-outline-secondary" onclick="listRefresh()">no</button>';
	document.getElementById("confirm").innerHTML = text + button;
}

// function listRefresh() {
// 	let text = "";
// 	for (let data in names) {
// 		text += '<li class="list-group-item d-flex justify-content-between align-items-center">';
// 		let button = '<button type="submit" style="border: none; background-color: white" onclick="deleteObjectProperty(' + data + ')"><span class="badge text-bg-primary rounded-pill p-3">Delete</span></button> </li>';
// 		if (names[data]["flag"] == true) {
// 			text += '<div class="form-check form-switch" style="margin: 0 15px"> <input class="form-check-input" type="checkbox" id="checkbox ' + data + '" onclick="changeStyle(' + data + ')" checked/> </div>';
// 			text += '<div class="ms-2 me-auto" style="text-decoration: line-through" id="row ' + data + '" >' + names[data]["name"] + "</div>" + button;
// 		} else {
// 			text += '<div class="form-check form-switch" style="margin: 0 15px"> <input class="form-check-input" type="checkbox" id="checkbox ' + data + '" onclick="changeStyle(' + data + ')"/> </div>';
// 			text += '<div class="ms-2 me-auto" id="row ' + data + '" >' + names[data]["name"] + "</div>" + button;
// 		}
// 	}
// 	text += "";
// 	document.getElementById("listofnames").innerHTML = text;
// 	size();
// 	showStrike();
// }

function size() {
	let names_length = Object.keys(names).length;
	if (names_length == 0) {
		document.getElementById("total").innerHTML = "total names : " + names_length;
	} else if (names_length > 0) {
		document.getElementById("total").innerHTML = "total names : " + names_length;
	}
}

function showStrike() {
	let true_counter = 0;
	let false_counter = 0;
	false_counter = Object.keys(names).length;
	for (let data in names) {
		if (names[data]["flag"] == true) {
			true_counter++;
			false_counter--;
		}
	}
	document.getElementById("truestrike").innerHTML = "total lined names : " + true_counter;
	document.getElementById("falsestrike").innerHTML = "total unlined names : " + false_counter;
}

function changeStyle(data) {
	if (names[data]["flag"] == false) {
		document.getElementById("row" + data).style.textDecoration = "line-through";
		names[data]["flag"] = true;
	} else {
		document.getElementById("row" + data).style.textDecoration = "";
		names[data]["flag"] = false;
	}
	showStrike();
}

function listRefresh() {
	document.getElementById("confirm").innerHTML = "";
	let text = "<ul class='list-group list-group-flush'>";
	for (let data in names) {
		let button = "<button onclick='warning(" + data + ")' >Delete</button>";
		if (names[data]["flag"] == true) {
			let checkbox = '<input type="checkbox" id="checkbox ' + data + '" onclick="changeStyle(' + data + ')" checked>';
			text += "<li class='list-group-item' style='text-decoration: line-through' id='row" + data + "'>" + button + " " + checkbox + " " + names[data]["name"] + "</li>";
		} else {
			let checkbox = '<input type="checkbox" id="checkbox ' + data + '" onclick="changeStyle(' + data + ')">';
			text += "<li class='list-group-item' id='row" + data + "'>" + button + " " + checkbox + " " + names[data]["name"] + "</li>";
		}
	}
	text += "</ul>";
	document.getElementById("listofnames").innerHTML = text;
	size();
	showStrike();
}
