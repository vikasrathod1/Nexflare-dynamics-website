import { Box, Container, Text, Title, SimpleGrid, Stack, useComputedColorScheme } from "@mantine/core";
import { ArrowRight } from "lucide-react";

const accent = "aqua";

const products = [
  {
    // number: "01",
    tag: "NEX HRM",
    title: "HRM Software",
    description:
      "Complete HR operations — recruitment, payroll, attendance, and performance management with PF, ESI & TDS compliance.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=220&fit=crop&crop=top",
    href: "#hrm",
  },
  {
    // number: "02",
    tag: "NEX ERP",
    title: "ERP Software",
    description:
      "Integrate finance, HR, supply chain, and production in one GST-compliant system built for Indian manufacturers.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=220&fit=crop&crop=top",
    href: "#erp",
  },
  {
    // number: "03",
    tag: "NEX CRM",
    title: "CRM Software",
    description:
      "Centralize leads, track sales pipelines, run marketing campaigns, and deliver exceptional customer experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=220&fit=crop&crop=top",
    href: "#crm",
  },
  {
    // number: "04",
    tag: "NEX PM",
    title: "Project Manager",
    description:
      "Gantt charts, automated workflows, and real-time collaboration to keep every project on track and on time.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=220&fit=crop&crop=top",
    href: "#pm",
  },
  {
    // number: "05",
    tag: "Mobile Apps",
    title: "Android & iOS Apps",
    description:
      "From design to deployment — cross-platform mobile apps with 4.8★ average ratings and 50K+ downloads.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&h=220&fit=crop&crop=top",
    href: "#app",
  },
  {
    // number: "06",
    tag: "Booking",
    title: "Appointment Booking",
    description:
      "Slash no-shows with automated reminders, real-time booking, calendar sync, and secure payment collection.",
    image:
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=500&h=220&fit=crop&crop=top",
    href: "#booking",
  },
  {
    // number: "07",
    tag: "Finance",
    title: "Accounting & Finance",
    description:
      "Automated bookkeeping, real-time financial reports, tax management, multi-currency, and cloud access.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=220&fit=crop&crop=top",
    href: "#accounting",
  },
];

const NexflareSuiteScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const eyebrowColor = accent;
  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.65)" : "rgba(11,19,38,0.65)";
  const cardTitleColor = isDark ? "#f1f5f9" : "#0f172a";
  const cardBodyColor = isDark ? "rgba(226,232,240,0.55)" : "rgba(15,23,42,0.62)";

  return (
    <Box component="section" py={{ base: 56, md: 88 }}>
      <Container size="lg">
        <Stack gap={6} align="center" ta="center" mb={44} mx="auto" maw={640}>
          <Text
            fw={700}
            size="xs"
            style={{
              color: eyebrowColor,
              letterSpacing: 1.4,
              textTransform: "uppercase",
            }}
          >
            All Products
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 600,
              fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)",
              lineHeight: 1.15,
              color: headingColor,
              marginTop: 8,
            }}
          >
            The Complete Nexflare Suite
          </Title>

          <Text mt={10} size="md" style={{ color: bodyColor, lineHeight: 1.65 }}>
            All seven products — designed to integrate with each other for a
            seamless end-to-end business operating system.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {products.map(({ number, tag, title, description, image, href }) => (
            <Box
              key={number}
              component="a"
              href={href}
              style={{
                display: "block",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 14,
                overflow: "hidden",
                textDecoration: "none",
                transition: "border-color 150ms ease, transform 150ms ease",
              }}
              className="suite-card"
            >
              <Box
                style={{
                  height: 160,
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Box style={{ padding: "20px 22px 24px" }}>
                <Text
                  fw={700}
                  size="xs"
                  mb={10}
                  style={{
                    color: accent,
                    letterSpacing: 0.6,
                    textTransform: "uppercase",
                  }}
                >
                {tag}
                </Text>

                <Text
                  fw={700}
                  size="md"
                  mb={8}
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: cardTitleColor,
                  }}
                >
                  {title}
                </Text>

                <Text size="sm" mb={16} style={{ color: cardBodyColor, lineHeight: 1.6 }}>
                  {description}
                </Text>

                <Box
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: accent,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {/* Explore <ArrowRight size={15} /> */}
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <style>{`
        .suite-card:hover {
          border-color: ${accent};
          transform: translateY(-3px);
        }
      `}</style>
    </Box>
  );
};

export default NexflareSuiteScreen;