import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";

const steps = [
  {
    number: "01",
    title: "Planning & Architecture",
    description:
      "We map your site structure, choose the tech stack, and create a detailed development plan before writing a single line of code.",
  },
  {
    number: "02",
    title: "Development Sprints",
    description:
      "Agile 2-week sprints with demos after each phase. You see real progress and can give feedback throughout the build.",
  },
  {
    number: "03",
    title: "QA & Testing",
    description:
      "Cross-browser testing, mobile testing, performance audits, and security checks before any website goes live.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment with DNS management, staging-to-live migration, and 30 days of post-launch monitoring and support.",
  },
];

const WebsiteDevelopmentProcess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box
      component="section"
      py={100}
      style={{
        background: isDark
          ? "rgba(255,255,255,0.02)"
          : "rgba(15,23,42,0.02)",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(15,23,42,0.06)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(15,23,42,0.06)",
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <Stack gap={10} mb={70} maw={700}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            How It Works
          </Text>

          <Title
            order={2}
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
              lineHeight: 1.2,
            }}
          >
            Our <span style={{ color: "#14b8a6" }}>Development Process</span>
          </Title>

          <Text
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            Structured sprints, clear milestones, and zero surprises — from
            kickoff to launch.
          </Text>
        </Stack>

        {/* Steps */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {steps.map((step, index) => (
            <Stack key={index} gap={4}>
              <Text
                fw={800}
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 1,
                  color: isDark
                    ? "rgba(20,184,166,0.15)"
                    : "rgba(20,184,166,0.18)",
                  marginBottom: 8,
                }}
              >
                {step.number}
              </Text>

              <Text
                fw={700}
                style={{
                  fontSize: "1.1rem",
                  color: isDark ? "#f8fafc" : "#0f172a",
                  marginBottom: 4,
                }}
              >
                {step.title}
              </Text>

              <Text
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.65)"
                    : "rgba(15,23,42,0.6)",
                }}
              >
                {step.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentProcess;