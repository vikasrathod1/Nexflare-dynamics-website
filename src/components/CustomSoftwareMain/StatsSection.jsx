import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
const ACCENT = "#2DD4BF";
const stats = [
  { value: "100+", label: "Custom Projects Delivered" },
  { value: "98%", label: "On-Time Delivery Rate" },
  { value: "40+", label: "Industries Served" },
  { value: "4.9★", label: "Average Client Rating" },
];
const StatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "100px 0",
      }}
    >
      <Container size="xl">
        {/* Eyebrow */}
        <Text
          fw={700}
          size="sm"
          style={{
            color: ACCENT,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Our Track Record
        </Text>
        {/* Heading */}
        <Title
          order={2}
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            textAlign: "center",
            marginBottom: 64,
            color: isDark ? "#F5F7FA" : "#0B1326",
          }}
        >
          Numbers That{" "}
          <Text component="span" inherit style={{ color: ACCENT }}>
            Speak for Themselves
          </Text>
        </Title>
        {/* Stats grid */}
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing={24}>
          {stats.map((stat) => (
            <Box
              key={stat.label}
              style={{
                padding: "32px 24px",
                borderRadius: 16,
                textAlign: "center",
                border: `1px solid ${
                  isDark ? "rgba(148,163,184,0.15)" : "rgba(15,23,42,0.1)"
                }`,
                background: isDark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(15,23,42,0.02)",
              }}
            >
              <Text
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: ACCENT,
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontSize: "1rem",
                  color: isDark
                    ? "rgba(226,232,240,0.75)"
                    : "rgba(15,23,42,0.65)",
                }}
              >
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default StatsSection;