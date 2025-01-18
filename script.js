document.addEventListener('DOMContentLoaded', () => {
  // Funkce pro zjištění typu zařízení
  function getDeviceType() {
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.indexOf('android') > -1) {
          return 'android';
      } else if (userAgent.indexOf('iphone') > -1) {
          return 'iphone';
      } else if (userAgent.indexOf('ipad') > -1) {
          return 'ipad';
      } else if (userAgent.indexOf('windows') > -1) {
          return 'windows';
      } else {
          return 'unknown';
      }
  }

  // Získáme typ zařízení
  const device = getDeviceType();
  document.getElementById('device').innerText = `Your device: ${device}`;

  // Zavoláme backend pro získání počtu uživatelů pro toto zařízení
  fetch(`http://localhost:3000/device-count?device=${device}`)
      .then(response => response.json())
      .then(data => {
          document.getElementById('deviceCount').innerText = `Users on ${device}: ${data.count}`;
      })
      .catch(error => {
          document.getElementById('deviceCount').innerText = 'Failed to fetch data';
          console.error(error);
      });

  // Odeslání POST požadavku pro zvýšení počtu uživatelů pro toto zařízení
  fetch(`http://localhost:3000/increment-device?device=${device}`, {
      method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
      console.log(`Device count for ${device} updated to ${data.count}`);
  })
  .catch(error => {
      console.error('Error updating device count:', error);
  });
});
