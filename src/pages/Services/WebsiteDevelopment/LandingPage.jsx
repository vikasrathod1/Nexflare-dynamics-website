import { Box, useComputedColorScheme } from "@mantine/core";
import LPHero from "../../../components/LandingPageMain/LPHero";
import LPServiceSection from "../../../components/LandingPageMain/LPServiceSection";
import LPProcessSection from "../../../components/LandingPageMain/LPProcessSection";
import LPWhyChooseUs from "../../../components/LandingPageMain/LPWhyChooseUs";
import LPStatsSection from "../../../components/LandingPageMain/LPStatsSection";
import LPTools from "../../../components/LandingPageMain/LPTools";
import LPClientSection from "../../../components/LandingPageMain/LPClientSection";
import LPFaq from "../../../components/LandingPageMain/LPFaq";
import LPCTA from "../../../components/LandingPageMain/LPCTA";
const LandingPage= () => {
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
        <LPHero/>
        <LPServiceSection/>
        <LPProcessSection/>
        <LPWhyChooseUs/>
        <LPStatsSection/>
        <LPTools/>
        <LPClientSection/>
        <LPFaq/>
        <LPCTA/>
        
      
    </Box>
  );
};
export default LandingPage;