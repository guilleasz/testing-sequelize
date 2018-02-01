const S = require('sequelize');

const db = new S('postgres://localhost:5432/testing-sequelize');


module.exports = db.define('student', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  camada: {
    type: S.STRING,
  },
  curso: {
    type: S.ENUM(
      'Intro',
      'Bootcamp',
      'React'),
  },

});
