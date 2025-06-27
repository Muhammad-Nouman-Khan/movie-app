export function useTmdb() {
  const config = useRuntimeConfig();
  const apiKey = config.public.tmdbApiKey;

  const fetchFromTmdb = async (endpoint: string, params = {}) => {
    const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
    url.searchParams.set("api_key", apiKey);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`TMDB API error: ${res.statusText}`);
    return res.json();
  };

  return { fetchFromTmdb };
}
