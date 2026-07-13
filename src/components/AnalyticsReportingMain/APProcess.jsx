import { Box, Container, Title, Text, Stack, Group, SimpleGrid, UnstyledButton, useComputedColorScheme } from "@mantine/core";
const WEBSITE_PERFORMANCE = [
  { label: "Total Sessions", value: "84,240", delta: "▲ 34%" },
  { label: "New Users", value: "61,800", delta: "▲ 28%" },
  { label: "Bounce Rate", value: "41.2%", delta: "▼ 6%" },
  { label: "Avg. Session Duration", value: "3m 22s", delta: "▲ 18%" },
  { label: "Goal Completions", value: "5,730", delta: "▲ 41%" },
];
const CAMPAIGN_HIGHLIGHTS = [
  { label: "Google Ads ROAS", value: "5.2x", delta: "▲ 0.8" },
  { label: "Meta Ads ROAS", value: "4.1x", delta: "▲ 0.6" },
  { label: "Email Open Rate", value: "32.4%", delta: "▲ 4%" },
  { label: "SEO Organic Clicks", value: "35,400", delta: "▲ 22%" },
  { label: "Cost Per Lead", value: "₹210", delta: "▼ 18%" },
];
const CHANNEL_CONTRIBUTION = [
  { label: "Organic Search", value: 42 },
  { label: "Paid Ads", value: 28 },
  { label: "Social Media", value: 18 },
  { label: "Email Marketing", value: 12 },
];
const APProcess = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  // Delta values stay fixed green since every metric here represents a
  // positive change (whether the arrow points up or down), not
  // theme-dependent content.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    cardBg: isDark ? "rgba(255,255,255,0.02)" : "#ffffff",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    cardShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.5)"
      : "0 20px 45px rgba(15,23,42,0.1)",
    reportHeaderBg: isDark ? "rgba(20,184,166,0.06)" : "rgba(20,184,166,0.05)",
    reportTitle: isDark ? "#ffffff" : "#0f172a",
    reportMeta: isDark ? "rgba(226,232,240,0.6)" : "#64748b",
    exportBorder: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.2)",
    exportText: isDark ? "#ffffff" : "#0f172a",
    columnLabel: "#14b8a6",
    rowLabel: isDark ? "rgba(226,232,240,0.75)" : "#475569",
    rowValue: isDark ? "#ffffff" : "#0f172a",
    delta: "#34d399",
    divider: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
    barTrack: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
    barFill: "#14b8a6",
  };
  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="xl">
        <Stack gap={6} maw={720} mb={48}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.2,
            }}
          >
            Report Preview
          </Text>
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
            }}
          >
            What Your Monthly{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Report Looks Like
            </Box>
          </Title>
          <Text
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: colors.paragraph,
              marginTop: 8,
            }}
          >
            Clear, structured, and jargon-free — every report is designed
            to help you take action, not just admire numbers.
          </Text>
        </Stack>
        <Box
          style={{
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 16,
            boxShadow: colors.cardShadow,
            overflow: "hidden",
          }}
        >
          <Group
            justify="space-between"
            align="center"
            style={{
              backgroundColor: colors.reportHeaderBg,
              borderBottom: `1px solid ${colors.cardBorder}`,
              padding: "24px 32px",
            }}
          >
            <Stack gap={4}>
              <Text style={{ fontSize: "1.1875rem", fontWeight: 700, color: colors.reportTitle }}>
                Monthly Marketing Report
              </Text>
              <Text style={{ fontSize: "0.9375rem", color: colors.reportMeta }}>
                Period: 1 May 2025 – 31 May 2025 &nbsp;|&nbsp; Prepared by
                Nexflare Dynamics
              </Text>
            </Stack>
            <UnstyledButton
              style={{
                border: `1px solid ${colors.exportBorder}`,
                color: colors.exportText,
                fontWeight: 700,
                fontSize: 14,
                padding: "10px 22px",
                borderRadius: 999,
              }}
            >
              PDF Export
            </UnstyledButton>
          </Group>
          <Box style={{ padding: "32px" }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48} mb={40}>
              <Box>
                <Text
                  style={{
                    color: colors.columnLabel,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: 12.5,
                    letterSpacing: 1,
                    marginBottom: 16,
                  }}
                >
                  Website Performance
                </Text>
                <Stack gap={0}>
                  {WEBSITE_PERFORMANCE.map((row, i) => (
                    <Group
                      key={row.label}
                      justify="space-between"
                      style={{
                        padding: "14px 0",
                        borderBottom: i < WEBSITE_PERFORMANCE.length - 1 ? `1px solid ${colors.divider}` : "none",
                      }}
                    >
                      <Text style={{ fontSize: "0.9375rem", color: colors.rowLabel }}>{row.label}</Text>
                      <Group gap={8}>
                        <Text style={{ fontSize: "0.9375rem", fontWeight: 700, color: colors.rowValue }}>
                          {row.value}
                        </Text>
                        <Text style={{ fontSize: "0.9375rem", fontWeight: 700, color: colors.delta }}>
                          {row.delta}
                        </Text>
                      </Group>
                    </Group>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Text
                  style={{
                    color: colors.columnLabel,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: 12.5,
                    letterSpacing: 1,
                    marginBottom: 16,
                  }}
                >
                  Campaign Highlights
                </Text>
                <Stack gap={0}>
                  {CAMPAIGN_HIGHLIGHTS.map((row, i) => (
                    <Group
                      key={row.label}
                      justify="space-between"
                      style={{
                        padding: "14px 0",
                        borderBottom: i < CAMPAIGN_HIGHLIGHTS.length - 1 ? `1px solid ${colors.divider}` : "none",
                      }}
                    >
                      <Text style={{ fontSize: "0.9375rem", color: colors.rowLabel }}>{row.label}</Text>
                      <Group gap={8}>
                        <Text style={{ fontSize: "0.9375rem", fontWeight: 700, color: colors.rowValue }}>
                          {row.value}
                        </Text>
                        <Text style={{ fontSize: "0.9375rem", fontWeight: 700, color: colors.delta }}>
                          {row.delta}
                        </Text>
                      </Group>
                    </Group>
                  ))}
                </Stack>
              </Box>
            </SimpleGrid>
            <Box>
              <Text
                style={{
                  color: colors.columnLabel,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: 12.5,
                  letterSpacing: 1,
                  marginBottom: 20,
                }}
              >
                Channel Contribution To Conversions
              </Text>
              <Stack gap={18}>
                {CHANNEL_CONTRIBUTION.map((channel) => (
                  <Box key={channel.label}>
                    <Group justify="space-between" mb={8}>
                      <Text style={{ fontSize: "0.9375rem", color: colors.rowLabel }}>{channel.label}</Text>
                      <Text style={{ fontSize: "0.9375rem", color: colors.rowValue, fontWeight: 600 }}>
                        {channel.value}%
                      </Text>
                    </Group>
                    <Box
                      style={{
                        width: "100%",
                        height: 8,
                        borderRadius: 999,
                        backgroundColor: colors.barTrack,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        style={{
                          width: `${channel.value}%`,
                          height: "100%",
                          borderRadius: 999,
                          backgroundColor: colors.barFill,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default APProcess;