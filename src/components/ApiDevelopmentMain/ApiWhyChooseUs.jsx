import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
const STEPS = [
  {
    number: "01",
    title: "Requirements & API Design",
    description:
      "We map all endpoints, data models, authentication flows, and edge cases — producing a complete API contract before development begins.",
  },
  {
    number: "02",
    title: "Development & Security",
    description:
      "APIs are built with security hardening, input validation, and performance optimisation baked in — not bolted on afterwards.",
  },
  {
    number: "03",
    title: "Testing & Documentation",
    description:
      "Every endpoint is tested — unit, integration, and load tests. Full OpenAPI docs and a Postman collection are delivered alongside the code.",
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description:
      "Deployed to your environment with uptime monitoring, error tracking, and a clear versioning strategy so future changes never break existing integrations.",
  },
];
const ApiWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const mutedColor = isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)";
  return (
    <Box component="section" py={80}>
      <Container size="xl">
        <Text
          fw={700}
          fz={13}
          tt="uppercase"
          style={{ letterSpacing: "1.5px", color: "#14b8a6" }}
          mb={12}
        >
          Development Process
        </Text>
        <Title
          order={2}
          fz={{ base: 32, sm: 42 }}
          fw={800}
          mb={20}
          style={{ lineHeight: 1.15 }}
        >
          <Text component="span" inherit style={{ color: textColor }}>
            How We{" "}
          </Text>
          <Text component="span" inherit style={{ color: "#14b8a6" }}>
            Build Your API
          </Text>
        </Title>
        <Text
          maw={720}
          fz={17}
          mb={64}
          style={{ color: mutedColor, lineHeight: 1.7 }}
        >
          A structured, transparent process that ensures your API is
          well-designed, secure, and production-ready before a single
          integration is built on top of it.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={40} verticalSpacing={48}>
          {STEPS.map((step, index) => (
            <Box
              key={step.number}
              style={{
                position: "relative",
                paddingLeft: index === 0 ? 0 : 32,
                borderLeft:
                  index === 0
                    ? "none"
                    : `1px solid ${
                        isDark
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(15,23,42,0.08)"
                      }`,
              }}
            >
              <Text
                fw={800}
                fz={56}
                mb={8}
                style={{
                  color: isDark
                    ? "rgba(20,184,166,0.16)"
                    : "rgba(20,184,166,0.14)",
                  lineHeight: 1,
                  fontFamily:
                    "ui-monospace, SFMono-Regular, 'JetBrains Mono', Menlo, monospace",
                }}
              >
                {step.number}
              </Text>
              <Text fw={700} fz={19} mb={12} style={{ color: textColor }}>
                {step.title}
              </Text>
              <Text fz={15} style={{ color: mutedColor, lineHeight: 1.7 }}>
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default ApiWhyChooseUs;