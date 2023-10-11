export function MiApi({ url, setData, setLoading, setError }) {
  setLoading(true);
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
}
