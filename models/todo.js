module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    task: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    category: DataTypes.STRING,
    note: DataTypes.TEXT,
    urgency: DataTypes.INTEGER,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};