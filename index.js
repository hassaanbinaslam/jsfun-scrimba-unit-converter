/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert() {
    const value = parseFloat(document.getElementById('input-value').value);
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);
    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);
    const kilosToPounds = (value * 2.20462).toFixed(3);
    const poundsToKilos = (value / 2.20462).toFixed(3);

    document.getElementById('length').innerText = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
    document.getElementById('volume').innerText = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
    document.getElementById('mass').innerText = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}