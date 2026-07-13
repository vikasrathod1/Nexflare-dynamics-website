import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";
const FAQS = [
  {
    question: "What industries do you build custom software for?",
    answer:
      "We've built custom software across fintech, healthcare, e-commerce, logistics, education, and B2B SaaS — adapting our approach to each industry's specific compliance, scale, and integration needs.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Timelines vary by scope — a focused MVP typically takes 8–12 weeks, while larger enterprise systems can take several months. We break work into sprints so you see working software early rather than waiting until the end.",
  },
  {
    question: "Will I own the source code after delivery?",
    answer:
      "Yes. You get full ownership of the source code with zero vendor lock-in — no ongoing licensing fees tied to us, and you're free to bring the codebase to any team in the future.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We offer flexible maintenance and support retainers covering bug fixes, security patches, performance tuning, and ongoing feature development after launch.",
  },
  {
    question: "How do you ensure security in the software you build?",
    answer:
      "We follow secure coding practices, run regular dependency and vulnerability scans, and can incorporate OWASP-aligned security testing and audits depending on your risk profile and compliance requirements.",
  },
  {
    question: "Can you take over an existing project or codebase?",
    answer:
      "Yes, we regularly take over existing projects. We start with a codebase and architecture audit to understand what's there, document any gaps, and get our engineers fully up to speed before continuing development.",
  },
];
const FAQSection = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Every color is resolved here in JS and applied via inline `style`,
  // so nothing depends on Mantine's built-in light/dark component CSS.
  const colors = {
    eyebrow: "#14b8a6",
    heading: isDark ? "#ffffff" : "#0f172a",
    headingAccent: "#14b8a6",
    question: isDark ? "#ffffff" : "#0f172a",
    questionHover: "#14b8a6",
    answer: isDark ? "rgba(226,232,240,0.7)" : "#475569",
    divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
    icon: "#14b8a6",
  };
  return (
    <Box component="section" style={{ padding: "96px 0" }}>
      <Container size="md">
        <Stack gap={6} align="center" mb={56}>
          <Text
            style={{
              color: colors.eyebrow,
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.6,
              textAlign: "center",
            }}
          >
            FAQ
          </Text>
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              color: colors.heading,
              textAlign: "center",
            }}
          >
            Common{" "}
            <Box component="span" style={{ color: colors.headingAccent }}>
              Questions
            </Box>
          </Title>
        </Stack>
        <Stack gap={0}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            return (
              <Box key={faq.question} style={{ borderBottom: `1px solid ${colors.divider}` }}>
                <UnstyledButton
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "26px 4px",
                    textAlign: "left",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: isHovered ? colors.questionHover : colors.question,
                      transition: "color 150ms ease",
                    }}
                  >
                    {faq.question}
                  </Text>
                  <Box
                    component="span"
                    style={{
                      color: colors.icon,
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: 1,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    +
                  </Box>
                </UnstyledButton>
                <Box
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 220ms ease",
                  }}
                >
                  <Box style={{ overflow: "hidden" }}>
                    <Text
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: colors.answer,
                        padding: "0 4px 26px",
                        maxWidth: 760,
                      }}
                    >
                      {faq.answer}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};
export default FAQSection;