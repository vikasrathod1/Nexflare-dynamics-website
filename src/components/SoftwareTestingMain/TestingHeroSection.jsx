import {
  Box,
  Container,
  Title,
  Text,
  Group,
  SimpleGrid,
  Stack,
  Button,
  Badge,
  useComputedColorScheme,
} from "@mantine/core";

const stats = [
  { value: "500+", label: "PROJECTS TESTED" },
  { value: "98%", label: "DEFECT DETECTION RATE" },
  { value: "70%", label: "FASTER RELEASE CYCLES" },
];

const TestingHeroSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Added this function
  const handleStartQA = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };

  return (
    <Box
      component="section"
      py={130}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image - FIXED & RESTORED */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.45 : 0.45,
          pointerEvents: "none",
        }}
      />

      {/* Fade overlay so text stays readable */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(90deg, #060d18 0%, #060d18 35%, rgba(6,13,24,0.4) 70%, transparent 100%)"
            : "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.5) 70%, transparent 100%)",
          pointerEvents: "none",
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
            • Software Development
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
              Software Testing
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
              &amp; QA
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
            Ship bug-free software with confidence. Our QA engineers
            deliver end-to-end testing services — from manual
            exploratory testing to fully automated regression suites —
            so your product works flawlessly at every release.
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
              onClick={handleStartQA}
            >
              Start QA Engagement
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
              Explore Services
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

export default TestingHeroSection;