
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subseries', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        idSerie:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'series',
            key: 'id',
          }
        },
        subserie:{
            type: Sequelize.STRING,
        },
        status:{
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subseries');
  }
};