const output = document.getElementById('responseOutput');
const loadAdviceButton = document.getElementById('load-advice');
const loadJokeButton = document.getElementById('load-joke');

const render = (data) => {
  output.textContent = JSON.stringify(data, null, 2);
};

const request = async (path) => {
  output.textContent = 'Loading...';
  const response = await fetch(path);
  const data = await response.json();
  render(data);
};

loadAdviceButton.addEventListener('click', () => request('/api/advice/api'));
loadJokeButton.addEventListener('click', () => request('/api/jokes/api'));
