import React from "react";
import {
  Box,
  Container,
  Paper,
  Text,
  Title,
  Button,
  Group,
  useComputedColorScheme,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ReadyToStart = () => {

  const navigate = useNavigate();
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textSecondary = isDark ? "rgba(203,213,225,.65)" : "rgba(71,85,105,.85)";
  const cardBg = isDark ? "#080b12" : "#ffffff";
  const cardBorder = isDark ? "rgba(45,212,191,.35)" : "rgba(20,184,166,.35)";
  const cardShadow = isDark
    ? "0 0 0 1px rgba(45,212,191,.08), 0 0 60px rgba(45,212,191,.12), 0 20px 60px rgba(0,0,0,.5)"
    : "0 0 0 1px rgba(20,184,166,.06), 0 0 50px rgba(20,184,166,.1), 0 20px 50px rgba(15,23,42,.08)";

  return (
    <Box py={80}>
      <Container size="lg">
        <Paper
          radius="xl"
          p={0}
          style={{
            position: "relative",
            overflow: "hidden",
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: cardShadow,
          }}
        >
          {/* ambient glow blobs */}
          <Box
            style={{
              position: "absolute",
              top: "30%",
              left: "5%",
              width: 260,
              height: 220,
              background: isDark ? "rgba(217,119,6,.18)" : "rgba(217,119,6,.1)",
              filter: "blur(70px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <Box
            style={{
              position: "absolute",
              bottom: "-10%",
              right: "10%",
              width: 300,
              height: 260,
              background: isDark ? "rgba(45,212,191,.14)" : "rgba(20,184,166,.1)",
              filter: "blur(80px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <Box
            ta="center"
            py={{ base: 56, sm: 72 }}
            px={{ base: 24, sm: 40 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Text
              size="xs"
              fw={700}
              mb={16}
              style={{
                letterSpacing: 1.5,
                color: isDark ? "#2dd4bf" : "#0d9488",
                textTransform: "uppercase",
              }}
            >
              Let's Build Together
            </Text>

            <Title
              order={2}
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontSize: "44px",
                fontWeight: 700,
                lineHeight: 1.25,
                color: textPrimary,
              }}
            >
              Ready to Start
              <br />
              Your Project?
            </Title>

            <Text size="sm" mt="md" mx="auto" maw={440} style={{ color: textSecondary, lineHeight: 1.7 }}>
              From intuitive platforms to seamless integrations, we create
              tools that enhance your digital footprint and accelerate
              business success.
            </Text>

            <Group justify="center" gap="md" mt={36}>
              {/* <Button
                size="md"
                radius="xl"
                rightSection={<IconArrowRight size={16} />}
                component="a"
                href="tel:+918237525097"
                style={{
                  background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
                  color: "#062421",
                  fontWeight: 700,
                }}
                 onClick={() => navigate("/contact")}
              >
                Call Us Now
              </Button> */}

              <Box
                component="button"
                type="button"
                onClick={() =>
                 window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1" +
                    "&to=enquiry@nexflaredynamics.com" +
                    "&su=Project%20Inquiry%20%E2%80%93%20Request%20for%20Consultation" +
                    "&body=Hello%20Nexflare%20Dynamics%20Team,%0A%0A" +
                    "I%20hope%20you%20are%20doing%20well.%0A%0A" +
                    "I%20am%20interested%20in%20discussing%20a%20project%20and%20would%20like%20to%20learn%20more%20about%20your%20services.%20I%20would%20appreciate%20the%20opportunity%20to%20connect%20with%20your%20team%20to%20discuss%20my%20requirements,%20project%20scope,%20and%20possible%20next%20steps.%0A%0A" +
                    "Please%20let%20me%20know%20a%20convenient%20time%20to%20schedule%20a%20discussion.%0A%0A" +
                    "Thank%20you%20for%20your%20time.%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0A" +
                    "Best%20Regards,%0A" +
                    "%5BYour%20Name%5D",
                  "_blank",
                  "noopener,noreferrer",
                )
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 26px",
                  borderRadius: "999px",
                  border: `1px solid ${
                    isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.25)"
                  }`,
                  // color: headingColor,
                  fontWeight: 600,
                  fontSize: 14,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Email Us
              </Box>
            </Group>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ReadyToStart;