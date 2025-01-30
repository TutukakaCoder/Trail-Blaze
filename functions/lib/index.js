"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = exports.processWaitlistEntry = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const nodemailer = __importStar(require("nodemailer"));
const dotenv = __importStar(require("dotenv"));
// Initialize dotenv
dotenv.config();
// Initialize Firebase Admin
admin.initializeApp();
// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "freddy@trail-blaze.ai",
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
// Create a new function name to avoid the callable/background trigger conflict
exports.processWaitlistEntry = functions.https.onRequest(async (request, response) => {
    const snapshot = request.body;
    if (!snapshot) {
        console.log("No data associated with the event");
        response.status(500).send("No data associated with the event");
        return;
    }
    const data = snapshot;
    console.log("Processing waitlist entry for:", data.email);
    try {
        // Send welcome email
        const welcomeEmail = {
            from: "Trail Blazers <freddy@trail-blaze.ai>",
            to: data.email,
            subject: "Welcome to Trail Blazers Waitlist",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>Welcome to Trail Blazers!</h2>
          <p>Hi ${data.name},</p>
          <p>Thank you for joining our waitlist. We're excited to have you as part of our community.</p>
          <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>
          <p>Best regards,<br>The Trail Blazers Team</p>
        </div>
      `
        };
        console.log("Sending email to:", data.email);
        await transporter.sendMail(welcomeEmail);
        console.log(`[SUCCESS] Welcome email sent to ${data.email}`);
        // Update document
        await admin.firestore().collection('waitlist').doc(data.email).set({
            emailsSent: true,
            emailSentTimestamp: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        response.status(200).send({ success: true });
        return;
    }
    catch (error) {
        console.error("[ERROR] Full error:", error);
        response.status(500).send("Failed to send email");
        return;
    }
});
// Your functions here...
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map