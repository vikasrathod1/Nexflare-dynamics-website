import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  Paper,
  Avatar,
  Group,
  Stack,
  useComputedColorScheme,
} from "@mantine/core";
const testimonials = [
  {
    quote:
      "Nexflare built our Shopify store from scratch and our first-month revenue exceeded our entire previous year online. The conversion optimisation alone paid for the project 5x over.",
    name: "Mehul Shah",
    role: "Founder, Drape & Weave",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote:
      "We migrated from a clunky custom platform to WooCommerce with Nexflare. Zero downtime, all data preserved, and our page load time went from 8 seconds to under 2.",
    name: "Kavitha Reddy",
    role: "CEO, OrganicNest",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote:
      "Our B2B portal handles 500+ orders a day seamlessly. The ERP integration was flawless and the team was incredibly professional throughout the entire project.",
    name: "Suresh Kumar",
    role: "Director, BulkMart Pro",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
];
const EDClientSection = () => {
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
            Client Success
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
            What Our <span style={{ color: "#14b8a6" }}>Clients Say</span>
          </Title>
        </Stack>
        {/* Testimonial Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {testimonials.map((item, index) => (
            <Paper
              key={index}
              radius="lg"
              p="xl"
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              className="ed-testimonial-card"
            >
              <Text
                fw={800}
                style={{
                  fontSize: "2rem",
                  lineHeight: 1,
                  color: "#14b8a6",
                  marginBottom: 12,
                  fontFamily: "Georgia, serif",
                }}
              >
                &rdquo;
              </Text>
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.85)"
                    : "rgba(15,23,42,0.75)",
                  flexGrow: 1,
                  marginBottom: 24,
                }}
              >
                {item.quote}
              </Text>
              <Group gap="sm" wrap="nowrap">
                <Avatar src={item.avatar} radius="xl" size={44} />
                <Stack gap={0}>
                  <Text
                    fw={700}
                    size="sm"
                    style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    size="xs"
                    style={{
                      color: isDark
                        ? "rgba(226,232,240,0.6)"
                        : "rgba(15,23,42,0.55)",
                    }}
                  >
                    {item.role}
                  </Text>
                </Stack>
              </Group>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
      <style>
        {`
          .ed-testimonial-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};
export default EDClientSection;
