import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Paper,
  Group,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

// Update handles/links here — everything else renders from this list.
const socials = [
  {
    icon: IconBrandFacebook,
    platform: "Facebook",
    handle: "NexflareDynamics",
    href: "https://facebook.com/NexflareDynamics",
    iconBg: "linear-gradient(135deg, #1877f2, #0b5fd6)",
  },
  {
    icon: IconBrandInstagram,
    platform: "Instagram",
    handle: "@nexflare_dynamics",
    href: "https://instagram.com/nexflare_dynamics",
    iconBg: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)",
  },
  {
    icon: IconBrandLinkedin,
    platform: "LinkedIn",
    handle: "nexflare-dynamics",
    href: "https://linkedin.com/company/nexflare-dynamics",
    iconBg: "linear-gradient(135deg, #0a66c2, #0958a8)",
  },
  {
    icon: IconBrandWhatsapp,
    platform: "WhatsApp",
    handle: "+91-8237525097",
    href: "https://wa.me/918237525097",
    iconBg: "linear-gradient(135deg, #25d366, #128c7e)",
  },
];

const SocialConnect = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const cardBg = isDark ? "rgba(15,23,42,.6)" : "rgba(255,255,255,.7)";
  const cardBorder = isDark ? "rgba(148,163,184,.15)" : "rgba(148,163,184,.25)";
  const cardBorderHover = isDark ? "rgba(99,102,241,.4)" : "rgba(99,102,241,.35)";

  return (
    <Box py={80}>
      <Container size="md">
        <Box ta="center" mb={48}>
          <Group gap={8} justify="center" mb={14}>
            {/* <Box style={{ width: 18, height: 1, background: "#6366f1" }} /> */}
            <Text
              size="xs"
              fw={700}
              style={{ letterSpacing: 1.5, color: "#06b6d4", textTransform: "uppercase" }}
            >
              Stay Connected
            </Text>
          </Group>

          <Title
            order={2}
            style={{
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontSize: "38px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: textPrimary,
            }}
          >
            Follow Us on Social Media
          </Title>

          <Text size="sm" mt="sm" mx="auto" maw={460} style={{ color: textSecondary, lineHeight: 1.6 }}>
            Stay updated with our latest projects, insights, and company news
            across all platforms.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="md">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <Paper
                key={i}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                radius="lg"
                p="md"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  textDecoration: "none",
                  transition: "border-color 150ms ease, transform 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cardBorderHover;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = cardBorder;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Group gap="sm" wrap="nowrap">
                  <Box
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: s.iconBg,
                    }}
                  >
                    <Icon size={19} color="#fff" />
                  </Box>
                  <div>
                    <Text size="sm" fw={700} style={{ color: textPrimary }}>
                      {s.platform}
                    </Text>
                    <Text size="xs" style={{ color: textSecondary }}>
                      {s.handle}
                    </Text>
                  </div>
                </Group>
              </Paper>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SocialConnect;