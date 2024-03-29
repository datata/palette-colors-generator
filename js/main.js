const colorInput = document.getElementById("color-input");
const container = document.getElementById("container");
const numberPaletteColors = 5;
const arrayColors = [];

const colorVars = [
	"--brand-dark",
	"--brand-darker",
	"--brand",
	"--brand-light",
	"--brand-lighter",
];

function rgbToHex(rgb) {
	const rgbValues = rgb.substring(4, rgb.length - 1).split(",");

	// Convert each RGB value to hexadecimal
	const hexValues = rgbValues.map((value) => {
		const hex = parseInt(value).toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	});

	// Combine the hexadecimal values and return the result
	return "#" + hexValues.join("");
}

for (let i = 0; i < numberPaletteColors; i++) {
	const box = document.createElement("div");
	box.classList.add("box");

	if (i < colorVars.length) {
		box.style.backgroundColor = `var(${colorVars[i]})`;
	}

	box.addEventListener("click", function () {
		const color = getComputedStyle(box).backgroundColor;
		console.log(color);
		if (color[0] === "r") {
			console.log(rgbToHex(color));
			return;
		}

		console.log(srgbToHex(color));
	});

	container.appendChild(box);
}

colorInput.addEventListener("input", function () {
	const color = colorInput.value;

	document.documentElement.style.setProperty("--brand", color);
});

function srgbToHex(srgb) {
	let rgbValues = srgb.match(
		/color\(srgb (\d+(?:\.\d+)?) (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)\)/
	);
	let hexValues = rgbValues.slice(1).map((value) => {
		let intValue = Math.round(parseFloat(value) * 255);
		let hex = intValue.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	});
	return "#" + hexValues.join("");
}

