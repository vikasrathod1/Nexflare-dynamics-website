import { Box, useComputedColorScheme } from "@mantine/core";
import ProductHero from "./ProductHero";
import HRMSoftwareScreen from "./HRMSoftwareScreen";
import ERPSoftwareScreen from "./Erpsoftwarescreen";
import CRMSoftwareScreen from "./CRMsoftwarescreen";
import ProjectManagementScreen from "./ProjectManagementScreen";
import BookingScreen from "./BookingScreen";
import MobileAppScreen from "./MobileAppScreen";
import FinanceScreen from "./FinanceScreen";
import ComparisonScreen from "./ComparisonScreen";
import IndustriesScreen from "./Industriesscreen";
import NexflareSuiteScreen from "./NexflareSuiteScreen";
import Ctascreen from "./Ctascreen";
import CTAScreen from "./Ctascreen";
import PageTitle from "../../components/PageTitle";


const Products = () => {
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <>
    <PageTitle title="Products" />
    <Box
      style={{
        minHeight: "100vh",
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
      <ProductHero />
      <HRMSoftwareScreen />
      <ERPSoftwareScreen />
      <CRMSoftwareScreen />
      <ProjectManagementScreen />
      <MobileAppScreen />
      <BookingScreen />
      <FinanceScreen />
      <ComparisonScreen />
      <IndustriesScreen />
      <NexflareSuiteScreen />
      <CTAScreen />

     
    </Box>
    </>
  );
};

export default Products;