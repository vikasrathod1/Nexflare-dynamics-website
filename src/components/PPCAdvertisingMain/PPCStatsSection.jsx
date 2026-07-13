import { Box, Container, Title, Text, Stack, SimpleGrid, useComputedColorScheme } from "@mantine/core";

const STATS = [
  { value: "4.5x", label: "Average ROAS Delivered" },
  { value: "₹50L+", label: "Ad Spend Managed" },
  { value: "38%", label: "Avg. CTR Improvement" },
  { value: "92%", label: "Client Retention Rate" },
];

const PPCStatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    statValue: "#14b8a6",
    statLabel: isDark ? "rgba(226,232,240,0.75)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    cardShadow: isDark
      ? "0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} align="center" mb={56}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
              textAlign: "center",
            }}
          >
            Proven Results
          </Text>

          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
              textAlign: "center",
            }}
          >
            Numbers That{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Matter
            </Box>
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
          {STATS.map((stat) => (
            <Box
              key={stat.label}
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: 16,
                padding: "40px 24px",
                boxShadow: colors.cardShadow,
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: colors.statValue,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontSize: "1rem",
                  color: colors.statLabel,
                }}
              >
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PPCStatsSection;
