import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import CarModel from './car.model';


class UserModel extends Model {
  id!:number;
  fullName!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  role!: string;
}

UserModel.init({
  id: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
  },
  fullName: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: STRING,
    allowNull:false
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'UserModel',
  tableName: 'users',
  timestamps: false,
});

UserModel.hasMany(CarModel, { foreignKey: 'id', as: 'ownerId'})


export default UserModel;
