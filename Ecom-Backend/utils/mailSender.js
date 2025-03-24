const nodemailer = require('nodemailer');
require('dotenv').config();
MAIL_HOST = "smtp.gmail.com"
MAIL_USER = "codestudy66@gmail.com"
MAIN_PASS = "wkrkteanmorxxttl"

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      auth: {
        user: MAIL_USER,
        pass: MAIN_PASS
      }
    })

    let info = await transporter.sendMail({
      from: 'Jewellery || by- Jewellery',
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`
    })

    console.log('INFO', info);
    return info;
  } catch (err) {

  }
}

module.exports = mailSender;