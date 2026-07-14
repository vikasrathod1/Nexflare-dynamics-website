import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  useComputedColorScheme,
} from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ElevateCTAScreen = () => {
  const navigate = useNavigate();
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const eyebrowColor = "aqua";
  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const borderColor = isDark ? "rgba(6,182,212,0.35)" : "rgba(6,182,212,0.3)";
  const panelBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)";

  return (
    <Box component="section" py={{ base: 48, md: 72 }}>
      <Container size="lg">
        <Box
          style={{
            position: "relative",
            border: `1px solid ${borderColor}`,
            borderRadius: 24,
            padding: "64px 24px",
            background: panelBg,
            overflow: "hidden",
          }}
        >
          {/* ambient glow */}
          <Box
            style={{
              position: "absolute",
              top: "35%",
              left: "10%",
              width: 260,
              height: 200,
              background:
                "radial-gradient(circle, rgba(217,119,87,0.18), transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />
          <Box
            style={{
              position: "absolute",
              top: "20%",
              right: "5%",
              width: 300,
              height: 220,
              background:
                "radial-gradient(circle, rgba(6,182,212,0.14), transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <Stack
            gap={0}
            align="center"
            ta="center"
            style={{ position: "relative" }}
            mx="auto"
            maw={620}
          >
            <Text
              fw={700}
              size="xs"
              mb={18}
              style={{
                color: eyebrowColor,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              Let's Build Together
            </Text>

            <Title
              order={2}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.2vw, 3rem)",
                lineHeight: 1.2,
                color: headingColor,
              }}
            >
              Ready to Elevate
              <br />
              Your Business?
            </Title>

            <Text
              mt={22}
              size="md"
              style={{ color: bodyColor, lineHeight: 1.7 }}
            >
              We don't just build software — we build possibilities. Let's
              create something extraordinary together that drives real,
              measurable results for your business.
            </Text>

            <Group mt={32} gap={14}>
              <Box
                component="a"
                href="#schedule-call"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 26px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#0891b2,#06b6d4)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
                onClick={() => navigate("/contact")}
              >
                Schedule a Call <ArrowRight size={15} />
              </Box>

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
                  color: headingColor,
                  fontWeight: 600,
                  fontSize: 14,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Email Us
              </Box>
            </Group>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ElevateCTAScreen;
