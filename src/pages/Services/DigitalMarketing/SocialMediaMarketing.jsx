import { Box, useComputedColorScheme } from "@mantine/core";
import SMMHero from "../../../components/SocialMediaMarketingMain/SMMHero";
import SMMServiceSection from "../../../components/SocialMediaMarketingMain/SMMServiceSection";
import SMMProcessSection from "../../../components/SocialMediaMarketingMain/SMMProcessSection";
import SMMWhyChooseUs from "../../../components/SocialMediaMarketingMain/SMMWhyChooseUs";
import SMMStastsSection from "../../../components/SocialMediaMarketingMain/SMMStastsSection";
import SMMTools from "../../../components/SocialMediaMarketingMain/SMMTools";
import SMMClientsSuccess from "../../../components/SocialMediaMarketingMain/SMMClientsSuccess";
import SMMFaq from "../../../components/SocialMediaMarketingMain/SMMFaq";
import SMMCTASection from "../../../components/SocialMediaMarketingMain/SMMCTASection";
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
        <SMMHero/>
        <SMMServiceSection/>
        <SMMProcessSection/>
        <SMMWhyChooseUs/>
        <SMMStastsSection/>
        <SMMTools/>
        <SMMClientsSuccess/>
        <SMMFaq/>
        <SMMCTASection/>
      
    </Box>
  );
};
export default SEO;