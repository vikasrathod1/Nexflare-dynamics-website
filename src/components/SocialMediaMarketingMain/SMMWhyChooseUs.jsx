import { Box, Container, Title, Text, Stack, Group, SimpleGrid, UnstyledButton, useComputedColorScheme } from "@mantine/core";

const CHECKLIST = [
  "Dedicated social media manager for your account",
  "Platform-native content — no generic posts across all channels",
  "Monthly strategy reviews aligned to your business goals",
  "Crisis management and reputation monitoring",
  "Trending content formats — Reels, Shorts, Stories",
  "Full creative team: designers, videographers, copywriters",
];

const SMMWhyChooseUs = () => {
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
    imageBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    imageShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.5)"
      : "0 20px 45px rgba(15,23,42,0.12)",
  };

  // ==================== ONLY ADDED THIS ====================
  const handleStartGrowingToday = () => {
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
              src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1200&q=80"
              alt="Social media login on a phone"
              style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
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
                Why Choose Us
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
                Social Media That{" "}
                <Box component="span" style={{ color: colors.headingAccent }}>
                  Drives Business
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
                We don't just post content — we build communities, drive
                traffic, and generate real business results through social
                media.
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
              onClick={handleStartGrowingToday}   
            >
              Start Growing Today
            </UnstyledButton>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SMMWhyChooseUs;