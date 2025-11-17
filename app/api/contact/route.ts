import { NextRequest, NextResponse } from "next/server";
import { mailSender } from "@/utils/mailsender";
import { contactUsEmail } from "@/lib/templates/contactFormResponse";
import { selfContactUsEmail } from "@/lib/templates/selfcontactFormResponse";
import prisma from "@/lib/prisma";
import path from "path";

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  countryCode: number | string;
  phone: number | string;
}


export async function POST(request: NextRequest) {
  try {
    const myemail = process.env.ADMIN_EMAIL || "connect@rakriai.com";
    const {
      firstName,
      lastName,
      email,
      message,
      subject,
      countryCode,
      phone,
    }: ContactData = await request.json();

    console.log(firstName, lastName, email, message, subject, countryCode, phone)
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message || !subject || countryCode === undefined || phone === undefined) {
      return NextResponse.json(
        { message: "Missing required fields", success: false },
        { status: 400 }
      );
    }


    const existing = await prisma.contactUser.findUnique({
      where: { email },
    });
    if (existing) {
      return NextResponse.json(
        {
          message:
            "We've already received your inquiry and our team will respond within 1-2 business days. For urgent matters, please schedule a demo call.",
          success: false
        },
        { status: 400 }
      );
    }

    const parsedCountryCode = typeof countryCode === "string" ? parseInt(countryCode, 10) : countryCode;
    const parsedPhone = typeof phone === "string" ? parseInt(phone, 10) : phone;

    if (!Number.isFinite(parsedCountryCode) || !Number.isFinite(parsedPhone)) {
      return NextResponse.json(
        { error: "Invalid country code or phone" },
        { status: 400 }
      );
    }

    await prisma.contactUser.create({
      data: {
        firstName,
        lastName,
        email,
        countryCode: parsedCountryCode,
        phone: parsedPhone,
        message,
      },
    });

    const fullName = `${firstName} ${lastName}`.trim();

    try {
      // Send email to user
      // Get absolute path to logo image
      const logoPath = path.join(process.cwd(), "public", "assets", "logo.png");

      await mailSender(
        email,
        "Thank you for contacting Rakri AI",
        contactUsEmail(email, fullName, subject, message),
        [
          {
            filename: "logo.png",
            path: logoPath,
            cid: "rakri-logo",
            contentType: "image/png",
          },
        ]
      );

      // Send notification email to admin
      await mailSender(
        myemail,
        "New Contact Form Submission - Rakri AI",
        selfContactUsEmail(email, fullName, subject, message)
      );

      return NextResponse.json({
        message: "Thank you for contacting Rakri AI. Our team will respond within 1-2 business days.",
        success: true
      }, { status: 200 });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      
      // Still return success since the contact form was submitted and saved to database
      // But log the email failure for admin review
      return NextResponse.json({ 
        message: "Your message has been received. We'll get back to you soon.", 
        success: true,
        note: "Contact saved but email notification failed"
      }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 });
  }
}