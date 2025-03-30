"use client"

import { AnimatedButton } from "@/components/ui/animatedButton";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Job {
  competencyGroup: string;
  jobDescription: string;
  yearsOfExperience: string;
  location: string;
  vacancies: number;
}

export default function JobListings({ jobs }: { jobs: Job[] }) {
  const pathname = usePathname();
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-4">
        Open Positions
      </h2>
      <div className="overflow-x-auto">
        <Table className="w-full bg-white shadow-md dark:bg-gray-800 rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-200 dark:bg-gray-700">
              <TableHead>Competency Group</TableHead>
              <TableHead>Job Description</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Vacancies</TableHead>
              <TableHead>Apply Now</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TableCell>{job.competencyGroup}</TableCell>
                <TableCell>{job.jobDescription}</TableCell>
                <TableCell>{job.yearsOfExperience}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.vacancies}</TableCell>
                <TableCell>
                  <Link  href={`${pathname}/${index}`}>
                    <AnimatedButton className="w-full">Apply Now</AnimatedButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
