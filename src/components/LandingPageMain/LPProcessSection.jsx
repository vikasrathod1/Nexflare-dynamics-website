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
    title: "Brief & Research",
    description:
      "We study your offer, audience, competitors, and traffic source to understand what will make your page convert.",
  },
  {
    number: "02",
    title: "Wireframe & Copy",
    description:
      "Wireframe layout with conversion-optimised copy — headlines, subheads, bullets, and CTAs — all written before design begins.",
  },
  {
    number: "03",
    title: "Visual Design",
    description:
      "High-fidelity design in Figma — brand-aligned, visually compelling, and built around your user's psychological journey.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Pixel-perfect build in your preferred platform — WordPress, Webflow, Unbounce, or custom HTML — with full tracking setup.",
  },
  {
    number: "05",
    title: "Launch & Optimise",
    description:
      "Go live, monitor performance, and A/B test to continuously push conversion rates higher.",
  },
];

const LPProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={100}>
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
            Our Process
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
            How We <span style={{ color: "#14b8a6" }}>Design Your Page</span>
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
            A fast, structured 5-step process that delivers a
            conversion-ready landing page in as little as 7 days.
          </Text>
        </Stack>

        {/* Steps */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {steps.map((step, index) => (
            <Box key={index} style={{ position: "relative" }}>
              {index < steps.length - 1 && (
                <Box
                  className="lp-process-connector"
                  style={{
                    position: "absolute",
                    top: 28,
                    left: "calc(100% + 4px)",
                    width: "calc(100% - 20px)",
                    height: 2,
                    background: isDark
                      ? "rgba(20,184,166,0.15)"
                      : "rgba(20,184,166,0.2)",
                    display: "none",
                  }}
                />
              )}

              <Stack gap={4}>
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
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <style>
        {`
          @media (min-width: 1200px) {
            .lp-process-connector {
              display: block !important;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LPProcessSection;