import { INTEGER, Model, NUMBER, STRING } from 'sequelize';
import db from '.';
import UserModel from './user.model';


class CarModel extends Model {
  id!:number;
  carModel!: string;
  brand!: string;
  year!: number;
  description!: string;
}

CarModel.init({
  id: {
    primaryKey: true,
    type: NUMBER,
    autoIncrement: true,
  },
  carModel: {
    type: STRING,
    allowNull: false,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  ownerId: {
    type: NUMBER,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'CarModel',
  tableName: 'cars',
  timestamps: false,
});

CarModel.belongsTo(UserModel, {foreignKey: 'ownerId', })

export default CarModel;
