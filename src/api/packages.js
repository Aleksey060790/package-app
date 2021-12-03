const BASE_URL = 'https://data.jsdelivr.com/v1/stats';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const result = await response.json();

  return result;
}

export default function getPackages() {
  return get('/packages');
}
