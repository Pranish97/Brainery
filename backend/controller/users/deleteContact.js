const contactModel = require("../../models/contactModel");

async function deleteContact(req, res) {
  try {
    const contactId = req?.body;

    const deleteContact = await contactModel.deleteOne({
      _id: contactId,
    });

    res.status(200).json({
      message: "Contact Info Deleted Successfully!",
      data: deleteContact,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

module.exports = deleteContact;
