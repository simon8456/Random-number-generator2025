document.addEventListener('DOMContentLoaded', function() {
  // Získání dat z API (Netlify function)
  fetch('/.netlify/functions/deviceCounter')
      .then(response => response.json())
      .then(data => {
          const deviceData = data.data; // Očekáváme objekt s daty zařízení
          document.getElementById('device').innerHTML = `
              <div class="device-count">
                  <p>Android: <span class="count">${deviceData.android}</span></p>
                  <p>iOS: <span class="count">${deviceData.ios}</span></p>
                  <p>Windows: <span class="count">${deviceData.windows}</span></p>
                  <p>Other: <span class="count">${deviceData.other}</span></p>
              </div>
          `;
      })
      .catch(error => {
          document.getElementById('device').innerHTML = "Data could not be loaded.";
          console.error('Error fetching device data:', error);
      });
});
