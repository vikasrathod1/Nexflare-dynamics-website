import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const FEATURES = [
  {
    icon: "🎯",
    title: "Google Search Ads",
    description:
      "Capture high-intent buyers at the exact moment they search. Precision keyword targeting, compelling ad copy, and landing pages engineered to convert.",
    highlight: false,
  },
  {
    icon: "🖼️",
    title: "Display & Banner Ads",
    description:
      "Build brand awareness across 2M+ websites in Google's Display Network. Eye-catching creatives that keep your brand top-of-mind throughout the buyer journey.",
    highlight: false,
  },
  {
    icon: "📘",
    title: "Meta (Facebook/Instagram) Ads",
    description:
      "Hyper-targeted social campaigns using demographics, interests, and lookalike audiences. Video, carousel, and collection formats that stop the scroll.",
    highlight: false,
  },
  {
    icon: "💼",
    title: "LinkedIn Ads",
    description:
      "B2B lead generation targeting decision-makers by job title, industry, and company size. Perfect for high-ticket services and enterprise sales.",
    highlight: false,
  },
  {
    icon: "🛒",
    title: "Google Shopping Ads",
    description:
      "Showcase your products directly in Google Search with images, prices, and reviews. Ideal for e-commerce brands looking to capture purchase-ready shoppers.",
    highlight: true,
  },
  {
    icon: "🔄",
    title: "Remarketing Campaigns",
    description:
      "Re-engage visitors who didn't convert. Strategic retargeting across web and social with personalised messaging that brings them back to complete the purchase.",
    highlight: false,
  },
];

const PPCServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // All colors are resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS —
  // text and backgrounds correctly flip per theme since this section sits
  // on the page's ambient (non-fixed) background, unlike the Hero.
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
            Full-Spectrum{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              PPC Management
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
            From search ads to remarketing — we build, manage, and optimise
            campaigns that bring measurable returns.
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

export default PPCServiceSection;
