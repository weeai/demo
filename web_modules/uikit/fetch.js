import 'whatwg-fetch';

export default async function Fetch(url, params, config) {
  const response = await fetch(url, params);
  const jsonResponse = await response.toJSON();
}
