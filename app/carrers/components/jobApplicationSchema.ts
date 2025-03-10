import { z } from "zod";

export const JobApplicationSchema = z.object({
  LegalFirstName: z.string().min(1, "Legal First Name is required"),
  LegalLastName: z.string().min(1, "Legal Last Name is required"),
  Email: z.string().email("Invalid email"),
  Mobile: z.string().min(10, "Invalid mobile number"),
  University: z.string().min(1, "University/School is required"),
  PrimaryDegree: z.string().min(1, "Primary Degree is required"),
  DegreeMajor: z.string().min(1, "Degree Subject/Major is required"),
  SecondaryDegree: z.string().optional(),
  SecondaryDegreeMajor: z.string().optional(),
  GraduationMonth: z.string().min(1, "Month of Graduation is required"),
  GraduationYear: z.string().min(4, "Year of Graduation is required"),
  StartAvailability: z.string().optional(),
  GPA: z.string().optional(),
  Certifications: z.string().optional(),
  resume: z
  .instanceof(File, { message: "Resume is required" })
  .refine((file) => file.type === "application/pdf", "Only PDF files are allowed"),
});
