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
    icon: "🛍️",
    title: "Shopify Development",
    description:
      "Custom Shopify themes, apps, and integrations. Whether you're starting fresh or migrating, we build stores that convert and scale effortlessly.",
  },
  {
    icon: "🛒",
    title: "WooCommerce Development",
    description:
      "Flexible, feature-rich WooCommerce stores fully customised to your brand — with the power of WordPress for content and SEO built in.",
  },
  {
    icon: "⚙️",
    title: "Custom eCommerce Platforms",
    description:
      "Fully bespoke eCommerce solutions for complex business models — multi-vendor marketplaces, B2B portals, and headless commerce architectures.",
  },
  {
    icon: "💳",
    title: "Payment Gateway Integration",
    description:
      "Seamless integration with Razorpay, Stripe, PayU, CCAvenue, and 20+ payment providers. Multiple methods, one smooth checkout experience.",
  },
  {
    icon: "📦",
    title: "Inventory & Order Management",
    description:
      "Real-time inventory tracking, automated order workflows, multi-warehouse management, and third-party logistics integrations (Shiprocket, Delhivery).",
  },
  {
    icon: "📈",
    title: "Conversion Rate Optimisation",
    description:
      "Data-driven CRO — A/B testing, checkout optimisation, upsell funnels, and abandoned cart recovery to maximise revenue from existing traffic.",
  },
];
const EDServiceSection = () => {
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
            <span style={{ color: "#14b8a6" }}>eCommerce Solutions</span>
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
            Everything you need to sell online — from store design and
            development to payment integrations, SEO, and ongoing
            optimisation.
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
              className="ed-service-card"
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
          .ed-service-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};
export default EDServiceSection;