import { Box, useComputedColorScheme } from "@mantine/core";
import ServicesHero from "./ServicesHero";
import ServicesOverview from "./ServicesOverview";
import Devops from "./Devops";
import CustomSoftwareDevelopment from "./CustomSoftwareDevelopment";
import SoftwareOutsourcing from "./SoftwareOutsourcing";
import Projectresourceconsulting from "./Projectresourceconsulting";
import HowWeWork from "./HowWeWork";
import IndustriesWeServe from "./IndustriesWeServe";
import ConnectOurTeam from "./ConnectOurTeam";
import ClientReviews from "./ClientReviews";
import LetsBuildTogether from "./LetsBuildTogether";



const Services = () => {
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
      <ServicesHero />
      <ServicesOverview />
      <Devops />
      <CustomSoftwareDevelopment />
      <SoftwareOutsourcing />
      <Projectresourceconsulting />
      <HowWeWork />
      <IndustriesWeServe />
      <ConnectOurTeam />
      <ClientReviews />
      <LetsBuildTogether />
    </Box>
  );
};

export default Services;