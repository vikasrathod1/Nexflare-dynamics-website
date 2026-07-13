import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";

const FAQS = [
  {
    question: "How quickly can you build a landing page?",
    answer:
      "Most single landing pages can be designed, built, and launched within 1–2 weeks, depending on complexity and how quickly copy and assets are provided. Need it faster? Let us know your timeline and we'll see what's possible.",
  },
  {
    question: "Do you write the copy or do I need to provide it?",
    answer:
      "Both options work. We can write conversion-focused copy for you as part of the project, or build around copy you already have — either way, we'll structure the page to maximise clarity and conversions.",
  },
  {
    question: "Which platform do you build landing pages on?",
    answer:
      "We typically build on Webflow or Unbounce for speed and flexibility, or as a custom-coded page when you need full control or tight integration with your existing site. We'll recommend the right fit for your goals.",
  },
  {
    question: "Can you set up tracking and analytics?",
    answer:
      "Yes. We set up Google Analytics 4, Google Tag Manager, and conversion tracking for ad platforms like Meta and Google Ads, so you can measure exactly how the page is performing from day one.",
  },
  {
    question: "Do you offer A/B testing services?",
    answer:
      "Yes. We can build multiple page variants and run structured A/B tests on headlines, layouts, and calls to action to identify what actually moves your conversion rate, backed by real data rather than guesswork.",
  },
];

const LPFaq = () => {
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
              Landing Page Questions
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
                      fontWeight: 700,
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

export default LPFaq;
