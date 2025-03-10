import JobApplicationForm from "../components/jobForm";

const JobForm = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 md:pt-10 gap-10 mx-10 md:mx-40">
      <div className="text-4xl font-semibold text-[#b00d07]">Job Application Form</div>
      <JobApplicationForm />
    </div>
  );
};

export default JobForm;
