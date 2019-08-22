module.exports = (sequelize,DataTypes) => (
  sequelize.define('hashtag',{
    title: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: true,
    },
  }, {
    timestamp: true,
    paranoid: true,
  })
);
