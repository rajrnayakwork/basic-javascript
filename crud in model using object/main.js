let students = {};
row_counter = 0;
function addStudent() {
	let first_name = document.getElementById("first_name").value;
	let last_name = document.getElementById("last_name").value;
	let age = document.getElementById("age").value;
	let object = {
		first_name: first_name,
		last_name: last_name,
		age: age,
	};
	let row = validation(object);
	if (row) {
		students[row_counter] = row;
		row_counter++;
		document.getElementById("first_name").value = "";
		document.getElementById("last_name").value = "";
		document.getElementById("age").value = "";
		listRefresh();
	}
}

function validation(row) {
	if (row.first_name && row.last_name && row.age) {
		return row;
	}
}

function listRefresh() {
	let text = "";
	for (const row in students) {
		let count = row;
		count++;
		text += "<tr>";
		text += `<th scope="row">${count}</th>
        <td>${students[row]["first_name"]}</td>
		<td>${students[row]["last_name"]}</td>
		<td>${students[row]["age"]}</td>
		<td>
			<button type="button" class="btn btn-primary" onclick="editRow(${row})">Edit</button>
			<button type="button" class="btn btn-danger" onclick="deleteRow(${row})">Delete</button>
		</td>`;
		text += "</tr>";
	}
	document.getElementById("show_rows").innerHTML = text;
	total();
}

function editRow(id) {
	document.getElementById("modelopen").click();
	document.getElementById("edit_id").value = id;
	document.getElementById("edit_first_name").value = students[id]["first_name"];
	document.getElementById("edit_last_name").value = students[id]["last_name"];
	document.getElementById("edit_age").value = students[id]["age"];
}

function deleteRow(id) {
	delete students[id];
	listRefresh();
}

function editStudent() {
	let id = document.getElementById("edit_id").value;
	let first_name = document.getElementById("edit_first_name").value;
	let last_name = document.getElementById("edit_last_name").value;
	let age = document.getElementById("edit_age").value;
	let object = {
		first_name: first_name,
		last_name: last_name,
		age: age,
	};
	let row = validation(object);
	if (row) {
		students[id] = row;
		listRefresh();
	}
}

function total() {
	document.getElementById("total").innerHTML = "Total rows : " + Object.keys(students).length;
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
		document.getElementById("child").innerHTML = "Total Child : " + child;
		document.getElementById("adult").innerHTML = "Total Adult : " + adult;
		document.getElementById("young").innerHTML = "Total Young : " + young;
		document.getElementById("older").innerHTML = "Total Older : " + older;
	}
}
