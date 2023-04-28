module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {             //create a table with name Posts
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Users.associate = (models) =>{
        Users.hasMany(models.Likes),{
            onDelete: "cascade",
        }
    }
    return Users;
}
