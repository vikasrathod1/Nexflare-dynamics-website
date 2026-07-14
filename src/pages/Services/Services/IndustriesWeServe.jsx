import { Box, Container, Text, Title, SimpleGrid, ThemeIcon, Stack, Group } from "@mantine/core";
import { useComputedColorScheme } from "@mantine/core";
import {
  IconActivity,
  IconCurrencyDollar,
  IconShoppingCart,
  IconBook2,
  IconTruck,
  IconBriefcase,
} from "@tabler/icons-react";

const industries = [
  {
    icon: IconActivity,
    title: "Healthcare",
    description:
      "Patient management, appointment booking, and telemedicine platforms",
  },
  {
    icon: IconCurrencyDollar,
    title: "Finance & Fintech",
    description: "Secure payment systems, banking dashboards, and financial analytics",
  },
  {
    icon: IconShoppingCart,
    title: "E-Commerce",
    description: "Scalable storefronts, inventory management, and order processing",
  },
  {
    icon: IconBook2,
    title: "Education",
    description: "LMS platforms, virtual classrooms, and student management systems",
  },
  {
    icon: IconTruck,
    title: "Logistics",
    description: "Fleet tracking, warehouse management, and supply chain automation",
  },
  {
    icon: IconBriefcase,
    title: "Enterprise & SaaS",
    description: "Custom ERP, CRM, and multi-tenant SaaS platforms for growing businesses",
  },
];

const IndustriesWeServe = () => {
  // Parent component controls the theme background; this component only
  // reads the computed color scheme to adapt text / card colors.
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const accent = isDark ? "#22d3ee" : "#0891b2"; // cyan-400 (dark) / cyan-600 (light) // orange accent used for eyebrow, headline highlight, icons
  const textPrimary = isDark ? "#f5f7fa" : "#0b1326";
  const textSecondary = isDark ? "rgba(226,232,240,.65)" : "rgba(15,23,42,.6)";
  const cardBg = isDark ? "rgba(255,255,255,.02)" : "rgba(15,23,42,.02)";
  const cardBorder = isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)";
  const iconBg = isDark ? "rgba(249,115,22,.12)" : "rgba(249,115,22,.1)";

  return (
    <Box component="section" py={80}>
      <Container size="lg">
        <Group justify="space-between" align="flex-start" mb={48} wrap="wrap" gap="xl">
          <Box maw={520}>
            <Group gap={8} mb={12}>
              {/* <Box w={24} h={2} style={{ background: accent }} /> */}
              <Text
                fw={700}
                size="xs"
                tt="uppercase"
                style={{ letterSpacing: 1.5, color: accent }}
              >
                Industries We Serve
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
            >
              Versatile expertise across every sector
            </Title>
          </Box>

          <Text
            maw={360}
            style={{ color: textSecondary, lineHeight: 1.7 }}
            size="sm"
          >
            Our versatile team tailors solutions to meet sector-specific
            challenges, driving real results across Indian industries and
            beyond.
          </Text>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
          {industries.map(({ icon: Icon, title, description }) => (
            <Box
              key={title}
              p="xl"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 8,
                transition: "border-color 150ms ease, transform 150ms ease",
                cursor: "default",
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
              <Stack gap="md">
                <ThemeIcon
                  size={48}
                  radius={8}
                  style={{
                    background: iconBg,
                    color: accent,
                  }}
                >
                  <Icon size={24} stroke={1.75} />
                </ThemeIcon>

                <Box>
                  <Text fw={700} size="md" mb={6} style={{ color: accent }}>
                    {title}
                  </Text>
                  <Text size="sm" style={{ color: textSecondary, lineHeight: 1.6 }}>
                    {description}
                  </Text>
                </Box>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default IndustriesWeServe;