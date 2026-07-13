import { Box, useComputedColorScheme } from "@mantine/core";
import EmailHero from "../../../components/EmailMarketingMain/EmailHero";
import EmailServiceSection from "../../../components/EmailMarketingMain/EmailServiceSection";
import EmailProcessSection from "../../../components/EmailMarketingMain/EmailProcessSection";
import EmailWhyChooseUs from "../../../components/EmailMarketingMain/EmailWhyChooseUs";
import EmailStatsSection from "../../../components/EmailMarketingMain/EmailStatsSection";
import EmailTools from "../../../components/EmailMarketingMain/EmailTools";
import EmailClientSection from "../../../components/EmailMarketingMain/EmailClientSection";
import EmailFaq from "../../../components/EmailMarketingMain/EmailFaq";
import EmailCTA from "../../../components/EmailMarketingMain/EmailCTA";
import EmailOffers from "../../../components/EmailMarketingMain/EmailOffers";
const EmailMarketing = () => {
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
        <EmailHero/>
        <EmailServiceSection/>
        <EmailOffers/>
        <EmailProcessSection/>
        <EmailWhyChooseUs/>
        <EmailStatsSection/>
        <EmailTools/>
        <EmailClientSection/>
        <EmailFaq/>
        <EmailCTA/>
      
    </Box>
  );
};
export default EmailMarketing;