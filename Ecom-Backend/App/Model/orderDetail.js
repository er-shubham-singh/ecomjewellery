const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phoneNumber: String,
  pinCode: String,
  city: String,
  state: String,
  address: String,
  locality: String,
  createdAt: { type: Date, default: Date.now },
});

const CartItemSchema = new mongoose.Schema({
  title: String,
  price: String,
  titleimg: String,
  hoverimg: String,
});

const OrderSchema = new mongoose.Schema({
  userId: String,
  address: AddressSchema,
  cartItems: [CartItemSchema],
  totalPrice: String,
  imageFile: String, // To store uploaded image path
});

const orderDetailsModel = mongoose.model("orderDetailsModel", OrderSchema);

module.exports = orderDetailsModel;
