import { Sequelize } from "sequelize"

const sequelizeBiblio = new Sequelize('adminplem_sibiblioteca', 'usr_sibiblioteca', 'NkDSkgvIVrLxhPzvf5Hq', {
    host: '192.168.36.53',
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelizeBiblio 