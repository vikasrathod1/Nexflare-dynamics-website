import React from "react";
import {
  Box,
  Container,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";

const columns = ["NEX ERP", "Tally", "SAP Business One", "ERPNext"];

const rows = [
  {
    feature: "Best For",
    cells: [
      { type: "text", value: "Indian Manufacturing SMEs", bold: true },
      { type: "text", value: "Accounting" },
      { type: "text", value: "Large Enterprises" },
      { type: "text", value: "SMEs" },
    ],
  },
  {
    feature: "GST Compliance",
    cells: [
      { type: "badge", value: "Full (E-Invoicing, ITC-04)", color: "accent" },
      { type: "badge", value: "Basic", color: "neutral" },
      { type: "badge", value: "Advanced", color: "orange" },
      { type: "badge", value: "Moderate", color: "neutral" },
    ],
  },
  {
    feature: "Implementation Time",
    cells: [
      { type: "badge", value: "4–6 Weeks", color: "accent" },
      { type: "text", value: "1–2 Weeks" },
      { type: "text", value: "3–6 Months" },
      { type: "text", value: "4–8 Weeks" },
    ],
  },
  {
    feature: "Pricing",
    cells: [
      { type: "badge", value: "Affordable", color: "accent" },
      { type: "text", value: "Low" },
      { type: "badge", value: "Very High", color: "neutral" },
      { type: "text", value: "Moderate" },
    ],
  },
  {
    feature: "Manufacturing Features",
    cells: [
      { type: "badge", value: "Advanced", color: "accent" },
      { type: "badge", value: "Limited", color: "neutral" },
      { type: "badge", value: "Advanced", color: "orange" },
      { type: "badge", value: "Good", color: "orange" },
    ],
  },
  {
    feature: "Indian SME / MSME Support",
    cells: [
      { type: "badge", value: "Purpose-Built ✓", color: "accent" },
      { type: "text", value: "Partial" },
      { type: "badge", value: "No", color: "neutral" },
      { type: "text", value: "Partial" },
    ],
  },
];

const ComparisonScreen = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const accent       = isDark ? "#00D4C8"               : "#0891B2";
  const accentDim    = isDark ? "rgba(0,212,200,0.12)"  : "rgba(8,145,178,0.10)";
  const accentBorder = isDark ? "rgba(0,212,200,0.35)"  : "rgba(8,145,178,0.35)";
  const orange       = isDark ? "#fb923c"               : "#c2410c";
  const orangeDim    = isDark ? "rgba(251,146,60,0.14)" : "rgba(194,65,12,0.10)";
  const neutralTxt   = isDark ? "rgba(255,255,255,0.65)": "#475569";
  const neutralDim   = isDark ? "rgba(255,255,255,0.08)": "rgba(15,23,42,0.06)";

  const surface2  = isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.95)";
  const headerBg  = isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)";
  const border    = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.12)";
  const rowBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)";
  const textMain  = isDark ? "#ffffff"                : "#0f172a";
  const textSub   = isDark ? "rgba(255,255,255,0.75)" : "#334155";
  const textDim   = isDark ? "rgba(255,255,255,0.45)" : "#64748b";

  const badgeColors = {
    accent:  { bg: accentDim,  fg: accent,     border: accentBorder },
    orange:  { bg: orangeDim,  fg: orange,     border: `${orange}55` },
    neutral: { bg: neutralDim, fg: neutralTxt, border: "transparent" },
  };

  const Cell = ({ cell, highlighted }) => {
    if (cell.type === "badge") {
      const c = badgeColors[cell.color] || badgeColors.neutral;
      return (
        <Box
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "4px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            background: c.bg,
            color: c.fg,
            border: `1px solid ${c.border}`,
            whiteSpace: "nowrap",
          }}
        >
          {cell.value}
        </Box>
      );
    }
    return (
      <Text
        size="sm"
        fw={cell.bold ? 700 : 400}
        style={{ color: highlighted ? textMain : textSub }}
      >
        {cell.value}
      </Text>
    );
  };

  return (
    <Container size="lg" py={{ base: 60, md: 90 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Box style={{ textAlign: "center", marginBottom: 44 }}>
          <Text
            fz={11}
            fw={700}
            style={{ color: accent, letterSpacing: 2.5, textTransform: "uppercase" }}
          >
            Why NEX ERP
          </Text>
          <Title
            order={2}
            mt={10}
            style={{
              color: textMain,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem,3.2vw,2.6rem)",
              letterSpacing: -0.5,
            }}
          >
            How NEX ERP Compares
          </Title>
          <Text
            size="sm"
            mt={14}
            mx="auto"
            maw={480}
            style={{ color: textDim, lineHeight: 1.7 }}
          >
            See how NEX ERP stacks up against popular alternatives for Indian
            manufacturing businesses.
          </Text>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Box
          style={{
            border: `1px solid ${border}`,
            borderRadius: 16,
            overflow: "hidden",
            background: surface2,
            backdropFilter: "blur(12px)",
          }}
        >
          <Box style={{ overflowX: "auto" }}>
            <Box style={{ minWidth: 680 }}>
              {/* Header row */}
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr repeat(4, 1fr)",
                  background: headerBg,
                  borderBottom: `1px solid ${border}`,
                }}
              >
                <Box style={{ padding: "16px 20px" }}>
                  <Text fz={11} fw={700} style={{ color: textDim, letterSpacing: 1.5, textTransform: "uppercase" }}>
                    Feature
                  </Text>
                </Box>
                {columns.map((col, i) => (
                  <Box
                    key={col}
                    style={{
                      padding: "16px 20px",
                      background: i === 0 ? accentDim : "transparent",
                    }}
                  >
                    <Text
                      fz={11}
                      fw={700}
                      style={{
                        color: i === 0 ? accent : textDim,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {col}
                    </Text>
                  </Box>
                ))}
              </Box>

              {/* Body rows */}
              {rows.map((row, ri) => (
                <Box
                  key={row.feature}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr repeat(4, 1fr)",
                    borderBottom:
                      ri === rows.length - 1 ? "none" : `1px solid ${rowBorder}`,
                  }}
                >
                  <Box style={{ padding: "16px 20px", display: "flex", alignItems: "center" }}>
                    <Text size="sm" style={{ color: textSub }}>
                      {row.feature}
                    </Text>
                  </Box>
                  {row.cells.map((cell, ci) => (
                    <Box
                      key={ci}
                      style={{
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        background: ci === 0 ? accentDim : "transparent",
                      }}
                    >
                      <Cell cell={cell} highlighted={ci === 0} />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ComparisonScreen;