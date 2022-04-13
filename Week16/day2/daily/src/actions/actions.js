export const MovieDetail = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};
