const mongoose = require('mongoose');

const saveAddressSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  // totalPrice: {
  //   type: String,
  //   required: true,
  // }
},
  { timestamps: true }
);

module.exports = mongoose.model('SavedAddress', saveAddressSchema);