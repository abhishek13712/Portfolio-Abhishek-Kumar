const Contact = require('../model/Contact');
const mailSender = require("../utils/mailSender");

exports.postcontact = async (req, res) => {
  try {
    const { Name, Email, Subject, Message } = req.body;

    // const newContact = new Contact({
    //   Name,
    //   Email,
    //   Subject,
    //   Message,
    // });

    // await newContact.save();
    console.log(Email)

    
    const mailsent = await mailSender(
         Name,
        Email, 
      `${Subject}`,
      `${Message}`
    );
    // console.log(mailsent)
    if (!mailsent) {
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    }

    return res.json({
      success: true,
      message: "Contact added and email sent successfully",
    });

  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
