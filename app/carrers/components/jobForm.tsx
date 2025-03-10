"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";
import { sendJobApplicationEmail } from "@/actions/email/jobApplicationEmail";
import { JobApplicationSchema } from "./jobApplicationSchema";

// Define an array for non-file fields
const nonFileKeys: (keyof z.infer<typeof JobApplicationSchema>)[] = [
  "LegalFirstName",
  "LegalLastName",
  "Email",
  "Mobile",
  "University",
  "PrimaryDegree",
  "DegreeMajor",
  "SecondaryDegree",
  "SecondaryDegreeMajor",
  "GraduationMonth",
  "GraduationYear",
  "StartAvailability",
  "GPA",
  "Certifications",
];

const JobApplicationForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof JobApplicationSchema>>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      LegalFirstName: "",
      LegalLastName: "",
      Email: "",
      Mobile: "",
      University: "",
      PrimaryDegree: "",
      DegreeMajor: "",
      SecondaryDegree: "",
      SecondaryDegreeMajor: "",
      GraduationMonth: "",
      GraduationYear: "",
      StartAvailability: "",
      GPA: "",
      Certifications: "",
      resume: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof JobApplicationSchema>) {
    const formData = new FormData();
    // Append all non-file fields
    nonFileKeys.forEach((key) => {
      formData.append(key, values[key] as string);
    });
    // Append the resume file (if exists)
    if (values.resume) {
      formData.append("resume", values.resume);
    }

    try {
      setLoading(true);
      const hrEmail =
        process.env.NEXT_PUBLIC_contactEmail || "hr@example.com";
      const response = await sendJobApplicationEmail(hrEmail, formData);
      if (response.success) {
        toast.success(response.message);
        form.reset();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full mx-auto p-2 md:p-6 shadow-lg bg-gray-50">
      <Toaster />
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {nonFileKeys.map((key:any) => (
              <FormField
                key={key}
                name={key}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-semibold">
                      {key.replace(/([A-Z])/g, " $1")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                        {...field}
                        className="border text-xs md:text-sm rounded p-2"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs md:text-sm" />
                  </FormItem>
                )}
              />
            ))}
            {/* Resume Upload Field using native file input */}
            <FormField
              name="resume"
              control={form.control}
              render={({ field: { onChange, ref } }) => (
                <FormItem className="flex flex-col md:col-span-2">
                  <FormLabel className="font-semibold">
                    Upload Resume (PDF only)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) =>
                        onChange(e.target.files && e.target.files[0])
                      }
                      ref={ref}
                      className="border rounded p-2 text-xs md:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs md:text-sm" />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center md:col-span-2">
              <Button
                type="submit"
                className="w-full md:w-1/2"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default JobApplicationForm;
