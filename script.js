function volume_sphere() {
     const radiusInput = document.getElementById("radius");
    const radiusValue = parseFloat(radiusInput.value);

    // Check if the entered value is a valid number
    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);

    // Display the calculated volume in the output field
    const volumeOutput = document.getElementById("volume");
    volumeOutput.value = volume.toFixed(2); // Round to 2 decimal places
}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
