import { Box, Container, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";

const STEPS = [
  {
    number: "01",
    title: "Deep Audit",
    description:
      "We analyse your current site, competitors, and market landscape to find every growth opportunity.",
  },
  {
    number: "02",
    title: "Strategy Build",
    description:
      "A customised SEO roadmap with priorities, timelines, and expected outcomes tailored to your goals.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Technical fixes, content creation, and link building executed by certified SEO specialists.",
  },
  {
    number: "04",
    title: "Monitor & Optimise",
    description:
      "Continuous tracking of rankings, traffic, and algorithm updates with rapid response adjustments.",
  },
  {
    number: "05",
    title: "Report & Scale",
    description:
      "Monthly reporting with actionable insights. Scale what works, eliminate what doesn't.",
  },
];

const SEOProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    numberFill: isDark ? "rgba(20,184,166,0.14)" : "rgba(20,184,166,0.12)",
    connector: isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)",
    stepTitle: isDark ? "#ffffff" : "#0f172a",
    stepText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={64}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            Our Process
          </Text>

          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
            }}
          >
            How We{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Rank You Higher
            </Box>
          </Title>

          <Text
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: colors.subtitle,
              marginTop: 8,
            }}
          >
            A proven 5-step framework that delivers consistent results
            across industries and competition levels.
          </Text>
        </Stack>

        <Box
          className="seo-process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            columnGap: 48,
            rowGap: 56,
          }}
        >
          {STEPS.map((step, index) => {
            const isLastInRow = (index + 1) % 4 === 0;
            const showConnector = !isLastInRow && index < STEPS.length - 1;
            return (
              <Box key={step.number} style={{ position: "relative" }}>
                <Stack gap={4}>
                  <Text
                    style={{
                      fontSize: "3.25rem",
                      fontWeight: 800,
                      lineHeight: 1,
                      color: colors.numberFill,
                      marginBottom: 8,
                    }}
                  >
                    {step.number}
                  </Text>
                  <Text
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: colors.stepTitle,
                    }}
                  >
                    {step.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: colors.stepText,
                    }}
                  >
                    {step.description}
                  </Text>
                </Stack>

                {showConnector && (
                  <Box
                    className="seo-process-connector"
                    style={{
                      position: "absolute",
                      top: 30,
                      right: -24,
                      width: 48,
                      height: 1,
                      backgroundColor: colors.connector,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .seo-process-grid {
            grid-template-columns: 1fr !important;
            row-gap: 40px !important;
          }
          .seo-process-connector {
            display: none;
          }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .seo-process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .seo-process-connector {
            display: none;
          }
        }
      `}</style>
    </Box>
  );
};

export default SEOProcessSection;
