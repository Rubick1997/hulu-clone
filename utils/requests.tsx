const API_KEY = process.env.REACT_APP_API_KEY;

type RequestType = {
  [key: string]: { fetchUrl: string; title: string; media_type: string };
};

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDisneyPlusOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=2739`,
  fetchHuluCurrentStreams: `/discover/tv?api_key=${API_KEY}&with_networks=453`,
};

export const rowsData: RequestType = {
  fetchTrending: {
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
    media_type: "",
  },
  fetchTopRated: {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
    media_type: "movie",
  },
  fetchActionMovies: {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
    media_type: "movie",
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
    media_type: "movie",
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
    media_type: "movie",
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
    media_type: "movie",
  },
  fetchDocumentaries: {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
    media_type: "movie",
  },
  fetchHuluCurrentStreams: {
    title: "Hulu Current Streams",
    fetchUrl: requests.fetchHuluCurrentStreams,
    media_type: "tv",
  },
  fetchNetflixOriginals: {
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    media_type: "tv",
  },
  fetchDisneyPlusOriginals: {
    title: "DISNEY PlUS ORIGINALS",
    fetchUrl: requests.fetchDisneyPlusOriginals,
    media_type: "tv",
  },
};

export default requests;
