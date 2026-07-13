import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const steps = [
  {
    number: "01",
    title: "Requirements Mapping",
    description:
      "We understand your sales and support workflow deeply before designing anything — no assumptions, just your process.",
  },
  {
    number: "02",
    title: "CRM Architecture & Design",
    description:
      "Data model, modules, and integrations are planned to match exactly how your team works today and will scale tomorrow.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Agile builds with regular demos so you see progress every step of the way and can course-correct early.",
  },
  {
    number: "04",
    title: "Rollout & Training",
    description:
      "Team onboarding, data migration, and go-live support to make sure adoption is smooth from day one.",
  },
];
const CrmProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        {/* Section Label */}
        <Text
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#14b8a6",
          }}
        >
          Our Process
        </Text>
        {/* Heading */}
        <Text
          fw={800}
          mb={16}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          How We{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Build Your CRM
          </Text>
        </Text>
        {/* Subtitle */}
        <Text
          mb={{ base: 40, md: 60 }}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          A proven 4-step process that takes you from messy spreadsheets to a system your team loves using.
        </Text>
        {/* Steps */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={32}>
          {steps.map((step, index) => (
            <Box key={index}>
              {/* Number */}
              <Text
                fw={800}
                mb={12}
                style={{
                  fontSize: 52,
                  lineHeight: 1,
                  color: isDark
                    ? "rgba(20,184,166,0.18)"
                    : "rgba(13,148,136,0.15)",
                }}
              >
                {step.number}
              </Text>
              {/* Title */}
              <Text
                fw={700}
                mb={10}
                style={{
                  fontSize: 18,
                  color: isDark ? "#ffffff" : "#0b1326",
                }}
              >
                {step.title}
              </Text>
              {/* Description */}
              <Text
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: isDark ? "rgba(255,255,255,0.6)" : "rgba(11,19,38,0.6)",
                }}
              >
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default CrmProcessSection;