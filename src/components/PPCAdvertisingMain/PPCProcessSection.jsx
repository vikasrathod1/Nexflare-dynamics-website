import { Box, Container, Title, Text, Stack, Group, SimpleGrid, useComputedColorScheme } from "@mantine/core";

const SITELINKS = ["Free Consultation", "View Pricing", "Our Portfolio", "Contact Us"];

const PPCProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  // The ad-preview colors (title link, url, sitelinks) mimic real Google
  // Ads styling and are adjusted per theme so the mockup stays legible
  // and realistic whether the card sits on a dark or light background.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    imageBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    imageShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.5)"
      : "0 20px 45px rgba(15,23,42,0.12)",
    adCardBg: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
    adCardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    adCardShadow: isDark
      ? "0 1px 2px rgba(0,0,0,0.4)"
      : "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
    sponsoredBg: "rgba(20,184,166,0.14)",
    sponsoredText: isDark ? "#5eead4" : "#0d9488",
    adTitle: isDark ? "#8ab4f8" : "#1a0dab",
    adUrl: isDark ? "#5eead4" : "#006621",
    adDescription: isDark ? "rgba(226,232,240,0.75)" : "#475569",
    adSitelink: isDark ? "#8ab4f8" : "#1a0dab",
  };

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
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80"
              alt="Marketing strategy planning flat lay"
              style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
            />
          </Box>

          <Stack gap={24}>
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
                Ad Preview
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
                Ads That{" "}
                <Box component="span" style={{ color: colors.headingAccent }}>
                  Convert
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
                We craft every element of your ad — from headline to
                extension — to maximise Quality Score and click-through
                rate.
              </Text>
            </Stack>

            <Box
              style={{
                backgroundColor: colors.adCardBg,
                border: `1px solid ${colors.adCardBorder}`,
                borderRadius: 14,
                padding: "28px 32px",
                boxShadow: colors.adCardShadow,
              }}
            >
              <Stack gap={10}>
                <Box
                  component="span"
                  style={{
                    backgroundColor: colors.sponsoredBg,
                    color: colors.sponsoredText,
                    fontWeight: 700,
                    fontSize: 12.5,
                    padding: "5px 12px",
                    borderRadius: 6,
                    width: "fit-content",
                  }}
                >
                  Sponsored
                </Box>

                <Text style={{ fontSize: "1.25rem", fontWeight: 700, color: colors.adTitle }}>
                  Your Business Name | Top Service – Book Today
                </Text>

                <Text style={{ fontSize: "0.9375rem", color: colors.adUrl }}>
                  https://yourbusiness.com › service › book-now
                </Text>

                <Text style={{ fontSize: "1rem", lineHeight: 1.65, color: colors.adDescription }}>
                  Get expert [your service] at unbeatable prices. Trusted by
                  500+ clients across India. Free consultation available.
                  Call now or book online in 60 seconds.
                </Text>

                <Group gap={20} mt={6}>
                  {SITELINKS.map((link) => (
                    <Text
                      key={link}
                      component="span"
                      style={{
                        fontSize: "0.9375rem",
                        color: colors.adSitelink,
                        textDecoration: "underline",
                        fontWeight: 500,
                      }}
                    >
                      {link}
                    </Text>
                  ))}
                </Group>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PPCProcessSection;
