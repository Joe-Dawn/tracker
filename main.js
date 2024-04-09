import { keepAlive } from './keepalive.js';
const newSessionId = '4073522d-ff9a-44b8-bef1-6447cbef5e08';

document.cookie = `session=${newSessionId}; domain=www.kogama.com; path=/;`;

fetch('https://www.kogama.com/', {
  method: 'GET',
  headers: {
    'Cookie': `session=${newSessionId}`
  }
});

keepAlive();

function sendPing(url) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Cookie': `session=${newSessionId}`
    }
  });
}

setInterval(() => {
  sendPing('https://www.kogama.com/user/143157/pulse/');
}, 1000);
