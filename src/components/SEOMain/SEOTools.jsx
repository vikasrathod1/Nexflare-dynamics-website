import { Box, Container, Title, Text, Stack, Group, useComputedColorScheme } from "@mantine/core";

const TOOLS = [
  "Google Search Console",
  "Google Analytics 4",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Moz Pro",
  "Surfer SEO",
  "PageSpeed Insights",
  "Search Atlas",
  "Majestic",
  "BrightLocal",
  "Hotjar",
];

const SEOTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    subtitle: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    pillBg: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
    pillBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.08)",
    pillText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
  };

  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={48}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            Our Tech Stack
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
            Industry-Leading{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              SEO Tools
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
            We use the same tools the world's best SEO agencies rely on to
            deliver precision results.
          </Text>
        </Stack>

        <Group gap={12}>
          {TOOLS.map((tool) => (
            <Box
              key={tool}
              component="span"
              style={{
                backgroundColor: colors.pillBg,
                border: `1px solid ${colors.pillBorder}`,
                color: colors.pillText,
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {tool}
            </Box>
          ))}
        </Group>
      </Container>
    </Box>
  );
};

export default SEOTools;
