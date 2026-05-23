function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  } else {
    return temp.toFixed(1);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // First card
  const temp1 = parseFloat(document.getElementById("temp1").textContent);
  const wind1 = parseFloat(document.getElementById("wind1").textContent);
  document.getElementById("windChill1").textContent = calculateWindChill(temp1, wind1);
  document.getElementById("lastModified1").textContent = document.lastModified;

  // Second card
  
const temp2 = parseFloat(document.getElementById("temp2").textContent);
  const wind2 = parseFloat(document.getElementById("wind2").textContent);
  document.getElementById("windChill2").textContent = calculateWindChill(temp2, wind2);
  document.getElementById("lastModified2").textContent = document.lastModified;
});

function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  } else {
    return temp.toFixed(1);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  document.getElementById("windChill").textContent = calculateWindChill(temp, wind);

  document.getElementById("lastModified").textContent = document.lastModified;
});
