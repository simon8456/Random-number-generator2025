document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const countDisplay = document.createElement('p');
    document.body.appendChild(countDisplay);

    // Fetch the current click count from the server
    fetch('/click-count')
        .then(response => response.json())
        .then(data => {
            countDisplay.textContent = `Button clicked ${data.count} times`;
        });

    button.addEventListener('click', () => {
        fetch('/increment-click', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                countDisplay.textContent = `Button clicked ${data.count} times`;
            });
    });
});
