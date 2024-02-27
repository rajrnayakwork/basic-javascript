const cars = {
	tata: {
		name: "nexon",
		color: "red",
	},
};

text = "";
for (let values in cars) {
	for (let value in values) {
		text += " ";
	}
}
document.getElementById("tatadetails").innerHTML = text;
