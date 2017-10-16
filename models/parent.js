module.exports = function(sequelize, DataTypes) {

  var Parent = sequelize.define("Parent", {

    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [10]
      }
    }, // end of phone

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [3, 150]
    }, // end of email

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of name

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of address

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, // end of city

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    }, // end of state

    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10]
      }
    }, // end of zipcode

  }, // end of columns

  {
    timestamps: false
  }); // end of Shoe table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Parent;
};

// var order = {
//   date: '',
//   shoesInOrder: [
//     quantity: 5,
//     item: {
//       price: 5,

//     }
//   ]
// }
