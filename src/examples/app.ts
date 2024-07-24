import { API_DETAILS, API_LIST, MAPPER } from './config';

window.onload = async function App() {
  const response = await fetch(API_LIST);
  const keys = await response.json();
  for (const key of keys) {
    const button = document.createElement('button');
    button.textContent = key.split('/')[2] + ' > ' + key.split('/')[4];
    document.getElementById('menu').append(button);
    button.addEventListener('click', async () => {
      const iframe = document.createElement('iframe');
      const response = await fetch(API_DETAILS + key);
      let text = await response.text();
      MAPPER.forEach(([a, b]) => {
        text = text.replace(new RegExp(a, 'g'), b);
      });
      iframe.srcdoc = text;
      document.getElementById('content').innerHTML = '';
      document.getElementById('content').appendChild(iframe);
    });
  }
};
