import { Box, useComputedColorScheme } from "@mantine/core";
import HeroSaas from "../../../components/SaaSDevelopment/HeroSaas";
import SaaSFeatures from "../../../components/SaaSDevelopment/SaaSFeatures";
import SaasDevelopmentProcess from "../../../components/SaaSDevelopment/SaasDevelopmentProcess";
import WhyChooseSaaS from "../../../components/SaaSDevelopment/WhyChooseSaaS";
import SuccessStats from "../../../components/SaaSDevelopment/SaasSuccessStats";
import SaasFAQSection from "../../../components/SaaSDevelopment/SaasFAQSection";
import SaasCTASection from "../../../components/SaaSDevelopment/SaasCTASection";
const SaaSDevelopment = () => {
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
      <HeroSaas/>
      <SaaSFeatures/>
      <SaasDevelopmentProcess/>
      <WhyChooseSaaS/>
      <SuccessStats/>
      <SaasFAQSection/>
      <SaasCTASection/>
      
      
    </Box>
  );
};
export default SaaSDevelopment;