
import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Grid,
  Group,
  Button,
  Image,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
const ACCENT = "#2DD4BF";
const features = [
  "Tailored to your specific business processes and challenges",
  "Flexible and scalable — grows as your business evolves",
  "Robust security built for your industry and operations",
  "Cost-effective in the long run — no bloated, unused features",
  "Full IP ownership — you own the code, always",
  "Transparent communication from kick-off to delivery",
];
const techStack = [
  "Angular",
  "React Native",
  "Node.js",
  "Python",
  "PHP",
  "JavaScript",
  "MongoDB",
  "SQL",
];
const WhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Handle button click - Redirect to Contact page
  const handleDiscussProject = () => {
    window.location.href = "/contact"; // Change this path if your contact route is different
  };
  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "100px 0",
      }}
    >
      <Container size="xl">
        <Grid gutter={{ base: 40, md: 64 }} align="center">
          {/* Image */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${
                  isDark ? "rgba(45,212,191,0.35)" : "rgba(45,212,191,0.4)"
                }`,
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.45)"
                  : "0 20px 60px rgba(15,23,42,0.12)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Development team collaborating on laptops"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid.Col>
          {/* Content */}
          <Grid.Col span={{ base: 12, md: 7 }}>
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
              Why NexFlare Dynamics
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
              Software That{" "}
              <Text component="span" inherit style={{ color: ACCENT }}>
                Fits Like a Glove
              </Text>
            </Title>
            {/* Description */}
            <Text
              style={{
                maxWidth: 640,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: isDark
                  ? "rgba(226,232,240,0.75)"
                  : "rgba(15,23,42,0.65)",
                marginBottom: 32,
              }}
            >
              Off-the-shelf software forces your team to adapt to the tool.
              Our custom solutions adapt to you — built around your exact
              workflows, processes, and growth goals.
            </Text>
            {/* Checklist */}
            <Box style={{ marginBottom: 32 }}>
              {features.map((feature, index) => (
                <Group key={index} gap={12} wrap="nowrap" style={{ marginBottom: 16 }}>
                  <IconCheck
                    size={20}
                    stroke={2.5}
                    style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}
                  />
                  <Text
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: isDark
                        ? "rgba(226,232,240,0.85)"
                        : "rgba(15,23,42,0.75)",
                    }}
                  >
                    {feature}
                  </Text>
                </Group>
              ))}
            </Box>
            {/* Tech stack pills */}
            <Group gap={12} style={{ marginBottom: 40 }}>
              {techStack.map((tech) => (
                <Box
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 999,
                    border: `1px solid ${
                      isDark
                        ? "rgba(45,212,191,0.35)"
                        : "rgba(45,212,191,0.4)"
                    }`,
                    background: isDark
                      ? "rgba(45,212,191,0.06)"
                      : "rgba(45,212,191,0.08)",
                  }}
                >
                  <Text
                    size="sm"
                    fw={500}
                    style={{ color: ACCENT, whiteSpace: "nowrap" }}
                  >
                    {tech}
                  </Text>
                </Box>
              ))}
            </Group>
            {/* CTA Button - Updated */}
            <Button
              size="lg"
              radius="xl"
              style={{
                background: "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)",
                fontWeight: 700,
                padding: "0 36px",
                height: 52,
                border: "none",
              }}
              onClick={handleDiscussProject}
            >
              Discuss Your Project
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
export default WhyChooseUs;