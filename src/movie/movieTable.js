const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

// model in mongoose is table in sequelize

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // required or not
    primaryKey: true,
    autoIncrement: true,
  },
  actor: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Movie;
