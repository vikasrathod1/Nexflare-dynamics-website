import { useState } from "react";
import { Box, Container, Title, Text, Stack, UnstyledButton, useComputedColorScheme } from "@mantine/core";
const FAQS = [
  {
    question: "REST API vs GraphQL — which should my project use?",
    answer:
      "REST is simpler and well-suited to straightforward CRUD-style resources with predictable endpoints. GraphQL shines when clients need flexible, nested queries or you're serving multiple front-ends with different data needs. We'll recommend the right fit after understanding your data model and client requirements.",
  },
  {
    question: "How do you secure the APIs you build?",
    answer:
      "We implement authentication and authorization (OAuth2, JWT, or API keys as appropriate), rate limiting, input validation, and encryption in transit — following OWASP API security best practices throughout.",
  },
  {
    question: "Do you provide API documentation with delivery?",
    answer:
      "Yes. Every API we build ships with clear, interactive documentation (typically OpenAPI/Swagger) covering endpoints, request/response schemas, authentication, and example calls — so your team or partners can integrate quickly.",
  },
  {
    question: "Can you extend or fix an existing API?",
    answer:
      "Yes, we regularly take over and extend existing APIs. We start with an audit of the current implementation, identify gaps or technical debt, and then add new endpoints or fix issues without disrupting existing integrations.",
  },
  {
    question: "Do unused support hours roll over?",
    answer:
      "Unused hours don't carry over month to month, since retainers are sized around ongoing availability and monitoring rather than banked hours. If usage is consistently low, we're happy to revisit your plan tier.",
  },
];
const Apifaq = () => {
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
              API Questions
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
export default Apifaq;