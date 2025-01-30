/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize admin
admin.initializeApp();

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "freddy@trail-blaze.ai",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Type definitions
interface WaitlistEntry {
  email: string;
  name: string;
  emailsSent?: boolean;
}

// Create a new function name to avoid the callable/background trigger conflict
export const processWaitlistEntry = onDocumentCreated(
  "waitlist/{entryId}",
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }

    const data = snapshot.data() as WaitlistEntry;
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
      await snapshot.ref.set({
        emailsSent: true,
        emailSentTimestamp: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      
      return { success: true };
    } catch (error) {
      console.error("[ERROR] Full error:", error);
      throw new Error("Failed to send email");
    }
});
