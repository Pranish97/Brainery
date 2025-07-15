const contactModel = require("../../models/contactModel");

async function addContact(req, res) {
  try {
    const { name, email, message } = req?.body;

    if (!name) {
      throw new Error("Please Provide Name");
    }
    if (!email) {
      throw new Error("Please Provide Email");
    }

    if (!message) {
      throw new Error("Please Provide Message");
    }

    const payload = { name, email, message };

    const addToContact = new contactModel(payload);

    const contact = await addToContact.save();

    res.status(200).json({
      message: "Contact Details Sent Successfully!",
      data: contact,
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

module.exports = addContact;
