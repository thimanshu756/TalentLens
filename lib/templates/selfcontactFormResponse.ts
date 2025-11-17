export const selfContactUsEmail = (
  email: string,
  name: string,
  subject: string,
  message: string
): string => {
  // Rakri AI Brand Colors
  const brandPrimary = "#3178C6"; // Electric Blue
  const brandAccent = "#4A90E2"; // Accent Hover Blue
  const navyDark = "#0B1223"; // Primary dark background
  const textPrimary = "#FFFFFF"; // White
  const textSecondary = "#A0AEC0"; // Light gray
  const textDark = "#111827"; // Dark text for light backgrounds
  const mutedColor = "#6B7280"; // Muted text
  const successGreen = "#10B981"; // Success color
  const warningAmber = "#F59E0B"; // Warning color

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name || "");
  const safeEmail = escapeHtml(email || "");
  const safeSubject = escapeHtml(subject || "");
  const safeMessage = escapeHtml(message || "");

  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission - Rakri AI</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

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
          .button-stack {
            display: block !important;
            width: 100% !important;
          }
          .button-stack td {
            display: block !important;
            padding: 8px 0 !important;
          }
        }
      </style>
    </head>
    <body style="margin:0; padding:0; background-color:#f3f4f6;">
      <!-- Preview text -->
      <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
        New contact form submission from ${safeName} - ${safeSubject}
      </div>

      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="background:#f3f4f6;">
        <tr>
          <td align="center" style="padding:40px 20px;">
            <!-- Main Container -->
            <table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" class="container" style="width:680px; max-width:100%; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.15);">

              <!-- Alert Header -->
              <tr>
                <td style="background:linear-gradient(135deg, ${navyDark} 0%, #1a2642 100%); padding:28px 40px;" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td align="left" style="vertical-align:middle;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-weight:800; font-size:26px; color:${textPrimary}; letter-spacing:-0.5px;">
                          🔔 New Contact Request
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:13px; color:${textSecondary}; margin-top:6px;">
                          Rakri AI Website Contact Form
                        </div>
                      </td>
                      <td align="right" style="vertical-align:middle;">
                        <div style="display:inline-block; background:${successGreen}; color:#fff; padding:10px 16px; border-radius:8px; font-family:'Inter', Arial, sans-serif; font-size:12px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase;">
                          Action Required
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Timestamp Banner -->
              <tr>
                <td style="background:linear-gradient(to right, #eff6ff, #dbeafe); padding:14px 40px; border-bottom:2px solid ${brandPrimary};" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-family:'Inter', Arial, sans-serif; font-size:13px; color:${textDark}; font-weight:600;">
                        📅 Received: ${timestamp}
                      </td>
                      <td align="right" style="font-family:'Inter', Arial, sans-serif; font-size:13px; color:${brandPrimary}; font-weight:700;">
                        Response Due: Within 1-2 Business Days
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding:32px 40px 24px 40px;" class="padding-responsive">
                  <h2 style="margin:0 0 8px 0; font-family:'Inter', Arial, sans-serif; font-size:20px; color:${textDark}; font-weight:700;">
                    Contact Details
                  </h2>
                  <p style="margin:0 0 24px 0; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${mutedColor};">
                    A new inquiry has been submitted through the Rakri AI website contact form. Please review and respond promptly.
                  </p>

                  <!-- Contact Info Card -->
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #e5e7eb; border-radius:12px; overflow:hidden; margin-bottom:24px;">
                    <tr>
                      <td style="background:linear-gradient(135deg, ${brandPrimary} 0%, ${brandAccent} 100%); padding:16px 20px;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:700; color:#ffffff; text-transform:uppercase; letter-spacing:0.5px;">
                          👤 Submitter Information
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <!-- Name Row -->
                          <tr>
                            <td style="padding:16px 20px; background:#f9fafb; border-bottom:1px solid #e5e7eb;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; width:140px; vertical-align:top;">
                                    Full Name
                                  </td>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:16px; color:${textDark}; font-weight:700;">
                                    ${safeName}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- Email Row -->
                          <tr>
                            <td style="padding:16px 20px; background:#ffffff; border-bottom:1px solid #e5e7eb;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; width:140px; vertical-align:top;">
                                    Email Address
                                  </td>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:16px; color:${brandPrimary}; font-weight:600;">
                                    <a href="mailto:${safeEmail}" style="color:${brandPrimary}; text-decoration:none;">
                                      ${safeEmail}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <!-- Subject Row -->
                          <tr>
                            <td style="padding:16px 20px; background:#f9fafb;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; width:140px; vertical-align:top;">
                                    Subject
                                  </td>
                                  <td style="font-family:'Inter', Arial, sans-serif; font-size:16px; color:${textDark}; font-weight:600;">
                                    ${safeSubject}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message Card -->
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                    <tr>
                      <td style="background:linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding:16px 20px; border-bottom:2px solid #e5e7eb;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:700; color:${textDark}; text-transform:uppercase; letter-spacing:0.5px;">
                          💬 Message Content
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:24px 20px; background:#ffffff;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:15px; color:${textDark}; line-height:1.8; white-space:pre-wrap; background:#f9fafb; padding:20px; border-radius:8px; border-left:4px solid ${brandPrimary};">
${safeMessage}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Action Buttons -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table role="presentation" cellpadding="0" cellspacing="0" class="button-stack">
                    <tr>
                      <td style="border-radius:12px; background:${brandPrimary}; box-shadow:0 4px 14px rgba(49, 120, 198, 0.4);">
                        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(safeSubject)}" style="display:inline-block; padding:16px 32px; font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none; border-radius:12px;">
                          📧 Reply to ${safeName}
                        </a>
                      </td>
                      <td style="padding-left:12px;">
                        <a href="mailto:contact@rakriai.com" style="display:inline-block; padding:16px 32px; font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:700; color:${brandPrimary}; text-decoration:none; border:2px solid ${brandPrimary}; border-radius:12px; background:#ffffff;">
                          📋 View Dashboard
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Response Guidelines -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #fff7ed 0%, #fed7aa 20%); border-left:4px solid ${warningAmber}; border-radius:8px; padding:20px;">
                    <tr>
                      <td>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:15px; font-weight:700; color:${textDark}; margin-bottom:12px;">
                          ⚡ Response Best Practices
                        </div>
                        <ul style="margin:0; padding-left:20px; font-family:'Inter', Arial, sans-serif; font-size:14px; color:${textDark}; line-height:2;">
                          <li><strong>Respond within 1-2 business days</strong> to maintain professionalism</li>
                          <li><strong>Personalize your response</strong> by referencing their specific inquiry</li>
                          <li><strong>Highlight relevant features</strong> based on their needs (GDPR compliance, 75% faster screening, etc.)</li>
                          <li><strong>Include a clear CTA</strong> (e.g., schedule a demo, book a call)</li>
                          <li><strong>Use professional tone</strong> aligned with Rakri AI's brand voice</li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Quick Stats -->
              <tr>
                <td style="padding:0 40px 32px 40px;" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="padding:16px; background:#eff6ff; border-radius:8px; text-align:center; width:33.33%;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:24px; font-weight:800; color:${brandPrimary};">
                          1-2
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; margin-top:4px;">
                          Business Days
                        </div>
                      </td>
                      <td style="padding:16px; background:#f0fdf4; border-radius:8px; text-align:center; width:33.33%;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:24px; font-weight:800; color:${successGreen};">
                          75%
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; margin-top:4px;">
                          Faster Screening
                        </div>
                      </td>
                      <td style="padding:16px; background:#fef3c7; border-radius:8px; text-align:center; width:33.33%;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:24px; font-weight:800; color:${warningAmber};">
                          24/7
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; margin-top:4px;">
                          AI Processing
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding:0 40px;" class="padding-responsive">
                  <hr style="border:none; border-top:2px solid #e5e7eb; margin:0;" />
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:32px 40px;" class="padding-responsive">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="text-align:center;">
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:14px; font-weight:700; color:${textDark}; margin-bottom:8px;">
                          Rakri <span style="color:${brandPrimary};">AI</span>
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; font-style:italic; margin-bottom:16px;">
                          A Clearer View of Talent with Precision AI
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:12px; color:${mutedColor}; line-height:1.6;">
                          📧 contact@rakriai.com | 🌐 www.rakriai.com
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:11px; color:${mutedColor}; margin-top:16px;">
                          This is an automated notification from the Rakri AI contact form system.
                        </div>
                        <div style="font-family:'Inter', Arial, sans-serif; font-size:11px; color:${mutedColor}; margin-top:4px;">
                          © ${new Date().getFullYear()} Rakri AI. All rights reserved.
                        </div>
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

export default selfContactUsEmail;
