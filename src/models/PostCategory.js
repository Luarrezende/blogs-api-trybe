module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  )
  PostCategory.associate= (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blog_posts',
    })
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    })
  }
  return PostCategory;
};