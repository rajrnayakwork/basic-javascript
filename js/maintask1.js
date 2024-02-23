let data = [];

function addText() {
	let value = document.getElementById("data").value;
	if (value) {
		data.push(value);
		let dataLen = data.length;
		document.getElementById("length").innerHTML =
			"total data is : " + dataLen;
		let text = "<ol>";
		for (let i = 0; i < dataLen; i++) {
			text += "<li>" + data[i] + "</li>";
		}
		text += "</ol>";

		document.getElementById("table").innerHTML = text;
	}
}
