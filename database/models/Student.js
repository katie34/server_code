const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  }
  
  email: {
    type: Sequelize.STRING,
  //   allowNull: false
  },

  imageurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media.istockphoto.com/photos/facing-my-future-with-confidence-picture-id1139495117?k=6&m=1139495117&s=612x612&w=0&h=a2hxTvHq7XNN0zMh8m1CuyDPIaNYiswD7iZbh5rpac4=",
    validate: {
      isUrl: true,
    },
  },
  
gpa: {
    type: Sequelize.STRING,
    defaultValue: "N/A",
    isDecimal: true,
    validate: {min: 0.0, max: 4.0 },
  },

});

module.exports = Student;