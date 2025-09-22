import { Sequelize } from "sequelize"

const sequelizeBiblio = new Sequelize('biblioteca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelizeBiblio 