
import { FetchCareerData } from "@/actions/fetchCareer";
import CareersHero, { CareersHeroProps } from "./components/careerHero";
import JobListings, { Job } from "./components/careerTable";

// Sample Dynamic Data
// const careersData = {
//   company: "Infocus",
//   description: `At Infocus, innovative ideas, entrepreneurial spirit, and knowledge count. It fosters an atmosphere of learning and personnel development. We are looking for those who:`,
//   bullets: [
//     "Are excited about working in core software product development",
//     "Are excited about working in a pure consulting company",
//     "Are obsessed about broadening their Domain Expertise",
//     "Want to get trained with the best of the best",
//     "Are inclined to think out of the box",
//   ],
//   extraDescription: `At Infocus, it's not about just another job. It's a whole new life altogether. Our journey started in 2002, and we continue to turn 'Mission Impossible' initiatives into 'Mission Possible'. Come join our journey!`,
//   jobs: [
//     {
//       competencyGroup: "Software Development",
//       jobDescription: "Full-Stack Developer",
//       yearsOfExperience: "2-5 years",
//       location: "Remote",
//       vacancies: 3,
//     },
//     {
//       competencyGroup: "Product Management",
//       jobDescription: "Product Owner",
//       yearsOfExperience: "5+ years",
//       location: "New York, USA",
//       vacancies: 1,
//     },
//     {
//       competencyGroup: "UX/UI Design",
//       jobDescription: "Senior UX Designer",
//       yearsOfExperience: "3+ years",
//       location: "London, UK",
//       vacancies: 2,
//     },
//   ],
// };

export default async function CareersPage() {
  const response: {
    success: boolean;
    data?: {
      careerHeroData: CareersHeroProps;
      careerTableData: Job[];
    } | null;
    error?: string;
  } = await FetchCareerData()


  if(!response.data){
    return <div>
      NADA
    </div>
  }

  return(
    <main className="min-h-screen  dark:bg-gray-900  ">
      <CareersHero
        imageUrl={response.data.careerHeroData.imageUrl}
        bullets={response.data.careerHeroData.bullets}
        company={response.data.careerHeroData.company}
        extraDescription={response.data.careerHeroData.extraDescription}
        description={response.data.careerHeroData.description}
      />
      <JobListings jobs={response.data.careerTableData} />
    </main>
  );
}
