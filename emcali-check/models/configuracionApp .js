const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ConfiguracionApp extends Model { }

ConfiguracionApp.init({
    endpoint: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(255)
    },
    contrasenna: {
        type: DataTypes.STRING(255)
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    tiempo_espera: {
        type: DataTypes.DATE
    },
    recurrencia_positiva: {
        type: DataTypes.INTEGER
    },
    respuesta_endpoint: {
        type: DataTypes.STRING(255)
    },
    recurrencia_negativa: {
        type: DataTypes.INTEGER
    },
    codigo_respuesta_esperada: {
        type: DataTypes.STRING(255)
    },
    codigo_respuesta_negativa: {
        type: DataTypes.STRING(255)
    },
    correos_supervisores: {
        type: DataTypes.STRING(255)
    }
}, {
    sequelize,
    modelName: 'ConfiguracionApp'
});

console.log(ConfiguracionApp === sequelize.models.ConfiguracionApp); // true

// Sincronizar el modelo con la base de datos
(async () => {
    await sequelize.sync({ force: true }); // Asegurarse de que la tabla se sincronice correctamente
    console.log('Tabla sincronizada');
})();


module.exports = ConfiguracionApp;