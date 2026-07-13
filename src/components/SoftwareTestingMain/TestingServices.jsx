import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const FEATURES = [
  {
    icon: "🔍",
    title: "Manual & Exploratory Testing",
    description:
      "Experienced QA engineers test your product like real users — uncovering edge cases, UX issues, and functional defects that automated scripts miss. Every feature, every flow, every device.",
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Test Automation",
    description:
      "We build robust automated test suites using Selenium, Playwright, Cypress, or Appium — integrated into your CI/CD pipeline for instant feedback on every code push.",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "Performance & Load Testing",
    description:
      "Simulate thousands of concurrent users with Apache JMeter or k6. Identify bottlenecks, benchmark response times, and ensure your platform holds up under real-world traffic spikes.",
    highlight: false,
  },
  {
    icon: "🔒",
    title: "Security & Penetration Testing",
    description:
      "OWASP-aligned security testing covering SQL injection, XSS, authentication flaws, API vulnerabilities, and data exposure — protecting your users and your reputation.",
    highlight: false,
  },
  {
    icon: "📱",
    title: "Mobile App Testing",
    description:
      "Cross-device and cross-OS testing on iOS and Android — covering real devices and emulators to validate functionality, performance, and UI consistency across screen sizes.",
    highlight: true,
  },
  {
    icon: "🔗",
    title: "API & Integration Testing",
    description:
      "Thorough REST and GraphQL API validation using Postman and automated contract testing — ensuring every integration, webhook, and third-party connection behaves exactly as expected.",
    highlight: true,
  },
];

const TestingServices = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // All colors are resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    cardBorderHighlight: "rgba(20,184,166,0.55)",
    cardShadow: isDark
      ? "0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
    cardShadowHighlight: isDark
      ? "0 0 0 1px rgba(20,184,166,0.25), 0 12px 32px rgba(20,184,166,0.12)"
      : "0 0 0 1px rgba(20,184,166,0.2), 0 12px 28px rgba(20,184,166,0.1)",
    iconBg: isDark ? "rgba(255,255,255,0.05)" : "rgba(13,148,136,0.08)",
    iconBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(13,148,136,0.15)",
    cardTitle: isDark ? "#ffffff" : "#0f172a",
    cardText: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={56}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            What We Test
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
            Comprehensive{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              QA & Testing Services
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
            From functional validation to performance stress testing — we
            cover every layer of your application so nothing slips through
            to production.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              style={{
                position: "relative",
                backgroundColor: feature.highlight ? (isDark ? "rgba(20,184,166,0.05)" : "rgba(20,184,166,0.04)") : colors.cardBg,
                border: `1px solid ${feature.highlight ? colors.cardBorderHighlight : colors.cardBorder}`,
                borderRadius: 16,
                padding: "32px 28px",
                boxShadow: feature.highlight ? colors.cardShadowHighlight : colors.cardShadow,
                overflow: "hidden",
              }}
            >
              {feature.highlight && (
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      "linear-gradient(90deg, rgba(20,184,166,0) 0%, #2dd4bf 50%, rgba(20,184,166,0) 100%)",
                  }}
                />
              )}

              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: colors.iconBg,
                  border: `1px solid ${colors.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </Box>

              <Text
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: colors.cardTitle,
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {feature.title}
              </Text>

              <Text
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: colors.cardText,
                }}
              >
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TestingServices;
