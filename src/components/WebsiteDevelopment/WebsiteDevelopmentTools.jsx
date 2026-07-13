import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Badge,
  useComputedColorScheme,
} from "@mantine/core";

const technologies = [
  "WordPress",
  "React.js",
  "Next.js",
  "Laravel",
  "Node.js",
  "HTML5 / CSS3",
  "JavaScript / TypeScript",
  "MySQL / PostgreSQL",
  "AWS / Cloudflare",
  "Git / GitHub",
  "Webflow",
  "Shopify",
];

const WebsiteDevelopmentTools = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={100}>
      <Container size="lg">
        {/* Section Header */}
        <Stack gap={10} mb={50} maw={700}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            Tech Stack
          </Text>

          <Title
            order={2}
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
              lineHeight: 1.2,
            }}
          >
            Technologies We <span style={{ color: "#14b8a6" }}>Master</span>
          </Title>

          <Text
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            We work with the world's most reliable web technologies to build
            fast, scalable, and maintainable websites.
          </Text>
        </Stack>

        {/* Tech Badges */}
        <Group gap="md">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              radius="xl"
              size="xl"
              variant="outline"
              style={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                padding: "20px 22px",
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "#ffffff",
                borderColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(15,23,42,0.1)",
                color: isDark
                  ? "rgba(226,232,240,0.85)"
                  : "rgba(15,23,42,0.75)",
              }}
            >
              {tech}
            </Badge>
          ))}
        </Group>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentTools;