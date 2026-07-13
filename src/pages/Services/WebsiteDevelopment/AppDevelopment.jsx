import { Box, useComputedColorScheme } from "@mantine/core";
import AppHero from "../../../components/AppDevelopmentMain/AppHero";
import AppServiceSection from "../../../components/AppDevelopmentMain/AppServiceSection";
import AppProcessSection from "../../../components/AppDevelopmentMain/AppProcessSection";
import AppWhyChooseUs from "../../../components/AppDevelopmentMain/AppWhyChooseUs";
import AppStatsSections from "../../../components/AppDevelopmentMain/AppStatsSections";
import AppTools from "../../../components/AppDevelopmentMain/AppTools";
import AppClientSection from "../../../components/AppDevelopmentMain/AppClientSection";
import AppFaq from "../../../components/AppDevelopmentMain/AppFaq";
import AppCtaSection from "../../../components/AppDevelopmentMain/AppCtaSection";
const AppDevelopment= () => {
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
        <AppHero/>
        <AppServiceSection/>
        <AppProcessSection/>
        <AppWhyChooseUs/>
        <AppStatsSections/>
        <AppTools/>
        <AppClientSection/>
        <AppFaq/>
        <AppCtaSection/>
      
    </Box>
  );
};
export default AppDevelopment;