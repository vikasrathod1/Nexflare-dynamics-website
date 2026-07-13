import { Box, Container, Title, Text, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";

const FEATURES = [
  {
    icon: "🚀",
    title: "SaaS MVP Development",
    description:
      "Launch a focused, market-validated MVP in 8–12 weeks. We help you identify core features, strip away complexity, and ship fast so you can gather real user feedback before investing further.",
    highlight: false,
  },
  {
    icon: "🏛️",
    title: "Multi-Tenant Architecture",
    description:
      "Proper multi-tenant SaaS architecture with data isolation, tenant-level customisation, and role-based access control — built to serve hundreds of clients from a single scalable codebase.",
    highlight: true,
  },
  {
    icon: "💳",
    title: "Subscription Billing & Payments",
    description:
      "Stripe, Razorpay, or PayU integration with subscription management, usage-based billing, invoicing, trial periods, and automated dunning — everything your SaaS revenue engine needs.",
    highlight: false,
  },
  {
    icon: "☁️",
    title: "Cloud-Native Infrastructure",
    description:
      "AWS, GCP, or Azure — containerised with Docker and Kubernetes, auto-scaling infrastructure, CI/CD pipelines, and 99.9% uptime SLA so your platform grows with your user base.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "Admin Dashboard & Analytics",
    description:
      "Powerful admin panels with user management, subscription dashboards, usage analytics, feature flags, and in-app notifications — giving you full visibility and control over your platform.",
    highlight: false,
  },
  {
    icon: "🔗",
    title: "Third-Party Integrations",
    description:
      "CRM, email marketing, Zapier, Slack, Google Workspace, and custom webhook integrations — making your SaaS fit naturally into your customers' existing workflows.",
    highlight: false,
  },
];

const SaaSFeatures = () => {
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
            What We Build
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
            End-to-End{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              SaaS Development Services
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
            From MVP launch to enterprise-grade SaaS platform — we handle
            every layer of your product so you can focus on growing your
            customer base.
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

export default SaaSFeatures;
