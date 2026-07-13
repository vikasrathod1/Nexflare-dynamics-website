import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";
const services = [
  {
    icon: "📱",
    title: "iOS App Development",
    description:
      "Native iOS apps built with Swift and SwiftUI — fast, intuitive, and fully optimised for the Apple ecosystem including iPhone, iPad, and Apple Watch.",
  },
  {
    icon: "🤖",
    title: "Android App Development",
    description:
      "High-performance Android apps using Kotlin and Jetpack Compose, engineered for every screen size and the full diversity of Android devices.",
  },
  {
    icon: "⚡",
    title: "Cross-Platform Apps",
    description:
      "One codebase, two platforms — React Native and Flutter apps that deliver near-native performance on both iOS and Android at reduced cost.",
  },
  {
    icon: "🌐",
    title: "Progressive Web Apps",
    description:
      "Fast, installable PWAs that work offline, load instantly, and deliver an app-like experience directly in the browser without app store friction.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centred design with wireframes, prototypes, and pixel-perfect interfaces that maximise engagement, retention, and conversion.",
  },
  {
    icon: "🔧",
    title: "App Maintenance & Support",
    description:
      "Post-launch support, OS update compatibility, performance monitoring, and feature enhancements to keep your app running flawlessly.",
  },
];
const AppServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  return (
    <Box component="section" py={100}>
      <Container size="lg">
        {/* Section Header */}
        <Stack gap={10} mb={50} maw={700}>
          <Text
            fw={700}
            size="sm"
            style={{
              letterSpacing: 3,
              color: "#14b8a6",
              textTransform: "uppercase",
            }}
          >
            What We Offer
          </Text>
          <Title
            order={2}
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
              lineHeight: 1.2,
            }}
          >
            Complete{" "}
            <span style={{ color: "#14b8a6" }}>
              App Development Solutions
            </span>
          </Title>
          <Text
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            End-to-end app development — from ideation and UI/UX to launch
            and ongoing maintenance — built for scale and performance.
          </Text>
        </Stack>
        {/* Service Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {services.map((service, index) => (
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
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              className="app-service-card"
            >
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: 20,
                  background: isDark
                    ? "rgba(20,184,166,0.1)"
                    : "rgba(20,184,166,0.08)",
                }}
              >
                {service.icon}
              </Box>
              <Text
                fw={700}
                mb={10}
                style={{
                  fontSize: "1.1rem",
                  color: isDark ? "#f8fafc" : "#0f172a",
                }}
              >
                {service.title}
              </Text>
              <Text
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: isDark
                    ? "rgba(226,232,240,0.65)"
                    : "rgba(15,23,42,0.6)",
                }}
              >
                {service.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
      <style>
        {`
          .app-service-card:hover {
            transform: translateY(-4px);
          }
        `}
      </style>
    </Box>
  );
};
export default AppServiceSection;