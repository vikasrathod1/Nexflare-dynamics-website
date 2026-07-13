import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Button,
  Image,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
const checklist = [
  "Certified developers in iOS, Android, React Native & Flutter",
  "Agile methodology with bi-weekly sprint reviews",
  "100% source code ownership — yours from day one",
  "NDA-protected development for full IP security",
  "Scalable cloud architecture on AWS / GCP / Azure",
  "Post-launch support and SLA-backed maintenance",
];
const AppWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Added this function
  const handleStartAppProject = () => {
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
    <Box component="section" py={100}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={60}
          verticalSpacing={40}
          style={{ alignItems: "center" }}
        >
          {/* Image */}
          <Box
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(15,23,42,0.08)",
              boxShadow: isDark
                ? "0 20px 50px rgba(0,0,0,0.4)"
                : "0 20px 50px rgba(15,23,42,0.1)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80"
              alt="Hand holding smartphone with app icons"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          {/* Content */}
          <Stack gap={20}>
            <Text
              fw={700}
              size="sm"
              style={{
                letterSpacing: 3,
                color: "#14b8a6",
                textTransform: "uppercase",
              }}
            >
              Why Nexflare
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
              Apps That <span style={{ color: "#14b8a6" }}>Users Love</span>
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
              We don't just write code — we craft digital experiences.
              Every app we build is engineered for performance, security,
              and long-term scalability.
            </Text>
            <Stack gap={16} mt={10}>
              {checklist.map((item, index) => (
                <Group key={index} gap={12} wrap="nowrap" align="flex-start">
                  <Box
                    style={{
                      minWidth: 22,
                      height: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <IconCheck size={18} color="#14b8a6" stroke={2.5} />
                  </Box>
                  <Text
                    style={{
                      fontSize: "1rem",
                      color: isDark
                        ? "rgba(226,232,240,0.85)"
                        : "rgba(15,23,42,0.75)",
                    }}
                  >
                    {item}
                  </Text>
                </Group>
              ))}
            </Stack>
            <Button
              radius="xl"
              size="md"
              mt={20}
              style={{
                alignSelf: "flex-start",
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
              onClick={handleStartAppProject}  
            >
              Start Your App Project
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default AppWhyChooseUs;