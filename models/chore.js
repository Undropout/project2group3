module.exports = function(sequelize, DataTypes) {
    var Chore = sequelize.define("Chore", {
      googleid: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      anewthing: DataTypes.STRING
    });
    return Chore;
  };
  