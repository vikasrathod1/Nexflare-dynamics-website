import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  Button,
  useComputedColorScheme,
} from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";

const WebsiteDesignCTA = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Added this function
  const handleBookFreeConsultation = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Redirect to contact page if not on same page
      window.location.href = "/contact"; // ← Change this if your contact page URL is different
    }
  };

  return (
    <Box
      component="section"
      py={100}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? `
            radial-gradient(circle at 30% 20%, rgba(20,184,166,.25), transparent 45%),
            radial-gradient(circle at 70% 80%, rgba(6,182,212,.15), transparent 45%),
            linear-gradient(180deg, #04120f 0%, #061a16 50%, #04120f 100%)
          `
          : `
            radial-gradient(circle at 30% 20%, rgba(20,184,166,.12), transparent 45%),
            radial-gradient(circle at 70% 80%, rgba(6,182,212,.08), transparent 45%),
            linear-gradient(180deg, #ecfdf9 0%, #f0fdfa 50%, #ecfdf9 100%)
          `,
      }}
    >
      <Container size="md">
        <Stack align="center" gap={24}>
          <Title
            order={2}
            ta="center"
            fw={800}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: isDark ? "#f8fafc" : "#0f172a",
              lineHeight: 1.3,
            }}
          >
            Ready to{" "}
            <span style={{ color: "#14b8a6", fontStyle: "italic" }}>
              Redesign
            </span>{" "}
            Your Online Presence?
          </Title>

          <Text
            ta="center"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 500,
              color: isDark
                ? "rgba(226,232,240,0.75)"
                : "rgba(15,23,42,0.65)",
            }}
          >
            Book a free consultation and let's build a website that works as
            hard as you do.
          </Text>

          <Group gap="md" mt={12}>
            <Button
              radius="xl"
              size="md"
              style={{
                backgroundColor: "#14b8a6",
                color: "#ffffff",
                fontWeight: 700,
                padding: "0 32px",
                height: 48,
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: "#0d9488",
                  },
                },
              }}
              onClick={handleBookFreeConsultation}   
            >
              Book Free Consultation
            </Button>

            <Button
              radius="xl"
              size="md"
              variant="outline"
              leftSection={<IconPhone size={18} />}
              style={{
                borderColor: isDark
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(15,23,42,0.2)",
                color: isDark ? "#f8fafc" : "#0f172a",
                fontWeight: 700,
                padding: "0 32px",
                height: 48,
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
              Call Us Now
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default WebsiteDesignCTA;