import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description:
      "Review your existing email setup, list health, deliverability, and gaps. Build a 90-day campaign roadmap.",
  },
  {
    number: "02",
    title: "Segmentation",
    description:
      "Clean and segment your list by behaviour, purchase history, and lifecycle stage for precision targeting.",
  },
  {
    number: "03",
    title: "Design & Copy",
    description:
      "Create on-brand templates and persuasive copy for each campaign type — promotional, nurture, transactional.",
  },
  {
    number: "04",
    title: "Automation Setup",
    description:
      "Build and test all automated flows — welcome, abandoned cart, post-purchase, and win-back sequences.",
  },
  {
    number: "05",
    title: "Test & Optimise",
    description:
      "Ongoing A/B testing and monthly performance reviews to improve every metric, every month.",
  },
];
const EmailProcessSection = () => {
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
            Build Your Campaigns
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
          A proven 5-step process that transforms your email list into a predictable revenue channel.
        </Text>
        {/* Steps */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing={32}>
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
export default EmailProcessSection;
