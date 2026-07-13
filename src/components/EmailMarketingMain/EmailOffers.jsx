import { Box, Container, Group, SimpleGrid, Text, useComputedColorScheme } from "@mantine/core";
const stats = [
  { value: "48%", label: "Open Rate" },
  { value: "12%", label: "Click Rate" },
  { value: "6.2%", label: "Conversion" },
];
const EmailOffers = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }}>
          {/* Left image */}
          <Box
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(11,19,38,0.08)",
              minHeight: 320,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
              alt="Person checking email on laptop and phone"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          {/* Right content */}
          <Box>
            {/* Label */}
            <Text
              fw={700}
              size="sm"
              mb={8}
              style={{
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#14b8a6",
              }}
            >
              What Good Emails Look Like
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
              Emails That{" "}
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
                Get Results
              </Text>
            </Text>
            {/* Subtitle */}
            <Text
              mb={28}
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
              }}
            >
              Every email we craft is built on data — the right message, to the right person, at the right time.
            </Text>
            {/* Campaign Preview Card */}
            <Box
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(13,148,136,0.03)",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(13,148,136,0.1)",
              }}
            >
              {/* Card header */}
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  background: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(13,148,136,0.05)",
                  borderBottom: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(13,148,136,0.1)",
                }}
              >
                <Group gap={6}>
                  <Box style={{ width: 9, height: 9, borderRadius: "50%", background: isDark ? "rgba(255,255,255,0.25)" : "rgba(11,19,38,0.25)" }} />
                  <Box style={{ width: 9, height: 9, borderRadius: "50%", background: isDark ? "rgba(255,255,255,0.25)" : "rgba(11,19,38,0.25)" }} />
                  <Box style={{ width: 9, height: 9, borderRadius: "50%", background: isDark ? "rgba(255,255,255,0.25)" : "rgba(11,19,38,0.25)" }} />
                </Group>
                <Text
                  size="sm"
                  style={{
                    color: isDark ? "rgba(255,255,255,0.6)" : "rgba(11,19,38,0.6)",
                  }}
                >
                  Campaign Preview
                </Text>
              </Box>
              {/* Card body */}
              <Box p={{ base: 20, md: 28 }}>
                <Text
                  fw={700}
                  mb={12}
                  style={{
                    fontSize: 18,
                    color: isDark ? "#ffffff" : "#0b1326",
                  }}
                >
                  🔥 Exclusive offer just for you, [First Name]
                </Text>
                <Text
                  size="sm"
                  mb={16}
                  pb={16}
                  style={{
                    color: isDark ? "rgba(255,255,255,0.5)" : "rgba(11,19,38,0.5)",
                    borderBottom: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(11,19,38,0.08)",
                  }}
                >
                  From: Your Brand &lt;hello@yourbrand.com&gt;
                </Text>
                <Text
                  mb={14}
                  style={{
                    fontSize: 15,
                    color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                  }}
                >
                  Hi [First Name],
                </Text>
                <Text
                  mb={14}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
                  }}
                >
                  We noticed you've been exploring [Product/Service]. We'd love to help you take the next step with an exclusive offer crafted just for you…
                </Text>
                <Text
                  mb={20}
                  style={{
                    fontSize: 15,
                    color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
                  }}
                >
                  Here's what you get when you act today:
                </Text>
                <Box
                  component="button"
                  mb={20}
                  style={{
                    padding: "13px 26px",
                    borderRadius: 999,
                    border: "none",
                    background: "linear-gradient(90deg, #0d9488, #14b8a6)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Claim Your Offer →
                </Box>
                {/* Stats */}
                <Group
                  gap={40}
                  pt={20}
                  style={{
                    borderTop: isDark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(11,19,38,0.08)",
                  }}
                >
                  {stats.map((stat, index) => (
                    <Box key={index}>
                      <Text
                        fw={800}
                        style={{
                          fontSize: 22,
                          color: "#14b8a6",
                        }}
                      >
                        {stat.value}
                      </Text>
                      <Text
                        size="xs"
                        style={{
                          color: isDark ? "rgba(255,255,255,0.55)" : "rgba(11,19,38,0.55)",
                        }}
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </Group>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default EmailOffers;
