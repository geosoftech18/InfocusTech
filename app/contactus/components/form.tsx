"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import countries from "@/data/countries.json";

import { toast, Toaster } from "react-hot-toast";
import { sendContactEmail } from "@/actions/email/brevo";
import { AnimatedButton } from "@/components/ui/animatedButton";
import { formFieldUploader } from "@/lib/uploader/uploader";
import { TransformedData } from "@/lib/graphql/getContactUs";

type FormFieldType = "text" | "email" | "select" | "textarea";

interface FormFieldConfig {
  name: keyof z.infer<typeof FormSchema>; // Ensure name matches the schema keys
  label: string;
  placeholder: string;
  type: FormFieldType;
  options?: string[]; // For dropdowns (select fields)
  validation?: string; // Optional validation message
}

interface FormConfig {
  fields: FormFieldConfig[];
  services: string[];
  countries: string[];
}

export const FormSchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  mobile: z.string().min(10, "Invalid mobile number"),
  country: z.string().min(1, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// formConfig.fields.forEach((field) => {
//   formFieldUploader({
//     name: field.name,
//     label: field.label,
//     placeholder: field.placeholder,
//     type: field.type,
//   });
// });

const ContactUsForm: React.FC<TransformedData> = (res) => {
  const to = process.env.NEXT_PUBLIC_contactEmail;

  // console.log(res.services, "services");

  const formConfig: FormConfig = {
    fields: res.fields.map((field) => ({
      name: field.name as keyof z.infer<typeof FormSchema>, // Ensure name matches the schema keys
      label: field.label || "",
      placeholder: field.placeholder || "",
      type: field.type as FormFieldType,
    })),
    services: res.services,
    countries: countries.countries,
  };

  // console.log("formConfig:", formConfig);
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    if (!to) {
      toast.error("Source email not found");
      return;
    }
    const response = await sendContactEmail(to, values);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: formConfig.fields.reduce((acc, field) => {
      acc[field.name] = ""; // Set default value for each field
      return acc;
    }, {} as Record<string, string>),
  });

  return (
    <Card className="col-span-1">
      <Toaster />
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {formConfig.fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      {field.type === "select" ? (
                        <Select
                          defaultValue={formField.value || ""}
                          value={formField.value}
                          onValueChange={(value) => {
                            formField.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {(field.name === "country"
                              ? formConfig.countries
                              : field.name === "service"
                              ? formConfig.services
                              : []
                            ).map((option, index) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          placeholder={field.placeholder}
                          {...formField}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          {...formField}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="w-full flex items-center my-5 justify-between">
              <AnimatedButton size={"lg"} type="submit">
                Submit
              </AnimatedButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactUsForm;
