const nodemailer = require("nodemailer");

const sendMail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0caa3735401c46",
        pass: "001aaf868089c9",
      },
    });

    const info = await transporter.sendMail({
      from: '"Brainery" <brainery@.com>',
      to,
      subject,
      html,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Email send error:", error);
  }
};

module.exports = sendMail;
