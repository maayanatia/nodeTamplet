const JOKE_API_URL = 'https://icanhazdadjoke.com/';

export const fetchRandomJoke = async () => {
  const response = await fetch(JOKE_API_URL, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch joke');
  }

  const data = await response.json();
  return data?.joke ?? 'No joke available';
};
