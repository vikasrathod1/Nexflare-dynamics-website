import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
const FEATURES = [
  {
    icon: "📊",
    title: "Custom Dashboard Setup",
    description:
      "Bespoke Google Looker Studio, Data Studio, or Tableau dashboards that surface the KPIs that matter most to your business — live, always up to date.",
    highlight: false,
  },
  {
    icon: "🔍",
    title: "GA4 & Tag Manager Setup",
    description:
      "Complete Google Analytics 4 configuration with accurate event tracking, goal setup, audience segmentation, and GTM tag management.",
    highlight: true,
  },
  {
    icon: "📣",
    title: "Campaign Performance Reporting",
    description:
      "Detailed monthly reports for SEO, PPC, social media, and email — with clear commentary on what's working, what isn't, and what to do next.",
    highlight: false,
  },
  {
    icon: "🛒",
    title: "Conversion Tracking",
    description:
      "Pixel, conversion API, and enhanced e-commerce setup across Meta, Google, and LinkedIn so every lead and sale is accurately attributed.",
    highlight: false,
  },
  {
    icon: "🔗",
    title: "Multi-Channel Attribution",
    description:
      "Understand which channels and touchpoints genuinely drive revenue using data-driven attribution models — not just last-click guesswork.",
    highlight: true,
  },
  {
    icon: "🧠",
    title: "Competitor Benchmarking",
    description:
      "Market intelligence and competitive analysis reports that reveal gaps in your strategy and opportunities to outperform rivals in your space.",
    highlight: false,
  },
];
const APOffers = () => {
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
            What We Offer
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
            Complete Analytics{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Solutions
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
            End-to-end data tracking, visualisation, and insights to power
            every marketing decision your business makes.
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
export default APOffers;