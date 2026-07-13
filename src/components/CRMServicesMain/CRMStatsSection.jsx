import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const stats = [
  { value: "50+", label: "CRMs Delivered" },
  { value: "40%", label: "Productivity Increase" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.8★", label: "Client Rating" },
];
const CRMStatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        {/* Section Label */}
        <Text
          ta="center"
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#14b8a6",
          }}
        >
          Results
        </Text>
        {/* Heading */}
        <Text
          ta="center"
          fw={800}
          mb={{ base: 40, md: 60 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Numbers That{" "}
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
            Prove It
          </Text>
        </Text>
        {/* Stats Grid */}
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing={{ base: 20, md: 24 }}>
          {stats.map((stat, index) => (
            <Box
              key={index}
              p={{ base: 24, md: 28 }}
              style={{
                textAlign: "center",
                borderRadius: 16,
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(13,148,136,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(13,148,136,0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                cursor: "default",
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
              <Text
                fw={800}
                mb={8}
                style={{
                  fontSize: "clamp(28px, 3.2vw, 38px)",
                  lineHeight: 1.1,
                  color: "#14b8a6",
                }}
              >
                {stat.value}
              </Text>
              <Text
                size="sm"
                fw={500}
                style={{
                  color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
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
export default CRMStatsSection;