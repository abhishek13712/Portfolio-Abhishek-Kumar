const nodemailer = require("nodemailer");
require('dotenv').config();
const mailSender = async (Name, Email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
            console.log("MAIL_HOST:", process.env.MAIL_HOST);
            console.log("MAIL_USER:", process.env.MAIL_USER);
            // console.log("MAIL_PASS:", process.env.MAIL_PASS);
            // const mail=Email
            // console.log(Name)
            // console.log(Email)
            // console.log(title)
            // console.log(body)

            // console.log("Recipient Email:", Email);
            // console.log("Sending email to:", `${process.env.MAIL_USER},${Email}`);

            let info = await transporter.sendMail({
                from: process.env.MAIL_USER,
                to:`${process.env.MAIL_USER},${Email}`,
                subject: `${title}`,
                html: `<div><div>${Name}</div><div>${Email}</div><div>${body}</div></div>`,
            })
            // console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;