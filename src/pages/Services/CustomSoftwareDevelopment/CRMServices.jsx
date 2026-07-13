import { Box, useComputedColorScheme } from "@mantine/core";
import CRMHero from "../../../components/CRMServicesMain/CRMHero";
import CRMServiceSection from "../../../components/CRMServicesMain/CRMServiceSection";
import CRMProcessSection from "../../../components/CRMServicesMain/CRMProcessSection";
import CRMWhyChooseUs from "../../../components/CRMServicesMain/CRMWhyChooseUs";
import CRMStatsSection from "../../../components/CRMServicesMain/CRMStatsSection";
import CRMFaq from "../../../components/CRMServicesMain/CRMFaq";
import CRMCTA from "../../../components/CRMServicesMain/CRMCTA";
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
      <CRMHero/>
      <CRMServiceSection/>
      <CRMProcessSection/>
      <CRMWhyChooseUs/>
      <CRMStatsSection/>
      <CRMFaq/>
      <CRMCTA/>
    </Box>
  );
};
export default ApiDevelopment;