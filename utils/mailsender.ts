import nodemailer from "nodemailer";

export const mailSender = async (
  email: string,
  title: string,
  body: string,
  attachments?: Array<{
      filename?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: any;
    path?: string;
    cid?: string;
    contentType?: string;
  }>
) => {
  try {
    // Try different Zoho Mail configurations
    const configs = [
      {
        host: "smtp.zoho.in",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
          ciphers: 'SSLv3'
        }
      },
      {
        host: "smtp.zoho.in", 
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        }
      }
    ];

    let transporter;
    let lastError;

    for (const config of configs) {
      try {
        console.log(`Trying Zoho Mail config: ${config.host}:${config.port} (secure: ${config.secure})`);
        
        transporter = nodemailer.createTransport(config);
        
        // Verify connection
        await transporter.verify();
        console.log(`Zoho Mail connection successful with ${config.host}:${config.port}`);
        break;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (configError: any) {

        console.log(`Config ${config.host}:${config.port} failed:`, configError.message);
        lastError = configError;
        continue;
      }
    }

    if (!transporter) {
      throw new Error(`All Zoho Mail configurations failed. Last error: ${lastError?.message || 'Unknown error'}`);
    }

    const info = await transporter.sendMail({
      from: process.env.MAIL_USER || "Primastat Services <noreply@primastat.io>",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
      attachments,
    });
    
    console.log('Email sent successfully:', info.messageId);
    return info;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Mail sender error:', error);
    
    // Provide specific error messages for Zoho Mail issues
    if (error.code === 'EAUTH') {
      console.error('Zoho Mail authentication failed. Please check:');
      console.error('1. Email address is correct and complete');
      console.error('2. Password is correct (use App Password if 2FA is enabled)');
      console.error('3. Account allows SMTP access');
    } else if (error.code === 'ECONNECTION') {
      console.error('Connection to Zoho Mail failed. Please check:');
      console.error('1. Network connectivity to smtp.zoho.com');
      console.error('2. Firewall allows outbound connections to ports 587/465');
    }
    
    console.log(error);
    console.log("Error is coming at mailsender function ");
    throw new Error(`Failed to send email: ${error.message}`);
  }
};