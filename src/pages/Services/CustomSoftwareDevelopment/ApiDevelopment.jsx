import { Box, useComputedColorScheme } from "@mantine/core";
import ApiHeroSection from "../../../components/ApiDevelopmentMain/ApiHeroSection";
import ApiServicesSection from "../../../components/ApiDevelopmentMain/ApiServicesSection";
import ApiProcessSection from "../../../components/ApiDevelopmentMain/ApiProcessSection";
import ApiWhyChooseUs from "../../../components/ApiDevelopmentMain/ApiWhyChooseUs";
import ApiStatsSection from "../../../components/ApiDevelopmentMain/ApiStatsSection";
import ApiCTASection from "../../../components/ApiDevelopmentMain/ApiCTASection";
import ApiFaq from "../../../components/ApiDevelopmentMain/Apifaq";
const ApiDevelopment = () => {
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
      <ApiHeroSection />
      <ApiServicesSection />
      <ApiProcessSection />
      <ApiWhyChooseUs />
      <ApiStatsSection />
      <ApiFaq/>
      <ApiCTASection />
    </Box>
  );
};
export default ApiDevelopment;