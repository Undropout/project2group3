module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define("Chore", {
    googleid: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    anewthing: DataTypes.STRING,
    addressedas: DataTypes.STRING,
    accounttype: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING
  });
  return Chore;
};
