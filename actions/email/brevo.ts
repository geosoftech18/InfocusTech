// "use server";

// import * as brevo from "@getbrevo/brevo";
// import { z } from "zod";

// // Email input validation schema
// const emailSchema = z.object({
//   subject: z.string(),
//   parameter: z.string(),
//   to: z.array(z.object({ email: z.string().email(), name: z.string() })),
//   sender: z.object({ email: z.string().email(), name: z.string() }),
//   replyTo: z.object({ email: z.string().email(), name: z.string() }).optional(),
// });

// export async function sendEmail(input: z.infer<typeof emailSchema>) {
//   // Validate input
//   const parsedInput = emailSchema.safeParse(input);
//   if (!parsedInput.success) {
//     return { success: false, error: "Invalid email input data" };
//   }

//   const { subject, parameter, to, sender, replyTo } = parsedInput.data;

//   // Initialize Brevo API
//   let apiInstance = new brevo.TransactionalEmailsApi();
//   let apiKey = apiInstance.authentications["api-key"];

//   apiKey.apiKey = process.env.BREVO_API_KEY;
//   if (!apiKey.apiKey) {
//     console.error("Brevo API key is missing!");
//     return { success: false, error: "Server configuration error" };
//   }

//   let sendSmtpEmail = new brevo.SendSmtpEmail({
//     subject: `My ${subject}`,
//     htmlContent: `<html><body><h1>Common: This is my first transactional email ${parameter}</h1></body></html>`,
//     sender,
//     to,
//     replyTo: replyTo || sender, // Default replyTo if not provided
//     headers: { "Some-Custom-Name": "unique-id-1234" },
//     params: { parameter, subject },
//   });

//   try {
//     const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
//     console.log("Email sent successfully:", response);
//     return { success: true, data: response };
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return { success: false, error: "Failed to send email" };
//   }
// }
