const output = document.getElementById('responseOutput');
const loadAdviceButton = document.getElementById('load-advice');
const loadJokeButton = document.getElementById('load-joke');

const render = (data) => {
  output.textContent = JSON.stringify(data, null, 2);
};

const request = async (path, button) => {
  button.disabled = true;
  output.textContent = 'Loading...';

  try {
    const response = await fetch(path);
    const data = await response.json();
    render(data);
  } catch (error) {
    render({ error: error.message });
  } finally {
    setTimeout(() => {
      button.disabled = false;
    }, 800);
  }
};

loadAdviceButton.addEventListener('click', () => request('/api/advice/api', loadAdviceButton));
loadJokeButton.addEventListener('click', () => request('/api/jokes/api', loadJokeButton));
