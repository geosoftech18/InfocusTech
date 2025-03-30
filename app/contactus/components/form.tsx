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

import {toast,Toaster} from "react-hot-toast"
import { sendContactEmail } from "@/actions/email/brevo";
import { AnimatedButton } from "@/components/ui/animatedButton";

const services = [
  "SAP Licensing",
  "SAP Implementation",
  "Maintainance and Support",
  "Data Migration",
  "Resource Consulting",
  "Others",
];

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

const ContactUsForm = () => {
  // const [step, setStep] = useState(1);

  const to = process.env.NEXT_PUBLIC_contactEmail

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    if(!to){
      toast.error("source email not found")
      return;
    }
    const response=await sendContactEmail(to,values)
    if(response.success){
      toast.success(response.message)
    }else{

      toast.error(response.message)
    }

  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      service: "",
      email: "",
      mobile: "",
      country: "",
      message: "",
      company: "",
      jobTitle: "",
    },
  });
  console.log(form.formState.errors);

  return (
    <Card className="col-span-1">
      <Toaster/>
      {/* <div className="flex items-center justify-center my-2 w-full">
        <div
          className={`rounded-full w-10 h-10 flex items-center justify-center  border bg-[#e60000] text-gray-200  font-semibold`}
        >
          1
        </div>
        <div className={`w-1/4 mx-0 h-1 bg-[#e60000]`}></div>
        <div
          className={`w-1/4 mx-0 h-1 ${
            step === 2 ? "bg-[#e60000]" : "bg-gray-300"
          } transition-colors duration-1000 fade-in`}
        ></div>
        <div
          className={`rounded-full w-10 h-10 flex items-center justify-center border ${
            step === 2 ? "bg-[#e60000] text-gray-200" : "bg-gray-300"
          } transition-colors duration-1000  font-semibold`}
        >
          2
        </div>
      </div> */}
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* {step === 1 && ( */}
              <>
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* email */}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* company */}

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Job Title */}

                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Job Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex items-end justify-end">
                  {/* <Button
                    onClick={() => {
                      setStep(2);
                    }}
                    type="button"
                    className="my-5"
                  >
                    {" "}
                    Next Step
                  </Button> */}
                </div>
              </>
            {/* )} */}

            {/* {step === 2 && ( */}
              <>
                {/* Mobile */}

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Mobile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Country */}

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value || ""}
                          value={field.value}
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.countries.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* services */}

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value || ""}
                          value={field.value}
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Type Your Message */}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type Your Message </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full flex items-center my-5  justify-between">
                  {/* <Button
                    onClick={() => {
                      setStep(1);
                    }}
                    className="my-5"
                  >
                    {" "}
                    Previous Step
                  </Button> */}

                  <AnimatedButton size={"lg"} type="submit" >
                    Submit
                  </AnimatedButton >
                </div>
              </>
            {/* )} */}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactUsForm;
