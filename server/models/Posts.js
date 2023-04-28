module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {             //create a table with name Posts
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Posts.associate = (models) =>{        //to determine the association with the comments
        Posts.hasMany(models.Comments),{
            onDelete: "cascade",   //if you delete the posts, it'll also delete every single of the comments
        }

        Posts.hasMany(models.Likes),{
            onDelete: "cascade",
        }
    }
    return Posts;
}
