export const contactUsEmail = (
  email: string,
  name: string,
  subject: string,
  message: string
): string => {
  // Rakri AI Brand Colors
  const brandPrimary = "#3178C6"; // Electric Blue
  const navyDark = "#0B1223"; // Primary dark background
  const textPrimary = "#FFFFFF"; // White
  const textSecondary = "#A0AEC0"; // Light gray
  const textDark = "#111827"; // Dark text for light backgrounds
  const mutedColor = "#6B7280"; // Muted text

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name || "there");
  const safeEmail = escapeHtml(email || "");
  const safeSubject = escapeHtml(subject || "");
  const safeMessage = escapeHtml(message || "");

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Thank you for contacting Rakri AI</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        @media (max-width: 600px) {
          .container {
            width: 100% !important;
            border-radius: 0 !important;
          }
          .padding-responsive {
            padding: 20px !important;
          }
        }
      </style>
    </head>
    <body style="margin:0; padding:0; background-color:#f3f4f6;">
      <!-- Preview text -->
      <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
        Thank you for contacting Rakri AI. Our team will respond within 1-2 business days.
      </div>

      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background:#f3f4f6;">
        <tr>
          <td align="center" style="padding:40px 20px;">
            <!-- Main Container -->
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" class="container" style="width:600px; max-width:100%; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.1);">

              <!-- Header with Logo and Badge -->
              <tr>
                <td style="background:linear-gradient(135deg, ${navyDark} 0%, #1a2642 100%); padding:32px 40px;" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td align="left" style="vertical-align:middle;">
                        <img src="cid:rakri-logo" alt="Rakri AI Logo" style="width:60px; height:60px; display:block;" />
                      </td>
                      <td align="left" style="padding-left:16px; vertical-align:middle;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-weight:700; font-size:24px; color:${textPrimary}; letter-spacing:-0.5px;">
                          Rakri <span style="color:${brandPrimary};">AI</span>
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${textSecondary}; margin-top:4px;">
                          A Clearer View of Talent
                        </div>
                      </td>
                      <td align="right" style="vertical-align:middle;">
                        <span style="display:inline-block; background:${brandPrimary}; color:#fff; padding:8px 14px; border-radius:20px; font-family:'Inter', Arial, sans-serif; font-size:11px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase;">Confirmed</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding:40px 40px 24px 40px;" class="padding-responsive">
                  <h1 style="margin:0 0 16px 0; font-family:'Inter', Arial, sans-serif; font-size:28px; line-height:1.3; color:${textDark}; font-weight:700;">
                    Hi ${safeName} 👋
                  </h1>
                  <p style="margin:0 0 12px 0; font-family:'Inter', Arial, sans-serif; font-size:16px; line-height:1.6; color:${mutedColor};">
                    Thank you for reaching out to <strong style="color:${textDark};">Rakri AI</strong>. We've received your message and our team is reviewing your inquiry.
                  </p>
                  <p style="margin:0; font-family:'Inter', Arial, sans-serif; font-size:16px; line-height:1.6; color:${mutedColor};">
                    We typically respond within <strong style="color:${brandPrimary};">1-2 business days</strong> (Monday-Friday, 9:00 AM - 6:00 PM CET).
                  </p>
                </td>
              </tr>

              <!-- Submission Summary Card -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                    <tr>
                      <td style="background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding:16px 20px; border-bottom:2px solid #e5e7eb;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:14px; font-weight:700; color:${textDark}; text-transform:uppercase; letter-spacing:0.5px;">
                          📋 Your Submission
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:24px 20px; background:#ffffff;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:13px; color:${mutedColor}; font-weight:600; width:100px; vertical-align:top;">Name</td>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${textDark}; font-weight:500;">${safeName}</td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:13px; color:${mutedColor}; font-weight:600; vertical-align:top;">Email</td>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${textDark}; font-weight:500;">${safeEmail}</td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:13px; color:${mutedColor}; font-weight:600; vertical-align:top;">Subject</td>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${textDark}; font-weight:500;">${safeSubject}</td>
                          </tr>
                          <tr>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:13px; color:${mutedColor}; font-weight:600; vertical-align:top;">Message</td>
                            <td style="padding:10px 0; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${textDark}; font-weight:400; line-height:1.6; white-space:pre-wrap;">${safeMessage}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Info Box -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-left:4px solid ${brandPrimary}; border-radius:8px; padding:20px;">
                    <tr>
                      <td>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:14px; font-weight:600; color:${textDark}; margin-bottom:8px;">
                          💡 What happens next?
                        </div>
                        <ul style="margin:0; padding-left:20px; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${mutedColor}; line-height:1.8;">
                          <li>Our team will review your message</li>
                          <li>We'll prepare a personalized response</li>
                          <li>You'll receive a detailed reply within 1-2 business days</li>
                          <li>For urgent inquiries, feel free to schedule a demo call</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- CTA Button -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="border-radius:12px; background:${brandPrimary}; box-shadow:0 4px 14px rgba(49, 120, 198, 0.3);">
                        <a href="mailto:connect@rakriai.com" style="display:inline-block; padding:14px 32px; font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:12px;">
                          📧 Reply to this email
                        </a>
                      </td>
                      <td style="padding-left:16px;">
                        <a href="https://rakriai.com" style="display:inline-block; padding:14px 32px; font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:600; color:${brandPrimary}; text-decoration:none; border:2px solid ${brandPrimary}; border-radius:12px; background:#ffffff;">
                          🌐 Visit Website
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding:0 40px;" class="padding-responsive">
                  <hr style="border:none; border-top:1px solid #e5e7eb; margin:0;" />
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:32px 40px;" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:16px; font-weight:600; color:${textDark}; margin-bottom:12px;">
                          About Rakri AI
                        </div>
                        <p style="margin:0; font-family:'Inter', Arial, sans-serif; font-size:13px; line-height:1.6; color:${mutedColor};">
                          Rakri AI is an AI-powered, GDPR-compliant recruitment platform specializing in client-hosted solutions for European and US recruitment agencies. We help accelerate candidate screening by 75% with transparent, explainable AI.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:16px; border-top:1px solid #e5e7eb;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; line-height:1.6;">
                              <strong style="color:${textDark};">Business Hours (CET)</strong><br/>
                              Monday - Friday: 9:00 AM - 6:00 PM<br/>
                              Saturday: 10:00 AM - 2:00 PM<br/>
                              Sunday: Closed
                            </td>
                            <td align="right" style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; line-height:1.6;">
                              <strong style="color:${textDark};">Contact</strong><br/>
                              📧 connect@rakriai.com<br/>
                              🌐 www.rakriai.com
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:20px; text-align:center;">
                        <p style="margin:0 0 8px 0; font-family:'Inter', Arial, sans-serif; font-size:11px; color:${mutedColor};">
                          You're receiving this email because you contacted Rakri AI through our website.
                        </p>
                        <p style="margin:0; font-family:'Inter', Arial, sans-serif; font-size:11px; color:${mutedColor};">
                          © ${new Date().getFullYear()} Rakri AI. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!-- /Main Container -->
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

export default contactUsEmail;
