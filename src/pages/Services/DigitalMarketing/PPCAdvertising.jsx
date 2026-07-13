import { Box, useComputedColorScheme } from "@mantine/core";
import PPCHero from "../../../components/PPCAdvertisingMain/PPCHero"
import PPCServiceSection from "../../../components/PPCAdvertisingMain/PPCServiceSection";
import PPCProcessSection from "../../../components/PPCAdvertisingMain/PPCProcessSection";
import PPCWhyChooseUs from "../../../components/PPCAdvertisingMain/PPCWhyChooseUs";
import PPCStatsSection from "../../../components/PPCAdvertisingMain/PPCStatsSection";
import PPCTools from "../../../components/PPCAdvertisingMain/PPCTools";
import PPCClientSuccess from "../../../components/PPCAdvertisingMain/PPCClientSuccess";
import PPCFaq from "../../../components/PPCAdvertisingMain/PPCFaq";
import PPCCTASection from "../../../components/PPCAdvertisingMain/PPCCTASection";
const PPCAdvertising = () => {
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
        <PPCHero/>
        <PPCServiceSection/>
        <PPCProcessSection/>
        <PPCWhyChooseUs/>
        <PPCStatsSection/>
        <PPCTools/>
        <PPCClientSuccess/>
        <PPCFaq/>
        <PPCCTASection/>
      
    </Box>
  );
};
export default PPCAdvertising;