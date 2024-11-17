document.getElementById('join-now').addEventListener('click', () => {
    alert('Welcome to GymFit! Thank you for joining us.');
    // BMI Calculator
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');

bmiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    bmiResult.textContent = `Your BMI is ${bmi} (${getBMICategory(bmi)})`;
  } else {
    bmiResult.textContent = 'Please enter valid values.';
  }
});

function getBMICategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight';
  return 'Obesity';
}
  });
