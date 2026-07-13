import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";

const stats = [
  { value: "300+", label: "Websites Successfully Launched" },
  { value: "<2s", label: "Average Page Load Time" },
  { value: "99.9%", label: "Uptime Across All Projects" },
  { value: "0", label: "Projects Delivered Late" },
];

const WebsiteDevelopmentStatsSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={100}>
      <Container size="lg">
        {/* Section Header */}
        <Stack align="center" gap={6} mb={60}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            Results
          </Text>

          <Title
            order={2}
            ta="center"
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
            }}
          >
            Numbers That <span style={{ color: "#14b8a6" }}>Prove It</span>
          </Title>
        </Stack>

        {/* Stats Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {stats.map((stat, index) => (
            <Paper
              key={index}
              radius="lg"
              p="xl"
              ta="center"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "#ffffff",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(15,23,42,0.08)",
                boxShadow: isDark
                  ? "0 8px 24px rgba(0,0,0,0.25)"
                  : "0 8px 24px rgba(15,23,42,0.06)",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              className="dev-stats-card"
            >
              <Text
                fw={800}
                style={{
                  fontSize: "2.6rem",
                  lineHeight: 1,
                  color: "#14b8a6",
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </Text>

              <Text
                style={{
                  fontSize: "0.95rem",
                  color: isDark
                    ? "rgba(226,232,240,0.7)"
                    : "rgba(15,23,42,0.6)",
                }}
              >
                {stat.label}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <style>
        {`
          .dev-stats-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};

export default WebsiteDevelopmentStatsSection;