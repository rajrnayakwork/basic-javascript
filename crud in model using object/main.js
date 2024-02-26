let employees = {};
row_counter = 0;
function addEmployee() {
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
		employees[row_counter] = row;
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
	for (const data in employees) {
		let count = data;
		count++;
		text += "<tr>";
		text += `<th scope="row">${count}</th>
        <td>${employees[data]["first_name"]}</td>
		<td>${employees[data]["last_name"]}</td>
		<td>${employees[data]["age"]}</td>
		<td>
			<button type="button" class="btn btn-primary" onclick="editRow(${data})">Edit</button>
			<button type="button" class="btn btn-danger" onclick="deleteRow(${data})">Delete</button>
		</td>`;
		text += "</tr>";
	}
	document.getElementById("show_rows").innerHTML = text;
	document.getElementById("total").innerHTML = "Total rows : " + Object.keys(employees).length;
}

function editRow(data) {
	console.log(data);
	document.getElementById("modelopen").click();
}

function deleteRow(data) {
	delete employees[data];
	listRefresh();
}
