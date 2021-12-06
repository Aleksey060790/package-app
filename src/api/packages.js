const BASE_URL = 'https://data.jsdelivr.com/v1/stats';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const result = await response.json();

  return result;
}

export default async function getAdditional(packageName) {
  const responseSecond = await fetch(`https://data.jsdelivr.com/v1/package/npm/${packageName}/stats`);
  const resultSecond = await responseSecond.json();

  return resultSecond;
}

export function getPackages() {
  return get('/packages');
}
