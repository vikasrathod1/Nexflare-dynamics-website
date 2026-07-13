import { Box, Container, Text, Title, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
import { Layers, Package, Car, Shirt } from "lucide-react";

const industries = [
  {
    icon: Layers,
    title: "Discrete Manufacturing",
    description:
      "Manage production planning, BOM, and work orders efficiently. Improve visibility across production and reduce delays, ensuring timely delivery and better resource utilization.",
  },
  {
    icon: Package,
    title: "Process Manufacturing",
    description:
      "For chemicals and food processing industries, providing batch tracking, quality control, and compliance management for consistent production and regulatory standards.",
  },
  {
    icon: Car,
    title: "Automobile Industry",
    description:
      "Supports automobile manufacturers with supply chain management, inventory, and vendor coordination — reducing production downtime and ensuring smooth inter-departmental flow.",
  },
  {
    icon: Shirt,
    title: "Textile Industry",
    description:
      "Manage raw materials, production cycles, and order tracking efficiently. Improve inventory accuracy and ensure timely order fulfillment for every customer and every season.",
  },
];

const IndustriesScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(37,99,235,0.03)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const iconBg = isDark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.10)";
  const iconColor = "#06b6d4";
  const eyebrowColor = "#2563eb";
  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.65)" : "rgba(11,19,38,0.65)";
  const cardTitleColor = isDark ? "#f1f5f9" : "#0f172a";
  const cardBodyColor = isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.62)";

  return (
    <Box component="section" py={{ base: 56, md: 88 }}>
      <Container size="lg">
        <Stack gap={6} mb={44} maw={640}>
          <Box style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Box style={{ width: 18, height: 1.5, background: eyebrowColor }} />
            <Text
              fw={700}
              size="xs"
              style={{
                color: "aqua",
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              Industries We Serve
            </Text>
          </Box>

          <Title
            order={2}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 600,
              fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)",
              lineHeight: 1.15,
              color: headingColor,
              marginTop: 8,
            }}
          >
            NEX ERP Across Manufacturing Sectors
          </Title>

          <Text mt={10} size="md" style={{ color: bodyColor, lineHeight: 1.65 }}>
            Our ERP solution is purpose-built for India's diverse manufacturing
            landscape, delivering sector-specific tools for each industry.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {industries.map(({ icon: Icon, title, description }) => (
            <Box
              key={title}
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 14,
                padding: "28px 24px",
                transition: "border-color 150ms ease, transform 150ms ease",
              }}
              className="industry-card"
            >
              <Box
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Icon size={20} color={iconColor} strokeWidth={1.8} />
              </Box>

              <Text
                fw={700}
                size="md"
                mb={10}
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: cardTitleColor,
                }}
              >
                {title}
              </Text>

              <Text size="sm" style={{ color: cardBodyColor, lineHeight: 1.65 }}>
                {description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <style>{`
        .industry-card:hover {
          border-color: ${isDark ? "rgba(6,182,212,0.4)" : "rgba(37,99,235,0.3)"};
          transform: translateY(-2px);
        }
      `}</style>
    </Box>
  );
};

export default IndustriesScreen;