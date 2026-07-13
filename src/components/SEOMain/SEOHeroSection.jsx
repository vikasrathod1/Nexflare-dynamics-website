import {
  Box,
  Container,
  Title,
  Text,
  Group,
  SimpleGrid,
  Stack,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";

const STATS = [
  { value: "300%", label: "AVG. TRAFFIC INCREASE" },
  { value: "150+", label: "CLIENTS RANKED #1" },
  { value: "8x", label: "AVERAGE ROI" },
];

const SEOHeroSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  // The background photo stays the same in both modes; only the overlay
  // strength and text/button colors flip, so text remains readable
  // whether it's dark-on-light or light-on-dark.
  const colors = {
    overlay: isDark
      ? "linear-gradient(90deg, rgba(6,8,8,0.94) 0%, rgba(6,8,8,0.86) 38%, rgba(6,8,8,0.55) 62%, rgba(6,8,8,0.35) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 38%, rgba(255,255,255,0.7) 63%, rgba(255,255,255,0.45) 100%)",
    badgeBg: isDark ? "rgba(20,184,166,0.14)" : "#E6FFFA",
    badgeText: isDark ? "#2dd4bf" : "#0F766E",
    badgeBorder: isDark ? "rgba(45,212,191,0.35)" : "#99F6E4",
    headingPrimary: isDark ? "#ffffff" : "#111827",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.85)" : "#4B5563",
    btnPrimaryBg: "#14b8a6",
    btnPrimaryBgHover: "#0d9488",
    btnPrimaryText: "#ffffff",
    btnSecondaryBorder: isDark ? "rgba(255,255,255,0.35)" : "#D1D5DB",
    btnSecondaryText: isDark ? "#ffffff" : "#111827",
    btnSecondaryBg: isDark ? "transparent" : "#ffffff",
    btnSecondaryBgHover: isDark ? "rgba(255,255,255,0.08)" : "#F3F4F6",
    statValue: "#14b8a6",
    statLabel: isDark ? "rgba(226,232,240,0.75)" : "#6B7280",
  };

  // ==================== ONLY ADDED THIS ====================
  const handleGetFreeSEOAudit = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };
  // ========================================================

  return (
    <Box
      component="section"
      py={70}
      style={{
        position: "relative",
        minHeight: 640,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: isDark ? "#0a0a0a" : "#f8fafc",
      }}
    >
      {/* Background photo — professional SEO/analytics dashboard shot */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay so text stays readable — flips between dark and light per theme */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: colors.overlay,
        }}
      />

      <Container
        size="xl"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Stack gap="xl" py={80} maw={720}>
          {/* Badge */}
          <Box
            component="span"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
              backgroundColor: colors.badgeBg,
              color: colors.badgeText,
              border: `1px solid ${colors.badgeBorder}`,
              borderRadius: 999,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 0.6,
              padding: "10px 18px",
              lineHeight: 1,
            }}
          >
            <Box
              component="span"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#14b8a6",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Digital Marketing
          </Box>

          {/* Heading */}
          <Box>
            <Title
              order={1}
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: colors.headingPrimary,
                letterSpacing: -1,
                margin: 0,
              }}
            >
              Search Engine
            </Title>

            <Title
              order={1}
              style={{
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: colors.headingAccent,
                letterSpacing: -1,
                margin: 0,
              }}
            >
              Optimization
            </Title>
          </Box>

          {/* Description */}
          <Text
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: colors.paragraph,
              maxWidth: 560,
            }}
          >
            Dominate Google search results and drive organic traffic that
            converts. Our data-driven SEO strategies put your business in
            front of the right audience at the right time.
          </Text>

          {/* Buttons */}
          <Group gap="md">
            <UnstyledButton
              style={{
                backgroundColor: colors.btnPrimaryBg,
                color: colors.btnPrimaryText,
                fontWeight: 700,
                fontSize: 15,
                paddingLeft: 28,
                paddingRight: 28,
                height: 52,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnPrimaryBgHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnPrimaryBg;
              }}
              onClick={handleGetFreeSEOAudit}  
            >
              Get Free SEO Audit
            </UnstyledButton>

            {/* <UnstyledButton
              style={{
                border: `1px solid ${colors.btnSecondaryBorder}`,
                color: colors.btnSecondaryText,
                fontWeight: 700,
                fontSize: 15,
                paddingLeft: 28,
                paddingRight: 28,
                height: 52,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                backgroundColor: colors.btnSecondaryBg,
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnSecondaryBgHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.btnSecondaryBg;
              }}
            >
              Explore Services
            </UnstyledButton> */}
          </Group>

          {/* Stats */}
          <SimpleGrid cols={3} spacing={40} pt="md" maw={620}>
            {STATS.map((stat) => (
              <Stack key={stat.label} gap={4}>
                <Text
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: colors.statValue,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 0.4,
                    color: colors.statLabel,
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default SEOHeroSection;