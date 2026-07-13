import { Box, useComputedColorScheme } from "@mantine/core";
import WebsiteDesignHero from "../../../components/WebsiteDesignMain/WebsiteDesignHero";
import WebsiteDesignServiceSection from "../../../components/WebsiteDesignMain/WebsiteDesignServiceSection";
import WebsiteDesignProcessSection from "../../../components/WebsiteDesignMain/WebsiteDesignProcessSection";
import WebsiteDesignWhyChooseUs from "../../../components/WebsiteDesignMain/WebsiteDesignWhyChooseUs";
import WebsiteDesignStatsSection from "../../../components/WebsiteDesignMain/WebsiteDesignStatsSection";
import WebsiteDesignTools from "../../../components/WebsiteDesignMain/WebsiteDesignTools";
import WebsiteDesignClientSection from "../../../components/WebsiteDesignMain/WebsiteDesignClientSection";
import WebsiteDesignFaq from "../../../components/WebsiteDesignMain/WebsiteDesignFaq";
import WebsiteDesignCTA from "../../../components/WebsiteDesignMain/WebsiteDesignCTA";
const WebsiteDesign = () => {
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
        <WebsiteDesignHero/>
        <WebsiteDesignServiceSection/>
        <WebsiteDesignWhyChooseUs/>
        <WebsiteDesignProcessSection/>
        <WebsiteDesignStatsSection/>
        <WebsiteDesignTools/>
        <WebsiteDesignClientSection/>
        <WebsiteDesignFaq/>
        <WebsiteDesignCTA/>
      
    </Box>
  );
};
export default WebsiteDesign;