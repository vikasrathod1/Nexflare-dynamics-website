import { Box, useComputedColorScheme } from "@mantine/core";

import AboutHero from "./AboutHero";
import AboutCompany from "./AboutCompany";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import OurServicesOverview from "./OurServicesOverview";
import MeetOurTeam from "./MeetOurTeam";
import ElevateCTAScreen from "./Elevatectascreen";
import PageTitle from "../../components/PageTitle";

const About = () => {
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <>
      <PageTitle title="About" />
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
        <AboutHero />
        <AboutCompany />
        <MissionVision />
        <WhyChooseUs />
        <OurServicesOverview />
        <MeetOurTeam />
        <ElevateCTAScreen />
      </Box>
    </>
  );
};

export default About;
