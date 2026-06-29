import {
  Box,
  Container,
  Stack,
  Title,
  Text,
} from "@mantine/core";

import JobFilters from "../../components/careers/JobFilters";
import JobList from "../../components/careers/JobList";
import WhyJoinUs from "../../components/careers/WhyJoinUs";
import HiringProcess from "../../components/careers/HiringProcess";
import CareerFAQ from "../../components/careers/CareerFAQ";

const OpenPositions = () => {
  return (
    <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
    <Box py={70}>
      <Container size="xl">
        <Stack gap={50}>
          <div>
            <Text
              c="blue"
              fw={700}
              tt="uppercase"
            >
              Careers
            </Text>

            <Title order={1}>
              Current Open Positions
            </Title>

            <Text c="dimmed" mt="sm">
              Join our talented team and build innovative
              digital products that impact thousands of users.
            </Text>
          </div>

          <JobFilters />

          <JobList />

          <WhyJoinUs />

          <HiringProcess />

          <CareerFAQ />
        </Stack>
      </Container>
    </Box>
    </Container>
  );
};

export default OpenPositions;