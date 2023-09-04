const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('emcali', 'root', null, {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    port: 3306
});


const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion Existoa.');
    } catch (error) {
        console.error('Error Connect DB:', error);
    }
}

module.exports = {
    sequelize,
    connectDb
}