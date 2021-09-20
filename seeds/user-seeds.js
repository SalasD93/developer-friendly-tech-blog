const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    name: 'Jane Smith',
    email: 'alesmonde0@gmail.com',
    password: 'password123'
  },
  {
    name: 'John Smith',
    email: 'jwilloughway1@gmail.com',
    password: 'password123'
  },
  {
    name: 'James Ray',
    email: 'iboddam2@gmail.com',
    password: 'password123'
  },
  {
    name: 'Joan Ray',
    email: 'dstanmer3@gmail.com',
    password: 'password123'
  },
  {
    name: 'Ryan Thomas',
    email: 'djiri4@gmail.com',
    password: 'password123'
  },
  {
    name: 'Renae Thomas',
    email: 'msprague5@gmail.com',
    password: 'password123'
  },
  {
    name: 'Harry Potter',
    email: 'mpergens6@gmail.com',
    password: 'password123'
  },
  {
    name: 'Ronald Weasley',
    email: 'tpenniell7@gmail.com',
    password: 'password123'
  },
  {
    name: 'Hermione Granger',
    email: 'msabbins8@gmail.com',
    password: 'password123'
  },
  {
    name: 'Albus Dumbledore',
    email: 'jmacarthur9@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
