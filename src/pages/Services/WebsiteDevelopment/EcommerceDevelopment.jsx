import { Box, useComputedColorScheme } from "@mantine/core";
import EDHero from "../../../components/EcommerceDevelopmentMain/EDHero";
import EDServiceSection from "../../../components/EcommerceDevelopmentMain/EDServiceSection";
import EDProcessSection from "../../../components/EcommerceDevelopmentMain/EDProcessSection";
import EDWhyChooseUs from "../../../components/EcommerceDevelopmentMain/EDWhyChooseUs";
import EDStatsSections from "../../../components/EcommerceDevelopmentMain/EDStatsSections";
import EDTools from "../../../components/EcommerceDevelopmentMain/EDTools";
import EDClientSection from "../../../components/EcommerceDevelopmentMain/EDClientSection";
import EDFaq from "../../../components/EcommerceDevelopmentMain/EDFaq";
import EDCTA from "../../../components/EcommerceDevelopmentMain/EDCTA";
const EcommerceDevelopment= () => {
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
        <EDHero/>
        <EDServiceSection/>
        <EDProcessSection/>
        <EDWhyChooseUs/>
        <EDStatsSections/>
        <EDTools/>
        <EDClientSection/>
        <EDFaq/>
        <EDCTA/>
      
    </Box>
  );
};
export default EcommerceDevelopment;