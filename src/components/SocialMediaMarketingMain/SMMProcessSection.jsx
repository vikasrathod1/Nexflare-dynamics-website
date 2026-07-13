import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const FEATURES = [
  {
    icon: "🎨",
    title: "Content Creation",
    description:
      "Scroll-stopping graphics, videos, Reels, and copy crafted by designers and copywriters who understand each platform's culture and best practices.",
    highlight: false,
  },
  {
    icon: "📅",
    title: "Content Calendar & Scheduling",
    description:
      "Strategic posting calendars with optimal timing for each platform. Consistent, planned content that keeps your brand top of mind without last-minute scrambling.",
    highlight: false,
  },
  {
    icon: "💬",
    title: "Community Management",
    description:
      "Daily monitoring, comment replies, DM management, and proactive engagement to build a loyal community around your brand.",
    highlight: false,
  },
  {
    icon: "✨",
    title: "Influencer Marketing",
    description:
      "Connect with the right micro and macro influencers in your niche. End-to-end campaign management from briefing to performance reporting.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "Social Media Ads",
    description:
      "High-converting paid social campaigns on Meta and LinkedIn with precise audience targeting, creative testing, and ROAS optimisation.",
    highlight: false,
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description:
      "Monthly reports covering reach, engagement, follower growth, website clicks, and ROI — with clear, jargon-free insights and next steps.",
    highlight: false,
  },
];

const SMMProcessSection = () => {
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
            Complete Social Media{" "}
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
            From content creation to community management — everything
            your brand needs to thrive on social media.
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

export default SMMProcessSection;
