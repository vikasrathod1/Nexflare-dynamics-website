import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";
const SERVICES = [
  {
    icon: "🔌",
    title: "REST API Development",
    description:
      "Scalable, predictable RESTful APIs designed with industry best practices — proper HTTP semantics, versioning, pagination, and consistent error handling from day one.",
  },
  {
    icon: "⚡",
    title: "GraphQL API Development",
    description:
      "Flexible GraphQL APIs that let clients query exactly the data they need — perfect for modern frontends, mobile apps, and data-heavy applications that demand efficiency.",
  },
  {
    icon: "🏗️",
    title: "Microservices Architecture",
    description:
      "Break your monolith into independently deployable microservices — with service discovery, load balancing, API gateways, and fault tolerance built in from the ground up.",
    highlight: true,
  },
  {
    icon: "🔒",
    title: "API Security & Authentication",
    description:
      "OAuth 2.0, JWT tokens, API key management, rate limiting, IP whitelisting, and full OWASP security hardening — protecting your API and your users' data at every layer.",
  },
  {
    icon: "🔗",
    title: "Third-Party API Integration",
    description:
      "Connect payment gateways, CRMs, ERPs, logistics platforms, and any external service into your system — cleanly abstracted, well-tested, and easy to maintain.",
  },
  {
    icon: "📋",
    title: "API Documentation & Testing",
    description:
      "Auto-generated OpenAPI / Swagger documentation plus a hosted interactive developer portal — so your team or partners can integrate in hours, not days.",
  },
];
const ApiServicesSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box
      component="section"
      py={80}
      style={{ position: "relative" }}
    >
      <Container size="xl">
        <Text
          fw={700}
          fz={13}
          tt="uppercase"
          style={{
            letterSpacing: "1.5px",
            color: "#14b8a6",
          }}
          mb={12}
        >
          What We Offer
        </Text>
        <Title
          order={2}
          fz={{ base: 32, sm: 42 }}
          fw={800}
          mb={20}
          style={{ lineHeight: 1.15 }}
        >
          <Text
            component="span"
            inherit
            style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
          >
            Complete{" "}
          </Text>
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            API Development Services
          </Text>
        </Title>
        <Text
          maw={720}
          fz={17}
          style={{
            color: isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)",
            lineHeight: 1.7,
          }}
          mb={48}
        >
          From RESTful APIs to GraphQL and microservices — we architect and
          build APIs that are clean, secure, well-documented, and a pleasure
          for developers to integrate with.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
          {SERVICES.map((service) => (
            <Paper
              key={service.title}
              p={28}
              radius={16}
              style={{
                position: "relative",
                overflow: "hidden",
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(15,23,42,0.02)",
                border: `1px solid ${
                  service.highlight
                    ? "rgba(20,184,166,0.5)"
                    : isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(15,23,42,0.08)"
                }`,
                transition: "transform 180ms ease, border-color 180ms ease",
              }}
              className="api-service-card"
            >
              {service.highlight && (
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, #14b8a6, #06b6d4)",
                  }}
                />
              )}
              <Box
                mb={20}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  background: isDark
                    ? "rgba(20,184,166,0.12)"
                    : "rgba(20,184,166,0.1)",
                }}
              >
                {service.icon}
              </Box>
              <Text
                fw={700}
                fz={18}
                mb={10}
                style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
              >
                {service.title}
              </Text>
              <Text
                fz={14.5}
                style={{
                  color: isDark
                    ? "rgba(226,232,240,0.65)"
                    : "rgba(15,23,42,0.6)",
                  lineHeight: 1.65,
                }}
              >
                {service.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
      <style>{`
        .api-service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(20,184,166,0.5) !important;
        }
      `}</style>
    </Box>
  );
};
export default ApiServicesSection;