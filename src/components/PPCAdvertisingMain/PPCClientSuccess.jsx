import { Box, Container, Title, Text, Stack, Group, SimpleGrid, Avatar, useComputedColorScheme } from "@mantine/core";

const TESTIMONIALS = [
  {
    quote:
      "Our Google Ads ROAS went from 1.8x to 5.2x in three months. Nexflare completely restructured our campaigns and the results speak for themselves.",
    name: "Vikram Patel",
    role: "E-commerce Director, ShopVibe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We cut our cost per lead by 65% while doubling lead volume. Their Meta Ads strategy for our real estate brand was game-changing.",
    name: "Sneha Joshi",
    role: "CMO, Urban Realty Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "LinkedIn campaigns generated 40 qualified B2B leads in the first month. The targeting precision is unlike anything we've seen with other agencies.",
    name: "Aditya Nair",
    role: "Founder, B2B SaaS Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

const PPCClientSuccess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    quoteMark: "#14b8a6",
    quoteText: isDark ? "rgba(226,232,240,0.8)" : "#475569",
    name: isDark ? "#ffffff" : "#0f172a",
    role: isDark ? "rgba(226,232,240,0.6)" : "#64748b",
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
            Client Stories
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
            What Our{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Clients Say
            </Box>
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
          {TESTIMONIALS.map((testimonial) => (
            <Box
              key={testimonial.name}
              style={{
                backgroundColor: colors.cardBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: 16,
                padding: "32px 28px",
                boxShadow: colors.cardShadow,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: colors.quoteMark,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                "
              </Text>

              <Text
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: colors.quoteText,
                  fontStyle: "italic",
                  marginBottom: 28,
                  flexGrow: 1,
                }}
              >
                {testimonial.quote}
              </Text>

              <Group gap={12} wrap="nowrap" align="center">
                <Avatar src={testimonial.avatar} alt={testimonial.name} radius="xl" size={44} />
                <Stack gap={0}>
                  <Text style={{ fontSize: "0.9375rem", fontWeight: 700, color: colors.name }}>
                    {testimonial.name}
                  </Text>
                  <Text style={{ fontSize: "0.875rem", color: colors.role }}>{testimonial.role}</Text>
                </Stack>
              </Group>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PPCClientSuccess;
