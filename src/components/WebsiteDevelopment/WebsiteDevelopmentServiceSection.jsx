import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";

const services = [
  {
    icon: "🌐",
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins — fully tailored, performant, and easy for your team to manage without developer support.",
  },
  {
    icon: "⚙️",
    title: "Custom Web Development",
    description:
      "Bespoke websites built from scratch with React, Next.js, or Laravel for complete flexibility and maximum performance.",
  },
  {
    icon: "🚀",
    title: "Website Optimisation",
    description:
      "Speed optimisation, Core Web Vitals improvement, caching, CDN setup, and image compression for faster load times.",
  },
  {
    icon: "🔒",
    title: "Security & Maintenance",
    description:
      "SSL, firewall, malware scanning, regular backups, and software updates to keep your website safe and always up to date.",
  },
  {
    icon: "🔗",
    title: "API & Third-Party Integration",
    description:
      "Seamless integrations with CRMs, payment gateways, booking systems, analytics tools, and any third-party service your business needs.",
  },
  {
    icon: "📈",
    title: "SEO-Friendly Architecture",
    description:
      "Clean semantic code, schema markup, fast page speed, and proper URL structure so your website ranks from day one.",
  },
];

const WebsiteDevelopmentServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={100}>
      <Container size="lg">
        {/* Section Header */}
        <Stack gap={10} mb={50} maw={700}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            What We Build
          </Text>

          <Title
            order={2}
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
              lineHeight: 1.2,
            }}
          >
            Development Services{" "}
            <span style={{ color: "#14b8a6" }}>Built to Scale</span>
          </Title>

          <Text
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            Clean code, solid architecture, and future-proof technology —
            every website we build is engineered to grow with your business.
          </Text>
        </Stack>

        {/* Service Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {services.map((service, index) => (
            <Paper
              key={index}
              radius="lg"
              p="xl"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "#ffffff",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(15,23,42,0.08)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.25)"
                  : "0 8px 24px rgba(15,23,42,0.06)",
                height: "100%",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              className="dev-service-card"
            >
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: 20,
                  background: isDark
                    ? "rgba(20,184,166,0.1)"
                    : "rgba(20,184,166,0.08)",
                }}
              >
                {service.icon}
              </Box>

              <Text
                fw={700}
                mb={10}
                style={{
                  fontSize: "1.1rem",
                  color: isDark ? "#f8fafc" : "#0f172a",
                }}
              >
                {service.title}
              </Text>

              <Text
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.65)"
                    : "rgba(15,23,42,0.6)",
                }}
              >
                {service.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <style>
        {`
          .dev-service-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};

export default WebsiteDevelopmentServiceSection;