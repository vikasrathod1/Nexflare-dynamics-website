import { useState } from "react";
import { Box, Container, Text, useComputedColorScheme } from "@mantine/core";
const faqs = [
  {
    question: "Can you migrate data from our existing CRM?",
    answer:
      "Yes. We handle full data migration from Excel, Zoho, Salesforce, HubSpot, and most other CRMs — including contacts, deals, notes, and history — with zero data loss.",
  },
  {
    question: "Do you build mobile apps for the CRM too?",
    answer:
      "Absolutely. We build mobile-friendly and native mobile versions so your sales team can update deals, log calls, and follow up on the go.",
  },
  {
    question: "Will it integrate with our email/calling tools?",
    answer:
      "Yes, we integrate with the tools you already use — Gmail, Outlook, WhatsApp, Twilio, and most popular calling and email platforms.",
  },
  {
    question: "Who owns the CRM after delivery?",
    answer:
      "You do — fully. There's no vendor lock-in. You get complete ownership of the codebase, data, and infrastructure once the project is delivered.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes, every rollout includes hands-on team training and onboarding support to make sure adoption is smooth from day one.",
  },
];
const CRMFaq = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="md">
        {/* Section Label */}
        <Text
          ta="center"
          fw={700}
          size="sm"
          mb={8}
          style={{
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#14b8a6",
          }}
        >
          FAQ
        </Text>
        {/* Heading */}
        <Text
          ta="center"
          fw={800}
          mb={{ base: 40, md: 60 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
            color: isDark ? "#ffffff" : "#0b1326",
          }}
        >
          Common{" "}
          <Text
            component="span"
            inherit
            style={{
              background: "linear-gradient(90deg, #0d9488, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CRM Questions
          </Text>
        </Text>
        {/* Accordion */}
        <Box>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Box
                key={index}
                style={{
                  borderBottom: isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(11,19,38,0.08)",
                }}
              >
                <Box
                  onClick={() => toggle(index)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "22px 4px",
                    cursor: "pointer",
                    gap: 20,
                  }}
                >
                  <Text
                    fw={500}
                    style={{
                      fontSize: 17,
                      color: isOpen
                        ? "#14b8a6"
                        : isDark
                        ? "#ffffff"
                        : "#0b1326",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.question}
                  </Text>
                  {/* Plus / Minus icon built with CSS */}
                  <Box
                    style={{
                      position: "relative",
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: "100%",
                        height: 2,
                        background: "#14b8a6",
                        transform: "translateY(-50%)",
                        borderRadius: 2,
                      }}
                    />
                    <Box
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        width: 2,
                        height: "100%",
                        background: "#14b8a6",
                        transform: `translateX(-50%) rotate(${isOpen ? 90 : 0}deg)`,
                        borderRadius: 2,
                        opacity: isOpen ? 0 : 1,
                        transition: "transform 0.25s ease, opacity 0.25s ease",
                      }}
                    />
                  </Box>
                </Box>
                {/* Answer */}
                <Box
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <Text
                    pb={22}
                    px={4}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(11,19,38,0.6)",
                    }}
                  >
                    {faq.answer}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
export default CRMFaq;