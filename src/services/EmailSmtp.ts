import nodemailer from "nodemailer";
import { ADMIN_EMAILS } from "../contacts";

interface AbstractEmailOptions {
  recipients?: string[];
  subject?: string;
  abstractData: {
    prefix: string;
    fname: string;
    lname: string;
    titleAbstarct: string;
    email: string;
    organization: string;
    submissionDate: string;
    categoryId: string;
    packagesId: string;
    abstractTypeId: string;
    fileName: string;
  };
}

interface EmailResponse {
  status: "success" | "error";
  environment?: string;
  message: string;
  recipients: string[];
  messageId?: string;
  timestamp: string;
  error?: string;
}

export const EmailService = {
  async sendEmail(options: AbstractEmailOptions): Promise<EmailResponse> {
    try {
      const recipients = options.recipients?.length
        ? options.recipients
        : ADMIN_EMAILS;

      if (!recipients || recipients.length === 0) {
        throw new Error("ไม่มีอีเมลผู้รับที่ระบุ");
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GOOGLE_EMAIL,
          pass: process.env.GOOGLE_APP_PASSWORD,
        },
        pool: true,
        maxConnections: 5,
        rateLimit: 10,
      });

      const { abstractData } = options;

      const mailOptions = {
        from: `CMUVC System <${process.env.GOOGLE_EMAIL}>`,
        to: recipients.join(", "),
        subject: options.subject || "New Abstract Submission Received",
        text: `
          Dear Admin Team,
          A new abstract submission has been received:
          Submitted by: ${abstractData.prefix} ${abstractData.fname} ${abstractData.lname}
          Title: ${abstractData.titleAbstarct}
          Email: ${abstractData.email}
          Organization: ${abstractData.organization}
          Submission Date: ${abstractData.submissionDate}
          Category ID: ${abstractData.categoryId}
          Package ID: ${abstractData.packagesId}
          Abstract Type ID: ${abstractData.abstractTypeId}
          File: ${abstractData.fileName}
          Please review the submission in the admin panel.
          CMUVC System Team
        `,
        html: `
          <html>
            <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h1 style="color: #2c3e50; margin: 0 0 20px; font-size: 24px; text-align: center;">
                  ${options.subject || "New Abstract Submission Received"}
                </h1>
                <p style="margin: 0 0 15px; font-size: 16px;">Dear Admin Team,</p>
                <p style="margin: 0 0 20px; font-size: 16px;">
                  A new abstract submission has been received in the CMUVC System. Below are the details:
                </p>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr style="background-color: #ecf0f1;">
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Submitted by</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.prefix
                    } ${abstractData.fname} ${abstractData.lname}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Title</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.titleAbstarct
                    }</td>
                  </tr>
                  <tr style="background-color: #ecf0f1;">
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Email</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.email
                    }</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Organization</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.organization
                    }</td>
                  </tr>
                  <tr style="background-color: #ecf0f1;">
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Submission Date</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.submissionDate
                    }</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Category ID</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${
                      abstractData.categoryId
                    }</td>
                  </tr>
             
                  <tr style="background-color: #ecf0f1;">
                  <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">File</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">
                    <a href="https://vmapi.vet.cmu.ac.th/uploads/dataCmuvc/abstracts/${
                      abstractData.fileName
                    }" 
                      style="color: #3498db; text-decoration: none; font-weight: bold;">
                      ${abstractData.fileName}
                    </a>
              </td>
            </tr>
                </table>

                <p style="margin: 0 0 20px; font-size: 16px;">
                  Please review the submission in the admin panel.
                </p>
                
                <div style="text-align: center; margin-top: 30px;">
                  <p style="font-size: 14px; color: #777; margin: 0;">
                    CMUVC System Team
                  </p>
                  <p style="font-size: 12px; color: #999; margin: 5px 0 0;">
                    This is an automated email, please do not reply.
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      return {
        status: "success",
        environment: process.env.NODE_ENV || "development",
        message: "ส่งอีเมลเรียบร้อยแล้ว",
        recipients,
        messageId: info.messageId,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Email sending failed:", error);
      return {
        status: "error",
        message: "ส่งอีเมลไม่สำเร็จ",
        recipients: [],
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      };
    }
  },
};
