function GetDevice(){
  if (navigator.userAgent.match(/Android/i)) {
    return "Android";
  } else if (navigator.userAgent.match(/iPhone/i)) {
    return "iPhone";
  } else if (navigator.userAgent.match(/iPad/i)) {
    return "iPad";
  } else {
    return "Unknown";
  }
}

document.getElementById("device").textContent = "Your device: " + GetDevice();

