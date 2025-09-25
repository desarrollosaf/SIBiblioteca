
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_accesos', [
      { id: 1, tipo: 'Público', createdAt: new Date(),updatedAt: new Date()},
      { id: 2, tipo: 'Privado', createdAt: new Date(),updatedAt: new Date()}
    ], {});
  }
};
