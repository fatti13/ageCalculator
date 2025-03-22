function calculateAge(){
	let today = new Date();
	let birthdateInput = document.getElementById('birthdate').value;
	let birthdateParts = birthdateInput.split('-');
	let birthDay = birthdateParts[0];
	let birthMonth = birthdateParts[1] - 1;
	let birthYear = birthdateParts[2];

	let birthDate = new Date(birthYear, birthMonth, birthDay); 

	console.log(birthdateInput);
	console.log(birthdateParts);
	console.log(birthDay);
	console.log(birthMonth);
	console.log(birthYear);

	let isValidDate = (date) =>{	 
		return(
			Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
			);
		};

		if(!isValidDate(birthDate)){
			alert("Please enter a valid date");
			return;
		}

	let ageInMilliseconds = today - birthDate;
	let ageInSeconds = Math.floor(ageInMilliseconds / 1000);
	let ageInMinutes = Math.floor(ageInSeconds / 60);
	let ageInHours = Math.floor(ageInMinutes / 60);
	let ageInDays = Math.floor(ageInHours / 24);
	let ageInWeeks = Math.floor(ageInDays / 7);
	let ageInMonths = Math.floor(ageInDays / 30.436875);
	let ageInYears = Math.floor(ageInDays / 365.25);

	let resultContainer = document.getElementById('resultContainer');
	let result = document.getElementById('result');

	result.innerHTML = `
		<div class="result-item">
			<h3>Age:</h3>
			<p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
		</div>

		<div class="result-item">
			<h3>Months Passed:</h3>
			<p>${ageInMonths}</p>
		</div>

		<div class="result-item">
			<h3>Weeks Passed:</h3>
			<p>${ageInWeeks}</p>
		</div>

		<div class="result-item">
			<h3>Days Passed:</h3>
			<p>${ageInDays}</p>
		</div>

		<div class="result-item">
			<h3>Hours Passed:</h3>
			<p>${ageInHours}</p>
		</div>

		<div class="result-item">
			<h3>Minutes Passed:</h3>
			<p>${ageInMinutes}</p>
		</div>

		<div class="result-item">
			<h3>Seconds Passed:</h3>
			<p>${ageInSeconds}</p>
		</div>
	`;
	resultContainer.style.display = "block";
}


let ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener("submit",(event)=>{
		event.preventDefault();
		calculateAge();
});