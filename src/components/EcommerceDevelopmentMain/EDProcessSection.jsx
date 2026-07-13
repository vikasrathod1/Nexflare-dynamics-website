import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We understand your products, customers, and competitors. Define platform, features, and a launch roadmap.",
  },
  {
    number: "02",
    title: "UX & Design",
    description:
      "Conversion-first design — beautiful, brand-aligned store layouts that guide shoppers seamlessly to checkout.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, scalable code with all integrations — payments, shipping, ERP, and marketing tools — built in from day one.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "End-to-end testing of every transaction, device, and edge case. Your store launches bug-free and performant.",
  },
  {
    number: "05",
    title: "Launch & Grow",
    description:
      "Go-live support, analytics setup, and ongoing optimisation to continuously grow traffic and revenue.",
  },
];
const EDProcessSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={100}>
      <Container size="lg">
        {/* Section Header */}
        <Stack gap={10} mb={70} maw={700}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            Our Process
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
            How We <span style={{ color: "#14b8a6" }}>Build Your Store</span>
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
            A proven 5-phase process that takes you from concept to a
            live, revenue-generating eCommerce store.
          </Text>
        </Stack>
        {/* Steps */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {steps.map((step, index) => (
            <Box key={index} style={{ position: "relative" }}>
              {index < steps.length - 1 && (
                <Box
                  className="ed-process-connector"
                  style={{
                    position: "absolute",
                    top: 28,
                    left: "calc(100% + 4px)",
                    width: "calc(100% - 20px)",
                    height: 2,
                    background: isDark
                      ? "rgba(20,184,166,0.15)"
                      : "rgba(20,184,166,0.2)",
                    display: "none",
                  }}
                />
              )}
              <Stack gap={4}>
                <Text
                  fw={800}
                  style={{
                    fontSize: "3.2rem",
                    lineHeight: 1,
                    color: isDark
                      ? "rgba(20,184,166,0.15)"
                      : "rgba(20,184,166,0.18)",
                    marginBottom: 8,
                  }}
                >
                  {step.number}
                </Text>
                <Text
                  fw={700}
                  style={{
                    fontSize: "1.1rem",
                    color: isDark ? "#f8fafc" : "#0f172a",
                    marginBottom: 4,
                  }}
                >
                  {step.title}
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
                  {step.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <style>
        {`
          @media (min-width: 1200px) {
            .ed-process-connector {
              display: block !important;
            }
          }
        `}
      </style>
    </Box>
  );
};
export default EDProcessSection;