"use server";

import axios from "axios";
import { z } from "zod";
import { promises as fs } from "fs";
import { JobApplicationSchema } from "@/app/careers/components/jobApplicationSchema";

type EmailResponse = {
  success: boolean;
  message: string;
};

export const sendJobApplicationEmail = async (
  to: string,
  formData: FormData
): Promise<EmailResponse> => {
  try {
    const apiKey = process.env.SENDINBLUE_API_KEY;
    const apiUrl = "https://api.brevo.com/v3/smtp/email";

    if (!apiKey) {
      return {
        success: false,
        message: "API key not found",
      };
    }

    // Parse formData using Zod schema
    const parsedData = JobApplicationSchema.parse({
      LegalFirstName: formData.get("LegalFirstName"),
      LegalLastName: formData.get("LegalLastName"),
      Email: formData.get("Email"),
      Mobile: formData.get("Mobile"),
      University: formData.get("University"),
      PrimaryDegree: formData.get("PrimaryDegree"),
      DegreeMajor: formData.get("DegreeMajor"),
      SecondaryDegree: formData.get("SecondaryDegree") || "",
      SecondaryDegreeMajor: formData.get("SecondaryDegreeMajor") || "",
      GraduationMonth: formData.get("GraduationMonth"),
      GraduationYear: formData.get("GraduationYear"),
      StartAvailability: formData.get("StartAvailability") || "",
      GPA: formData.get("GPA") || "",
      Certifications: formData.get("Certifications") || "",
      resume: formData.get("resume"),
    });

    const resumeFile = formData.get("resume") as File | null;
    let resumeBase64 = "";

    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      resumeBase64 = buffer.toString("base64");
    }

    const emailData = {
      sender: { name: parsedData.LegalFirstName, email: parsedData.Email },
      to: [{ email: to, name: "HR Department" }],
      subject: `Job Application from ${parsedData.LegalFirstName} ${parsedData.LegalLastName}`,
      htmlContent: `
        <html>
          <body>
            <h2>New Job Application Submission</h2>
            <p><strong>Name:</strong> ${parsedData.LegalFirstName} ${parsedData.LegalLastName}</p>
            <p><strong>Email:</strong> ${parsedData.Email}</p>
            <p><strong>Mobile:</strong> ${parsedData.Mobile}</p>
            <p><strong>University:</strong> ${parsedData.University}</p>
            <p><strong>Primary Degree:</strong> ${parsedData.PrimaryDegree}</p>
            <p><strong>Degree Major:</strong> ${parsedData.DegreeMajor}</p>
            <p><strong>Secondary Degree:</strong> ${parsedData.SecondaryDegree}</p>
            <p><strong>Secondary Degree Major:</strong> ${parsedData.SecondaryDegreeMajor}</p>
            <p><strong>Graduation Month/Year:</strong> ${parsedData.GraduationMonth} ${parsedData.GraduationYear}</p>
            <p><strong>Start Availability:</strong> ${parsedData.StartAvailability}</p>
            <p><strong>GPA:</strong> ${parsedData.GPA}</p>
            <p><strong>Certifications:</strong> ${parsedData.Certifications}</p>
          </body>
        </html>
      `,
      replyTo: { email: parsedData.Email, name: parsedData.LegalFirstName },
      headers: { "Custom-Header": "JobApplicationSubmission" },
      attachment: resumeBase64
        ? [
            {
              content: resumeBase64,
              name: "Resume.pdf",
            },
          ]
        : [],
    };

    const response = await axios.post(apiUrl, emailData, {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    });

    console.log("Email sent successfully:", response.data);
    return { success: true, message: "Email sent successfully" };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to send email");
  }
};
