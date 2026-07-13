import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const services = [
  {
    icon: "👥",
    title: "Lead & Contact Management",
    description:
      "Centralized database with custom fields, tagging, and segmentation to keep every lead and contact organised in one place.",
  },
  {
    icon: "📊",
    title: "Sales Pipeline & Deal Tracking",
    description:
      "Visual pipelines, stage automation, and forecasting so your team always knows what's closing and what needs attention.",
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Auto follow-ups, task assignment, and email triggers that eliminate manual busywork and keep deals moving forward.",
  },
  {
    icon: "📈",
    title: "Reporting & Analytics Dashboard",
    description:
      "Real-time sales performance, conversion rates, and team activity dashboards for data-driven decisions.",
  },
  {
    icon: "🔗",
    title: "Third-Party Integrations",
    description:
      "Seamless connections with email, WhatsApp, calling tools, and payment gateways your team already relies on.",
  },
  {
    icon: "🔐",
    title: "Role-Based Access Control",
    description:
      "Granular permissions for sales reps, managers, and admins to keep sensitive data secure and organised.",
  },
];
const CrmServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        {/* Section Label */}
        <Text
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#14b8a6",
          }}
        >
          What We Offer
        </Text>
        {/* Heading */}
        <Text
          fw={800}
          mb={16}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Everything Your{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sales Team Needs
          </Text>
        </Text>
        {/* Subtitle */}
        <Text
          mb={{ base: 40, md: 60 }}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          A CRM built around how your team actually sells — not a rigid, one-size-fits-all template.
        </Text>
        {/* Service Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
          {services.map((service, index) => (
            <Box
              key={index}
              p={28}
              style={{
                borderRadius: 16,
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(13,148,136,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(13,148,136,0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 12px 30px rgba(20,184,166,0.15)"
                  : "0 12px 30px rgba(13,148,136,0.12)";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(20,184,166,0.35)"
                  : "rgba(13,148,136,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(13,148,136,0.1)";
              }}
            >
              {/* Icon */}
              <Box
                mb={20}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  background: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(13,148,136,0.06)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(13,148,136,0.1)",
                }}
              >
                {service.icon}
              </Box>
              {/* Title */}
              <Text
                fw={700}
                mb={10}
                style={{
                  fontSize: 18,
                  color: isDark ? "#ffffff" : "#0b1326",
                }}
              >
                {service.title}
              </Text>
              {/* Description */}
              <Text
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: isDark ? "rgba(255,255,255,0.6)" : "rgba(11,19,38,0.6)",
                }}
              >
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default CrmServiceSection;