const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  address: {
    type: Sequelize.STRING,
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    validate: {
      isUrl: true,
    },
  },

});

module.exports = Campus;