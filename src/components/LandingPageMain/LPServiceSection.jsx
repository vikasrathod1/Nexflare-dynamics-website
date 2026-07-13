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
    icon: "🎯",
    title: "Lead Generation Pages",
    description:
      "Focused, distraction-free pages designed to capture qualified leads. Optimised forms, compelling headlines, and trust signals that convert cold traffic.",
  },
  {
    icon: "🛒",
    title: "Product & Sales Pages",
    description:
      "Long-form sales pages that sell — with persuasive copywriting frameworks, social proof, objection handling, and strong calls-to-action that close.",
  },
  {
    icon: "📣",
    title: "Ad Campaign Pages",
    description:
      "Message-matched landing pages aligned to your Google, Meta, or LinkedIn ads. Higher Quality Scores, lower CPCs, and more conversions from the same budget.",
  },
  {
    icon: "🔄",
    title: "Funnel Design & Build",
    description:
      "Multi-step funnels — opt-in → thank you → upsell → webinar — designed and connected end-to-end to maximise customer lifetime value.",
  },
  {
    icon: "🧪",
    title: "A/B Testing & CRO",
    description:
      "Systematic split testing of headlines, CTAs, layouts, and offers. Data-driven iteration that continuously improves conversion rates over time.",
  },
  {
    icon: "⚡",
    title: "Speed & Performance",
    description:
      "Sub-2-second load times on every page. Core Web Vitals optimised. Because every second of delay costs 7% of conversions — we take speed seriously.",
  },
];

const LPServiceSection = () => {
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
            What We Offer
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
            Complete{" "}
            <span style={{ color: "#14b8a6" }}>Landing Page Solutions</span>
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
            From a single high-converting page to a full funnel system —
            we design and build pages that capture attention, build
            trust, and drive action.
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
              className="lp-service-card"
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
          .lp-service-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};

export default LPServiceSection;