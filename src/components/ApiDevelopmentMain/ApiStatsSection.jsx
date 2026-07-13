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
const STATS = [
  { value: "500M+", label: "API Calls Processed" },
  { value: "99.9%", label: "Average Uptime Achieved" },
  { value: "80+", label: "APIs Built & Deployed" },
  { value: "<80ms", label: "Average Response Time" },
];
const ApiStatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const mutedColor = isDark ? "rgba(226,232,240,0.7)" : "rgba(15,23,42,0.6)";
  return (
    <Box component="section" py={80}>
      <Container size="xl">
        <Text
          fw={700}
          fz={13}
          tt="uppercase"
          ta="center"
          style={{ letterSpacing: "1.5px", color: "#14b8a6" }}
          mb={12}
        >
          Performance Track Record
        </Text>
        <Title
          order={2}
          ta="center"
          fz={{ base: 30, sm: 40 }}
          fw={800}
          mb={48}
          style={{ lineHeight: 1.2 }}
        >
          <Text component="span" inherit style={{ color: textColor }}>
            Built for{" "}
          </Text>
          <Text component="span" inherit style={{ color: "#14b8a6" }}>
            Scale & Speed
          </Text>
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
          {STATS.map((stat) => (
            <Paper
              key={stat.label}
              py={36}
              px={24}
              radius={16}
              ta="center"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(15,23,42,0.02)",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"
                }`,
              }}
            >
              <Text
                fw={800}
                fz={{ base: 34, sm: 40 }}
                mb={10}
                style={{ color: "#14b8a6", lineHeight: 1 }}
              >
                {stat.value}
              </Text>
              <Text fz={15.5} style={{ color: mutedColor }}>
                {stat.label}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default ApiStatsSection;