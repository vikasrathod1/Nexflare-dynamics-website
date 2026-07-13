import { Box, useComputedColorScheme } from "@mantine/core";
import SEOHeroSection from "../../../components/SEOMain/SEOHeroSection";
import SEOServicesSection from "../../../components/SEOMain/SEOServicesSection";
import SEOProcessSection from "../../../components/SEOMain/SEOProcessSection";
import SEOWhyChooseUs from "../../../components/SEOMain/SEOWhyChooseUs";
import SEOStatsSection from "../../../components/SEOMain/SEOStatsSection";
import SEOCTASection from "../../../components/SEOMain/SEOCTASection";
import SEOFaq from "../../../components/SEOMain/SEOFaq";
import SEOTools from "../../../components/SEOMain/SEOTools";
import ClientSuccess from "../../../components/SEOMain/ClientSuccess";
const SEO = () => {
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
      <SEOHeroSection />
      <SEOServicesSection />
      <SEOProcessSection />
      <SEOWhyChooseUs />
      <SEOStatsSection />
      <SEOTools/>
      <ClientSuccess/>
      <SEOFaq />
      <SEOCTASection />
    </Box>
  );
};
export default SEO;