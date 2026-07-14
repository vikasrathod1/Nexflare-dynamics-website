import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  Stack,
  Group,
  Avatar,
  Badge,
  useComputedColorScheme,
} from "@mantine/core";
import { IconStarFilled, IconQuote } from "@tabler/icons-react";

const reviews = [
  {
    rating: 5,
    quote:
      "Switching to Nexflare Dynamics transformed our workflow. Their ERP system is intuitive and has streamlined our operations, saving us countless hours every week. Highly recommended!",
    name: "Rahul Mehta",
    role: "Operations Manager, TechVista Inc. · Mumbai",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    rating: 5,
    quote:
      "Their Project Management Software keeps my team perfectly coordinated. It's an excellent tool for tracking progress and meeting deadlines efficiently — a genuine productivity boost.",
    name: "Rajiv Kumar",
    role: "Project Manager, BuildSmart Ltd. · Bengaluru",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    rating: 5,
    quote:
      "Nexflare's appointment booking system completely simplified our scheduling. Clients rave about how easy it is to book — it genuinely transformed our patient experience.",
    name: "Priya Sharma",
    role: "Founder, HealthPro Wellness · Pune",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    rating: 5,
    quote:
      "The CRM platform is incredibly user-friendly and customizable. It improved our customer relationships effortlessly. Nexflare's post-launch support is truly outstanding.",
    name: "Ananya Rao",
    role: "Sales Head, Zenith Traders · Hyderabad",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

const ClientReviews = () => {
  // Parent component controls the page background; this component only
  // reads the computed color scheme to adapt text / card / badge colors.
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Aqua accent — brighter/lighter in dark mode for pop against the dark bg,
  // deeper/more saturated in light mode for readable contrast on white.
  const accent = isDark ? "#22d3ee" : "#0891b2"; // cyan-400 (dark) / cyan-600 (light)
  const textSecondary = isDark ? "rgba(226,232,240,.65)" : "rgba(15,23,42,.6)";
  const quoteColor = isDark ? "rgba(226,232,240,.85)" : "rgba(15,23,42,.75)";
  const cardBg = isDark ? "rgba(255,255,255,.02)" : "rgba(15,23,42,.02)";
  const cardBorder = isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)";
  const quoteIconColor = isDark ? "rgba(34,211,238,.25)" : "rgba(8,145,178,.2)";
  const starColor = accent;

  return (
    <Box component="section" py={80}>
      <Container size="lg">
        <Box maw={560} mb={48}>
          <Group gap={8} mb={12}>
            {/* <Box w={24} h={2} style={{ background: accent }} /> */}
            <Text
              fw={700}
              size="xs"
              tt="uppercase"
              style={{ letterSpacing: 1.5, color: accent }}
            >
              Client Reviews
            </Text>
          </Group>
          <Title
            order={2}
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.15,
              color: accent,
              fontWeight: 800,
            }}
            mb={16}
          >
            Hear from our happy clients
          </Title>
          <Text style={{ color: textSecondary, lineHeight: 1.7 }} size="sm">
            Real stories from Indian businesses who transformed their
            operations with Nexflare Dynamics.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {reviews.map(({ rating, quote, name, role, avatar }) => (
            <Box
              key={name}
              p="xl"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 8,
                position: "relative",
                transition: "border-color 150ms ease, transform 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = cardBorder;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Group justify="space-between" align="flex-start" mb="md">
                <Group gap={2}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <IconStarFilled key={i} size={14} color={starColor} />
                  ))}
                </Group>

                <Badge
                  radius={4}
                  variant="outline"
                  styles={{
                    root: {
                      background: isDark
                        ? "rgba(34,211,238,.08)"
                        : "rgba(8,145,178,.06)",
                      borderColor: accent,
                      color: accent,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    },
                  }}
                >
                  Verified
                </Badge>
              </Group>

              <IconQuote
                size={28}
                color={quoteIconColor}
                fill={quoteIconColor}
                style={{ marginBottom: 8 }}
              />

              <Text
                size="sm"
                mb="lg"
                style={{ color: quoteColor, lineHeight: 1.7, fontStyle: "italic" }}
              >
                {quote}
              </Text>

              <Group gap={10}>
                <Avatar src={avatar} alt={name} radius="xl" size={36} />
                <Stack gap={0}>
                  <Text fw={700} size="sm" style={{ color: accent }}>
                    {name}
                  </Text>
                  <Text size="xs" style={{ color: textSecondary }}>
                    {role}
                  </Text>
                </Stack>
              </Group>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ClientReviews;