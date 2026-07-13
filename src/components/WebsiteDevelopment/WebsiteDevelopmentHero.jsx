import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Button,
  Badge,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";

const stats = [
  { value: "300+", label: "WEBSITES LAUNCHED" },
  { value: "<2s", label: "AVG. LOAD TIME" },
  { value: "99.9%", label: "UPTIME GUARANTEED" },
];

const WebsiteDevelopmentHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const imageOpacity = isDark ? 0.35 : 0.14;

  // Added this function
  const handleGetFreeQuote = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Redirect if contact form is on another page
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box
      component="section"
      py={150}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative code/developer workspace photo, masked to fade into
          the page background on the left so it never competes with text */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "55%",
          pointerEvents: "none",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: imageOpacity,
          maskImage: "linear-gradient(to left, rgba(0,0,0,1), transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1), transparent)",
        }}
      />

      {/* Teal brand-color tint over the photo, same mask so both fade together */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "55%",
          pointerEvents: "none",
          background: isDark
            ? "linear-gradient(135deg, rgba(20,184,166,0.35), rgba(6,182,212,0.12))"
            : "linear-gradient(135deg, rgba(20,184,166,0.22), rgba(6,182,212,0.08))",
          maskImage: "linear-gradient(to left, rgba(0,0,0,1), transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1), transparent)",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Stack gap={24} maw={650}>
          {/* Badge */}
          <Badge
            radius="xl"
            size="lg"
            variant="light"
            style={{
              alignSelf: "flex-start",
              backgroundColor: isDark
                ? "rgba(20,184,166,0.12)"
                : "rgba(20,184,166,0.1)",
              color: "#14b8a6",
              textTransform: "uppercase",
              letterSpacing: 1,
              fontWeight: 700,
              padding: "14px 18px",
            }}
          >
            • Web Dev &amp; Design
          </Badge>

          {/* Title */}
          <Title
            fw={800}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              lineHeight: 1.1,
            }}
          >
            <Text
              component="span"
              fw={800}
              style={{
                display: "block",
                fontSize: "inherit",
                color: isDark ? "#f8fafc" : "#0f172a",
              }}
            >
              Website
            </Text>
            <Text
              component="span"
              fw={800}
              style={{
                display: "block",
                fontSize: "inherit",
                color: "#14b8a6",
              }}
            >
              Development
            </Text>
          </Title>

          {/* Description */}
          <Text
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            Fast, secure, and scalable websites built on the right
            technology stack. From WordPress to fully custom builds — we
            code websites that perform under pressure.
          </Text>

          {/* Buttons */}
          <Group gap="md" mt={8}>
            <Button
              radius="xl"
              size="md"
              style={{
                backgroundColor: "#14b8a6",
                color: "#ffffff",
                fontWeight: 700,
                padding: "0 32px",
                height: 50,
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: "#0d9488",
                  },
                },
              }}
              onClick={handleGetFreeQuote}   
            >
              Get Free Quote
            </Button>

            {/* <Button
              radius="xl"
              size="md"
              variant="outline"
              style={{
                borderColor: isDark
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(15,23,42,0.2)",
                color: isDark ? "#f8fafc" : "#0f172a",
                fontWeight: 700,
                padding: "0 32px",
                height: 50,
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(15,23,42,0.03)",
                  },
                },
              }}
            >
              Our Services
            </Button> */}
          </Group>

          {/* Stats */}
          <SimpleGrid cols={3} spacing="xl" mt={40} maw={500}>
            {stats.map((stat, index) => (
              <Stack key={index} gap={4}>
                <Text
                  fw={800}
                  style={{
                    fontSize: "2rem",
                    color: "#14b8a6",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  size="xs"
                  fw={600}
                  style={{
                    letterSpacing: 0.5,
                    color: isDark
                      ? "rgba(226,232,240,0.6)"
                      : "rgba(15,23,42,0.55)",
                  }}
                >
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentHero;