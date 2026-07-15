import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  Group,
  SimpleGrid,
  useComputedColorScheme,
} from "@mantine/core";
import { Phone, Mail, MapPin } from "lucide-react";

const aqua = "aqua";
const teal = "#06b6d4";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91-8237525097"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["enquiry@nexflaredynamics.com", "contact-us@nexflaredynamics.com"],
  },
  {
    icon: MapPin,
    label: "Office Address",
    lines: [
      "Global Business Hub, EON Free Zone,",
      "Kharadi, Pune, Maharashtra 411014",
    ],
    bold: true,
  },
];

const stats = [
  { value: "24", suffix: "h", label: "Response Time" },
  { value: "50", suffix: "+", label: "Happy Clients" },
  { value: "100", suffix: "%", label: "Satisfaction" },
];

const GetInTouchScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const iconBg = isDark ? "rgba(6,182,212,0.14)" : "rgba(6,182,212,0.1)";
  const labelColor = isDark ? "rgba(226,232,240,0.45)" : "rgba(15,23,42,0.5)";
  const statLabelColor = isDark
    ? "rgba(226,232,240,0.55)"
    : "rgba(15,23,42,0.55)";

  return (
    <Box component="section" pt={40}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={{ base: 40, md: 60 }}
          py={60}
        >
          {/* Left column */}
          <Stack gap={0}>
            {/* <Box
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                alignSelf: "flex-start",
                padding: "8px 16px",
                borderRadius: 999,
                border: `1px solid ${teal}55`,
                background: isDark
                  ? "rgba(6,182,212,0.08)"
                  : "rgba(6,182,212,0.06)",
                marginBottom: 22,
              }}
            >
              <Box
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: teal,
                }}
              />
              <Text
                fw={700}
                size="xs"
                style={{
                  color: teal,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </Text>
            </Box> */}

            <Title
              order={2}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                lineHeight: 1.15,
                color: headingColor,
              }}
            >
              Let's Build <span style={{ color: teal }}>Your</span>
              <br />
              <span style={{ color: teal }}>Vision</span> Together
            </Title>

            <Text
              mt={22}
              size="md"
              maw={440}
              style={{ color: bodyColor, lineHeight: 1.75 }}
            >
              At Nexflare Dynamics, we value communication and collaboration.
              Reach out for project discussions, service enquiries, or expert
              consultations — our team is ready to assist at every step.
            </Text>

            <Group mt={36} gap={44}>
              {stats.map(({ value, suffix, label }) => (
                <Stack key={label} gap={4}>
                  <Text
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: headingColor,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                    <Text
                      component="span"
                      style={{ color: teal, fontSize: 16, fontWeight: 700 }}
                    >
                      {suffix}
                    </Text>
                  </Text>
                  <Text size="xs" style={{ color: statLabelColor }}>
                    {label}
                  </Text>
                </Stack>
              ))}
            </Group>
          </Stack>

          {/* Right column */}
          <Stack gap={16}>
            {contactCards.map(({ icon: Icon, label, lines }) => (
              <Box
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 14,
                  padding: "22px 24px",
                }}
              >
                <Box
                  style={{
                    width: 38,
                    height: 38,
                    minWidth: 38,
                    borderRadius: 10,
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={17} color={teal} strokeWidth={1.8} />
                </Box>

                <Stack gap={4}>
                  <Text
                    fw={600}
                    size="xs"
                    style={{
                      color: labelColor,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </Text>
                  {lines.map((line) => (
                    <Text
                      key={line}
                      size="sm"
                      fw={600}
                      style={{
                        color: label === "Office Address" ? headingColor : teal,
                        lineHeight: 1.5,
                      }}
                    >
                      {line}
                    </Text>
                  ))}
                </Stack>
              </Box>
            ))}

            <Box
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${teal}55`,
                background: isDark
                  ? "rgba(6,182,212,0.08)"
                  : "rgba(6,182,212,0.06)",
              }}
            >
              <Box
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: teal,
                }}
              />
              <Text size="xs" fw={600} style={{ color: teal }}>
                We're open Mon–Sat · 9 AM – 7 PM IST
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GetInTouchScreen;
