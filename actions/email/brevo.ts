"use server"
import { FormSchema } from '@/app/contactus/components/form';
import axios from 'axios';
import { z } from 'zod';

type EmailResponse = {
    success: boolean;
    message: string;
  };


export const sendContactEmail = async (to:string,formData: z.infer<typeof FormSchema>
): Promise<EmailResponse> => {
  try {
    const apiKey = process.env.SENDINBLUE_API_KEY;
    const apiUrl = 'https://api.brevo.com/v3/smtp/email';
    

    if(!apiKey){
        return {
            success:false,
            message:"api key not found"
        }
    }

    const emailData = {
      sender: { name: formData.name, email: formData.email },
      to: [{ email: to, name: 'Recipient Name' }],
      subject: `New Contact Form Submission from ${formData.name}`,
      htmlContent: `
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile:</strong> ${formData.mobile}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
      replyTo: { email: formData.email, name: formData.name },
      headers: { 'Custom-Header': 'ContactFormSubmission' },
      params: { subject: 'New Contact Form Submission' }
    };

    const response = await axios.post(apiUrl, emailData, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });

    console.log('Email sent successfully:', response.data);
    return { success: true, message: 'Email sent successfully' };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // It's an Axios error
      if (error.response) {
        console.error('Error response data:', error.response.data);
      } else {
        console.error('Error message:', error.message);
      }
    } else {
      // Not an Axios error
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to send email');
  }
};
