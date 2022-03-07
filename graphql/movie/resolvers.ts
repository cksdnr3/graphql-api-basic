import axios from "axios";

const MOVIE_SERVER_API = "https://yts.mx/api/v2/list_movies.json/";

const resolvers = {
  Query: {
    movies: async (
      _: any,
      { limit, rating }: { limit: number; rating: number }
    ) => {
      const result = await axios.get(MOVIE_SERVER_API, {
        params: { limit: limit, minimum_rating: rating },
      });
      return result.data.data.movies;
    },
  },
};

export default resolvers;
