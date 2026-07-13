import { Box, Container, Title, Text, Stack, useComputedColorScheme } from "@mantine/core";

const STEPS = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "We define your ICP, core value proposition, feature set, tech stack, and go-to-market plan — before writing a single line of code.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Multi-tenant database design, cloud infrastructure blueprint, UI/UX wireframes, and API schema — all reviewed and signed off before build starts.",
  },
  {
    number: "03",
    title: "Agile MVP Build",
    description:
      "Two-week sprints with regular demos. Core features shipped first — billing, auth, onboarding — so you can start acquiring customers fast.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Production deployment, performance tuning, user onboarding flows, and ongoing feature development as your MRR and user base grows.",
  },
];

const SaasDevelopmentProcess = () => {
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
            Our SaaS Process
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
              Launch Your SaaS
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
            A battle-tested process for taking a SaaS idea from concept to a
            live, paying-customer product — with speed, quality, and zero
            wasted effort.
          </Text>
        </Stack>

        <Box
          className="saas-process-grid"
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {STEPS.map((step, index) => (
            <Box key={step.number} className="saas-process-item" style={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
              <Stack gap={4} style={{ flex: 1 }}>
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

              {index < STEPS.length - 1 && (
                <Box
                  className="saas-process-connector"
                  style={{
                    height: 1,
                    flex: "0 0 32px",
                    backgroundColor: colors.connector,
                    marginTop: 26,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .saas-process-grid {
            flex-direction: column;
            gap: 40px;
          }
          .saas-process-item {
            flex-direction: column;
          }
          .saas-process-connector {
            display: none;
          }
        }
      `}</style>
    </Box>
  );
};

export default SaasDevelopmentProcess;
