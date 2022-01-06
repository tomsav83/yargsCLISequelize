require('./db/connection');
const yargs = require('yargs');
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require('./movie/movieFunctions'); // addMovie etc needs to be in {}'s

// args function will determine logic for application (if/else or switch statements)

const app = async (args) => {
  try {
    // if/else statement to check if add condition is met
    if (args.add) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        genre: args.genre,
        rating: args.rating,
        // run add movie functionality, passing a movieObj
      };
      await addMovie(movieObj); // to await addMovie before disconnecting from db
    } else if (args.listMovies) {
      await listMovies();
      // listMovies function, not passing any information
    } else if (args.update) {
      const updateObj = {
        targetKey: args.targetKey,
        targetValue: args.targetValue,
        updateKey: args.updateKey,
        updateValue: args.updateValue,
      };
      await updateMovie(updateObj);
      // run update function targeting and updating keys and values
    } else if (args.deleteMovie) {
      const movieObj = {
        title: args.title,
      };
      await deleteMovie(movieObj);
    } else {
      console.log('You have typed incorrect command.');
    }
  } catch (error) {
    console.log(error);
  }
};
app(yargs.argv);
