import { Box, Container, Title, Text, Stack, Group, SimpleGrid, useComputedColorScheme } from "@mantine/core";
const KPIS = [
  { value: "84.2K", label: "Total Sessions", delta: "34% vs last month" },
  { value: "6.8%", label: "Conversion Rate", delta: "1.2% vs last month" },
  { value: "₹2.4L", label: "Revenue Attributed", delta: "52% vs last month" },
  { value: "4.7x", label: "Blended ROAS", delta: "0.9 vs last month" },
];
const TRAFFIC_TREND = [
  { month: "Dec", height: 34 },
  { month: "Jan", height: 44 },
  { month: "Feb", height: 40 },
  { month: "Mar", height: 58 },
  { month: "Apr", height: 68 },
  { month: "May", height: 100 },
];
const TRAFFIC_SOURCES = [
  { label: "Organic Search", value: "42%" },
  { label: "Paid Ads", value: "28%" },
  { label: "Social Media", value: "18%" },
  { label: "Direct / Other", value: "12%" },
];
const APServiceSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  // Green deltas and macOS-style traffic-light dots stay fixed since
  // they represent universal status colors, not theme-dependent content.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    paragraph: isDark ? "rgba(226,232,240,0.72)" : "#475569",
    windowBg: isDark ? "rgba(255,255,255,0.02)" : "#ffffff",
    windowBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    windowShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.5)"
      : "0 20px 45px rgba(15,23,42,0.1)",
    titleBarBg: isDark ? "rgba(20,184,166,0.06)" : "rgba(20,184,166,0.05)",
    titleBarText: isDark ? "rgba(226,232,240,0.85)" : "#334155",
    cardBg: isDark ? "rgba(255,255,255,0.03)" : "#f8fafc",
    cardBorder: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    kpiValue: "#14b8a6",
    kpiLabel: isDark ? "rgba(226,232,240,0.7)" : "#475569",
    delta: "#34d399",
    panelTitle: isDark ? "#ffffff" : "#0f172a",
    barTrack: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
    barFillMuted: isDark ? "rgba(20,184,166,0.25)" : "rgba(20,184,166,0.25)",
    barFillActive: "#14b8a6",
    monthLabel: isDark ? "rgba(226,232,240,0.55)" : "#64748b",
    sourceDot: "#14b8a6",
    sourceLabel: isDark ? "rgba(226,232,240,0.85)" : "#334155",
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
            Live Insights
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
            Your Data,{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Visualised
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
            We build custom dashboards so you always know exactly how your
            marketing is performing — in real time, any time.
          </Text>
        </Stack>
        <Box
          style={{
            backgroundColor: colors.windowBg,
            border: `1px solid ${colors.windowBorder}`,
            borderRadius: 16,
            boxShadow: colors.windowShadow,
            overflow: "hidden",
          }}
        >
          <Group
            gap={12}
            style={{
              backgroundColor: colors.titleBarBg,
              borderBottom: `1px solid ${colors.windowBorder}`,
              padding: "16px 24px",
            }}
          >
            <Group gap={6}>
              <Box style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
              <Box style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#febc2e" }} />
              <Box style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#28c840" }} />
            </Group>
            <Text style={{ fontSize: "0.9375rem", fontWeight: 600, color: colors.titleBarText }}>
              Marketing Performance Dashboard — May 2025
            </Text>
          </Group>
          <Box style={{ padding: 28 }}>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={20} mb={20}>
              {KPIS.map((kpi) => (
                <Box
                  key={kpi.label}
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: 12,
                    padding: "20px 22px",
                  }}
                >
                  <Text style={{ fontSize: "1.75rem", fontWeight: 800, color: colors.kpiValue, lineHeight: 1 }}>
                    {kpi.value}
                  </Text>
                  <Text style={{ fontSize: "0.9375rem", color: colors.kpiLabel, marginTop: 8 }}>
                    {kpi.label}
                  </Text>
                  <Text style={{ fontSize: "0.8125rem", color: colors.delta, marginTop: 8, fontWeight: 600 }}>
                    ▲ {kpi.delta}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
            <SimpleGrid cols={{ base: 1, lg: 3 }} spacing={20}>
              <Box
                style={{
                  gridColumn: "span 2",
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 12,
                  padding: "24px 28px",
                }}
              >
                <Text style={{ fontSize: "1rem", fontWeight: 700, color: colors.panelTitle, marginBottom: 24 }}>
                  Monthly Traffic Trend
                </Text>
                <Group align="flex-end" gap={12} style={{ height: 140 }}>
                  {TRAFFIC_TREND.map((item) => (
                    <Stack key={item.month} gap={8} align="center" style={{ flex: 1 }}>
                      <Box
                        style={{
                          width: "100%",
                          height: 140,
                          borderRadius: 8,
                          backgroundColor: colors.barTrack,
                          display: "flex",
                          alignItems: "flex-end",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          style={{
                            width: "100%",
                            height: `${item.height}%`,
                            backgroundColor:
                              item.month === "May" ? colors.barFillActive : colors.barFillMuted,
                            borderRadius: 8,
                          }}
                        />
                      </Box>
                      <Text style={{ fontSize: "0.8125rem", color: colors.monthLabel }}>{item.month}</Text>
                    </Stack>
                  ))}
                </Group>
              </Box>
              <Box
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 12,
                  padding: "24px 28px",
                }}
              >
                <Text style={{ fontSize: "1rem", fontWeight: 700, color: colors.panelTitle, marginBottom: 20 }}>
                  Traffic Sources
                </Text>
                <Stack gap={14}>
                  {TRAFFIC_SOURCES.map((source) => (
                    <Group key={source.label} gap={10} wrap="nowrap">
                      <Box
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: colors.sourceDot,
                          flexShrink: 0,
                        }}
                      />
                      <Text style={{ fontSize: "0.9375rem", color: colors.sourceLabel }}>
                        {source.label} — {source.value}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default APServiceSection;