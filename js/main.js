let count = 0;
function changeTheText() {
	count = !count;
	if (count == true) {
		document.getElementById("main_h1").innerHTML = "raj";
		document.getElementById("info").innerHTML =
			"click button for remove the name";
	} else {
		document.getElementById("main_h1").innerHTML = "";
		document.getElementById("info").innerHTML =
			"click button for write the name";
	}
}

function object() {
	const student = {
		firstName: "raj",
		lastName: "nayak",
		age: 23,
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
	};
	document.getElementById("name").innerHTML = student.fullName();
}

function onChange() {
	let value = document.getElementById("onchange").value;
	document.getElementById("text_of_onchange").innerHTML = value;
}

const cars = ["neno", "tiago", "tigor", "altroz"];

function array() {
	document.getElementById("text_of_array").innerHTML = cars.toString();
}

let alfa = new Set();
function setdata() {
	alfa.add(document.getElementById("nameofset").value);
	console.log(alfa);
}

let setnames = new Set(["raj", "vinit", "abhay"]);

let text = "";
setnames.forEach(function (value) {
	text += value + " ";
});
console.log(text);
