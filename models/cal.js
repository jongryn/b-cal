module.exports = function(sequelize, DataTypes) {
    var Cal = sequelize.define("Cal", {
      event: DataTypes.STRING,
      category: DataTypes.STRING,
      startTime: DataTypes.DATEONLY,
      endTime: DataTypes.DATEONLY,
      note: DataTypes.STRING
    });
    return Cal;
  };

