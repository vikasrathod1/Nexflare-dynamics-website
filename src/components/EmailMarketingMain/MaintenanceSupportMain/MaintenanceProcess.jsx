import { Box, Container, Title, Text, Stack, Group, SimpleGrid, UnstyledButton, useComputedColorScheme } from "@mantine/core";

const PLANS = [
  {
    name: "Starter",
    price: "₹24,999",
    priceSuffix: "/month",
    description:
      "For early-stage products that need reliable baseline maintenance without a large retainer commitment.",
    features: [
      "Up to 20 hrs/month of engineering time",
      "Bug fixes & security patches",
      "Monthly performance report",
      "Business hours support (9am–6pm)",
      "48-hour response SLA",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹59,999",
    priceSuffix: "/month",
    description:
      "For growing products that need proactive monitoring, faster response, and ongoing feature development.",
    features: [
      "Up to 50 hrs/month of engineering time",
      "Bug fixes, security & dependency updates",
      "24/7 uptime monitoring & alerting",
      "Feature enhancements included",
      "8-hour response SLA",
      "Dedicated Slack channel",
    ],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "pricing",
    description:
      "For high-traffic, business-critical platforms requiring white-glove support and guaranteed availability.",
    features: [
      "Unlimited engineering hours",
      "24/7 on-call incident response",
      "Dedicated support engineer",
      "4-hour critical issue SLA",
      "Quarterly architecture review",
      "Custom SLA & reporting",
    ],
    highlight: false,
  },
];

const MaintenanceProcess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Every color is resolved here in JS and applied via inline `style`,
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
      ? "0 0 0 1px rgba(20,184,166,0.3), 0 16px 40px rgba(20,184,166,0.15)"
      : "0 0 0 1px rgba(20,184,166,0.25), 0 16px 36px rgba(20,184,166,0.12)",
    planName: isDark ? "#ffffff" : "#0f172a",
    price: "#14b8a6",
    priceSuffix: isDark ? "rgba(226,232,240,0.6)" : "#94a3b8",
    description: isDark ? "rgba(226,232,240,0.65)" : "#64748b",
    checkIcon: "#14b8a6",
    checkText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
    divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
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
            Support Plans
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
            Choose Your{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Support Tier
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
            Flexible retainer plans that match your product complexity and
            business criticality — from lean startups to high-traffic
            enterprise platforms.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
          {PLANS.map((plan) => (
            <Box
              key={plan.name}
              style={{
                position: "relative",
                backgroundColor: plan.highlight ? (isDark ? "rgba(20,184,166,0.05)" : "rgba(20,184,166,0.04)") : colors.cardBg,
                border: `1px solid ${plan.highlight ? colors.cardBorderHighlight : colors.cardBorder}`,
                borderRadius: 16,
                padding: "36px 32px",
                boxShadow: plan.highlight ? colors.cardShadowHighlight : colors.cardShadow,
                marginTop: plan.highlight ? 0 : 24,
              }}
            >
              {plan.highlight && (
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

              <Stack gap={20}>
                <Stack gap={16}>
                  {plan.badge && (
                    <Box
                      component="span"
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "#04201c",
                        fontWeight: 700,
                        fontSize: 11.5,
                        letterSpacing: 0.6,
                        textTransform: "uppercase",
                        padding: "7px 14px",
                        borderRadius: 999,
                        width: "fit-content",
                      }}
                    >
                      {plan.badge}
                    </Box>
                  )}

                  <Text style={{ fontSize: "1.1875rem", fontWeight: 700, color: colors.planName }}>
                    {plan.name}
                  </Text>

                  <Group gap={6} align="flex-end">
                    <Text
                      style={{
                        fontSize: "2.25rem",
                        fontWeight: 800,
                        color: colors.price,
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </Text>
                    <Text style={{ fontSize: "0.9375rem", color: colors.priceSuffix, paddingBottom: 4 }}>
                      {plan.priceSuffix}
                    </Text>
                  </Group>

                  <Text style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: colors.description }}>
                    {plan.description}
                  </Text>
                </Stack>

                <Box style={{ borderTop: `1px solid ${colors.divider}`, paddingTop: 20 }}>
                  <Stack gap={12}>
                    {plan.features.map((feature) => (
                      <Group key={feature} gap={10} wrap="nowrap" align="flex-start">
                        <Box
                          component="span"
                          style={{
                            color: colors.checkIcon,
                            fontWeight: 700,
                            fontSize: 14,
                            lineHeight: 1.6,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </Box>
                        <Text style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: colors.checkText }}>
                          {feature}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                </Box>

                <UnstyledButton
                  style={{
                    backgroundColor: plan.highlight ? "#14b8a6" : "transparent",
                    color: plan.highlight ? "#04201c" : colors.planName,
                    border: plan.highlight ? "none" : `1px solid ${colors.cardBorder}`,
                    fontWeight: 700,
                    fontSize: 15,
                    height: 48,
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                    transition: "background-color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = plan.highlight
                      ? "#0d9488"
                      : isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(15,23,42,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = plan.highlight ? "#14b8a6" : "transparent";
                  }}
                >
                  Get Started
                </UnstyledButton>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MaintenanceProcess;
