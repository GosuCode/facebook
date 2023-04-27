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

    // Users.associate = (models) =>{        //to determine the association with the Posts
    //     Users.hasMany(models.Posts),{
    //         onDelete: "cascade",   //if you delete the posts, it'll also delete every single of the Posts
    //     }
    // }
    return Users;
}
