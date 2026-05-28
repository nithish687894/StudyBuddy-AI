const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const PORT = 3000;

// Highly refined helper to get the ACTUAL active network IP address (prioritizing Wi-Fi, ignoring virtual adapters)
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  
  // First priority: Real physical Wi-Fi or Wireless adapters
  for (const name of Object.keys(interfaces)) {
    const isWifi = name.toLowerCase().includes('wi-fi') || name.toLowerCase().includes('wireless');
    const isVirtual = name.toLowerCase().includes('virtualbox') || 
                      name.toLowerCase().includes('vmware') || 
                      name.toLowerCase().includes('vethernet') || 
                      name.toLowerCase().includes('host-only') ||
                      name.toLowerCase().includes('wsl');
                      
    if (isWifi && !isVirtual) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
  }

  // Second priority: Non-virtual active physical Ethernet/LAN ports
  for (const name of Object.keys(interfaces)) {
    const isVirtual = name.toLowerCase().includes('virtualbox') || 
                      name.toLowerCase().includes('vmware') || 
                      name.toLowerCase().includes('vethernet') || 
                      name.toLowerCase().includes('host-only') ||
                      name.toLowerCase().includes('wsl');
                      
    if (!isVirtual) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
  }
  
  // Third priority: Any active IPv4
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  
  return '127.0.0.1';
}

const localIp = getLocalIp();

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // Handle config API
  if (req.url === '/api/config') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ localIp, port: PORT }));
    return;
  }

  // Parse file path
  let filePath = req.url === '/' 
    ? path.join(__dirname, 'index.html')
    : path.join(__dirname, req.url.split('?')[0]);

  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 File Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  const localUrl = `http://localhost:${PORT}`;
  const networkUrl = `http://${localIp}:${PORT}`;

  console.log('\x1b[36m%s\x1b[0m', '==================================================');
  console.log('\x1b[32m%s\x1b[0m', '  STUDYBUDDY AI LOCAL SERVER RUNNING SUCCESSFULLY  ');
  console.log('\x1b[36m%s\x1b[0m', '==================================================');
  console.log(`  - Local Access:      \x1b[33m${localUrl}\x1b[0m`);
  console.log(`  - Mobile/LAN Access: \x1b[33m${networkUrl}\x1b[0m`);
  console.log('\x1b[36m%s\x1b[0m', '--------------------------------------------------');
  console.log('  👉 Scan the QR code on the website to run on your phone!');
  console.log('\x1b[36m%s\x1b[0m', '==================================================');

  // Automatically open browser on desktop
  let openCmd = 'start';
  if (process.platform === 'darwin') openCmd = 'open';
  else if (process.platform === 'linux') openCmd = 'xdg-open';

  exec(`${openCmd} ${localUrl}`);
});
