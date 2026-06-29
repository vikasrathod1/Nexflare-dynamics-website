import { Container, SimpleGrid, Stack, Text } from "@mantine/core";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "React.js Developer",
    department: "Frontend",
    location: "Pune",
    jobType: "Full Time",
    experience: "1-3 Years",
    salary: "₹4 - ₹7 LPA",
    description:
      "Develop modern, scalable React.js applications using Mantine UI and REST APIs.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
  },
  {
    id: 2,
    title: "Java Developer",
    department: "Backend",
    location: "Pune",
    jobType: "Full Time",
    experience: "2-5 Years",
    salary: "₹5 - ₹10 LPA",
    description:
      "Build enterprise Java applications using Spring Boot and Microservices.",
    skills: ["Java", "Spring Boot", "MySQL", "REST API"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "UI/UX",
    location: "Remote",
    jobType: "Full Time",
    experience: "1-3 Years",
    salary: "₹3 - ₹6 LPA",
    description:
      "Create modern UI/UX designs and interactive prototypes for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    id: 4,
    title: "QA Engineer",
    department: "QA",
    location: "Mumbai",
    jobType: "Full Time",
    experience: "2+ Years",
    salary: "₹4 - ₹8 LPA",
    description:
      "Perform manual and automation testing to ensure software quality.",
    skills: ["Selenium", "Postman", "JMeter"],
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Remote",
    jobType: "Full Time",
    experience: "1-2 Years",
    salary: "₹3 - ₹5 LPA",
    description:
      "Manage SEO, Google Ads, and social media campaigns for company growth.",
    skills: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    id: 6,
    title: "HR Executive",
    department: "HR",
    location: "Pune",
    jobType: "Full Time",
    experience: "1+ Years",
    salary: "₹3 - ₹5 LPA",
    description:
      "Handle recruitment, onboarding, employee engagement, and HR operations.",
    skills: ["Recruitment", "Communication"],
  },
];

const JobList = ({ filters }) => {
  const filteredJobs = jobs.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.description.toLowerCase().includes(filters.search.toLowerCase());

    const departmentMatch =
      !filters.department || job.department === filters.department;

    const typeMatch = !filters.jobType || job.jobType === filters.jobType;

    const locationMatch =
      !filters.location || job.location === filters.location;

    return searchMatch && departmentMatch && typeMatch && locationMatch;
  });

  if (filteredJobs.length === 0) {
    return (
      <Text ta="center" c="dimmed" size="lg" py={50}>
        No jobs found.
      </Text>
    );
  }

  return (
    <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
      <Stack>
        <Text fw={700} size="lg" pt={30} >
          {filteredJobs.length} Open Position
          {filteredJobs.length > 1 ? "s" : ""}
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default JobList;
