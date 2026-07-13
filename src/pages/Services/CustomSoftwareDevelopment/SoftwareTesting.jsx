import { Box, useComputedColorScheme } from "@mantine/core";
import TestingHeroSection from "../../../components/SoftwareTestingMain/TestingHeroSection";
import TestingServices from "../../../components/SoftwareTestingMain/TestingServices";
import TestingProcess from "../../../components/SoftwareTestingMain/TestingProcess";
import WhyChooseTesting from "../../../components/SoftwareTestingMain/WhyChooseTesting";
import TestingStats from "../../../components/SoftwareTestingMain/TestingStats";
import TestingFAQ from "../../../components/SoftwareTestingMain/TestingFAQ";
import TestingCTA from "../../../components/SoftwareTestingMain/TestingCTA";
const SoftwareTesting = () => {
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Box
      style={{
        minHeight: "100vh",
        overflow: "hidden",
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
      <TestingHeroSection/>
      <TestingServices/>
      <TestingProcess/>
      <WhyChooseTesting/>
      <TestingStats/>
      <TestingFAQ/>
      <TestingCTA/>
    </Box>
  );
};
export default SoftwareTesting;