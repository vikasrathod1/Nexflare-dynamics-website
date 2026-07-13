import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const PLATFORMS = [
  {
    icon: "📸",
    title: "Instagram",
    description: "Reels, Stories, Carousels & Shopping",
  },
  {
    icon: "📘",
    title: "Facebook",
    description: "Pages, Groups & Community Building",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "B2B Authority & Thought Leadership",
  },
  {
    icon: "▶️",
    title: "YouTube",
    description: "Video Strategy & Channel Growth",
  },
  {
    icon: "🎵",
    title: "Twitter/X",
    description: "Real-time Engagement & Trends",
  },
  {
    icon: "📌",
    title: "Pinterest",
    description: "Visual Discovery & Traffic",
  },
];

const SMMServiceSection = () => {
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
    cardShadow: isDark
      ? "0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
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
            Platforms We Manage
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
            Every Platform,{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Mastered
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
            We craft platform-native content and strategies tailored to
            each channel's unique audience and algorithm.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing={20}>
          {PLATFORMS.map((platform) => (
            <Box
              key={platform.title}
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: 16,
                padding: "32px 20px",
                boxShadow: colors.cardShadow,
                textAlign: "center",
              }}
            >
              <Text style={{ fontSize: 32, marginBottom: 16, lineHeight: 1 }}>{platform.icon}</Text>

              <Text
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: colors.cardTitle,
                  marginBottom: 8,
                }}
              >
                {platform.title}
              </Text>

              <Text
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: colors.cardText,
                }}
              >
                {platform.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SMMServiceSection;
