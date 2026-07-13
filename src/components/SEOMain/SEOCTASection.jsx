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

const ACCENT = "#2DD4BF";

const SEOCTASection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // ==================== ONLY ADDED THIS ====================
  const handleGetFreeSEOAudit = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };
  // ========================================================

  return (
    <Box
      component="section"
      style={{
        position: "relative",
        padding: "110px 0",
        overflow: "hidden",
        background: isDark
          ? `radial-gradient(circle at 50% 0%, rgba(45,212,191,0.16), transparent 60%), #060d18`
          : `radial-gradient(circle at 50% 0%, rgba(45,212,191,0.12), transparent 60%), #f7fbff`,
      }}
    >
      <Container size="md">
        <Box style={{ textAlign: "center" }}>
          {/* Heading */}
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 24,
              color: isDark ? "#F5F7FA" : "#0B1326",
            }}
          >
            Ready to{" "}
            <Text
              component="span"
              inherit
              fs="italic"
              style={{ color: ACCENT }}
            >
              Rank Higher
            </Text>
            ?
          </Title>

          {/* Description */}
          <Text
            style={{
              maxWidth: 560,
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
              marginBottom: 40,
            }}
          >
            Get a free, no-obligation SEO audit worth ₹15,000. See exactly where you stand and what it will take to reach the top.
          </Text>

          {/* Buttons */}
          <Group justify="center" gap={16}>
            <Button
              size="lg"
              radius="xl"
              style={{
                background:
                  "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)",
                fontWeight: 700,
                padding: "0 32px",
                height: 52,
                border: "none",
              }}
              onClick={handleGetFreeSEOAudit}   
            >
              Get Free SEO Audit
            </Button>

            <Button
              size="lg"
              radius="xl"
              variant="outline"
              style={{
                borderColor: isDark
                  ? "rgba(226,232,240,0.3)"
                  : "rgba(15,23,42,0.25)",
                color: isDark ? "#F5F7FA" : "#0B1326",
                fontWeight: 700,
                padding: "0 32px",
                height: 52,
                background: "transparent",
              }}
            >
              Call Us Now
            </Button>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default SEOCTASection;