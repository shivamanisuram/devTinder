const Razorpay = require("razorpay");

let instance = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} else {
  console.warn(
    "Warning: RAZORPAY_KEY_ID and/or RAZORPAY_KEY_SECRET are not set. " +
      "Razorpay integration will be unavailable until these environment variables are configured."
  );
}

module.exports = instance;
