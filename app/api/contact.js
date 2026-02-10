// 1. Uncomment and import nodemailer
// const nodemailer = require("nodemailer");

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const recipientEmail = "mojaealestate1@gmail.com";
//   const { firstName, email, phone, message } = req.body;

//   if (!firstName || !email || !message) {
//     return res
//       .status(400)
//       .json({ message: "Missing required fields: Name, Email, and Message." });
//   }

//   try {
//     // 2. Uncomment the nodemailer implementation
//     let transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         // 3. Use environment variables
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"${firstName}" <${email}>`, // Show sender's name and email
//       to: recipientEmail,
//       subject: `New Contact Form Submission from ${firstName}`,
//       html: `
//             <h3>New Inquiry</h3>
//             <p><strong>Name:</strong> ${firstName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone:</strong> ${phone || "N/A"}</p> 
//             <hr>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//         `,
//     };

//     // 4. Await the sendMail function
//     await transporter.sendMail(mailOptions);

//     console.log(`Email sent successfully to ${recipientEmail} from ${email}`);
//     return res
//       .status(200)
//       .json({ message: "Your message has been sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return res.status(500).json({
//       message:
//         "Sorry, there was an error sending your message. Please try again later.",
//     });
//   }
// }
