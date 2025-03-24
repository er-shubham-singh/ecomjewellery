const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_live_EBuzVcjPIzSRzu",
  key_secret: "7NKipWcpBnbU6lEZWBd3KDk4",
});

exports.checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.totalPrice * 100), // Amount in paisa (₹500)
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    console.log(order);

    res.status(200).json({
      success: true,
      order, // Send order details back
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.paymentverification = async (req, res) => {
  try {

    console.log(req.body);

    res.status(200).json({
      success: true,
      order, // Send order details back
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};