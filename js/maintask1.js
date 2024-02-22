let data = [];

function addText() {
	let value = document.getElementById("data").value;
	data.push(value);
	let dataLen = data.length;

	let text = "<br /><tr>";
	for (let i = 0; i < dataLen; i++) {
		text += "<td>" + (i + 1) + "</td>";
		text += "<td>" + data[i] + "</td>";
	}
	text += "</tr>";

	document.getElementById("table").innerHTML = text;
}
