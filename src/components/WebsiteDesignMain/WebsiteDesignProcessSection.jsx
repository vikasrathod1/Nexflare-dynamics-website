import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";

const steps = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "We learn your brand, goals, audience, and competitors to build a rock-solid design strategy before touching a pixel.",
  },
  {
    number: "02",
    title: "Wireframes & Prototypes",
    description:
      "Low-fidelity wireframes define structure and user flow. You approve the layout before visual design begins.",
  },
  {
    number: "03",
    title: "Visual Design",
    description:
      "Full high-fidelity designs in Figma — colours, typography, imagery, icons, and micro-interactions all crafted to perfection.",
  },
  {
    number: "04",
    title: "Handoff & Launch",
    description:
      "Design files handed to developers with detailed specs, or we handle development too — your choice.",
  },
];

const WebsiteDesignProcessSection = () => {
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
          How It Works
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
          Our{" "}
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
            Design Process
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
          A proven 4-step process that takes you from idea to a stunning live website.
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

export default WebsiteDesignProcessSection;
