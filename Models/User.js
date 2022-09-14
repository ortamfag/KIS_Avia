import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
    ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        unique: true,
    },

    RoleID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },

    Email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            notNull: {msg: "Email - это обязательное поле"}
        }
    },

    Password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {msg: "Пароль - это обязательное поле"}
        }
    },

    FirstName: {
        type: DataTypes.STRING(50),
    },

    LastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    OfficeID: {
        type: DataTypes.INTEGER(11),
        unique: true,
    },

    Birthdate: {
        type: DataTypes.DATE,
    },

    Active: {
        type: DataTypes.TINYINT(1),
    },
  });