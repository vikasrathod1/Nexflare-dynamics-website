import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";
const FAQS = [
  {
    question: "Do I need a large email list to start?",
    answer:
      "No. We can help you build and grow your list from scratch using lead magnets, sign-up forms, and landing pages — even a small, engaged list can drive meaningful revenue when the strategy is right.",
  },
  {
    question: "Which email platform do you recommend?",
    answer:
      "We typically work with Klaviyo, Mailchimp, or ActiveCampaign depending on your business type and needs — Klaviyo for e-commerce-heavy segmentation, Mailchimp for simplicity, and ActiveCampaign for advanced automation.",
  },
  {
    question: "How often should I send emails?",
    answer:
      "It depends on your audience and content, but most brands see the best results sending 1–4 emails a week — enough to stay top of mind without overwhelming subscribers. We'll define the right cadence based on your engagement data.",
  },
  {
    question: "Will you handle our existing email platform?",
    answer:
      "Yes. We can audit and take over your existing setup — cleaning up your list, fixing deliverability issues, and restructuring flows and campaigns to improve performance without starting from zero.",
  },
];
const EmailFaq = () => {
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
              Email Marketing Questions
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
export default EmailFaq;