declare module 'nodemailer' {
  export interface SendMailOptions {
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
    html?: string;
  }

  export interface Transporter {
    sendMail(mailOptions: SendMailOptions): Promise<any>;
  }

  export function createTransport(options: any): Transporter;
} 