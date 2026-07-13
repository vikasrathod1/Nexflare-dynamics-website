import { Box, Container, Group, Text, useComputedColorScheme } from "@mantine/core";

const tools = [
  "Meta Business Suite",
  "Hootsuite",
  "Buffer",
  "Canva Pro",
  "Adobe Premiere",
  "Sprout Social",
  "Later",
  "Creator Studio",
  "BuzzSumo",
  "Brandwatch",
];

const SMMTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="lg">
        {/* Section Label */}
        <Text
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#06b6d4",
          }}
        >
          Tools We Use
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
          Powered By{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #2563eb, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Best-in-Class Tools
          </Text>
        </Text>

        {/* Subtitle */}
        <Text
          mb={40}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          Industry-leading platforms to manage, schedule, analyse and grow your social presence.
        </Text>

        {/* Tool Pills */}
        <Group gap={14}>
          {tools.map((tool, index) => (
            <Box
              key={index}
              px={22}
              py={10}
              style={{
                borderRadius: 999,
                background: isDark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(37,99,235,0.04)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(37,99,235,0.15)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 10px 24px rgba(6,182,212,0.15)"
                  : "0 10px 24px rgba(37,99,235,0.12)";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(6,182,212,0.4)"
                  : "rgba(37,99,235,0.35)";
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(37,99,235,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(37,99,235,0.15)";
                e.currentTarget.style.background = isDark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(37,99,235,0.04)";
              }}
            >
              <Text
                size="sm"
                fw={500}
                style={{
                  color: isDark ? "rgba(255,255,255,0.85)" : "rgba(11,19,38,0.8)",
                  whiteSpace: "nowrap",
                }}
              >
                {tool}
              </Text>
            </Box>
          ))}
        </Group>
      </Container>
    </Box>
  );
};

export default SMMTools;
