const form = document.querySelector("form");

// Submit
form.addEventListener("submit", function (event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Extracting Input Values.
	let height = document.querySelector("#height").value;
	let weight = document.querySelector("#weight").value;

	// Styling Result Container.
	let result = document.querySelector("#results");
	result.style.textAlign = "center";
	result.style.marginTop = "1rem";
	result.style.fontSize = "18px";
	result.style.fontWeight = "bold";
    
    let valid = true;
	if (height === "" || isNaN(height) || height <= 0) {
        result.style.display = "block";
        result.innerHTML = "Invalid Input!!";
        valid = false;

	}

	if (weight === "" || isNaN(weight) || weight <= 0) {
        result.style.display = "block";
		result.innerHTML = "Invalid Input!!";
        valid = false;
	}

    if(valid)
    {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Healthy";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else if (bmi >= 30) {
            category = "Obese";
        } else if (bmi >= 30 && bmi <= 39.9) {
            category = "Obesity";
        } else if (bmi >= 40) {
            category = "Severe Obeseity";
        }
        result.innerHTML = `${category}: ${bmi}`;
        result.style.display = "block";
    }
}, false);

//  Reset
form.addEventListener("reset", function (event) {

	// Resetting Input Values.
	document.querySelector("#height").value = "";
	document.querySelector("#weight").value = "";

	// Styling Result Container.
	let result = document.querySelector("#results");
	result.style.display = "none";
}, false);
