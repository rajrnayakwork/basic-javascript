let students = {};
let subjects = {};
row_counter = 0;
function addStudent() {
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let age = document.getElementById("age").value;
	let object = {
		first_name: first_name,
		last_name: last_name,
		age: age,
		subjects: {
			0: undefined,
			1: undefined,
			2: undefined,
		},
	};
	if (subjects[0] == true) {
		object.subjects[0] = "gujarati";
	}
	if (subjects[1] == true) {
		object.subjects[1] = "hindi";
	}
	if (subjects[2] == true) {
		object.subjects[2] = "english";
	}

	let row = validation(object);
	if (row) {
		students[row_counter] = row;
		row_counter++;
		emptyAll();
		listRefresh();
	}
}

function editStudent() {
	let id = document.getElementById("edit_id").value;
	let FirstName = document.getElementById("edit_first_name").value;
	let LastName = document.getElementById("edit_last_name").value;
	let Age = document.getElementById("edit_age").value;
	let object = {
		first_name: FirstName,
		last_name: LastName,
		age: Age,
		subjects: {
			0: undefined,
			1: undefined,
			2: undefined,
		},
	};
	if (subjects[0] == true) {
		object.subjects[0] = "gujarati";
	}
	if (subjects[1] == true) {
		object.subjects[1] = "hindi";
	}
	if (subjects[2] == true) {
		object.subjects[2] = "english";
	}
	let row = validation(object);
	if (row) {
		students[id] = row;
		emptyAll();
		listRefresh();
	}
}

function emptyAll() {
	document.getElementById("first_name").value = "";
	document.getElementById("last_name").value = "";
	document.getElementById("age").value = "";
	document.getElementById("gujarati").checked = false;
	document.getElementById("hindi").checked = false;
	document.getElementById("english").checked = false;
	subjects = {};
}

function checkSubjet() {
	let gujarati = document.getElementById("gujarati").checked;
	let hindi = document.getElementById("hindi").checked;
	let english = document.getElementById("english").checked;
	subjects = {
		0: gujarati,
		1: hindi,
		2: english,
	};
}
function checkSubjetForEdit() {
	let gujarati = document.getElementById("edit_gujarati").checked;
	let hindi = document.getElementById("edit_hindi").checked;
	let english = document.getElementById("edit_english").checked;
	subjects = {
		0: gujarati,
		1: hindi,
		2: english,
	};
}

function editRow(id) {
	document.getElementById("modelopen").click();
	document.getElementById("edit_id").value = id;
	document.getElementById("edit_first_name").value = students[id]["first_name"];
	document.getElementById("edit_last_name").value = students[id]["last_name"];
	document.getElementById("edit_age").value = students[id]["age"];
	if (students[id]["subjects"][0] != undefined) {
		document.getElementById("edit_gujarati").checked = true;
		subjects[0] = true;
	} else {
		document.getElementById("edit_gujarati").checked = false;
	}
	if (students[id]["subjects"][1] != undefined) {
		document.getElementById("edit_hindi").checked = true;
		subjects[1] = true;
	} else {
		document.getElementById("edit_hindi").checked = false;
	}
	if (students[id]["subjects"][2] != undefined) {
		document.getElementById("edit_english").checked = true;
		subjects[2] = true;
	} else {
		document.getElementById("edit_english").checked = false;
	}
	console.log(Object.values(subjects));
}

function deleteRow(id) {
	delete students[id];
	listRefresh();
}

function validation(row) {
	if (row.first_name && row.last_name && row.age && (row.subjects[0] != null || row.subjects[1] != null || row.subjects[2] != null)) {
		return row;
	}
}

function listRefresh() {
	let text = "";
	if (Object.keys(students).length == 0) {
		text += `<tr>
		<th scope="row">#</th>
		<td class="text-center" colspan="5"><h3>No Data Available</td></h3>
	</tr>`;
		document.getElementById("show_rows").innerHTML = text;
	} else {
		for (const row in students) {
			let count = row;
			count++;
			text += "<tr>";
			text += `<th scope="row">${count}</th>
        	<td>${students[row]["first_name"]}</td>
			<td>${students[row]["last_name"]}</td>
			<td>${students[row]["age"]}</td>
			<td> | `;
			for (const id in students[row]["subjects"]) {
				if (students[row]["subjects"][id] != undefined) {
					text += `${students[row]["subjects"][id]} | `;
				}
			}
			text += `</td><td>
			<button type="button" class="btn btn-primary" onclick="editRow(${row})">Edit</button>
			<button type="button" class="btn btn-danger" onclick="deleteRow(${row})">Delete</button>
			</td>`;
			text += "</tr>";
		}
		document.getElementById("show_rows").innerHTML = text;
	}
	total();
}

function total() {
	document.getElementById("total").innerHTML = "Total Rows : " + Object.keys(students).length;
	let child = 0;
	let adult = 0;
	let young = 0;
	let older = 0;
	for (const row in students) {
		let age = students[row]["age"];
		if (age >= 50) {
			older++;
		} else if (age >= 30) {
			young++;
		} else if (age >= 18) {
			adult++;
		} else if (age >= 1) {
			child++;
		}
	}
	document.getElementById("child").innerHTML = "Total Child : " + child;
	document.getElementById("adult").innerHTML = "Total Adult : " + adult;
	document.getElementById("young").innerHTML = "Total Young : " + young;
	document.getElementById("older").innerHTML = "Total Older : " + older;
}

function searchName() {
	let column = document.getElementById("column").value;
	let value = document.getElementById("searchbox").value;
	for (const row in students) {
		if (students[row][column] == value) {
			console.log(value);
		}
	}
	document.getElementById("searchbox").value = "";
	document.getElementById("column").selectedIndex = 0;
}
