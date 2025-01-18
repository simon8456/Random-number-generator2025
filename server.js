const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());  // Povolí CORS

// In-memory "databáze" pro sledování počtu uživatelů
let deviceCounts = {};

// Endpoint pro získání počtu uživatelů pro dané zařízení
app.get('/device-count', (req, res) => {
    const device = req.query.device;
    if (!device) {
        return res.status(400).send('Device type is required');
    }

    // Vratí počet uživatelů pro dané zařízení
    const count = deviceCounts[device] || 0;
    res.json({ device, count });
});

// Endpoint pro aktualizaci počtu uživatelů pro dané zařízení
app.post('/increment-device', (req, res) => {
    const device = req.query.device;
    if (!device) {
        return res.status(400).send('Device type is required');
    }

    // Zvýšíme počet pro dané zařízení
    if (!deviceCounts[device]) {
        deviceCounts[device] = 0;
    }
    deviceCounts[device]++;

    res.json({ device, count: deviceCounts[device] });
});

// Spustí server na portu 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
