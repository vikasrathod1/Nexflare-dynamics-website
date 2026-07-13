import { Box, Container, SimpleGrid, Stack, Text, useComputedColorScheme } from "@mantine/core";
const features = [
  "Built around your sales process, not a rigid template",
  "Full data ownership — no vendor lock-in",
  "Seamless migration from Excel/Zoho/Salesforce",
  "Mobile-friendly for on-the-go sales teams",
  "Ongoing support after launch",
  "Scales as your team and pipeline grow",
];
const CrmWhyChooseUs = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // Added this function
  const handleFreeCrmConsultation = () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/contact"; // Change this if your contact page route is different
    }
  };
  return (
    <Box component="section" py={{ base: 60, md: 90 }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 60 }}>
          {/* Left content */}
          <Box>
            {/* Label */}
            <Text
              fw={700}
              size="sm"
              mb={8}
              style={{
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#14b8a6",
              }}
            >
              Why Choose Us
            </Text>
            {/* Heading */}
            <Text
              fw={800}
              mb={20}
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.2,
                color: isDark ? "#ffffff" : "#0b1326",
              }}
            >
              A CRM Your Team{" "}
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
                Will Actually Use
              </Text>
            </Text>
            {/* Subtitle */}
            <Text
              mb={28}
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: isDark ? "rgba(255,255,255,0.65)" : "rgba(11,19,38,0.65)",
              }}
            >
              Most CRMs fail because they don't match how teams actually sell. We build ours around your workflow, not the other way around.
            </Text>
            {/* Feature list */}
            <Stack gap={16} mb={36}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <Text
                    fw={700}
                    style={{
                      color: "#14b8a6",
                      fontSize: 15,
                      lineHeight: 1.6,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </Text>
                  <Text
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.6,
                      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(11,19,38,0.75)",
                    }}
                  >
                    {feature}
                  </Text>
                </Box>
              ))}
            </Stack>
            {/* Button */}
            <Box
              component="button"
              style={{
                padding: "16px 32px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(90deg, #0d9488, #14b8a6)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(20,184,166,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={handleFreeCrmConsultation}  
            >
              Get Free CRM Consultation
            </Box>
          </Box>
          {/* Right image */}
          <Box
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(11,19,38,0.08)",
              minHeight: 320,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Team reviewing sales dashboard and CRM analytics"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default CrmWhyChooseUs;