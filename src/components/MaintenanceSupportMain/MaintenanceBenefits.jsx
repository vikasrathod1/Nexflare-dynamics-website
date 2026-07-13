import { Box, Container, Title, Text, Stack, Group, SimpleGrid, UnstyledButton, useComputedColorScheme } from "@mantine/core";

const CHECKLIST = [
  "Engineers who built your product know it best — continuity guaranteed",
  "Proactive monitoring rather than reactive fire-fighting",
  "Transparent monthly reports on work done, uptime & performance",
  "Dedicated Slack or Teams channel for direct communication",
  "No lock-in — flexible retainers with 30-day notice to exit",
  "Full handover documentation if you ever move in-house",
];

const TECH_STACK = [
  "Datadog",
  "New Relic",
  "AWS CloudWatch",
  "PagerDuty",
  "Sentry",
  "GitHub Actions",
  "Jira",
  "Linear",
];

const MaintenanceBenefits = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    checkIcon: "#14b8a6",
    checkText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
    pillBg: isDark ? "rgba(20,184,166,0.08)" : "rgba(20,184,166,0.06)",
    pillBorder: isDark ? "rgba(20,184,166,0.35)" : "rgba(20,184,166,0.3)",
    pillText: isDark ? "#5eead4" : "#0d9488",
    imageBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    imageShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.5)"
      : "0 20px 45px rgba(15,23,42,0.12)",
  };

  // ==================== ONLY ADDED THIS ====================
  const handleDiscussSupportPlan = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };
  // ========================================================

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={64} verticalSpacing={40}>
          <Box
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${colors.imageBorder}`,
              boxShadow: colors.imageShadow,
              alignSelf: "start",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Support engineers collaborating"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                filter: "grayscale(1)",
              }}
            />
          </Box>

          <Stack gap={20}>
            <Stack gap={6}>
              <Text
                style={{
                  color: colors.eyebrow,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 1.2,
                }}
              >
                Why Nexflare For Support
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
                Your Product Deserves{" "}
                <Box component="span" style={{ color: colors.headingAccent }}>
                  Ongoing Care
                </Box>
              </Title>

              <Text
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: colors.paragraph,
                  marginTop: 8,
                }}
              >
                Most agencies disappear after launch. We stay. Our support
                teams treat your product like it's their own — proactively
                catching issues, continuously improving performance, and
                shipping incremental value every month.
              </Text>
            </Stack>

            <Stack gap={14}>
              {CHECKLIST.map((item) => (
                <Group key={item} gap={12} wrap="nowrap" align="flex-start">
                  <Box
                    component="span"
                    style={{
                      color: colors.checkIcon,
                      fontWeight: 700,
                      fontSize: 15,
                      lineHeight: 1.6,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </Box>
                  <Text
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: colors.checkText,
                    }}
                  >
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>

            <Group gap={10} mt={8}>
              {TECH_STACK.map((tech) => (
                <Box
                  key={tech}
                  component="span"
                  style={{
                    backgroundColor: colors.pillBg,
                    border: `1px solid ${colors.pillBorder}`,
                    color: colors.pillText,
                    borderRadius: 999,
                    padding: "8px 18px",
                    fontSize: 13.5,
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Group>

            <UnstyledButton
              style={{
                backgroundColor: "#14b8a6",
                color: "#04201c",
                fontWeight: 700,
                fontSize: 15,
                paddingLeft: 28,
                paddingRight: 28,
                height: 52,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                width: "fit-content",
                marginTop: 12,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#14b8a6")}
              onClick={handleDiscussSupportPlan}   
            >
              Discuss a Support Plan
            </UnstyledButton>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MaintenanceBenefits;