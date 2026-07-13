import { Avatar, Box, Container, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const testimonials = [
  {
    quote:
      "Our abandoned cart flow alone recovers ₹4–5 lakhs in lost revenue every month. The automation Nexflare built is an absolute game-changer for our e-commerce store.",
    name: "Rohit Sharma",
    role: "Founder, FashionForward",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    quote:
      "Our email open rates went from 14% to 38% in 60 days. The segmentation strategy they applied was something we hadn't even considered. Brilliant team.",
    name: "Ananya Singh",
    role: "CMO, HealthFirst Wellness",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    quote:
      "The welcome sequence they wrote converted 22% of new subscribers into paying customers within 7 days. Email is now our #1 revenue channel, all thanks to Nexflare.",
    name: "Karan Mehta",
    role: "CEO, LearnUp Academy",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
];
const EmailClientSection = () => {
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
          Client Stories
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
          What Our{" "}
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
            Clients Say
          </Text>
        </Text>
        {/* Testimonial Cards */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
          {testimonials.map((item, index) => (
            <Box
              key={index}
              p={{ base: 24, md: 28 }}
              style={{
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
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
              {/* Quote mark */}
              <Text
                fw={800}
                mb={12}
                style={{
                  fontSize: 32,
                  lineHeight: 1,
                  color: "#14b8a6",
                }}
              >
                "
              </Text>
              {/* Quote text */}
              <Text
                fs="italic"
                mb={24}
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  flexGrow: 1,
                  color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                }}
              >
                {item.quote}
              </Text>
              {/* Author */}
              <Box style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar src={item.avatar} alt={item.name} radius="xl" size={44} />
                <Box>
                  <Text
                    fw={700}
                    size="sm"
                    style={{ color: isDark ? "#ffffff" : "#0b1326" }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    size="sm"
                    style={{
                      color: isDark ? "rgba(255,255,255,0.55)" : "rgba(11,19,38,0.55)",
                    }}
                  >
                    {item.role}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default EmailClientSection;