import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
const steps = [
  {
    number: "01",
    title: "Understanding Your Business",
    description:
      "We start by analysing your unique needs, challenges, and goals — before a single line of code is written.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Our team creates detailed plans and user-centric designs that prioritise functionality, usability, and aesthetics — reviewed and approved by you.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Using the latest technologies and agile methodologies, we build robust, secure software — rigorously tested for quality at every milestone.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "Seamless deployment followed by continuous support, monitoring, and updates — so your software keeps performing at its best long after launch.",
  },
];
const ACCENT = "#2DD4BF";
const ProcessSection = () => {
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
            marginBottom: 16,
          }}
        >
          Our Approach
        </Text>
        {/* Heading */}
        <Title
          order={2}
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
            color: isDark ? "#F5F7FA" : "#0B1326",
          }}
        >
          How We{" "}
          <Text component="span" inherit style={{ color: ACCENT }}>
            Build Your Software
          </Text>
        </Title>
        {/* Description */}
        <Text
          style={{
            maxWidth: 620,
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)",
            marginBottom: 64,
          }}
        >
          A proven, transparent process that keeps you in control at every
          stage — from the first conversation to post-launch support.
        </Text>
        {/* Steps */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 40, lg: 32 }}
          verticalSpacing={48}
        >
          {steps.map((step, index) => (
            <Box
              key={step.number}
              style={{
                position: "relative",
                paddingRight: 24,
              }}
            >
              {/* Connecting line (hidden on last item, hidden on mobile stacking) */}
              {index !== steps.length - 1 && (
                <Box
                  visibleFrom="sm"
                  style={{
                    position: "absolute",
                    top: 28,
                    right: -16,
                    width: 32,
                    height: 1,
                    background: isDark
                      ? "rgba(148,163,184,0.25)"
                      : "rgba(15,23,42,0.15)",
                  }}
                />
              )}
              {/* Number */}
              <Text
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: isDark
                    ? "rgba(45,212,191,0.16)"
                    : "rgba(45,212,191,0.25)",
                  marginBottom: 12,
                  userSelect: "none",
                }}
              >
                {step.number}
              </Text>
              {/* Title */}
              <Text
                fw={700}
                size="lg"
                style={{
                  color: isDark ? "#F5F7FA" : "#0B1326",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </Text>
              {/* Description */}
              <Text
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(203,213,225,0.7)"
                    : "rgba(15,23,42,0.6)",
                }}
              >
                {step.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default ProcessSection;