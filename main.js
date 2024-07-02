const currentTimeUTC = document.getElementById("currentTimeUTC");
const currentDay = document.getElementById("currentDay");

function updateDateTime() {
  const now = new Date();
  const utcTime = now.toLocaleString("en-US", { timeZone: "UTC" });
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = day;
}

updateDateTime();
setInterval(updateDateTime, 1000);