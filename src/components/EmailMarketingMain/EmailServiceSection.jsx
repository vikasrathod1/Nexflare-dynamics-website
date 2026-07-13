import { Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const services = [
  {
    icon: "✉️",
    title: "Email Campaign Design",
    description:
      "Stunning, mobile-optimised email templates designed to reflect your brand and drive clicks — every single send.",
  },
  {
    icon: "⚡",
    title: "Marketing Automation",
    description:
      "Welcome sequences, drip campaigns, cart abandonment flows, and re-engagement series that work around the clock without manual effort.",
  },
  {
    icon: "🎯",
    title: "List Segmentation",
    description:
      "Precision audience segmentation by behaviour, demographics, and purchase history — so every subscriber gets the most relevant message.",
  },
  {
    icon: "🖊️",
    title: "Copywriting & Strategy",
    description:
      "Persuasive subject lines, compelling body copy, and clear CTAs written by email specialists who understand conversion psychology.",
  },
  {
    icon: "🧪",
    title: "A/B Testing",
    description:
      "Systematic testing of subject lines, send times, CTAs, and content to continuously improve open rates, click rates, and conversions.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description:
      "Monthly reports on open rates, click-through rates, conversions, revenue attributed, and list health — with clear recommendations.",
  },
];
const EmailServiceSection = () => {
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
          Complete Email{" "}
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
            Marketing Solutions
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
          From strategy to automation — every email touchpoint crafted to move your audience from interest to action.
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
                  : "rgba(13,148,136,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(13,148,136,0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
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
                    : "rgba(13,148,136,0.06)",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(13,148,136,0.1)",
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
export default EmailServiceSection;