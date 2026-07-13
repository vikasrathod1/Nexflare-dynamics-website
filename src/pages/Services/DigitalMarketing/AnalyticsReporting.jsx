import { Box, useComputedColorScheme } from "@mantine/core";
import APHero from "../../../components/AnalyticsReportingMain/APHero";
import APServiceSection from "../../../components/AnalyticsReportingMain/APServiceSection";
import APOffers from "../../../components/AnalyticsReportingMain/APOffers";
import APProcess from "../../../components/AnalyticsReportingMain/APProcess";
import APWhyChooseus from "../../../components/AnalyticsReportingMain/APWhyChooseus";
import APStatsSection from "../../../components/AnalyticsReportingMain/APStatsSection";
import APTools from "../../../components/AnalyticsReportingMain/APTools";
import APClientSection from "../../../components/AnalyticsReportingMain/APClientSection";
import APFaq from "../../../components/AnalyticsReportingMain/APFaq";
import APCTA from "../../../components/AnalyticsReportingMain/APCTA";
import APResults from "../../../components/AnalyticsReportingMain/APResults";
const AnalyticsReporting = () => {
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
        <APHero/>
        <APServiceSection/>
        <APOffers/>
        <APProcess/>
        <APWhyChooseus/>
        <APStatsSection/>
        <APResults/>
        <APTools/>
        <APClientSection/>
        <APFaq/>
        <APCTA/>
      
    </Box>
  );
};
export default AnalyticsReporting;