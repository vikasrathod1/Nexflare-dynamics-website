import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Group,
  Button,
  useComputedColorScheme,
} from "@mantine/core";
const ApiCTASection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const mutedColor = isDark ? "rgba(226,232,240,0.75)" : "rgba(15,23,42,0.65)";
  const borderColor = isDark
    ? "rgba(20,184,166,0.2)"
    : "rgba(20,184,166,0.15)";
  // Handle redirect to Contact page
  const handleBookConsultation = () => {
    window.location.href = "/contact"; // Change this if your contact route is different
  };
  return (
    <Box
      component="section"
      py={90}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? `radial-gradient(circle at 50% 0%, rgba(20,184,166,0.18), transparent 60%)`
          : `radial-gradient(circle at 50% 0%, rgba(20,184,166,0.1), transparent 60%)`,
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <Container size="md">
        <Title
          order={2}
          ta="center"
          fz={{ base: 30, sm: 42 }}
          fw={800}
          mb={20}
          style={{ lineHeight: 1.2 }}
        >
          <Text component="span" inherit style={{ color: textColor }}>
            Ready to Build a{" "}
          </Text>
          <Text
            component="span"
            inherit
            fs="italic"
            style={{ color: "#14b8a6" }}
          >
            Reliable API?
          </Text>
        </Title>
        <Text
          ta="center"
          fz={17}
          maw={560}
          mx="auto"
          mb={40}
          style={{ color: mutedColor, lineHeight: 1.7 }}
        >
          Get a free API architecture review and let&apos;s design something
          scalable, secure, and future-proof.
        </Text>
        <Group justify="center" gap={16}>
          <Button
            size="lg"
            radius="xl"
            styles={{
              root: {
                backgroundColor: "#14b8a6",
                color: "#04120f",
                fontWeight: 700,
                paddingLeft: 32,
                paddingRight: 32,
                height: 54,
                "&:hover": { backgroundColor: "#0d9488" },
              },
            }}
            onClick={handleBookConsultation}
          >
            Book Free API Consultation
          </Button>
          <Button
            size="lg"
            radius="xl"
            variant="outline"
            styles={{
              root: {
                borderColor: isDark
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(15,23,42,0.25)",
                color: textColor,
                fontWeight: 700,
                paddingLeft: 32,
                paddingRight: 32,
                height: 54,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.03)",
                },
              },
            }}
          >
            Call +91-8237525097
          </Button>
        </Group>
      </Container>
    </Box>
  );
};
export default ApiCTASection;
