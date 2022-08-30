const API_KEY = "89a6bbe16108ca6cfadff790e3f60f29"


export const requests = [
    {
        id: 0,
        rating: "NETFLIX ORIGINALS",
        url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLargeRow: true
    },
    {
      id: 1,  
      rating: "Trending Now",
      url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      isLargeRow: false
    },
    {
      id: 2,
      rating: "Top Rated",
      url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      isLargeRow: false
    },
    {
      id: 3,
      rating: "Action Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      isLargeRow: false
    },
    {
      id: 4,
      rating: "Comedy Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      isLargeRow: false
    },
    {
      id: 5,
      rating: "Horror Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      isLargeRow: false
    },
    {
      id: 6,
      rating: "Romance Movies",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      isLargeRow: false
    },
    {
      id: 7,
      rating: "Documentaries",
      url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
      isLargeRow: false
    }
  ]


  // export const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// }