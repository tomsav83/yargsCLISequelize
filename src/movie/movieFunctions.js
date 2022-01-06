const Movie = require('./movieTable');

// Create a new movie

exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync(); // checks to see if table exists in db called movie - if it doesn't exist it will create table
    await Movie.create(movieObj);
    console.log(`Successfuly added ${movieObj.title}`);
  } catch (error) {
    console.log(error);
  }
};

// FETCH all movies
exports.listMovies = async () => {
  try {
    const movies = await Movie.findAll();
    console.log(movies.every((movie) => movie instanceof Movie));
    console.log('All movies:', JSON.stringify(movies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

// Update a movie
exports.updateMovie = (updateObj) => {
  try {
    await Movie.sync();
    await Movie.update(
      { [updateObj.updateKey]: updateObj.updateValue },
      { where: { [updateObj.targetKey]: updateObj.targetValue } }
    );
    console.log('You have successfully updated database');
  } catch (error) {
    console.log(error);
  }
};

// Delete a Movie based on title
exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.destroy({
      where: { title: movieObj.title },
    });
    console.log('You have successfully updated database');
  } catch (error) {
    console.log(error);
  }
};
