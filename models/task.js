
module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        reward: DataTypes.INTEGER,
        task: DataTypes.STRING,
        task_status: DataTypes.STRING

    });
    return Task;
};
