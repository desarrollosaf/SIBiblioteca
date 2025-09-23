/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registros', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        id_seccion:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_serie:{
            type: Sequelize.INTEGER,
            allowNull: false,

        },
        id_subserie:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        clave:{
            type: Sequelize.STRING,
        },
        ubicacion:{
            type: Sequelize.STRING,
        },
        anio:{
            type: Sequelize.INTEGER,
        },
        tomo:{
            type: Sequelize.INTEGER,
        },
        num_exp:{
            type: Sequelize.INTEGER,
        },
        fecha_inicial:{
            type: Sequelize.DATE,
        },
        fecha_final:{
            type: Sequelize.DATE,
        },
        institucion:{
            type: Sequelize.STRING,
        },
        nombre_exp:{
            type: Sequelize.STRING,
        },
        fojas:{
            type: Sequelize.INTEGER,
        },
        observaciones:{
            type: Sequelize.STRING,
        },
        estado_doc:{
            type: Sequelize.STRING,
        },
        caracteristicas_externas_doc:{
            type: Sequelize.STRING,
        },
        path_portada:{
            type: Sequelize.STRING,
        },
        path_doc:{
            type: Sequelize.STRING,
        },
        tipo_acceso:{
            type: Sequelize.INTEGER,
            allowNull: false,
    
        },
        status:{
            type:Sequelize.BOOLEAN,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
},
async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registros');
}
};