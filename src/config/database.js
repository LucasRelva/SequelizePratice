module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'sequelizepratice',
    define: {
        timestamps: true, // created_at e updated_at
        underscored: true,
    },
}