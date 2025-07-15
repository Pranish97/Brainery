const contactModel = require("../../models/contactModel");

async function getContact(req, res) {
  try {
    const contact = await contactModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "All Contact Details",
      data: contact,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = getContact;
