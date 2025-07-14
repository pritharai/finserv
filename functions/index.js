// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");

// // For cost control, you can set the maximum number of containers that can be
// // running at the same time. This helps mitigate the impact of unexpected
// // traffic spikes by instead downgrading performance. This limit is a
// // per-function limit. You can override the limit for each function using the
// // `maxInstances` option in the function's options, e.g.
// // `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// // NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// // functions should each use functions.runWith({ maxInstances: 10 }) instead.
// // In the v1 API, each function can only serve one request per container, so
// // this will be the maximum concurrent request count.
// setGlobalOptions({ maxInstances: 10 });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });



const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");


admin.initializeApp();

const email = functions.config().gmail.email;
const password = functions.config().gmail.password;


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password 
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{contactId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "VSP Finserv Contact",
      to: ["vspfinserv@gmail.com", "pritharai873@gmail.com"],
      subject: `📬 New Message from ${data.name}`,
      html: `
        <h3>You received a new message from the website contact form:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
        <hr />
        <p style="font-size: 12px; color: gray;">This message was sent via vspfinserv.com</p>
      `,
    };

    return transporter.sendMail(mailOptions);
  });
