const codeElement = document.getElementById('code');
const codeLines = [
    '[    0.000000] Booting Website Server...',
    '[    0.001000] Initializing hardware...',
    '[    0.002000] CPU: Intel Xeon Processor',
    '[    0.003000] Memory: 16GB DDR4',
    '[    0.004000] Setting up server parameters...',
    '[    0.005000] Mounting root filesystem...',
    '[    0.006000] Filesystem type: ext4',
    '[    0.007000] Checking disk partitions...',
    '[    0.008000] /dev/sda1: clean, 512345/1024192 files, 2032025/4109632 blocks',
    '[    0.009000] Initializing network interfaces...',
    '[    0.010000] eth0: Link is up, 1Gbps Full Duplex',
    '[    0.011000] Starting server services...',
    '[    0.012000] Loading kernel modules...',
    '[    0.013000] ALSA: Initializing sound subsystem',
    '[    0.014000] USB: Core initialized',
    '[    0.015000] USB: Hub detected',
    '[    0.016000] USB: 8 ports detected',
    '[    0.017000] Enabling GPIO pins...',
    '[    0.018000] SPI: Enabled',
    '[    0.019000] I2C: Bus initialized',
    '[    0.020000] Starting SSH server...',
    '[    0.021000] SSH: Listening on port 22',
    '[    0.022000] Configuring wireless interfaces...',
    '[    0.023000] wlan0: Connected to network',
    '[    0.024000] DHCP: IP address assigned: 192.168.1.42',
    '[    0.025000] Running startup scripts...',
    '[    0.026000] Python: Interpreter loaded',
    '[    0.027000] Node.js: Server starting',
    '[    0.028000] Apache: Web server running',
    '[    0.029000] Database: MySQL service active',
    '[    0.030000] Starting graphical interface...',
    '[    0.031000] X11: Display server started',
    '[    0.032000] LXDE: Desktop environment loading',
    '[    0.033000] Server boot complete.',
    '[    0.034000] Welcome to Website Server!',
    '[    0.035000] Initializing peripheral devices...',
    '[    0.036000] Bluetooth: Starting service',
    '[    0.037000] HDMI: Display connected',
    '[    0.038000] Camera: Interface activated',
    '[    0.039000] RTC: Synchronizing time',
    '[    0.040000] Backup power supply: Charged',
    '[    0.041000] Security: Firewall rules applied',
    '[    0.042000] System diagnostics running...',
    '[    0.043000] CPU temperature: 45°C',
    '[    0.044000] Memory usage: 2GB/16GB',
    '[    0.045000] Disk space: 200GB available',
    '[    0.046000] Network speed: 1Gbps',
    '[    0.047000] USB devices: 4 connected',
    '[    0.048000] Process monitor: Active',
    '[    0.049000] Application loader ready',
    '[    0.050000] Updating package lists...',
    '[    0.051000] System time: 2024-07-28 10:00:00',
    '[    0.052000] Kernel version: 5.10.17-v7+',
    '[    0.053000] Admin logged in: webmaster',
    '[    0.054000] Bash shell ready',
    '[    0.055000] Initializing security protocols...',
    '[    0.056000] VPN: Connecting to server',
    '[    0.057000] Secure connection established',
    '[    0.058000] Running system updates...',
    '[    0.059000] Update complete: System is up to date',
    '[    0.060000] Background services running...',
    '[    0.061000] CPU load: Normal',
    '[    0.062000] Checking system health...',
    '[    0.063000] No errors detected',
    '[    0.064000] Preparing user environment...',
    '[    0.065000] Loading custom configurations...',
    '[    0.066000] Enabling developer mode...',
    '[    0.067000] Compiler: GCC available',
    '[    0.068000] Debugging tools installed',
    '[    0.069000] Server ready for use.'
];

let index = 0;

function typeCode() {
    if (index < codeLines.length) {
        codeElement.textContent += codeLines[index] + '\n';
        codeElement.scrollTop = codeElement.scrollHeight; // Auto-scroll
        index++;
        setTimeout(typeCode, 20);
    }
}

window.onload = typeCode;
