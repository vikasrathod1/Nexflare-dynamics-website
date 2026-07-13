import { Box, useComputedColorScheme } from "@mantine/core";
import WebsiteDevelopmentHero from "../../../components/WebsiteDevelopment/WebsiteDevelopmentHero";
import WebsiteDevelopmentServiceSection from "../../../components/WebsiteDevelopment/WebsiteDevelopmentServiceSection";
import WebsiteDevelopmentProcess from "../../../components/WebsiteDevelopment/WebsiteDevelopmentProcess";
import WebsiteDesignClientSection from "../../../components/WebsiteDesignMain/WebsiteDesignClientSection";
import WebsiteDevelopmentWhyChooseUs from "../../../components/WebsiteDevelopment/WebsiteDevelopmentWhyChooseUs";
import WebsiteDesignStatsSection from "../../../components/WebsiteDesignMain/WebsiteDesignStatsSection";
import WebsiteDesignTools from "../../../components/WebsiteDesignMain/WebsiteDesignTools";
import WebsiteDevelopmentClientSection from "../../../components/WebsiteDevelopment/WebsiteDevelopmentClientSection";
import WebsiteDesignFaq from "../../../components/WebsiteDesignMain/WebsiteDesignFaq";
import WebsiteDevelopmentFaq from "../../../components/WebsiteDevelopment/WebsiteDevelopmentFaq";
import WebsiteDevelopmentCTA from "../../../components/WebsiteDevelopment/WebsiteDevelopmentCTA";
import WebsiteDevelopmentStatsSection from "../../../components/WebsiteDevelopment/WebsiteDevelopmentStatsSection";
import WebsiteDevelopmentTools from "../../../components/WebsiteDevelopment/WebsiteDevelopmentTools";
const WebsiteDevelopment = () => {
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
      <WebsiteDevelopmentHero />
      <WebsiteDevelopmentServiceSection />
      <WebsiteDevelopmentWhyChooseUs />
      <WebsiteDevelopmentProcess />
      <WebsiteDevelopmentStatsSection />
      <WebsiteDevelopmentTools />
      <WebsiteDevelopmentClientSection />
      <WebsiteDevelopmentFaq />
      <WebsiteDevelopmentCTA />
    </Box>
  );
};
export default WebsiteDevelopment;