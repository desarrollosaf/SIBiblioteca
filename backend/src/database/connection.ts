import { Sequelize } from "sequelize"

const sequelize = new Sequelize('adminplem_saf', 'usr_sibiblioteca', 'NkDSkgvIVrLxhPzvf5Hq', {
    host: '192.168.36.53',
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelize 
 