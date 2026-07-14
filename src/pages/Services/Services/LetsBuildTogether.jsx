import {
  Box,
  Container,
  Text,
  Title,
  Group,
  Stack,
  Button,
  Divider,
  useComputedColorScheme,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const contactInfo = [
  { label: "Phone", value: "+91-8237525097" },
  { label: "Email", value: "enquiry@nexflaredynamics.com" },
  { label: "Location", value: "Kharadi, Pune" },
];

const LetsBuildTogether = () => {
  const navigate = useNavigate();
  // Parent component controls the page background; this component only
  // reads the computed color scheme to adapt text / button / border colors.
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Aqua accent — brighter/lighter in dark mode for pop against the dark bg,
  // deeper/more saturated in light mode for readable contrast on white.
  const accent = isDark ? "#22d3ee" : "#0891b2"; // cyan-400 (dark) / cyan-600 (light)
  const textSecondary = isDark ? "rgba(226,232,240,.65)" : "rgba(15,23,42,.6)";
  const watermarkColor = isDark
    ? "rgba(255,255,255,.03)"
    : "rgba(15,23,42,.04)";
  const dividerColor = isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)";
  const labelColor = isDark ? "rgba(226,232,240,.45)" : "rgba(15,23,42,.45)";
  const primaryBtnBg = isDark ? "#f5f7fa" : "#0b1326";
  const primaryBtnText = isDark ? "#0b1326" : "#ffffff";

  return (
    <Box
      component="section"
      py={80}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Watermark text */}
      <Text
        aria-hidden
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(120px, 18vw, 260px)",
          fontWeight: 800,
          color: watermarkColor,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        Build
      </Text>

      <Container size="md" style={{ position: "relative", zIndex: 1 }}>
        <Stack align="center" gap={0}>
          <Group gap={8} mb={20}>
            {/* <Box w={24} h={2} style={{ background: accent }} /> */}
            <Text
              fw={700}
              size="xs"
              tt="uppercase"
              style={{ letterSpacing: 1.5, color: accent }}
            >
              Let's Build Together
            </Text>
          </Group>

          <Title
            order={2}
            ta="center"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(40px, 7vw, 76px)",
              lineHeight: 1.1,
              color: accent,
              fontWeight: 800,
            }}
          >
            Elevate your
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>
              digital potential
            </span>
            <br />
            today
          </Title>

          <Text
            ta="center"
            maw={560}
            mt={24}
            mb={36}
            size="md"
            style={{ color: textSecondary, lineHeight: 1.7 }}
          >
            From intuitive platforms to seamless integrations — we create tools
            that enhance your digital footprint and accelerate business success
            across India and beyond.
          </Text>

          <Group gap="md" mb={56}>
            <Button
              size="md"
              radius={4}
              rightSection={<IconArrowRight size={16} />}
              styles={{
                root: {
                  background: primaryBtnBg,
                  color: primaryBtnText,
                  fontWeight: 600,
                  "&:hover": { background: primaryBtnBg, opacity: 0.9 },
                },
              }}
              onClick={() => navigate("/contact")}
            >
              Schedule a Call
            </Button>
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

          <Divider w="100%" color={dividerColor} mb={32} />

          <Group gap={0} justify="center" w="100%">
            {contactInfo.map(({ label, value }, i) => (
              <Group key={label} gap={0} wrap="nowrap">
                <Stack gap={4} align="center" px={{ base: 20, sm: 40 }}>
                  <Text
                    size="xs"
                    fw={600}
                    tt="uppercase"
                    style={{ letterSpacing: 1, color: labelColor }}
                  >
                    {label}
                  </Text>
                  <Text fw={700} size="sm" style={{ color: accent }}>
                    {value}
                  </Text>
                </Stack>
                {i < contactInfo.length - 1 && (
                  <Divider orientation="vertical" color={dividerColor} />
                )}
              </Group>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default LetsBuildTogether;
