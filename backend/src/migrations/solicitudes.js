/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('solicitudes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_usuario:{
          type: Sequelize.INTEGER,
        },
        id_registro:{
          type:Sequelize.INTEGER,
        },
        fecha_solicitud:{
          type:Sequelize.DATE,
        },
        status_solicitud:{
          type:Sequelize.INTEGER,
        },
        fecha_aprobacion:{
          type:Sequelize.DATE,
        },
        rfc_us_aprobacion:{
          type:Sequelize.STRING,
        },
        fecha_inicio_visual:{
          type:Sequelize.DATE,
        },
        fecha_fin_visual:{
          type:Sequelize.DATE,
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
    await queryInterface.dropTable('solicitudes');
  }
};