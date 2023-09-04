const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../data/conexion');

class InfoEndpoint extends Model {}
/*
id
id_app
hora_peticion
hora_respuesta
estado_respuesta
data
estado
*/
InfoEndpoint.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_app: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hora_peticion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_respuesta: {
      type: DataTypes.DATE,
    },
    estado_respuesta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING(255),
    },
    estado: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Info_Endpoint',
    timestamps: false, // Desactivar los atributos createdAt y updatedAt
  }
);

console.log(InfoEndpoint === sequelize.models.InfoEndpoint); // true

// Sincronizar el modelo con la base de datos
(async () => {
  await sequelize.sync(); // Asegurarse de que la tabla se sincronice correctamente
  console.log('Tabla sincronizada');
})();

module.exports = InfoEndpoint;
