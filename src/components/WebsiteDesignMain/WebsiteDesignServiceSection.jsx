import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-first interface design with wireframing, prototyping, and usability testing to ensure every journey feels effortless.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that look and perform flawlessly on every screen — mobile, tablet, and desktop.",
  },
  {
    icon: "🏠",
    title: "Landing Page Design",
    description:
      "High-converting landing pages built to capture leads, drive sales, and maximise ROI from every ad campaign.",
  },
  {
    icon: "🔄",
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, fast, brand-aligned experience that reflects your business today.",
  },
  {
    icon: "🖌️",
    title: "Brand Identity Integration",
    description:
      "Cohesive design systems with custom typography, colour palettes, and visual language consistent across every page.",
  },
  {
    icon: "⚡",
    title: "Conversion Rate Optimisation",
    description:
      "Data-driven design decisions — A/B tested layouts, CTAs, and page structures to maximise your conversions.",
  },
];

const WebsiteDesignServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
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
          What We Offer
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
          Design Services That{" "}
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
            Convert
          </Text>
        </Text>

        {/* Subtitle */}
        <Text
          mb={{ base: 40, md: 60 }}
          maw={650}
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
          }}
        >
          Every pixel is placed with purpose — beautiful design backed by UX research and conversion strategy.
        </Text>

        {/* Service Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
          {services.map((service, index) => (
            <Box
              key={index}
              p={28}
              style={{
                borderRadius: 16,
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(37,99,235,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(37,99,235,0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 12px 30px rgba(6,182,212,0.15)"
                  : "0 12px 30px rgba(37,99,235,0.12)";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(6,182,212,0.35)"
                  : "rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(37,99,235,0.1)";
              }}
            >
              {/* Icon */}
              <Box
                mb={20}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  background: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(37,99,235,0.06)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(37,99,235,0.1)",
                }}
              >
                {service.icon}
              </Box>

              {/* Title */}
              <Text
                fw={700}
                mb={10}
                style={{
                  fontSize: 18,
                  color: isDark ? "#ffffff" : "#0b1326",
                }}
              >
                {service.title}
              </Text>

              {/* Description */}
              <Text
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: isDark ? "rgba(255,255,255,0.6)" : "rgba(11,19,38,0.6)",
                }}
              >
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WebsiteDesignServiceSection;
