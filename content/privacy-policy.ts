// ============================================================================
// PRIVACY POLICY CONTENT
// ============================================================================
// Comprehensive GDPR and US Privacy Law Compliant Privacy Policy
// Last Updated: January 2025
// ============================================================================

export const privacyPolicyContent = {
  lastUpdated: "January 17, 2025",
  effectiveDate: "January 17, 2025",

  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        {
          type: "paragraph",
          text: "Welcome to Rakri AI. We are committed to protecting your personal data and respecting your privacy rights. This Privacy Policy explains how Rakri AI ('we', 'us', or 'our') collects, uses, shares, and protects your personal information when you use our website and AI-powered recruitment platform services."
        },
        {
          type: "paragraph",
          text: "Rakri AI is a GDPR-compliant recruitment automation platform that specializes in AI-powered candidate screening for European and US recruitment agencies. Our core principle is data privacy by design - we enable clients to host candidate data on their own cloud infrastructure, ensuring maximum data control and compliance."
        },
        {
          type: "important",
          text: "If you have any questions about this Privacy Policy or our data practices, please contact us at connect@rakriai.com"
        }
      ]
    },
    {
      id: "data-controller",
      title: "2. Data Controller and Contact Information",
      content: [
        {
          type: "paragraph",
          text: "For the purposes of applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and applicable US state privacy laws, Rakri AI is the data controller for personal data collected through our website."
        },
        {
          type: "contact-info",
          items: [
            { label: "Company Name", value: "Rakri AI" },
            { label: "Email", value: "connect@rakriai.com" },
            { label: "Contact Email", value: "connect@rakriai.com" },
            { label: "Business Hours", value: "Monday - Friday, 9:00 AM - 6:00 PM CET" },
            { label: "Response Time", value: "Within 48 hours for privacy inquiries" }
          ]
        },
        {
          type: "paragraph",
          text: "For candidate data processed through our platform, data controller responsibilities are typically shared between Rakri AI (as data processor) and our client organizations (as data controllers), as defined in our Data Processing Agreements."
        }
      ]
    },
    {
      id: "scope",
      title: "3. Scope of This Policy",
      content: [
        {
          type: "paragraph",
          text: "This Privacy Policy applies to:"
        },
        {
          type: "list",
          items: [
            "Website visitors who browse rakriai.com",
            "Individuals who submit inquiries through our contact form",
            "Prospective clients who request demos or pricing information",
            "Client organization representatives who use our platform (covered by separate service agreements)",
            "Job candidates whose data is processed through our AI screening platform (covered by client privacy policies and our Data Processing Agreement)"
          ]
        },
        {
          type: "important",
          text: "If you are a job candidate whose resume/CV is being processed through our platform, please note that the recruitment agency or employer using our services is the primary data controller for your information. Please refer to their privacy policy for information about how they collect and use your data. This policy explains Rakri AI's role as a data processor."
        }
      ]
    },
    {
      id: "information-collected",
      title: "4. Information We Collect",
      content: [
        {
          type: "subsection",
          title: "4.1 Information You Provide Directly (Website Contact Form)",
          text: "When you submit an inquiry through our contact form, we collect:"
        },
        {
          type: "list",
          items: [
            "First name and last name",
            "Email address",
            "Phone number (including country code)",
            "Inquiry subject and message content",
            "GDPR consent acknowledgment"
          ]
        },
        {
          type: "paragraph",
          text: "Legal Basis: Your explicit consent (GDPR Art. 6(1)(a)) and our legitimate interest in responding to business inquiries (GDPR Art. 6(1)(f))."
        },
        {
          type: "subsection",
          title: "4.2 Candidate Data Processed Through Our Platform",
          text: "When recruitment agencies use our AI screening services, we process candidate data as a data processor on behalf of our clients, including:"
        },
        {
          type: "list",
          items: [
            "Resume/CV content (name, contact information, work history, education, skills)",
            "Job application responses and materials",
            "AI-generated candidate scores and evaluation criteria",
            "Recruiter feedback and hiring decisions",
            "Application timestamps and workflow metadata"
          ]
        },
        {
          type: "important",
          text: "Legal Basis: Processing is performed under client contracts (GDPR Art. 6(1)(b)) and legitimate interests of recruitment agencies (GDPR Art. 6(1)(f)). Clients are responsible for obtaining necessary consent from candidates and complying with applicable data protection laws."
        },
        {
          type: "subsection",
          title: "4.3 Automatically Collected Information",
          text: "We currently collect minimal automated data. Our website uses Next.js framework which may collect:"
        },
        {
          type: "list",
          items: [
            "IP address (anonymized for analytics)",
            "Browser type and version",
            "Device type and operating system",
            "Pages visited and time spent",
            "Referral source (how you found our website)"
          ]
        },
        {
          type: "paragraph",
          text: "We do NOT use third-party tracking cookies or analytics services on our website at this time. Any future implementation will require updated consent mechanisms."
        },
        {
          type: "subsection",
          title: "4.4 Information We Do NOT Collect",
          text: "We do not collect:"
        },
        {
          type: "list",
          items: [
            "Sensitive personal data (health, biometrics, religious beliefs) unless explicitly provided in resumes and with appropriate legal basis",
            "Payment card information directly (handled by secure third-party processors)",
            "Social media profile data (unless candidates apply via LinkedIn with their consent)",
            "Location tracking or precise geolocation data"
          ]
        }
      ]
    },
    {
      id: "how-we-use",
      title: "5. How We Use Your Information",
      content: [
        {
          type: "subsection",
          title: "5.1 Website Contact Form Data",
          text: "We use contact form submissions to:"
        },
        {
          type: "list",
          items: [
            "Respond to your inquiries and provide requested information",
            "Schedule product demos and consultations",
            "Send follow-up communications about our services",
            "Maintain records of business communications",
            "Improve our customer service and support"
          ]
        },
        {
          type: "paragraph",
          text: "Retention Period: Contact form submissions are retained for 24 months from the date of submission, unless you request earlier deletion or we establish an ongoing business relationship."
        },
        {
          type: "subsection",
          title: "5.2 Candidate Data (Platform Services)",
          text: "As a data processor, we use candidate data solely to:"
        },
        {
          type: "list",
          items: [
            "Parse and analyze resumes using AI/ML models",
            "Generate candidate scores and ranking based on job requirements",
            "Provide explainable AI reasoning for screening decisions",
            "Enable recruiter review and decision-making workflows",
            "Train and improve AI models (only with explicit client consent and on anonymized data)",
            "Generate analytics and insights for recruitment process optimization"
          ]
        },
        {
          type: "important",
          text: "Client Data Ownership: Candidate data is owned and controlled by our clients (recruitment agencies). Data is hosted on client-designated cloud infrastructure (AWS, Azure, GCP). Rakri AI does NOT retain candidate data on our own servers except for temporary processing."
        },
        {
          type: "paragraph",
          text: "Retention Period: Candidate data retention is controlled by our clients according to their retention policies and applicable legal requirements. Our platform enables clients to delete candidate data at any time."
        },
        {
          type: "subsection",
          title: "5.3 Automated Decision-Making and AI Profiling",
          text: "Our platform uses automated decision-making (ADM) and profiling under GDPR Article 22:"
        },
        {
          type: "list",
          items: [
            "AI Scoring: Machine learning models automatically score and rank candidates based on resume analysis and job fit criteria",
            "Explainability: Every automated decision includes detailed reasoning explaining scoring factors",
            "Human Oversight: Clients can configure workflows to require human review ('Level 1: Human-in-the-Loop') or enable fully autonomous screening ('Level 2: Fully Autonomous')",
            "Right to Object: Candidates have the right to object to automated decision-making and request human review"
          ]
        },
        {
          type: "important",
          text: "Bias Mitigation: Our AI models are designed to reduce unconscious bias in screening. We implement regular bias audits, fairness testing, and provide transparency reports to clients. However, AI systems may still reflect biases present in training data."
        }
      ]
    },
    {
      id: "data-sharing",
      title: "6. How We Share Your Information",
      content: [
        {
          type: "paragraph",
          text: "We do not sell, rent, or trade your personal information to third parties. We share data only in the following limited circumstances:"
        },
        {
          type: "subsection",
          title: "6.1 Service Providers and Processors",
          text: "We share data with trusted third-party service providers who assist us in operating our business:"
        },
        {
          type: "list",
          items: [
            "Email Service: Zoho Mail (for sending contact form confirmations and notifications)",
            "Database Hosting: MongoDB Atlas (for contact form data storage)",
            "Cloud Infrastructure: Client-selected providers (AWS, Azure, GCP) for platform hosting",
            "AI/ML Services: Cloud-based AI APIs (for resume parsing and natural language processing)"
          ]
        },
        {
          type: "paragraph",
          text: "All service providers are contractually bound to protect your data and use it only for specified purposes. We conduct due diligence to ensure compliance with GDPR and equivalent data protection standards."
        },
        {
          type: "subsection",
          title: "6.2 Business Transfers",
          text: "If Rakri AI is involved in a merger, acquisition, or sale of assets, your personal data may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our website before your data is transferred and becomes subject to a different privacy policy."
        },
        {
          type: "subsection",
          title: "6.3 Legal Obligations",
          text: "We may disclose your information if required by law or in response to:"
        },
        {
          type: "list",
          items: [
            "Valid legal processes (subpoenas, court orders, regulatory requests)",
            "Protection of our legal rights and property",
            "Prevention of fraud or illegal activity",
            "Protection of safety and security of individuals"
          ]
        },
        {
          type: "paragraph",
          text: "We will notify you of legal requests unless prohibited by law or court order."
        },
        {
          type: "subsection",
          title: "6.4 International Data Transfers",
          text: "Rakri AI operates globally and may transfer data across borders:"
        },
        {
          type: "list",
          items: [
            "EU to US Transfers: We comply with the EU-US Data Privacy Framework and/or use Standard Contractual Clauses (SCCs) approved by the European Commission",
            "Client-Controlled Hosting: Candidate data remains in client-specified geographic regions (typically EU for European clients, US for American clients)",
            "Transfer Safeguards: All international transfers are protected by appropriate safeguards (SCCs, adequacy decisions, binding corporate rules)"
          ]
        },
        {
          type: "important",
          text: "EU residents: If you are in the European Economic Area (EEA), UK, or Switzerland, we ensure that transfers of your personal data outside these regions meet GDPR requirements through appropriate transfer mechanisms."
        }
      ]
    },
    {
      id: "data-security",
      title: "7. Data Security",
      content: [
        {
          type: "paragraph",
          text: "We implement industry-standard security measures to protect your personal data:"
        },
        {
          type: "subsection",
          title: "7.1 Technical Security Measures"
        },
        {
          type: "list",
          items: [
            "Encryption: All data transmitted over the internet is encrypted using TLS 1.2+ (HTTPS)",
            "Data at Rest: Candidate data stored in client clouds is encrypted at rest using AES-256 or equivalent",
            "Access Controls: Role-based access control (RBAC) limits data access to authorized personnel only",
            "Authentication: Multi-factor authentication (MFA) for platform access",
            "Audit Logging: Comprehensive logs of all data access and modifications",
            "Regular Security Audits: Quarterly security assessments and penetration testing"
          ]
        },
        {
          type: "subsection",
          title: "7.2 Organizational Security Measures"
        },
        {
          type: "list",
          items: [
            "Employee Training: Regular data protection and security awareness training",
            "Confidentiality Agreements: All employees and contractors sign strict confidentiality agreements",
            "Incident Response Plan: Documented procedures for data breach detection and response",
            "Data Minimization: We collect and retain only data necessary for specified purposes",
            "Secure Development: Security-by-design principles in software development lifecycle"
          ]
        },
        {
          type: "subsection",
          title: "7.3 Data Breach Notification",
          text: "In the event of a data breach that poses a risk to your rights and freedoms:"
        },
        {
          type: "list",
          items: [
            "We will notify affected individuals within 72 hours of discovering the breach (GDPR Art. 33)",
            "We will notify relevant supervisory authorities as required by law",
            "Notification will include the nature of the breach, likely consequences, and measures taken to mitigate harm",
            "For candidate data breaches, we will immediately notify affected client organizations"
          ]
        },
        {
          type: "important",
          text: "While we implement robust security measures, no system is completely secure. We cannot guarantee absolute security of your data transmitted over the internet."
        }
      ]
    },
    {
      id: "your-rights",
      title: "8. Your Privacy Rights",
      content: [
        {
          type: "paragraph",
          text: "Depending on your location, you have specific rights regarding your personal data:"
        },
        {
          type: "subsection",
          title: "8.1 GDPR Rights (EU/EEA/UK Residents)",
          text: "Under the GDPR, you have the right to:"
        },
        {
          type: "list",
          items: [
            "Right to Access (Art. 15): Request a copy of your personal data we hold",
            "Right to Rectification (Art. 16): Correct inaccurate or incomplete personal data",
            "Right to Erasure/'Right to be Forgotten' (Art. 17): Request deletion of your personal data in certain circumstances",
            "Right to Restriction of Processing (Art. 18): Request limitation of how we use your data",
            "Right to Data Portability (Art. 20): Receive your data in a structured, machine-readable format",
            "Right to Object (Art. 21): Object to processing based on legitimate interests or for direct marketing",
            "Right to Withdraw Consent (Art. 7): Withdraw consent at any time (does not affect lawfulness of prior processing)",
            "Right to Lodge a Complaint: File a complaint with your local data protection authority"
          ]
        },
        {
          type: "subsection",
          title: "8.2 US State Privacy Rights",
          text: "If you are a resident of California, Virginia, Colorado, Connecticut, or other US states with privacy laws, you may have additional rights:"
        },
        {
          type: "list",
          items: [
            "Right to Know: Request disclosure of personal data collected, used, and shared",
            "Right to Delete: Request deletion of personal data (subject to legal exceptions)",
            "Right to Correct: Request correction of inaccurate personal data",
            "Right to Opt-Out: Opt-out of 'sale' or 'sharing' of personal data (Note: We do not sell personal data)",
            "Right to Non-Discrimination: Not receive discriminatory treatment for exercising privacy rights"
          ]
        },
        {
          type: "paragraph",
          text: "California residents: Please see Section 11 for additional CCPA/CPRA-specific disclosures."
        },
        {
          type: "subsection",
          title: "8.3 Automated Decision-Making Rights",
          text: "If you are subject to automated decision-making (candidate scoring):"
        },
        {
          type: "list",
          items: [
            "Right to Human Intervention: Request human review of automated screening decisions",
            "Right to Explanation: Receive clear explanation of AI scoring logic and factors",
            "Right to Contest: Challenge and appeal automated decisions",
            "Right to Object: Object to solely automated decision-making with legal or significant effects"
          ]
        },
        {
          type: "subsection",
          title: "8.4 How to Exercise Your Rights",
          text: "To exercise any of these rights:"
        },
        {
          type: "list",
          items: [
            "Email us at connect@rakriai.com with 'Privacy Rights Request' in the subject line",
            "Provide sufficient information to verify your identity (name, email, phone number)",
            "Specify which right(s) you wish to exercise and the scope of your request",
            "We will respond within 30 days (GDPR) or 45 days (US state laws), with possible extensions for complex requests"
          ]
        },
        {
          type: "important",
          text: "For candidate data: If your data is being processed through our platform by a recruitment agency, you should contact the agency directly as the data controller. We will assist with fulfilling rights requests as a data processor."
        },
        {
          type: "paragraph",
          text: "Response Time: We aim to respond to all privacy rights requests within 30 days. For complex or numerous requests, we may extend this period by an additional 60 days with notice."
        },
        {
          type: "paragraph",
          text: "Verification: To protect your privacy, we may request additional information to verify your identity before fulfilling rights requests."
        }
      ]
    },
    {
      id: "cookies",
      title: "9. Cookies and Tracking Technologies",
      content: [
        {
          type: "paragraph",
          text: "Our website currently uses minimal cookies and tracking technologies."
        },
        {
          type: "subsection",
          title: "9.1 Essential Cookies",
          text: "We use only essential cookies necessary for website functionality:"
        },
        {
          type: "list",
          items: [
            "Session Cookies: Maintain your session while navigating the website (expire when you close your browser)",
            "Security Cookies: Prevent cross-site request forgery (CSRF) and ensure secure connections"
          ]
        },
        {
          type: "paragraph",
          text: "These cookies are essential for the website to function and cannot be disabled."
        },
        {
          type: "subsection",
          title: "9.2 Analytics and Marketing Cookies",
          text: "We currently do NOT use:"
        },
        {
          type: "list",
          items: [
            "Google Analytics or similar analytics platforms",
            "Facebook Pixel or social media tracking",
            "Third-party advertising cookies",
            "Retargeting or remarketing cookies"
          ]
        },
        {
          type: "important",
          text: "If we implement analytics or marketing cookies in the future, we will update this policy and obtain your consent before deployment in accordance with GDPR and ePrivacy Directive requirements."
        },
        {
          type: "subsection",
          title: "9.3 Third-Party Integrations",
          text: "Our website may include integrations that set their own cookies:"
        },
        {
          type: "list",
          items: [
            "LinkedIn Apply/Share buttons (if implemented): Subject to LinkedIn's privacy policy",
            "Embedded videos or content: Subject to third-party provider privacy policies"
          ]
        },
        {
          type: "subsection",
          title: "9.4 Cookie Management",
          text: "You can control cookies through your browser settings:"
        },
        {
          type: "list",
          items: [
            "Most browsers allow you to block or delete cookies",
            "Browser settings: Chrome (Settings > Privacy > Cookies), Firefox (Options > Privacy > Cookies), Safari (Preferences > Privacy)",
            "Note: Disabling essential cookies may affect website functionality"
          ]
        },
        {
          type: "paragraph",
          text: "For more information about cookies, visit www.allaboutcookies.org"
        }
      ]
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: [
        {
          type: "paragraph",
          text: "Rakri AI's services are not directed to individuals under the age of 16 (or other applicable age of digital consent in your jurisdiction)."
        },
        {
          type: "list",
          items: [
            "We do not knowingly collect personal information from children under 16",
            "Our website and platform are designed for business use by recruitment professionals",
            "If we learn we have collected data from a child under 16, we will delete it immediately",
            "Parents or guardians who believe we have collected data from a child should contact us at connect@rakriai.com"
          ]
        },
        {
          type: "important",
          text: "Age Verification: By using our services, you represent that you are at least 16 years old (or the applicable age of consent in your jurisdiction)."
        }
      ]
    },
    {
      id: "ccpa",
      title: "11. California Privacy Rights (CCPA/CPRA)",
      content: [
        {
          type: "paragraph",
          text: "If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):"
        },
        {
          type: "subsection",
          title: "11.1 Categories of Personal Information Collected",
          text: "We collect the following categories of personal information:"
        },
        {
          type: "list",
          items: [
            "Identifiers: Name, email address, phone number, IP address",
            "Commercial Information: Inquiry details, service preferences",
            "Professional Information: Job titles, company information (if provided)",
            "Internet Activity: Website usage data, browser information",
            "Inferences: Preferences and characteristics derived from your activity"
          ]
        },
        {
          type: "subsection",
          title: "11.2 Business Purposes for Collection",
          text: "We collect and use personal information for:"
        },
        {
          type: "list",
          items: [
            "Providing and improving our services",
            "Responding to inquiries and customer support",
            "Marketing and communications (with consent)",
            "Security, fraud prevention, and legal compliance",
            "Business operations and analytics"
          ]
        },
        {
          type: "subsection",
          title: "11.3 Categories of Third Parties We Share With"
        },
        {
          type: "list",
          items: [
            "Service providers (email, hosting, cloud infrastructure)",
            "Professional advisors (legal, accounting, auditing)",
            "Business partners (with your consent)",
            "Legal authorities (when required by law)"
          ]
        },
        {
          type: "subsection",
          title: "11.4 Sale and Sharing of Personal Information",
          text: "We do NOT:"
        },
        {
          type: "list",
          items: [
            "Sell personal information to third parties",
            "Share personal information for cross-context behavioral advertising",
            "Process sensitive personal information beyond purposes allowed by CPRA"
          ]
        },
        {
          type: "subsection",
          title: "11.5 Your California Rights",
          text: "California residents have the right to:"
        },
        {
          type: "list",
          items: [
            "Know what personal information we collect, use, and disclose",
            "Request deletion of personal information",
            "Correct inaccurate personal information",
            "Opt-out of sale/sharing (not applicable as we don't sell data)",
            "Limit use of sensitive personal information",
            "Non-discrimination for exercising your rights"
          ]
        },
        {
          type: "subsection",
          title: "11.6 Shine the Light Law",
          text: "California Civil Code Section 1798.83 permits California residents to request information about disclosures of personal information to third parties for direct marketing purposes. We do not disclose personal information to third parties for their direct marketing purposes."
        },
        {
          type: "paragraph",
          text: "To exercise California privacy rights, contact us at connect@rakriai.com or call [PHONE NUMBER] (toll-free)."
        },
        {
          type: "paragraph",
          text: "Authorized Agent: California residents may designate an authorized agent to make requests on their behalf. We require written authorization and verification of the agent's authority."
        }
      ]
    },
    {
      id: "data-retention",
      title: "12. Data Retention",
      content: [
        {
          type: "paragraph",
          text: "We retain personal data only as long as necessary for the purposes outlined in this Privacy Policy:"
        },
        {
          type: "subsection",
          title: "12.1 Contact Form Data"
        },
        {
          type: "list",
          items: [
            "Active Inquiries: Retained for 24 months from submission date",
            "Business Relationships: Retained for duration of relationship plus 7 years for tax/legal compliance",
            "Marketing Communications: Retained until you unsubscribe or request deletion"
          ]
        },
        {
          type: "subsection",
          title: "12.2 Candidate Data (Platform)"
        },
        {
          type: "list",
          items: [
            "Active Applications: Retained per client retention policy (typically 6-24 months)",
            "Historical Data: Retained for analytics only if anonymized and aggregated",
            "Client Control: Clients can delete candidate data at any time through platform controls"
          ]
        },
        {
          type: "subsection",
          title: "12.3 Audit Logs and Security Data"
        },
        {
          type: "list",
          items: [
            "Security Logs: Retained for 12 months for incident investigation",
            "Audit Trails: Retained for 7 years for compliance and legal requirements",
            "Backup Data: Deleted according to backup rotation policies (typically 90 days)"
          ]
        },
        {
          type: "subsection",
          title: "12.4 Anonymized Data",
          text: "We may retain anonymized, aggregated data indefinitely for:"
        },
        {
          type: "list",
          items: [
            "Product improvement and AI model training",
            "Industry research and benchmarking",
            "Statistical analysis and reporting"
          ]
        },
        {
          type: "important",
          text: "Anonymization Process: Data is irreversibly anonymized using industry-standard techniques (data masking, aggregation, pseudonymization) that prevent re-identification of individuals."
        },
        {
          type: "paragraph",
          text: "After retention periods expire, we securely delete or anonymize data using industry-standard methods (secure deletion, cryptographic erasure, degaussing)."
        }
      ]
    },
    {
      id: "third-party",
      title: "13. Third-Party Links and Services",
      content: [
        {
          type: "paragraph",
          text: "Our website and platform may contain links to third-party websites, services, or integrations:"
        },
        {
          type: "list",
          items: [
            "LinkedIn: For candidate applications and professional networking",
            "Client ATS Systems: Applicant tracking systems integrated with our platform",
            "Cloud Providers: AWS, Azure, Google Cloud Platform (client-controlled)",
            "Social Media: Links to our LinkedIn and Twitter profiles"
          ]
        },
        {
          type: "important",
          text: "We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their privacy policies before providing any personal information."
        },
        {
          type: "paragraph",
          text: "Third-Party Service Providers: Our platform integrates with third-party services for specific functions (email, cloud hosting, AI processing). These providers are contractually obligated to protect your data and use it only as directed by Rakri AI."
        }
      ]
    },
    {
      id: "updates",
      title: "14. Changes to This Privacy Policy",
      content: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time to reflect:"
        },
        {
          type: "list",
          items: [
            "Changes in our data practices or services",
            "New legal or regulatory requirements",
            "Technological developments and security enhancements",
            "Feedback from users and privacy authorities"
          ]
        },
        {
          type: "paragraph",
          text: "When we make changes:"
        },
        {
          type: "list",
          items: [
            "We will update the 'Last Updated' date at the top of this policy",
            "For material changes, we will provide prominent notice on our website or via email",
            "We will obtain your consent if required by applicable law (e.g., new processing purposes)",
            "Previous versions will be archived and available upon request"
          ]
        },
        {
          type: "paragraph",
          text: "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data."
        },
        {
          type: "important",
          text: "Continued use of our services after policy updates constitutes acceptance of the revised policy, unless additional consent is required by law."
        }
      ]
    },
    {
      id: "contact",
      title: "15. Contact Us and Data Protection Officer",
      content: [
        {
          type: "paragraph",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:"
        },
        {
          type: "contact-info",
          items: [
            { label: "Privacy Inquiries Email", value: "connect@rakriai.com" },
            { label: "General Contact Email", value: "connect@rakriai.com" },
            { label: "Subject Line", value: "Privacy Policy Inquiry / Data Rights Request" },
            { label: "Response Time", value: "Within 48 hours (weekdays)" },
            { label: "Business Hours", value: "Monday - Friday, 9:00 AM - 6:00 PM CET" }
          ]
        },
        {
          type: "subsection",
          title: "15.1 Supervisory Authority (GDPR)",
          text: "If you are located in the EU/EEA or UK, you have the right to lodge a complaint with your local data protection authority:"
        },
        {
          type: "list",
          items: [
            "EU Data Protection Authorities: https://edpb.europa.eu/about-edpb/board/members_en",
            "UK Information Commissioner's Office (ICO): https://ico.org.uk/",
            "Irish Data Protection Commission: https://www.dataprotection.ie/ (if applicable)"
          ]
        },
        {
          type: "paragraph",
          text: "We encourage you to contact us first so we can address your concerns directly."
        },
        {
          type: "subsection",
          title: "15.2 US State Privacy Inquiries",
          text: "For California, Virginia, Colorado, Connecticut, or other US state privacy inquiries:"
        },
        {
          type: "list",
          items: [
            "Email: connect@rakriai.com with 'US Privacy Rights' in subject",
            "Toll-Free Number: [TO BE ADDED]",
            "Online Form: [TO BE ADDED - Consider implementing]"
          ]
        }
      ]
    },
    {
      id: "transparency",
      title: "16. Transparency and Data Processing Records",
      content: [
        {
          type: "paragraph",
          text: "In accordance with GDPR Article 30 (Records of Processing Activities), we maintain detailed internal records of all data processing activities. These records are available to supervisory authorities upon request."
        },
        {
          type: "subsection",
          title: "16.1 Data Processing Register",
          text: "Our processing register includes:"
        },
        {
          type: "list",
          items: [
            "Categories of data subjects (website visitors, candidates, clients)",
            "Categories of personal data processed",
            "Purposes of processing and legal basis",
            "Categories of recipients of personal data",
            "International data transfers and safeguards",
            "Retention periods",
            "Technical and organizational security measures"
          ]
        },
        {
          type: "subsection",
          title: "16.2 Data Protection Impact Assessments (DPIA)",
          text: "We conduct Data Protection Impact Assessments for high-risk processing activities, including:"
        },
        {
          type: "list",
          items: [
            "AI-powered automated decision-making (candidate scoring)",
            "Large-scale processing of candidate personal data",
            "Cross-border data transfers to third countries",
            "New technologies or processing methods"
          ]
        },
        {
          type: "paragraph",
          text: "DPIA summaries are available to data subjects and supervisory authorities upon request."
        }
      ]
    }
  ]
};

export default privacyPolicyContent;
