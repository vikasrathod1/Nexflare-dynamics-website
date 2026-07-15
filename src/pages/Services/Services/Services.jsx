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

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const Services = () => {
  const computedColorScheme = useComputedColorScheme("light");

  const location = useLocation();

  useEffect(() => {
  if (location.hash) {
    const id = location.hash.substring(1);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}, [location]);

  return (

    <>
    <PageTitle title="Services" />
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
      {/* <Devops />
      <CustomSoftwareDevelopment />
      <SoftwareOutsourcing />
      <Projectresourceconsulting /> */}
      <section id="devops">
        <Devops />
      </section>

      <section id="software-outsourcing">
        <SoftwareOutsourcing />
      </section>

      <section id="consulting">
        <Projectresourceconsulting />
      </section>

      <section id="custom-software">
        <CustomSoftwareDevelopment />
      </section>
      <HowWeWork />
      <IndustriesWeServe />
      <ConnectOurTeam />
      <ClientReviews />
      <LetsBuildTogether />
    </Box>
    </>
  );
};

export default Services;
