import { useState } from "react";
import { Box, useComputedColorScheme } from "@mantine/core";

import CareersHero from "./CareersHero";
import JobFilters from "./JobFilters";
import JobList from "./JobList";
import WhyJoinUs from "./WhyJoinUs";
import HiringProcess from "./HiringProcess";
import CareerFAQ from "./CareerFAQ";

const Careers = () => {
  const computedColorScheme = useComputedColorScheme("light");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    jobType: "",
    location: "",
  });

  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          computedColorScheme === "dark"
            ? `
              radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 35%),
              radial-gradient(circle at top right, rgba(6,182,212,.15), transparent 35%),
              linear-gradient(180deg,#08111f 0%,#0b1326 45%,#060d18 100%)
            `
            : `
              radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 35%),
              radial-gradient(circle at top right, rgba(6,182,212,.06), transparent 35%),
              linear-gradient(180deg,#ffffff 0%,#f7fbff 45%,#eef7ff 100%)
            `,
      }}
    >
      <CareersHero />

      <JobFilters
        filters={filters}
        setFilters={setFilters}
      />

      <JobList filters={filters} />

      <WhyJoinUs />

      <HiringProcess />

      <CareerFAQ />
    </Box>
  );
};

export default Careers;