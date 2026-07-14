import React from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Title,
  Paper,
  Group,
  Stack,
  ActionIcon,
  useComputedColorScheme,
} from "@mantine/core";

import { IconMapPin, IconClock, IconExternalLink, IconBookmark } from "@tabler/icons-react";

// Update this once — it drives the heading, the info cards, and the map query.
const OFFICE = {
  city: "Pune",
  name: "Global Business Hub",
  addressLine1: "Global Business Hub, EON Free Zone,",
  addressLine2: "Kharadi, Pune, Maharashtra 411014",
  hoursLine1: "Monday – Saturday",
  hoursLine2: "9:00 AM – 7:00 PM IST",
  mapQuery: "Global Business Hub, EON Free Zone, Kharadi, Pune, Maharashtra 411014",
};

const OfficeLocation = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textSecondary = isDark ? "#94a3b8" : "#64748b";
  const cardBg = isDark ? "rgba(15,23,42,.6)" : "rgba(255,255,255,.7)";
  const cardBorder = isDark ? "rgba(148,163,184,.15)" : "rgba(148,163,184,.25)";

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    OFFICE.mapQuery
  )}&output=embed`;

  return (
    <Box py={80}>
      <Container size="lg">
        <Grid gutter={40} align="stretch" mb={40}>
          {/* LEFT — heading + copy */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack justify="center" h="100%" gap="sm">
              <Group gap={8}>
                {/* <Box style={{ width: 18, height: 1, background: "#6366f1" }} /> */}
                <Text
                  size="xs"
                  fw={700}
                  style={{ letterSpacing: 1.5, color: "#06b6d4", textTransform: "uppercase" }}
                >
                  Our Office
                </Text>
              </Group>

              <Title
                order={2}
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontSize: "40px",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: textPrimary,
                }}
              >
                Find Us in {OFFICE.city}
              </Title>

              <Text size="sm" maw={420} style={{ color: textSecondary, lineHeight: 1.6 }}>
                We're based at the {OFFICE.name} in Kharadi, Pune — one of
                Maharashtra's premier tech zones. Drop by for an in-person
                consultation.
              </Text>
            </Stack>
          </Grid.Col>

          {/* RIGHT — info cards */}
          {/* <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="md" justify="center" h="100%">
              <Paper
                radius="lg"
                p="lg"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                <Group gap="md" wrap="nowrap" align="flex-start">
                  <Box
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isDark ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.1)",
                    }}
                  >
                    <IconMapPin size={18} color="#6366f1" />
                  </Box>
                  <div>
                    <Text
                      size="xs"
                      fw={700}
                      mb={4}
                      style={{ letterSpacing: 1, color: textSecondary, textTransform: "uppercase" }}
                    >
                      Address
                    </Text>
                    <Text size="sm" fw={600} style={{ color: textPrimary, lineHeight: 1.5 }}>
                      {OFFICE.addressLine1}
                      <br />
                      {OFFICE.addressLine2}
                    </Text>
                  </div>
                </Group>
              </Paper>

              <Paper
                radius="lg"
                p="lg"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                <Group gap="md" wrap="nowrap" align="flex-start">
                  <Box
                    style={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isDark ? "rgba(99,102,241,.15)" : "rgba(99,102,241,.1)",
                    }}
                  >
                    <IconClock size={18} color="#6366f1" />
                  </Box>
                  <div>
                    <Text
                      size="xs"
                      fw={700}
                      mb={4}
                      style={{ letterSpacing: 1, color: textSecondary, textTransform: "uppercase" }}
                    >
                      Office Hours
                    </Text>
                    <Text size="sm" fw={600} style={{ color: textPrimary, lineHeight: 1.5 }}>
                      {OFFICE.hoursLine1}
                      <br />
                      {OFFICE.hoursLine2}
                    </Text>
                  </div>
                </Group>
              </Paper>
            </Stack>
          </Grid.Col> */}
        </Grid>

        {/* MAP */}
        <Paper
          radius="lg"
          style={{
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${cardBorder}`,
            height: 420,
          }}
        >
          <iframe
            title="office-location-map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: "block",
              filter: isDark ? "invert(92%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" : "none",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* floating overlay card */}
          <Paper
            radius="md"
            p="md"
            shadow="md"
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              maxWidth: 260,
              background: isDark ? "rgba(15,23,42,.92)" : "rgba(255,255,255,.95)",
              border: `1px solid ${cardBorder}`,
              backdropFilter: "blur(6px)",
            }}
          >
            <Group justify="space-between" wrap="nowrap" mb={4}>
              <Text
                size="xs"
                fw={800}
                style={{ letterSpacing: 0.5, color: textPrimary, textTransform: "uppercase" }}
              >
                {OFFICE.name}
              </Text>
              <Group gap={4}>
                <ActionIcon
                  component="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    OFFICE.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="subtle"
                  color="gray"
                  aria-label="Open in Google Maps"
                >
                  <IconExternalLink size={14} />
                </ActionIcon>
                <ActionIcon size="sm" variant="subtle" color="gray" aria-label="Save location">
                  <IconBookmark size={14} />
                </ActionIcon>
              </Group>
            </Group>
            <Text size="xs" style={{ color: textSecondary, lineHeight: 1.5 }}>
              {OFFICE.addressLine1}
              <br />
              {OFFICE.addressLine2}
            </Text>
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default OfficeLocation;