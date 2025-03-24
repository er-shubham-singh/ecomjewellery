const mongoose = require('mongoose');
const mailSender = require('../../utils/mailSender');
const emailTemplate = require('../../mail/templates/emailVerificationTemplate')

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  otp: {
    type: String,
    require: true
  },
  creatdAt: {
    type: Date,
    default: Date.now,
    expires: 5 * 60
  }
});

// a functon -> to send emails
async function sendVerificationEmail(email, otp) {
  console.log("otp model", email, otp);
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email From Jewellery",
      emailTemplate(otp));
    console.log("Email Send Successfully", mailResponse.response);

  } catch (err) {
    console.log("Error Occured While Sending Mails", err);
    throw err;
  }

}

OTPSchema.pre('save', async function (next) {
  console.log("New document saved to database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
})

// module.exports = mongoose.model('OTP', OTPSchema);
const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;