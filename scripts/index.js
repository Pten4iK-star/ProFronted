function turnOn() {
  const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
  bulbElement.style.color = "#fbff00";
  const bulbStatus = document.getElementById("bulbStatus");
  bulbStatus.innerHTML = "ON";
  bulbStatus.style.color = "#000000";
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = "#ffffff";
}

function turnOff() {
  const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
  bulbElement.style.color = "#000000";
  const bulbStatus = document.getElementById("bulbStatus");
  bulbStatus.innerHTML = "OFF";
  bulbStatus.style.color = "#ffffff";
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = " rgb(172, 102, 238)";
}

window.turnOn = turnOn;
window.turnOff = turnOff;
