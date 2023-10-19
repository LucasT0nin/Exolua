const { Model, DataTypes } = require("sequelize");
class ImagePt extends Model {}

const { Sequelize } = require("sequelize");
const seque = require("../config/database");
const sequelize = new Sequelize(seque);

ImagePt.init(
  {
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ImagePt",
    timestamps: false,
    tableName: "imagept-1",
  }
);

module.exports = ImagePt;
