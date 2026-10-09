// Simulating Live Updating Interface Data
document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = id => document.getElementById(id);
    const logBox = terminalBody('logTerminal');

    // System log simulation adding new entry lines every 4 seconds
    setInterval(() => {
        if(logBox) {
            const ports = [21, 22, 23, 25, 53, 80, 443, 3389];
            const randomPort = ports[Math.floor(Math.random() * ports.length)];
            
            const newLog = document.createElement('p');
            newLog.className = 'log-item';
            newLog.textContent = `Intrusion prevented on Port ${randomPort}.`;
            
            logBox.appendChild(newLog);
            // Automatically scroll to the bottom of terminal logs
            logBox.scrollTop = logBox.scrollHeight;
        }
    }, 4000);
});
